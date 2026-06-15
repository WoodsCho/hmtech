function PoweredBy() {
  const partners = [
    { name: 'Nutanix', src: '/nutanix.png' },
    { name: 'VAST Data', src: '/vast.png' },
    { name: 'Doosan', src: '/doosan.png' },
    { name: 'Hyundai', src: '/hyundai.png' },
    { name: 'LX', src: '/lx.png' },
    { name: 'Amkor', src: '/amkor.png' },
    { name: 'Veeam', src: '/veeam.png' },
    { name: 'SUSE', src: '/suse.png' },
    { name: 'AWS', src: '/aws.png' },
    { name: 'Dell', src: '/dell.png' },
    { name: 'HP', src: '/hp.svg' },
    { name: 'NetApp', src: '/NetApp.png' },
    { name: 'Citrix', src: '/Citrix.png' },
    { name: 'Arcserve', src: '/arcserve.webp' },
    { name: 'Nutanix', src: '/nutanix.png' },
    { name: 'VAST Data', src: '/vast.png' },
    { name: 'Doosan', src: '/doosan.png' },
    { name: 'Hyundai', src: '/hyundai.png' },
    { name: 'LX', src: '/lx.png' },
    { name: 'Amkor', src: '/amkor.png' },
    { name: 'Veeam', src: '/veeam.png' },
    { name: 'SUSE', src: '/suse.png' },
    { name: 'AWS', src: '/aws.png' },
    { name: 'Dell', src: '/dell.png' },
    { name: 'HP', src: '/hp.svg' },
    { name: 'NetApp', src: '/NetApp.png' },
    { name: 'Citrix', src: '/Citrix.png' },
    { name: 'Arcserve', src: '/arcserve.webp' }
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