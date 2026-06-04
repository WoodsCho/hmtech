function Timeline() {
  const timelineData = [
    {
      year: '2021',
      title: 'VDI 솔루션 사업의 첫걸음을 내딛었습니다.',
      content: '<strong>• 전신 드림데이터 시스템즈(주)</strong><br />• CJ제일제당 ERP스토리지 납품<br />• HK이노엔 VDI인프라 WINBACK진행'
    },
    {
      year: '2022',
      title: 'LX세미콘의 VDI 1600명 프로젝트를 수주했습니다.',
      content: '<strong>• 에이치텍(주) 설립</strong><br />• NUTANIX, VASTDATA 공식파트너사 등록<br />• LX세미콘 VDI 1600명 프로젝트 수주'
    },
    {
      year: '2023',
      title: 'LX세미콘 VDI 솔루션 구축 및 파트너사들과 제휴',
      content: '<strong>• CITRIX 및 SUSE LINUX 공식 파트너사 등록</strong><br />• VAST DATA 시뮬레이션 스토리지 LX세미콘에 4PB납품<br />• 데이터 통합 관리 경험 축적'
    },
    {
      year: '2024',
      title: 'EdgeWave 통합 데이터레이크 플랫폼 개발 시작',
      content: '<strong>• LX세미콘 VDI 1600명 SM운영 사업 수주</strong><br />• EdgeWave 플랫폼 개발 시작<br />• 피지컬AI 스마트팩토리 솔루션 기획'
    },
    {
      year: '2025',
      title: '두산전자 프로젝트 성공 완료 및 EdgeWave 확장',
      content: '<strong>• 두산전자 증평 7호기 고도화 프로젝트 완료</strong><br />• 9호기 프로젝트 진행 중<br />• 국내 스마트팩토리 도입 기업 30,000개 타겟'
    }
  ];

  return (
    <section className="section timeline" id="history">
      <div className="container">
        <div className="section-header fade-in">
          <div className="section-label">Company History</div>
          <h2 className="section-title">
            <span className="highlight">연혁</span>
          </h2>
          <p className="section-desc">
            HMTech의 성장 여정을 확인하세요
          </p>
        </div>
        <div className="timeline-container">
          <div className="timeline-line"></div>
          {timelineData.map((item, index) => (
            <div className={`timeline-item fade-in`} key={index}>
              <div className="timeline-content">
                <div className="timeline-year">{item.year}</div>
                <h3>{item.title}</h3>
                <p dangerouslySetInnerHTML={{ __html: item.content }} />
              </div>
              <div className="timeline-dot">{item.year.slice(2)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Timeline;