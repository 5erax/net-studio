import { useState } from 'react';
import { categories, createBrief } from '../lib/content.js';

export default function BriefForm() {
  const [feedback, setFeedback] = useState({ text: '', error: false });

  function submit(event) {
    event.preventDefault();
    try {
      const fields = Object.fromEntries(new FormData(event.currentTarget));
      const text = createBrief(fields);
      const url = URL.createObjectURL(new Blob([text], { type: 'text/plain;charset=utf-8' }));
      const link = document.createElement('a');
      link.href = url;
      link.download = 'net-studio-brief.txt';
      document.body.appendChild(link);
      link.click();
      link.remove();
      setTimeout(() => URL.revokeObjectURL(url), 1000);
      setFeedback({ text: 'Brief đã được tải xuống. Bạn có thể chỉnh sửa và chia sẻ tệp khi sẵn sàng.', error: false });
    } catch (error) {
      setFeedback({ text: error.message, error: true });
    }
  }

  return <section id="brief" data-sec="brief" className="contact-section ctl-wrap" aria-labelledby="contact-title">
    <div className="contact-intro" data-reveal><p className="eyebrow">04 / Bắt đầu một điều mới</p><h2 id="contact-title">Bạn có ý tưởng.<br /><em>Hãy phác nét đầu tiên.</em></h2><p>Một câu chuyện, một thương hiệu, hay một điều chưa thành hình. Bắt đầu bằng một brief nhỏ.</p><div className="contact-flower" aria-hidden="true">✳</div><p className="demo-note">Đây là project demo. Brief được tạo trên thiết bị của bạn, chưa gửi đến studio.</p></div>
    <form className="brief-form" onSubmit={submit}>
      <div className="form-row"><label htmlFor="name">Tên của bạn<input id="name" name="name" autoComplete="name" required maxLength="100" placeholder="Nguyễn An" /></label><label htmlFor="email">Email<input id="email" name="email" type="email" autoComplete="email" required maxLength="254" placeholder="ban@example.com" /></label></div>
      <label htmlFor="service">Bạn muốn tạo điều gì?<select id="service" name="service" required defaultValue=""><option value="" disabled>Chọn một dịch vụ</option>{categories.slice(1).map(item => <option key={item}>{item}</option>)}</select></label>
      <label htmlFor="description">Kể một chút về ý tưởng<textarea id="description" name="description" required minLength="20" maxLength="3000" rows="4" placeholder="Mục tiêu, phong cách bạn thích, thời gian dự kiến…" /></label>
      <button className="button button-blue" type="submit">Tạo & tải brief <span aria-hidden="true">↗</span></button>
      <p className={`form-feedback ${feedback.error ? 'error' : ''}`} role="status" aria-live="polite">{feedback.text || 'Không cần tài khoản. Không lưu thông tin trên máy chủ.'}</p>
    </form>
  </section>;
}
