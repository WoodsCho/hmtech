function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>HM<span className="green">Tech</span></h3>
            <p>
              통합 데이터레이크 & 피지컬AI 스마트팩토리.<br />
              제조업의 데이터를 혁신하는 HMTech.
            </p>
            <div className="footer-social">
              <a href="#" aria-label="LinkedIn">in</a>
              <a href="#" aria-label="Twitter">𝕏</a>
              <a href="#" aria-label="Facebook">f</a>
            </div>
          </div>
          <div className="footer-links">
            <h4>솔루션</h4>
            <ul>
              <li><a href="#services">EdgeWave 데이터레이크</a></li>
              <li><a href="#services">피지컬AI</a></li>
              <li><a href="#services">스마트팩토리</a></li>
              <li><a href="#services">실시간분석</a></li>
            </ul>
          </div>
          <div className="footer-links">
            <h4>회사</h4>
            <ul>
              <li><a href="#about">회사소개</a></li>
              <li><a href="#history">연혁</a></li>
              <li><a href="#cases">프로젝트</a></li>
              <li><a href="#">채용</a></li>
            </ul>
          </div>
          <div className="footer-links">
            <h4>연락처</h4>
            <ul>
              <li><a href="mailto:contact@h-mtech.com">contact@h-mtech.com</a></li>
              <li><a href="https://h-mtech.com">h-mtech.com</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 HMTech Inc. All rights reserved.</p>
          <p>
            <a href="#" style={{ color: 'var(--gray-400)', textDecoration: 'none' }}>개인정보처리방침</a>
            {' | '}
            <a href="#" style={{ color: 'var(--gray-400)', textDecoration: 'none' }}>이용약관</a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;