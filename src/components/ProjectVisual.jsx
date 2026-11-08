const bars = [38, 64, 46, 82, 56, 72, 44, 90, 60]

export default function ProjectVisual({ id }) {
  if (id === 'moodmelody') {
    return (
      <div className="pv pv-mood" aria-hidden="true">
        <div className="phone">
          <span className="phone-notch" />
          <div className="mood-row"><i /><i /><i /><i /></div>
          <div className="eq">{bars.map((h, i) => <b key={i} style={{ '--h': `${h}%`, '--d': `${(i % 5) * 0.15}s` }} />)}</div>
          <div className="track"><span /><em /></div>
          <div className="track short"><span /><em /></div>
        </div>
      </div>
    )
  }
  if (id === 'timex') {
    return (
      <div className="pv pv-shop" aria-hidden="true">
        <div className="shop">
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="shop-item"><span className="dial"><i /></span><em /><em className="s" /></div>
          ))}
        </div>
      </div>
    )
  }
  if (id === 'rag') {
    return (
      <div className="pv pv-rag" aria-hidden="true">
        <div className="rag">
          <div className="doc"><b /><b /><b /><b /><b /></div>
          <span className="arrow" />
          <div className="chunks"><i className="hit" /><i /><i className="hit" /><i /></div>
          <span className="arrow" />
          <div className="answer"><b /><b className="s" /></div>
        </div>
      </div>
    )
  }
  return (
    <div className="pv pv-data" aria-hidden="true">
      <div className="chart">
        <div className="chart-bars">{bars.map((h, i) => <b key={i} style={{ '--h': `${h}%` }} />)}</div>
        <svg viewBox="0 0 200 60" preserveAspectRatio="none" className="chart-line">
          <polyline points="0,48 25,40 50,44 75,28 100,34 125,18 150,24 175,10 200,14" />
        </svg>
      </div>
      <div className="rings"><i /><i /><i /></div>
    </div>
  )
}
