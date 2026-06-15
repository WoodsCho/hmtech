function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-bg-elements">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-badge">
              <span>EdgeWave Platform</span>
            </div>
            <h1 className="hero-title">
              통합 데이터레이크 &<br />
              <span className="highlight">피지컬AI</span> 스마트팩토리
            </h1>
            <p className="hero-subtitle">
              HMTech는 제조업의 데이터를 통합 관리하고, 피지컬AI로 스마트팩토리를 실현합니다.
              L사, D사, H사 등 대형 제조업체의 데이터를 기반으로
              차세대 데이터 인프라를 구축합니다.
            </p>
            <div className="hero-buttons">
              <a href="#services" className="btn btn-primary">
                솔루션 보기 →
              </a>
              <a href="#contact" className="btn btn-outline">
                상담 신청
              </a>
            </div>
            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-number">4PB+</div>
                <div className="stat-label">납품 경험</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">8,000+</div>
                <div className="stat-label">타겟 기업</div>
              </div>
            </div>
          </div>
          <div className="hero-image">
            <img src="/hero.png" alt="HMTech Hero" className="hero-image-img" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;