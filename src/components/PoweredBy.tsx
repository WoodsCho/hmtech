function PoweredBy() {
  const partners = [
    { name: 'Nutanix', src: '/nutanix.png' },
    { name: 'VAST Data', src: '/vast.png' },
    { name: 'D사', src: '/doosan.png' },
    { name: 'H사', src: '/hyundai.png' },
    { name: 'L사', src: '/lx.png' },
    { name: 'Amkor', src: '/amkor.png' },
    { name: 'Nutanix', src: '/nutanix.png' },
    { name: 'VAST Data', src: '/vast.png' },
    { name: 'D사', src: '/doosan.png' },
    { name: 'H사', src: '/hyundai.png' },
    { name: 'L사', src: '/lx.png' },
    { name: 'Amkor', src: '/amkor.png' }
  ];

  return (
    <section className="section poweredby">
      <div className="container">
        <div className="section-header fade-in">
          <div className="section-label">Partners</div>
          <h2 className="section-title">
            <span className="highlight">Powered</span> By
          </h2>
        </div>
        <div className="poweredby-slider">
          <div className="poweredby-track">
            {partners.map((partner, index) => (
              <div className="poweredby-item" key={index}>
                <img src={partner.src} alt={partner.name} className="poweredby-logo" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default PoweredBy;