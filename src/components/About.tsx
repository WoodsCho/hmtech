function About() {
  return (
    <section className="section about" id="about">
      <div className="container">
        <div className="section-header fade-in">
          <div className="section-label">About Company</div>
          <h2 className="section-title">
            HMTech를 <span className="highlight">소개</span>합니다
          </h2>
          <p className="section-desc">
            통합 데이터레이크와 피지컬AI로 제조업의 미래를 혁신합니다
          </p>
        </div>
        <div className="about-content">
          <div className="about-image fade-in">
            <div className="about-image-main">
              <div className="about-image-content">
                <img src="/image1.png" alt="EdgeWave" className="about-image1" />
                <div className="about-logo-text">
                  <span className="about-logo-edge">EdgeWave</span>
                  <span className="about-logo-sub">통합 데이터레이크</span>
                </div>
                <div className="about-grid-pattern"></div>
              </div>
            </div>
            <div className="about-floating-card">
              <div className="card-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="white"/>
                </svg>
              </div>
              <div className="card-text">
                <h4>30억</h4>
                <p>목표 매출</p>
              </div>
            </div>
          </div>
          <div className="about-text fade-in">
            <h3>
              데이터와 AI로 제조업의<br />
              미래를 <span className="highlight">혁신</span>합니다
            </h3>
            <p className="about-desc-main">
              HMTech는 LX세미콘, 현대자동차 등 대형 제조업체의 스토리지 및 시뮬레이션 시스템 구축 과정에서
              발생한 방대한 데이터 통합·관리 문제를 직접 목격하고, 이 문제를 해결하기 위해 설립되었습니다.
            </p>
            <p className="about-desc-sub">
              EdgeWave 통합 데이터레이크 플랫폼은 MES, ERP, SCADA, IoT 센서 등
              다양한 데이터 소스를 단일 플랫폼에서 통합 관리하며,
              Kubeflow 기반 자동화된 ETL 파이프라인과 실시간 데이터 분석을 제공합니다.
            </p>
            <div className="about-tags">
              <span className="about-tag"># 통합데이터레이크</span>
              <span className="about-tag"># EdgeWave</span>
              <span className="about-tag"># 피지컬AI</span>
              <span className="about-tag"># 스마트팩토리</span>
              <span className="about-tag"># 제조업AI</span>
              <span className="about-tag"># 실시간분석</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;