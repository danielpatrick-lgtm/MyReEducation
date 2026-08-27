// state-picker.jsx — "Choose Your State" section (3 cards)

const STATES = [
  {
    id: 'arizona',
    name: 'Arizona',
    code: 'AZ',
    hours: '90',
    desc: 'Get your Arizona real estate license. Live remote classes via Zoom through Arizona Real Estate Education.',
    href: '/get-licensed-arizona',
    accent: 'oklch(0.62 0.16 30)',  // warm sunset
    photo: 'assets/state-az.jpg',
  },
  {
    id: 'california',
    name: 'California',
    code: 'CA',
    hours: '135',
    desc: 'Get your California real estate license. Self-paced online through The CE Shop, our affiliate.',
    href: '/get-licensed-california',
    accent: 'oklch(0.65 0.13 230)', // pacific blue
    photo: 'assets/state-ca.jpg',
  },
  {
    id: 'nevada',
    name: 'Nevada',
    code: 'NV',
    hours: '120',
    desc: 'Get your Nevada real estate license. In-person day and evening classes at our Henderson and West Sunset campuses.',
    href: '/get-licensed-nevada',
    accent: 'oklch(0.7 0.13 95)',   // desert gold
    photo: 'assets/state-nv.jpg',
  },
];

function StatePicker() {
  return (
    <section id="states" className="section state-picker">
      <div className="container">
        <div className="section-head reveal" style={{textAlign:'center', margin:'0 auto 72px'}}>
          <div className="eyebrow" style={{justifyContent:'center', display:'inline-flex'}}>Choose Your State</div>
          <h2>Three States.<br/><span className="gold">Three Licenses.</span></h2>
          <p style={{marginLeft:'auto', marginRight:'auto'}}>
            Pick the state where you'll launch your career. Nevada Real Estate Academy teaches in the classroom, Arizona Real Estate Education teaches live remote via Zoom, and California is self-paced online through our affiliate, The CE Shop. Each track is built around its own state's exam, contracts, and law.
          </p>
        </div>

        <div className="state-grid reveal">
          {STATES.map((s, i) => (
            <a className="state-card" href={s.href} key={s.id} style={{'--state-accent': s.accent}}>
              <div className="state-card-bg" aria-hidden="true"></div>
              <div className="state-card-content">
                <div className="state-card-head">
                  <span className="state-card-num">0{i+1}</span>
                  <span className="state-card-code">{s.code}</span>
                </div>

                <div className="state-card-shape" aria-hidden="true">
                  {s.photo
                    ? <img src={s.photo} alt="" className="state-card-photo" loading="lazy" decoding="async"/>
                    : <div className="state-card-photo-placeholder">
                        <span>{s.name}</span>
                        <small>Photo coming soon</small>
                      </div>
                  }
                </div>

                <div className="state-card-body">
                  <div className="state-card-eyebrow">Get Licensed In</div>
                  <h3 className="state-card-name">{s.name}</h3>
                  <p className="state-card-desc">{s.desc}</p>
                </div>

                <div className="state-card-foot">
                  <div className="state-card-stat">
                    <span className="k">{s.hours}<small>hr</small></span>
                    <span className="v">Pre-Licensing Course</span>
                  </div>
                  <span className="state-card-arrow"><Icon.ArrowUR size={14}/></span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

// (StateShape SVG removed — state cards now use photos.)

window.StatePicker = StatePicker;
