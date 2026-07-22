"use client";

interface PrintButtonProps {
  label: string;
  className?: string;
}

/**
 * Opens the browser print dialog so the client can save/print the proposal as PDF.
 * Used by the Hero CTA when `ctaHref === "#print"`.
 */
export default function PrintButton({ label, className = "btn" }: PrintButtonProps) {
  return (
    <button type="button" className={`${className} btn--print`} onClick={() => window.print()}>
      {label}
    </button>
  );
}
