import type { CSSProperties } from 'react'

const columns = [
  { left: '7%', delay: '0s', duration: '13s' },
  { left: '13%', delay: '3.2s', duration: '16s' },
  { left: '20%', delay: '1.4s', duration: '11s' },
  { left: '80%', delay: '2.1s', duration: '14s' },
  { left: '87%', delay: '4.4s', duration: '12s' },
  { left: '93%', delay: '0.8s', duration: '15s' },
]

const motes = Array.from({ length: 18 }, (_, index) => ({
  id: index,
  left: `${(index * 53) % 100}%`,
  size: 2 + (index % 3),
  delay: `${(index * 1.15) % 14}s`,
  duration: `${15 + (index % 6) * 2}s`,
  opacity: 0.28 + (index % 5) * 0.08,
}))

const LegalBackdrop = () => (
  <div className="legal-backdrop no-print" aria-hidden="true">
    <div className="chamber" />
    {columns.map((column) => (
      <span key={column.left} className="column" style={{ left: column.left }}>
        <i style={{ animationDelay: column.delay, animationDuration: column.duration }} />
      </span>
    ))}

    <svg className="scales" viewBox="0 0 240 280" fill="none">
      <circle cx="120" cy="34" r="7" stroke="currentColor" strokeWidth="1.6" />
      <path d="M120 41v168" stroke="currentColor" strokeWidth="1.6" />
      <path d="M76 210h88l16 28H60l16-28z" stroke="currentColor" strokeWidth="1.6" />
      <g className="beam">
        <path d="M34 74h172" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="120" cy="74" r="4.5" fill="currentColor" />
        <path d="M48 74 32 124M48 74l16 50" stroke="currentColor" strokeWidth="1.2" />
        <path d="M26 124h44c-4 16-40 16-44 0z" fill="rgba(212,180,131,0.16)" stroke="currentColor" strokeWidth="1.2" />
        <path d="M192 74 176 124M192 74l16 50" stroke="currentColor" strokeWidth="1.2" />
        <path d="M170 124h44c-4 16-40 16-44 0z" fill="rgba(212,180,131,0.16)" stroke="currentColor" strokeWidth="1.2" />
      </g>
    </svg>

    <svg className="seal" viewBox="0 0 320 320">
      <g className="seal-spin" fill="none" stroke="currentColor">
        <circle cx="160" cy="160" r="126" strokeWidth="0.7" />
        <circle cx="160" cy="160" r="112" strokeWidth="0.35" />
        <path
          id="orbit"
          d="M160 160 m-112 0 a112 112 0 1 1 224 0 a112 112 0 1 1 -224 0"
        />
        <text fill="currentColor" stroke="none" fontSize="13" letterSpacing="3.2" fontFamily="Outfit, sans-serif">
          <textPath href="#orbit">
            LEY · JURISPRUDENCIA · DOCTRINA · COSTUMBRE ·
          </textPath>
        </text>
      </g>
      <text
        x="160"
        y="168"
        textAnchor="middle"
        fill="currentColor"
        fontSize="42"
        fontFamily="Outfit, sans-serif"
      >
        FD
      </text>
    </svg>

    {motes.map((mote) => (
      <span
        key={mote.id}
        className="mote"
        style={{
          left: mote.left,
          width: mote.size,
          height: mote.size,
          animationDelay: mote.delay,
          animationDuration: mote.duration,
          '--o': mote.opacity,
        } as CSSProperties}
      />
    ))}
    <div className="vignette" />
  </div>
)

export default LegalBackdrop
