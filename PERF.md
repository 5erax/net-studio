# Kiểm tra cuộn và parallax

## Font — 1.1.0

Năm file font trước đây là TrueType dù có phần mở rộng `.woff2`. Đã chuyển thành WOFF2 chuẩn, tổng dung lượng giảm từ 1.12 MB xuống 267 KB. Kiểm tra cmap xác nhận toàn bộ chữ có dấu tiếng Việt vẫn có trong cả năm file. Template đã nối với các web font này thay vì ưu tiên font hệ thống. Đây là giảm dung lượng tài nguyên font, không phải phép đo tốc độ toàn trang hoặc độ mượt trên thiết bị thật.

## Đối chiếu motion với trang gốc

Đã phát hiện `intro:false` trong nội dung Nét Studio làm mất chuỗi intro của template. Đã đổi thành `intro:true` và bỏ GSAP intro/fade trang trí bổ sung. Đối chiếu 11 selector với preview tác giả: `.ctl-veil`, `.ctl-settle`, `.ctl-rise`, `.ctl-track`, `.ctl-tw0`, `.ctl-hot::before`, `.ctl-orbit`, `.ctl-bob`, `.ctl-mark`, `.ctl-panelin`, `.ctl-preview`. Tên animation, duration, easing, delay và transition khớp nguồn gốc.

Kiểm tra bổ sung: đổi pha mặt trăng bằng Enter, hover preview hiện theo pointer, dấu xoay khi cuộn, footer còn `animateMotion`, reduced motion bỏ chuyển động trang trí. Không thay những animation này để đạt điểm benchmark.

Đo wheel thật bằng Playwright `mouse.wheel`, 8 lần × 420 px cách nhau 350 ms, cùng Edge headless 1440 × 1000, không CPU throttling, 3 lượt mỗi trường hợp. Thời gian main thread trung bình trong cửa sổ thao tác: bản Vercel trước sửa wheel 2760 ms, thử native wheel 1554 ms, bản khôi phục intro + native wheel 1632 ms. Giữ `smoothWheel:false`: wheel có phản hồi native như bản gốc; Lenis vẫn xử lý điều hướng anchor. Kiểm tra runtime xác nhận wheel không bị preventDefault.

Đã chạy cùng thao tác trên preview gốc, nhưng preview có workshop shell riêng và phép đo headless không phản ánh trải nghiệm trên máy người dùng. Không dùng kết quả đó để khẳng định bản tùy chỉnh mượt ngang hoặc hơn bản gốc. Chưa đo RUM hoặc thiết bị thật.

## Phép thử stress trước đó

Các số liệu dưới đây dùng pointer event nhân tạo đồng thời với `window.scrollTo` mỗi frame và CPU throttling 4×. Chúng chỉ giúp khoanh vùng chi phí style; không phải bằng chứng bản tùy chỉnh đạt độ mượt của trang gốc. Phép thử này bỏ qua khác biệt wheel của Lenis và không phát hiện intro đã bị tắt.

Ngày 2026-10-09. Edge headless, viewport 1440 × 1000, CPU throttling 4×, mỗi trường hợp chạy 3 lần với thao tác pointer và cuộn trong 5 giây. Đây là phép đo tổng hợp để so sánh cùng điều kiện, không phải FPS trên điện thoại thật hoặc Core Web Vitals thực tế.

| Trường hợp | Khoảng cách frame trung bình | Tổng thời gian tính lại style | Số frame trong lượt đo |
| --- | ---: | ---: | ---: |
| Bản trước | 1193 ms | 2848 ms | 4 |
| Biến parallax không kế thừa, cập nhật trên từng lớp | 456 ms | 279 ms | 10 |
| Thêm bỏ rendering các vùng minh họa ngoài màn hình | 142 ms | 317 ms | 35 |

Giữ hai thay đổi đã cải thiện rõ ràng: đăng ký `--mx`, `--my`, `--tp` với `inherits:false` và cập nhật trực tiếp lớp dùng chúng; `content-visibility:auto` trên các vùng minh họa có chiều cao cố định. Giữ nét khắc SVG, parallax, moon control, hotspot và các thư viện chuyển động.

Đã thử bỏ blur/filter: không có cải thiện ổn định về frame so với bản đã sửa, nên không đổi. Bỏ toàn bộ CSS animation có cải thiện nhỏ hơn việc bỏ rendering ngoài màn hình và làm mất chuyển động trang trí, nên không áp dụng.

Khi chỉnh motion, kiểm tra lại cuộn, vị trí anchor, SVG khi vào viewport, hotspot, menu và reduced motion. Kiểm tra biến parallax không xuất hiện trên container cha hoặc kế thừa xuống path SVG. Chưa có dữ liệu RUM hay phép đo trên thiết bị thật; vẫn cần xác nhận độ mượt trên thiết bị người dùng.
