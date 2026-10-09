import { useRef } from 'react';
import Magnet from './components/react-bits/Magnet.jsx';
import Portfolio from './components/Portfolio.jsx';
import BriefForm from './components/BriefForm.jsx';
import { useStudioMotion } from './hooks/useStudioMotion.js';

const services = [
  ['01', 'Nhận diện thương hiệu', 'Từ bản sắc đến hình hài.', 'Logo, màu sắc, typography, bao bì và những chi tiết khiến thương hiệu được nhớ đến.'],
  ['02', 'Thiết kế website', 'Một trải nghiệm có chủ đích.', 'Website giới thiệu, portfolio và giao diện sản phẩm với nội dung rõ ràng, chuyển động vừa đủ.'],
  ['03', 'Minh họa & ấn phẩm', 'Câu chuyện kể bằng đường nét.', 'Minh họa chủ đạo, họa tiết và ấn phẩm mang ngôn ngữ riêng của thương hiệu.'],
];

export default function App() {
  const root = useRef(null);
  const magnetEnabled = useStudioMotion(root);

  return <div ref={root}>
    <a className="skip-link" href="#noi-dung">Đến nội dung chính</a>
    <div className="reading-progress" aria-hidden="true" />
    <header className="site-header section-wrap">
      <a href="#noi-dung" className="wordmark" aria-label="Nét Studio — trang đầu">nét<span aria-hidden="true">✳</span><small>STUDIO</small></a>
      <nav aria-label="Điều hướng chính"><a href="#du-an">Dự án</a><a href="#ve-net">Về Nét</a><a href="#dich-vu">Dịch vụ</a></nav>
      <a className="header-contact" href="#lien-he">Cùng tạo dấu ấn <span aria-hidden="true">↗</span></a>
    </header>
    <main id="noi-dung" tabIndex="-1">
      <section className="hero section-wrap" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow" data-hero><span className="tiny-star" aria-hidden="true">✳</span> Thiết kế từ những điều tinh tế</p>
          <h1 id="hero-title" data-hero>Ý tưởng đẹp.<br /><em>Dấu ấn riêng.</em></h1>
          <p className="hero-description" data-hero>Mỗi thương hiệu có một câu chuyện.<br />Nét giúp câu chuyện ấy có hình hài —<br className="desktop-break" /> bằng thiết kế, bằng cảm xúc, bằng dấu ấn.</p>
          <div className="hero-actions" data-hero><a className="button button-blue" href="#du-an">Khám phá dự án <span aria-hidden="true">↗</span></a><a className="text-link" href="#lien-he">Bắt đầu với một ý tưởng</a></div>
          <div className="hero-caption" data-hero><span className="caption-line" /><span>Độc lập trong tư duy.<br />Tỉ mỉ trong từng nét.</span></div>
        </div>
        <div className="hero-visual" data-hero><span className="art-index">FIG. 01 — THE ART OF MAKING</span><img className="hero-art" src="/images/hero.svg" alt="Minh họa hoa hình cầu bằng các nét khắc màu cobalt, trên một đế kiến trúc" width="680" height="760" fetchPriority="high" /><div className="hero-seal"><Magnet disabled={!magnetEnabled} padding={24} magnetStrength={8} activeTransition="transform 0.2s cubic-bezier(0.23, 1, 0.32, 1)" inactiveTransition="transform 0.2s cubic-bezier(0.23, 1, 0.32, 1)"><a href="#ve-net" aria-label="Khám phá tinh thần Nét"><span>THIẾT KẾ CÓ</span><b aria-hidden="true">✳</b><span>CHỦ ĐÍCH</span></a></Magnet></div><span className="art-note">Một ý tưởng. Vô vàn khả năng.</span></div>
      </section>
      <div className="discipline-band section-wrap" aria-label="Lĩnh vực sáng tạo"><span>Nhận diện thương hiệu</span><i aria-hidden="true">✳</i><span>Thiết kế website</span><i aria-hidden="true">✳</i><span>Minh họa & ấn phẩm</span><a href="#du-an" aria-label="Cuộn đến các dự án">↓</a></div>
      <Portfolio />
      <section id="ve-net" className="about-section section-wrap" aria-labelledby="about-title">
        <div data-reveal><p className="eyebrow">02 / Tinh thần Nét</p><p className="about-side">Tò mò.<br />Có chủ đích.<br />Luôn còn một nét mới.</p></div>
        <div className="about-copy" data-reveal><h2 id="about-title">Thiết kế tốt bắt đầu<br />bằng <em>một câu hỏi đúng.</em></h2><p>Nét là concept cho một studio sáng tạo độc lập. Một nơi dành cho những thương hiệu muốn tìm tiếng nói riêng — rõ ràng về ý tưởng, tinh tế trong thể hiện.</p><p>Chúng tôi tin vào sự giản dị có chiều sâu. Mỗi khoảng trắng, mỗi đường nét và mỗi chuyển động đều cần một lý do để hiện diện.</p><a className="text-link" href="#dich-vu">Khám phá cách Nét làm việc <span aria-hidden="true">↗</span></a></div>
      </section>
      <section id="dich-vu" className="services-section section-wrap" aria-labelledby="services-title">
        <div className="section-heading" data-reveal><div><p className="eyebrow">03 / Chúng ta có thể tạo gì?</p><h2 id="services-title">Những điều<br /><em>Nét làm.</em></h2></div><p className="section-note">Một ngôn ngữ nhất quán.<br />Từ ý tưởng đến mọi điểm chạm.</p></div>
        <div className="service-ledger">{services.map(([number, name, subtitle, description]) => <details key={number}><summary><span className="service-number">{number}</span><h3>{name}</h3><span className="service-subtitle">{subtitle}</span><span className="service-plus" aria-hidden="true">+</span></summary><div className="service-description"><p>{description}</p><a className="text-link" href="#lien-he">Phác thảo brief của bạn <span aria-hidden="true">↗</span></a></div></details>)}</div>
      </section>
      <BriefForm />
    </main>
    <footer className="site-footer section-wrap"><a className="footer-wordmark" href="#noi-dung">nét<span aria-hidden="true">✳</span></a><div className="footer-bottom"><p>Ý tưởng đẹp. Dấu ấn riêng.</p><span>Concept studio · 2026</span><a href="#noi-dung">Về đầu trang ↑</a></div></footer>
  </div>;
}
