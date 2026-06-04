function Services() {
  return (
    <section className="section services" id="services">
      <div className="container">
        <div className="section-header fade-in">
          <div className="section-label">Core Solutions</div>
          <h2 className="section-title">
            <span className="highlight">핵심</span> 솔루션
          </h2>
          <p className="section-desc">
            통합 데이터레이크와 피지컬AI로 제조업의 데이터를 혁신합니다
          </p>
        </div>
        <div className="services-grid">
          <div className="service-card fade-in">
            <div className="service-icon">🌊</div>
            <h3>EdgeWave 통합 데이터레이크</h3>
            <p>
              다양한 데이터 소스를 단일 플랫폼에서 통합 관리하고,
              실시간 분석과 AI 모델을 구축하는 차세대 데이터레이크 플랫폼입니다.
            </p>
            <ul className="service-features">
              <li>MES, ERP, SCADA, IoT 센서 단일 플랫폼 통합 관리</li>
              <li>Kubeflow 기반 자동화된 ETL 파이프라인</li>
              <li>하이브리드 스토리지 지원 (Vast, MinIO, AWS S3)</li>
              <li>실시간 데이터 분석 및 예측 기반 이상 탐지</li>
              <li>컨테이너 기반 모듈화 및 아키텍처 확장</li>
            </ul>
          </div>
          <div className="service-card fade-in">
            <div className="service-icon">🤖</div>
            <h3>피지컬AI 스마트팩토리</h3>
            <p>
              제조 현장의 물리적 데이터와 AI를 결합하여
              생산성을 극대화하는 스마트팩토리 솔루션입니다.
            </p>
            <ul className="service-features">
              <li>생산 장비 고장 예측으로 가동 중단 시간 최소화</li>
              <li>품질 검사 자동화 및 불량률 감소</li>
              <li>에너지 관리 최적화</li>
              <li>공정 개선 및 원가 절감</li>
              <li>디지털 트윈을 통한 시뮬레이션</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;