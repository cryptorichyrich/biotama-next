"use client";

import { useEffect, useState } from "react";

interface QRCodeProps {
  url: string;
  size?: number;
  color?: string;
}

/**
 * QR Code Component — renders a scannable inline SVG QR code.
 * Uses qrcode-generator (client-side or build-time via useEffect).
 */
export default function QRCode({ url, size = 18, color = "#1e293b" }: QRCodeProps) {
  const [svgPath, setSvgPath] = useState("");

  useEffect(() => {
    import("qrcode-generator").then((mod) => {
      const qr = mod.default(0, "L");
      qr.addData(url);
      qr.make();
      const moduleCount = qr.getModuleCount();
      const cellSize = size / moduleCount;
      let path = "";
      for (let row = 0; row < moduleCount; row++) {
        for (let col = 0; col < moduleCount; col++) {
          if (qr.isDark(row, col)) {
            const x = col * cellSize;
            const y = row * cellSize;
            path += `M${x},${y}h${cellSize}v${cellSize}h-${cellSize}z`;
          }
        }
      }
      setSvgPath(path);
    });
  }, [url, size]);

  if (!svgPath) {
    // Placeholder while QR generates — same size, invisible
    return <span style={{ display: "inline-block", width: size, height: size }} />;
  }

  return (
    <svg
      viewBox={`0 0 ${size} ${size}`}
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: "inline-block", verticalAlign: "middle" }}
    >
      <rect width={size} height={size} fill="#ffffff" rx="1" />
      <path d={svgPath} fill={color} />
    </svg>
  );
}
