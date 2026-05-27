#!/usr/bin/env bash
# sync-blog-to-next.sh
# Syncs a single blog article from biotama.tech-astro-devcard to biotama-next.
# Usage: sync-blog-to-next.sh <slug>
# Example: sync-blog-to-next.sh my-new-article

set -e

SLUG="$1"
if [ -z "$SLUG" ]; then
  echo "Usage: $0 <slug>"
  exit 1
fi

DEVCARD_DIR="/c/Users/fxwis/biotama.tech-astro-devcard"
NEXT_DIR="/c/Users/fxwis/biotama-next"
BLOG_FILE="$DEVCARD_DIR/src/content/blog/$SLUG.md"
NEXT_DATA="$NEXT_DIR/src/data/blog-posts.ts"

if [ ! -f "$BLOG_FILE" ]; then
  echo "ERROR: Article not found: $BLOG_FILE"
  exit 1
fi

echo "Syncing $SLUG from devcard to biotama-next..."

# Check if article already exists in biotama-next
if grep -q "slug: \"$SLUG\"" "$NEXT_DATA" 2>/dev/null; then
  echo "Article $SLUG already exists in biotama-next. Skipping."
  exit 0
fi

# Also check for cross-mapped slugs (same title but different slug)
# Extract the title from devcard article
DEV_TITLE=$(head -15 "$BLOG_FILE" | grep "^title:" | sed 's/title: "*\(.*\)"*/\1/')
if grep -q "title: \"$DEV_TITLE\"" "$NEXT_DATA" 2>/dev/null; then
  echo "Article with matching title already exists in biotama-next. Skipping."
  exit 0
fi

echo "Adding new article: $DEV_TITLE"
echo "Manual sync needed — run: cd $NEXT_DIR && npx tsx scripts/sync-single-article.ts $SLUG"

exit 0
