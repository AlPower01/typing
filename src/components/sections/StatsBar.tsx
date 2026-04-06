interface Stat {
  number: string
  label: string
}

interface StatsBarProps {
  tagline: string
  stats: Stat[]
}

export default function StatsBar({ tagline, stats }: StatsBarProps) {
  return (
    <section aria-label="Key statistics" style={{ maxWidth: 1368, margin: '0 auto', width: '100%', padding: '0 36px' }}>
      <p style={{ textAlign: 'center', fontSize: 20, fontWeight: 500, lineHeight: '34px', color: '#212731', paddingTop: 20, marginBottom: 4 }}>
        {tagline}
      </p>
      <div className="stats-grid" style={{ display: 'flex', alignItems: 'stretch' }}>
        {stats.map((stat, i) => (
          <div
            key={i}
            style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              padding: '16px 24px 24px',
              borderRight: i < stats.length - 1 ? '1px solid #EAEAEC' : 'none',
            }}
            className="stats-item"
          >
            <span style={{ display: 'block', fontSize: 38, fontWeight: 700, lineHeight: 1.2, color: '#212731', marginBottom: 4 }} className="stats-number">
              {stat.number}
            </span>
            <span style={{ display: 'block', fontSize: 16, fontWeight: 500, color: '#212731' }}>
              {stat.label}
            </span>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 860px) {
          .stats-grid { flex-wrap: wrap !important; }
          .stats-item {
            flex: 0 0 50% !important;
            border-right: none !important;
            border-bottom: 1px solid #EAEAEC !important;
            padding: 20px 16px !important;
          }
          .stats-item:nth-child(odd) { border-right: 1px solid #EAEAEC !important; }
          .stats-item:nth-last-child(-n+2) { border-bottom: none !important; }
        }
        @media (max-width: 480px) {
          .stats-grid { flex-direction: column !important; }
          .stats-item { flex: none !important; border-right: none !important; border-bottom: 1px solid #EAEAEC !important; }
          .stats-item:last-child { border-bottom: none !important; }
          .stats-number { font-size: 30px !important; }
        }
      `}</style>
    </section>
  )
}
