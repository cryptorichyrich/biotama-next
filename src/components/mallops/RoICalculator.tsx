"use client";

import { useState } from "react";

const rupiah = (value: number) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(value);

export default function RoICalculator() {
  const [units, setUnits] = useState(80);
  const [bill, setBill] = useState(1_800_000);
  const [leak, setLeak] = useState(8);

  const monthly = units * bill * (leak / 100);
  const annual = monthly * 12;

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_.85fr]">
      <div className="space-y-5">
        <div>
          <div className="flex items-baseline justify-between">
            <label htmlFor="units" className="text-xs font-semibold text-[#C9D6E3]">
              Jumlah unit / tenant
            </label>
            <span className="font-mono text-sm text-[#FF8A5B]">{units}</span>
          </div>
          <input
            id="units"
            type="range"
            min={10}
            max={500}
            step={5}
            value={units}
            onChange={(e) => setUnits(Number(e.target.value))}
            className="mt-2 w-full accent-[#FF6B35]"
          />
        </div>

        <div>
          <div className="flex items-baseline justify-between">
            <label htmlFor="bill" className="text-xs font-semibold text-[#C9D6E3]">
              Rata-rata tagihan per unit / bulan
            </label>
            <span className="font-mono text-sm text-[#FF8A5B]">{rupiah(bill)}</span>
          </div>
          <input
            id="bill"
            type="range"
            min={500_000}
            max={10_000_000}
            step={100_000}
            value={bill}
            onChange={(e) => setBill(Number(e.target.value))}
            className="mt-2 w-full accent-[#FF6B35]"
          />
        </div>

        <div>
          <div className="flex items-baseline justify-between">
            <label htmlFor="leak" className="text-xs font-semibold text-[#C9D6E3]">
              Asumsi kebocoran
            </label>
            <span className="font-mono text-sm text-[#FF8A5B]">{leak}%</span>
          </div>
          <input
            id="leak"
            type="range"
            min={2}
            max={20}
            step={1}
            value={leak}
            onChange={(e) => setLeak(Number(e.target.value))}
            className="mt-2 w-full accent-[#FF6B35]"
          />
        </div>
      </div>

      <div className="rounded-xl border border-[#FF6B35]/30 bg-[#0A1018] p-5">
        <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#8FA3B5]">
          estimasi pemulihan
        </p>
        <p className="mt-3 text-3xl font-semibold text-[#FF8A5B]">{rupiah(annual)}</p>
        <p className="mt-1 text-xs text-[#8FA3B5]">per tahun</p>
        <div className="mt-4 space-y-2 border-t border-white/10 pt-4 text-xs text-[#C9D6E3]">
          <div className="flex justify-between">
            <span>Per bulan</span>
            <span className="font-mono">{rupiah(monthly)}</span>
          </div>
          <div className="flex justify-between">
            <span>Dari {units} unit</span>
            <span className="font-mono">{rupiah(bill)} / unit</span>
          </div>
        </div>
        <p className="mt-4 text-[10px] leading-relaxed text-[#6F8397]">
          Ilustrasi, bukan janji. Angka final ditentukan setelah survey dan audit
          tagihan 3 bulan terakhir.
        </p>
      </div>
    </div>
  );
}
