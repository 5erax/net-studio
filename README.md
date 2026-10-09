# Nét Studio

Project React + Vite dành cho một studio sáng tạo, tùy chỉnh từ **Engraved Illustration Landing Page Template** của **Kedhareswer Naidu**. Giữ bố cục, hero vòm, nét khắc cobalt, dấu trang và footer của mẫu; thay nội dung thành Nét Studio và dải minh họa cuối phần dự án thành bàn thiết kế, ngòi bút, website, bảng màu và giá vẽ.

Template: https://21st.dev/@kedhareswer/templates/engraved-illustration-landing-page-template

Lệnh registry được tác giả cung cấp (`npx shadcn@latest add https://21st.dev/r/kedhareswer/cobalt-toile-landing`) trả về **404** lúc thực hiện. Component trong project được khôi phục từ module React của bản preview công khai của tác giả, sau đó tùy chỉnh. Không cần chạy lại lệnh registry để dùng project này.

## Chạy project

Cần Node.js **22.12+** (đã chạy trên Node 24).

```bash
npm ci
npm run dev
```

Mở URL mà Vite hiển thị trong terminal.

```bash
npm test
npm run build
npm run preview
```

Build tĩnh nằm trong `dist/`. Có thể đưa lên hosting hỗ trợ website tĩnh.

## Thư viện được dùng thực tế

- **Lenis**: cuộn mượt và điều hướng anchor, kết nối cùng GSAP ticker.
- **GSAP + ScrollTrigger**: animation mở đầu, reveal brief, fade minh họa studio và thanh tiến độ đọc trang. Mỗi effect có cleanup, an toàn với React StrictMode. Các hiệu ứng reveal và tương tác gốc của template được giữ lại.
- **React Bits**: component **Magnet** lấy từ repository chính thức, nằm trong `src/components/react-bits/`. React Bits phát hành source component để tích hợp vào project; không có package `react-bits` cần cài ở đây.

Giao diện tự dùng cuộn native và bỏ chuyển động trang trí khi thiết bị bật `prefers-reduced-motion`. Magnet chỉ hoạt động khi có chuột hoặc con trỏ chính xác.

## Chức năng

- Landing page responsive bằng tiếng Việt.
- Bốn dấu trang chuyên môn, hỗ trợ phím mũi tên.
- Bảy dự án/ghi chú, lọc theo lĩnh vực và nút xem tất cả/thu gọn.
- Chi tiết dự án và thông tin bằng `<dialog>` native, hỗ trợ Escape và trả focus về liên kết đã mở.
- Mở/đóng năm mô tả dịch vụ và bốn hotspot trong minh họa studio.
- Menu điện thoại, điều hướng anchor bằng Lenis.
- Form tạo và tải brief `.txt`, kiểm tra email và độ dài nội dung.
- Form tải ghi chú `.txt` cục bộ, hiển thị rõ không đăng ký email.
- Điều hướng bằng bàn phím, skip link và thông báo trạng thái.
- Font và minh họa lưu trong project; không cần tải tài nguyên bên ngoài khi xem trang.

## Tùy chỉnh

- Thương hiệu, nội dung, dự án/ghi chú, hotspot: `src/lib/studioContent.js`.
- Dự án concept, danh mục và kiểm tra form: `src/lib/content.js`.
- Template đầy đủ, CSS gốc và SVG: `src/components/template/CobaltToileLanding.jsx`.
- Minh họa studio thay thế: `src/components/template/StudioIllustrations.jsx`.
- Kết nối template, dialog, tải ghi chú: `src/App.jsx`.
- CSS bổ sung cho brief, dialog và responsive: `src/styles.css`.
- Animation, tích hợp Lenis/GSAP: `src/hooks/useStudioMotion.js`.
- Minh họa: `public/images/`.

## Giới hạn

Đây là frontend demo, chưa có backend, tài khoản hoặc xử lý thanh toán. Nội dung portfolio đều là **concept**, không phải dự án khách hàng thực. Hai form chỉ tải tệp về thiết bị, không gửi email và không lưu lên máy chủ. Project chưa được xuất bản lên hosting.

Muốn tiếp nhận yêu cầu thật, kết nối form với API hoặc dịch vụ form, xác thực đầu vào ở server và chỉ hiển thị thành công khi API xác nhận.

Xem `THIRD_PARTY_NOTICES.md` và các giấy phép đi kèm. React Bits có MIT + Commons Clause. Không tìm thấy giấy phép riêng cho template trong module preview; project giữ thông tin tác giả và không tự gán giấy phép MIT cho template.

## Kiểm tra đã thực hiện

- Build production thành công.
- 3 bài `node:test`: lọc danh mục, tạo brief tiếng Việt, từ chối dữ liệu không hợp lệ.
- Edge headless: render template, không tràn ngang ở 320 / 768 / 1024 / 1440px; dấu trang và bàn phím; bộ lọc; xem tất cả; hộp thoại/Escape/trả focus; dịch vụ; hotspot; tải brief và ghi chú; menu điện thoại; cuộn Lenis; reduced motion; console và network sạch.
- Chưa kiểm tra trên Safari hoặc thiết bị cảm ứng thật.
