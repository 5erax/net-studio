# Kiểm tra cuộn và parallax

Ngày 2026-10-09. Edge headless, viewport 1440 × 1000, CPU throttling 4×, mỗi trường hợp chạy 3 lần với thao tác pointer và cuộn trong 5 giây. Đây là phép đo tổng hợp để so sánh cùng điều kiện, không phải FPS trên điện thoại thật hoặc Core Web Vitals thực tế.

| Trường hợp | Khoảng cách frame trung bình | Tổng thời gian tính lại style | Số frame trong lượt đo |
| --- | ---: | ---: | ---: |
| Bản trước | 1193 ms | 2848 ms | 4 |
| Biến parallax không kế thừa, cập nhật trên từng lớp | 456 ms | 279 ms | 10 |
| Thêm bỏ rendering các vùng minh họa ngoài màn hình | 142 ms | 317 ms | 35 |

Giữ hai thay đổi đã cải thiện rõ ràng: đăng ký `--mx`, `--my`, `--tp` với `inherits:false` và cập nhật trực tiếp lớp dùng chúng; `content-visibility:auto` trên các vùng minh họa có chiều cao cố định. Giữ nét khắc SVG, parallax, moon control, hotspot và các thư viện chuyển động.

Đã thử bỏ blur/filter: không có cải thiện ổn định về frame so với bản đã sửa, nên không đổi. Bỏ toàn bộ CSS animation có cải thiện nhỏ hơn việc bỏ rendering ngoài màn hình và làm mất chuyển động trang trí, nên không áp dụng.

Khi chỉnh motion, kiểm tra lại cuộn, vị trí anchor, SVG khi vào viewport, hotspot, menu và reduced motion. Kiểm tra biến parallax không xuất hiện trên container cha hoặc kế thừa xuống path SVG. Chưa có dữ liệu RUM hay phép đo trên thiết bị thật; vẫn cần xác nhận độ mượt trên thiết bị người dùng.
