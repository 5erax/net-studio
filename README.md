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

- **Lenis**: điều hướng anchor có chuyển động, kết nối cùng GSAP ticker. Wheel dùng cuộn native như template gốc (`smoothWheel:false`).
- **GSAP + ScrollTrigger**: reveal brief và thanh tiến độ đọc trang. Mỗi effect có cleanup, an toàn với React StrictMode.
- **Motion gốc**: bật `intro:true` để giữ hiệu ứng mở tranh từ tâm, bốn lớp minh họa settle và chữ xuất hiện theo nhịp. Giữ reveal khi cuộn, parallax, sao nhấp nháy, dấu xoay, dấu trang, hover preview, hotspot và footer SVG chuyển động. GSAP không điều khiển lại những phần template đã có animation.
- **React Bits**: component **Magnet** lấy từ repository chính thức, nằm trong `src/components/react-bits/`. React Bits phát hành source component để tích hợp vào project; không có package `react-bits` cần cài ở đây.

Giao diện tự dùng cuộn native và bỏ chuyển động trang trí khi thiết bị bật `prefers-reduced-motion`. Magnet chỉ hoạt động khi có chuột hoặc con trỏ chính xác.

## Chức năng

- Landing page responsive bằng tiếng Việt và tiếng Anh; chuyển VI/EN trên thanh đầu trang. Dịch cả nội dung, menu, popup, form, thông báo lỗi và tệp tải xuống.
- Bốn bảng màu gốc Cobalt / Indigo / Delft / Oxblood, đổi từ thanh đầu trang hoặc footer. Màu đồng bộ cả minh họa, form, popup và thanh tiến độ.
- Trình duyệt nhớ ngôn ngữ và bảng màu bằng localStorage; không lưu dữ liệu form.
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

- Nội dung Việt/Anh, dự án/ghi chú và hotspot: `src/lib/studioContent.js` (`contentByLocale`).
- Chữ giao diện, bản dịch thông báo, quyền riêng tư: `src/lib/interfaceCopy.js`.
- Dự án concept, danh mục và kiểm tra form: `src/lib/content.js`.
- Template đầy đủ, CSS gốc và SVG: `src/components/template/CobaltToileLanding.jsx`.
- Minh họa studio thay thế: `src/components/template/StudioIllustrations.jsx`.
- Kết nối template, dialog, ngôn ngữ, màu sắc và tải ghi chú: `src/App.jsx`.
- CSS bổ sung cho brief, dialog và responsive: `src/styles.css`.
- Animation, tích hợp Lenis/GSAP: `src/hooks/useStudioMotion.js`.
- Minh họa: `public/images/`.

## Giới hạn

Đây là frontend demo, chưa có backend, tài khoản hoặc xử lý thanh toán. Nội dung portfolio đều là **concept**, không phải dự án khách hàng thực. Hai form chỉ tải tệp về thiết bị, không gửi email và không lưu lên máy chủ.

Muốn tiếp nhận yêu cầu thật, kết nối form với API hoặc dịch vụ form, xác thực đầu vào ở server và chỉ hiển thị thành công khi API xác nhận.

Xem `THIRD_PARTY_NOTICES.md` và các giấy phép đi kèm. React Bits có MIT + Commons Clause. Không tìm thấy giấy phép riêng cho template trong module preview; project giữ thông tin tác giả và không tự gán giấy phép MIT cho template.

## Kiểm tra đã thực hiện

- Build production thành công.
- 5 bài `node:test`: lọc danh mục, brief tiếng Việt, từ chối dữ liệu không hợp lệ, brief tiếng Anh và kiểm tra các liên kết/ID giữ nguyên giữa hai ngôn ngữ.
- Edge headless: render template, không tràn ngang ở 320 / 768 / 1024 / 1440px; dấu trang và bàn phím; bộ lọc; xem tất cả; hộp thoại/Escape/trả focus; dịch vụ; hotspot; tải brief và ghi chú; menu điện thoại; cuộn Lenis; reduced motion; console và network sạch.
- Đối chiếu trực tiếp 11 bộ thông số motion với preview tác giả: animation name, duration, easing, delay và transition. Kiểm tra moon bằng bàn phím, wheel không bị preventDefault, hover preview, dấu xoay và animateMotion trong footer.
- Bản 1.1.0: font thực tế qua Chrome DevTools (không fallback ở hero tiếng Việt); cả VI/EN tại 320 / 390 / 768 / 1024 / 1440px; palette đồng bộ và lưu lựa chọn; đổi ngôn ngữ không mất dữ liệu form; brief/ghi chú tiếng Anh; menu và hộp thoại bằng bàn phím.
- Chưa kiểm tra trên Safari hoặc thiết bị cảm ứng thật.

## Font và lựa chọn giao diện

Template dùng trực tiếp Be Vietnam Pro cho chữ nội dung và Cormorant Garamond cho chữ serif. Năm file font được nén thành WOFF2 đúng định dạng, giữ đầy đủ chữ có dấu tiếng Việt, tải từ project và không gọi Google Fonts khi mở trang. Không còn ưu tiên font hệ thống có thể làm dấu bị lệch. Các biến màu ở `App.jsx` và template dùng cùng một palette; ảnh của các dự án concept giữ màu thiết kế của từng dự án.

## GitHub và deploy

- Repository: https://github.com/5erax/net-studio
- Website chính: https://net-studio-nu.vercel.app/
- Vercel project `net-studio`, workspace `DHa's projects`, liên kết repo `5erax/net-studio`, production branch `main`. Tự deploy production khi push `main`, preview cho các nhánh khác.
- Workflow `.github/workflows/deploy.yml` chạy test và build trên GitHub. Deploy do tích hợp Git của Vercel thực hiện; `vercel.json` yêu cầu test đạt trước khi build.
- Node 24, cài bằng `npm ci`, build tĩnh vào `dist`. Không cần API key, database hoặc secret tự tạo.
- Vercel và local dùng `/`. Có thể đặt `VITE_BASE_PATH=/net-studio/` nếu cần build lại cho GitHub Pages. Bản Pages cũ không còn được cập nhật tự động.
- Repo công khai. Giữ giấy phép thư viện và thông tin tác giả template trong `THIRD_PARTY_NOTICES.md`.
- Quyền xem production và preview được quản lý trong Deployment Protection của project Vercel. Không đưa `.vercel/` hoặc thông tin xác thực vào Git.
- Quay lại một bản trước: dùng `git revert <commit>` rồi push `main`; Vercel sẽ kiểm tra và deploy lại. Không cần force-push. Hoặc chọn bản production trước trong dashboard Vercel và dùng rollback.

Cấu hình theo hướng dẫn chính thức của [Vite trên Vercel](https://vercel.com/docs/frameworks/frontend/vite) và [Vercel GitHub](https://vercel.com/docs/git/vercel-for-github). Các phép đo tối ưu SVG/parallax nằm trong `PERF.md`; chưa có dữ liệu hiệu năng trên thiết bị thật.
