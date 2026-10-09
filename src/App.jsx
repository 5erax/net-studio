import { useRef, useState } from 'react';
import { C as CobaltToileLanding, EngravedMark } from './components/template/CobaltToileLanding.jsx';
import Magnet from './components/react-bits/Magnet.jsx';
import BriefForm from './components/BriefForm.jsx';
import ContentDialog from './components/ContentDialog.jsx';
import { useStudioMotion } from './hooks/useStudioMotion.js';
import { articles, studioContent } from './lib/studioContent.js';
import { createBrief } from './lib/content.js';

const information = {
  privacy: { title: 'Quyền riêng tư', body: 'Project này không có backend, analytics hoặc tài khoản. Form brief và form ghi chú tạo tệp ngay trên thiết bị của bạn, không gửi tên, email hoặc nội dung đến máy chủ. Bạn có thể kiểm tra và chỉnh sửa tệp trước khi chia sẻ.' },
  demo: { title: 'Thông tin bản demo', body: 'Nét Studio là thương hiệu concept. Các dự án là ví dụ thiết kế, không phải lời xác nhận về khách hàng thực. Giao diện nền được tùy chỉnh từ Engraved Illustration Landing Page Template của Kedhareswer Naidu; minh họa studio trong dải cuối trang được vẽ thêm cho project này.' },
};

export default function App() {
  const root = useRef(null);
  const trigger = useRef(null);
  const [entry, setEntry] = useState(null);
  const { magnetEnabled, navigate } = useStudioMotion(root);

  function openContent(event) {
    const anchor = event.target.closest('a');
    if (!anchor) return;
    const href = anchor.getAttribute('href');
    const next = articles.find(article => article.href === href) || information[href?.slice(1)];
    if (!next) return;
    event.preventDefault();
    trigger.current = anchor;
    setEntry(next);
  }

  function closeContent() {
    setEntry(null);
    trigger.current?.focus();
  }

  function downloadNote(email) {
    const text = createBrief({ name: 'Ghi chú Nét Studio', email, service: 'Nhận diện', description: 'Concept studio sáng tạo với nhận diện thương hiệu, website, minh họa và ấn phẩm.' });
    const url = URL.createObjectURL(new Blob([text], { type: 'text/plain;charset=utf-8' }));
    const link = document.createElement('a');
    link.href = url;
    link.download = 'net-studio-ghi-chu.txt';
    document.body.appendChild(link);
    link.click();
    link.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  const mark = <Magnet disabled={!magnetEnabled} padding={12} magnetStrength={12} activeTransition="transform .2s cubic-bezier(.23,1,.32,1)" inactiveTransition="transform .2s cubic-bezier(.23,1,.32,1)"><EngravedMark /></Magnet>;

  return <div ref={root} onClick={openContent} className="net-app"><a className="skip-link" href="#noi-dung">Đến nội dung chính</a><div className="reading-progress" aria-hidden="true" /><CobaltToileLanding {...studioContent} logo={mark} navigate={navigate} onSubscribe={downloadNote} contactContent={<BriefForm />} /><ContentDialog entry={entry} onClose={closeContent} /></div>;
}
