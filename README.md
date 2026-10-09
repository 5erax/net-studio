# Nét Studio

Project React + Vite dành cho một studio sáng tạo, lấy cảm hứng từ chất liệu giấy, sắc cobalt và minh họa tranh khắc. Đây là concept gốc; không sao chép code hoặc minh họa của template 21st.dev.

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
- **GSAP + ScrollTrigger**: animation mở đầu, reveal một lần, parallax minh họa và thanh tiến độ đọc trang. Mỗi effect có cleanup, an toàn với React StrictMode.
- **React Bits**: component **Magnet** lấy từ repository chính thức, nằm trong `src/components/react-bits/`. React Bits phát hành source component để tích hợp vào project; không có package `react-bits` cần cài ở đây.

Giao diện tự dùng cuộn native và bỏ chuyển động trang trí khi thiết bị bật `prefers-reduced-motion`. Magnet chỉ hoạt động khi có chuột hoặc con trỏ chính xác.

## Chức năng

- Landing page responsive bằng tiếng Việt.
- Lọc portfolio theo ba lĩnh vực.
- Chi tiết dự án bằng `<dialog>` native, hỗ trợ Escape và trả focus về nút đã mở.
- Mở/đóng mô tả dịch vụ bằng `<details>` native.
- Form tạo và tải brief `.txt`, kiểm tra email và độ dài nội dung.
- Điều hướng bằng bàn phím, skip link và thông báo trạng thái.
- Font và minh họa lưu trong project; không cần tải tài nguyên bên ngoài khi xem trang.

## Tùy chỉnh

- Dự án, danh mục và kiểm tra form: `src/lib/content.js`.
- Nội dung, bố cục: `src/App.jsx`.
- Màu, typography, responsive: `src/styles.css`.
- Animation, tích hợp Lenis/GSAP: `src/hooks/useStudioMotion.js`.
- Minh họa: `public/images/`.

## Giới hạn

Đây là frontend demo, chưa có backend, tài khoản hoặc xử lý thanh toán. Nội dung portfolio đều là **concept**, không phải dự án khách hàng thực. Form chỉ tải brief về thiết bị, không gửi email và không lưu lên máy chủ.

Muốn tiếp nhận yêu cầu thật, kết nối form với API hoặc dịch vụ form, xác thực đầu vào ở server và chỉ hiển thị thành công khi API xác nhận.

Xem `THIRD_PARTY_NOTICES.md` và các giấy phép đi kèm. React Bits cho phép dùng component trong website/sản phẩm, có hạn chế việc bán hoặc phân phối chính component như một sản phẩm riêng.

## Kiểm tra đã thực hiện

- Build production thành công.
- 3 bài `node:test`: lọc danh mục, tạo brief tiếng Việt, từ chối dữ liệu không hợp lệ.
- Edge headless: render, font, ảnh, không tràn ngang ở 320 / 768 / 1024 / 1440px; bộ lọc; hộp thoại; Escape; trả focus; accordion; tải brief; reduced motion; console và network sạch.
- Chưa kiểm tra trên Safari hoặc thiết bị cảm ứng thật.
