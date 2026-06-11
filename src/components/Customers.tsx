function Customers() {
  const customers = [
    { name: 'D사', industry: '전자제품 제조', description: '데이터레이크부터 피지컬AI까지 통합 솔루션 / 증평 공장 7~24호기 프로젝트' },
    { name: 'L사', industry: '반도체 제조', description: 'VDI 1600명 구축 및 SM운영 / AI 및 HPC 데이터플랫폼 VAST Data 4PB 납품 및 유지보수 / EDA 설계 및 시뮬레이션 납품 및 유지보수' },
    { name: 'H사', industry: '자동차 제조', description: '스토리지 및 시뮬레이션 시스템' },
    { name: 'A사', industry: '반도체 제조', description: 'EDA 설계 및 시뮬레이션 서버 및 GPU서버 납품 및 유지보수' }
  ];

  return (
    <section className="section customers" id="customers">
      <div className="container">
        <div className="section-header fade-in">
          <div className="section-label">Our Customers</div>
          <h2 className="section-title">
            <span className="highlight">주요</span> 고객사
          </h2>
          <p className="section-desc">
            제조업 혁신을 함께하는 주요 고객사들입니다
          </p>
        </div>
        <div className="customers-grid">
          {customers.map((customer, index) => (
            <div className="customer-card fade-in" key={index}>
              <div className="customer-logo">
                <span className="customer-initial">{customer.name}</span>
              </div>
              <div className="customer-info">
                <h4>{customer.name}</h4>
                <span className="customer-industry">{customer.industry}</span>
                <p>{customer.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Customers;