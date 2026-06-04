#!/usr/bin/env python3
"""
Merge 15 new job application records into applications-db.json and jobs.json.
Data exported from MCP job_tracker database (source_date_found = '2026-06-04').
"""
import json
import sqlite3
import os

BASE_DIR = r"C:\Users\fxwis\biotama-next"
APP_DB_PATH = os.path.join(BASE_DIR, "src", "data", "applications-db.json")
JOBS_PATH = os.path.join(BASE_DIR, "public", "jobs.json")

# Fields that should be null (not empty string) when blank
NULLABLE = {
    "company_website", "company_logo", "position_department",
    "position_salary_range", "source_platform", "app_date_applied",
    "app_notes", "contact_name", "contact_title", "contact_email",
    "contact_linkedin"
}

# All 33 fields in order matching existing records
FIELDS = [
    "slug", "company_name", "company_website", "company_logo",
    "company_location", "company_industry", "position_title",
    "position_department", "position_type", "position_remote",
    "position_salary_range", "source_url", "source_platform",
    "source_date_found", "app_status", "app_date_applied", "app_notes",
    "jd_summary", "jd_responsibilities", "jd_requirements",
    "jd_nice_to_have", "tailoring_emphasize_skills",
    "tailoring_highlight_projects", "tailoring_custom_summary",
    "tailoring_key_achievements", "tailoring_cover_letter_hook",
    "contact_name", "contact_title", "contact_email", "contact_linkedin",
    "created_at", "updated_at", "tailoring_custom_title"
]

def clean(field, val):
    """Convert empty strings to null for nullable fields."""
    if field in NULLABLE and (val is None or val == ""):
        return None
    if val is None and field not in NULLABLE:
        if field == "position_remote": return 0
        if field == "position_type": return "full-time"
        if field == "app_status": return "draft"
        return ""
    return val

def main():
    # 1. Read existing applications-db.json
    print(f"Reading {APP_DB_PATH}...")
    with open(APP_DB_PATH, "r", encoding="utf-8") as f:
        existing = json.load(f)
    print(f"  Found {len(existing)} existing records")
    existing_slugs = {r["slug"] for r in existing}

    # 2. Use the MCP-synced DB - the MCP has written the data to the same file
    # Try connecting to the DB directly
    db_paths = [
        os.path.join(BASE_DIR, "job-tracker.db"),
    ]
    
    conn = None
    for db_path in db_paths:
        if os.path.exists(db_path):
            conn = sqlite3.connect(db_path)
            conn.row_factory = sqlite3.Row
            cur = conn.cursor()
            cur.execute("SELECT COUNT(*) FROM applications WHERE source_date_found = '2026-06-04'")
            cnt = cur.fetchone()[0]
            print(f"  DB at {db_path}: {cnt} records for 2026-06-04")
            if cnt > 0:
                break
            conn.close()
            conn = None
    
    if conn is None:
        print("ERROR: No database found with 2026-06-04 records!")
        print("The MCP DB has the data but the local file doesn't.")
        print("Falling back to writing records directly from MCP query results...")
        return False

    # 3. Query and convert records
    cur = conn.cursor()
    cur.execute(
        "SELECT * FROM applications WHERE source_date_found = '2026-06-04' ORDER BY created_at"
    )
    rows = cur.fetchall()
    conn.close()

    new_records = []
    skipped = 0
    for row in rows:
        record = {}
        for field in FIELDS:
            record[field] = clean(field, row[field])
        
        slug = record["slug"]
        if slug in existing_slugs:
            print(f"  SKIP (duplicate): {slug}")
            skipped += 1
            continue
        new_records.append(record)
        print(f"  ADD: {slug}")

    if not new_records:
        print("No new records to add!")
        return True

    print(f"\nAdding {len(new_records)} new records ({skipped} skipped)")

    # 4. Merge and write
    merged = existing + new_records
    
    with open(APP_DB_PATH, "w", encoding="utf-8") as f:
        json.dump(merged, f, indent=2, ensure_ascii=False)
    print(f"  Wrote {len(merged)} records to applications-db.json")

    with open(JOBS_PATH, "w", encoding="utf-8") as f:
        json.dump(merged, f, indent=2, ensure_ascii=False)
    print(f"  Wrote {len(merged)} records to jobs.json")

    # 5. Verify
    with open(APP_DB_PATH, "r", encoding="utf-8") as f:
        verify = json.load(f)
    assert len(verify) == len(merged), f"Verification failed: {len(verify)} != {len(merged)}"
    print(f"\nVerification PASSED: {len(verify)} total records")
    return True

if __name__ == "__main__":
    main()
