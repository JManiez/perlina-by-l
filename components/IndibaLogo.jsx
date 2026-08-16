export default function IndibaLogo({ className = "indiba-logo-img" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 500 148"
      fill="currentColor"
      role="img"
      aria-label="INDIBA — revitalizing lives"
    >
      <g>
        <rect x="0" y="8" width="24" height="84" />
        <path d="M40 92V8h24l40 54V8h24v84H84L44 38v54H40z" />
        <path d="M146 8h36c36 0 60 19 60 42s-24 42-60 42h-36V8zm22 18v48h16c22 0 36-10 36-24s-14-24-36-24h-16z" />
        <rect x="260" y="8" width="24" height="84" />
        <rect x="300" y="8" width="22" height="84" />
        <path d="M330 10h4a28 26 0 0 1 0 40h-4V10z" />
        <path d="M330 54h4a32 28 0 0 1 0 38h-4V54z" />
        <path fillRule="evenodd" d="M408 92L438 8h26l30 84h-26l-6-18h-22l-6 18h-26zm32-34h16l-8-24-8 24z" />
        <text x="488" y="26" fontSize="15" fontFamily="Jost, Helvetica, sans-serif">
          ®
        </text>
      </g>
      <text
        x="250"
        y="136"
        textAnchor="middle"
        fontSize="17"
        fontFamily="Jost, Helvetica, sans-serif"
        fontWeight="300"
        letterSpacing=".22em"
      >
        revitalizing lives
      </text>
    </svg>
  );
}
