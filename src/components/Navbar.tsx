import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.pageYOffset > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <a href="#hero" className={styles.navLogo} onClick={(e) => handleNavClick(e, '#hero')}>
          <img src="/logo.png" alt="HMTech" className={styles.navLogoImg} />
        </a>
        <ul className={`${styles.navLinks} ${isMobileMenuOpen ? styles.mobileOpen : ''}`}>
          <li><a href="#about" onClick={(e) => handleNavClick(e, '#about')}>회사소개</a></li>
          <li><a href="#services" onClick={(e) => handleNavClick(e, '#services')}>솔루션</a></li>
          <li><a href="#cases" onClick={(e) => handleNavClick(e, '#cases')}>프로젝트</a></li>
          <li><a href="#history" onClick={(e) => handleNavClick(e, '#history')}>연혁</a></li>
          <li><a href="#contact" className={styles.navCta} onClick={(e) => handleNavClick(e, '#contact')}>문의하기</a></li>
        </ul>
        <button 
          className={`${styles.mobileMenuBtn} ${isMobileMenuOpen ? styles.open : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;