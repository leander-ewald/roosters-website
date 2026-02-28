/* Inline SVG flags — no external dependencies */

const FLAGS: Record<string, React.ReactNode> = {
  de: (
    <svg viewBox="0 0 640 480" className="w-full h-full">
      <path fill="#000" d="M0 0h640v160H0z" />
      <path fill="#D00" d="M0 160h640v160H0z" />
      <path fill="#FFCE00" d="M0 320h640v160H0z" />
    </svg>
  ),
  ca: (
    <svg viewBox="0 0 640 480" className="w-full h-full">
      <path fill="#fff" d="M0 0h640v480H0z" />
      <path fill="#f00" d="M0 0h160v480H0zM480 0h160v480H480z" />
      <path fill="#f00" d="M320 80l-13.5 27-27 4.5 18 22.5-3 30 25.5-13.5L345.5 164l-3-30 18-22.5-27-4.5L320 80zm-60 60l30 60h-30l-15 45-15-45h-30l30-60zm120 0l30 60h-30l-15 45-15-45h-30l30-60zM320 280l-50-80h25l25 40 25-40h25l-50 80z" />
    </svg>
  ),
  dk: (
    <svg viewBox="0 0 640 480" className="w-full h-full">
      <path fill="#C8102E" d="M0 0h640v480H0z" />
      <path fill="#fff" d="M180 0h60v480h-60zM0 190h640v60H0z" />
    </svg>
  ),
  se: (
    <svg viewBox="0 0 640 480" className="w-full h-full">
      <path fill="#006AA7" d="M0 0h640v480H0z" />
      <path fill="#FECC02" d="M170 0h70v480h-70zM0 190h640v70H0z" />
    </svg>
  ),
  no: (
    <svg viewBox="0 0 640 480" className="w-full h-full">
      <path fill="#BA0C2F" d="M0 0h640v480H0z" />
      <path fill="#fff" d="M170 0h90v480h-90zM0 175h640v90H0z" />
      <path fill="#00205B" d="M195 0h40v480h-40zM0 200h640v40H0z" />
    </svg>
  ),
};

export default function FlagIcon({ code, size = 20 }: { code: string; size?: number }) {
  const flag = FLAGS[code];
  if (!flag) return null;

  return (
    <span
      className="inline-block rounded-sm overflow-hidden flex-shrink-0 shadow-sm"
      style={{ width: size, height: size * 0.75 }}
      title={code.toUpperCase()}
    >
      {flag}
    </span>
  );
}
