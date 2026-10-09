import { projects } from './content.js';

export const articles = [
  ...projects.map(project => ({ id: project.id, title: `${project.name} — ${project.subtitle}`, source: project.name, date: 'Concept · 2026', category: project.category, href: `#story-${project.id}`, image: project.image, body: project.description, deliverables: project.deliverables })),
  { id: 'logo', title: 'Một logo đẹp chưa đủ để tạo nên một thương hiệu', source: 'Nét Studio', date: 'Ghi chú 01', category: 'Ghi chú', href: '#story-logo', body: 'Một hệ thống nhận diện cần hoạt động ở nhiều kích thước và bối cảnh. Bắt đầu bằng bản sắc, sau đó xác định logo, màu, typography và quy tắc ứng dụng. Kiểm tra logo ở bản đơn sắc, trên nền sáng và tối, ở kích thước nhỏ trước khi hoàn thiện.' },
  { id: 'web', title: 'Thiết kế website bắt đầu từ hành trình người dùng', source: 'Nét Studio', date: 'Ghi chú 02', category: 'Ghi chú', href: '#story-web', body: 'Xác định việc người dùng cần hoàn thành trước khi chọn bố cục. Mỗi trang cần một mục tiêu, thông tin đủ để ra quyết định và một bước tiếp theo rõ ràng. Kiểm tra điều hướng bằng bàn phím, độ tương phản và bố cục ở màn hình nhỏ.' },
  { id: 'illustration', title: 'Một màu, nhiều lớp: ngôn ngữ của tranh khắc', source: 'Nét Studio', date: 'Ghi chú 03', category: 'Ghi chú', href: '#story-illustration', body: 'Tranh khắc tạo chiều sâu từ hướng nét, mật độ và khoảng trắng. Các đường song song gợi bề mặt; nét đan chéo tăng độ tối; khoảng trống giữ cho hình dễ đọc. Với SVG, giữ số nét vừa đủ để minh họa vẫn rõ khi thu nhỏ.' },
  { id: 'motion', title: 'Chuyển động cần một lý do để hiện diện', source: 'Nét Studio', date: 'Ghi chú 04', category: 'Ghi chú', href: '#story-motion', body: 'Animation có thể giải thích thứ tự, xác nhận thao tác và giúp nội dung xuất hiện nhẹ nhàng. Ưu tiên transform và opacity, tránh làm người dùng chờ một hiệu ứng trước khi thao tác. Khi thiết bị chọn giảm chuyển động, chuyển sang trạng thái tĩnh và cuộn native.' },
];

export const studioContent = {
  brand: 'Nét Studio', monogram: 'N', theme: 'light', palette: 'cobalt', paletteSwitcher: false, intro: false,
  nav: [{ label: 'Về Nét', href: '#about' }, { label: 'Chuyên môn', href: '#solutions' }, { label: 'Dịch vụ', href: '#services' }, { label: 'Dự án', href: '#insights' }],
  cta: { label: 'Bắt đầu dự án', href: '#brief' },
  hero: { title: 'Ý tưởng tinh tế\nDấu ấn bền lâu', subtitle: 'Thiết kế thương hiệu, website và minh họa — từ câu chuyện của bạn đến một ngôn ngữ riêng.', action: { label: 'Khám phá Nét', href: '#solutions' }, est: 'Concept · 2026', edition: 'Nét Studio — Nº 01' },
  clients: ['Nhận diện', 'Typography', 'Thiết kế web', 'Minh họa', 'Bao bì', 'Ấn phẩm', 'Art direction', 'Chuyển động'], clientsLabel: 'Một câu chuyện · Nhiều cách thể hiện',
  about: { kicker: 'Tinh thần Nét', statement: 'Mang sự tỉ mỉ của những nét khắc xưa vào *những ý tưởng của hôm nay* — để mỗi thương hiệu có một dấu ấn riêng.', body: 'Nét là concept cho một studio sáng tạo độc lập. Chúng tôi bắt đầu bằng việc hiểu câu chuyện, tìm một hướng đi rõ ràng và chăm chút từng điểm chạm. Nội dung và dự án trên trang này là bản demo để bạn tiếp tục phát triển.', stats: [{ value: 4, label: 'Hướng sáng tạo' }, { value: 3, label: 'Dự án concept' }, { value: 7, label: 'Dự án & ghi chú' }], seal: 'Ý tưởng tinh tế · Dấu ấn bền lâu · ' },
  solutionsCopy: { kicker: 'Chuyên môn', title: 'Bốn hướng sáng tạo, *một tiếng nói riêng*', intro: 'Chọn một dấu trang để khám phá. Mỗi hướng là một cách đưa câu chuyện của bạn đến gần người dùng.' },
  solutions: [
    { kicker: 'Ý tưởng', title: 'Chiến lược sáng tạo', quote: 'Một câu hỏi đúng mở ra một hướng đi riêng.', body: 'Làm rõ mục tiêu, người dùng và câu chuyện trước khi bắt đầu thiết kế.', points: ['Định hướng hình ảnh', 'Cấu trúc câu chuyện', 'Moodboard & concept'], art: 'typewriter', tone: 'paper', action: { label: 'Phác thảo ý tưởng', href: '#brief' } },
    { kicker: 'Website', title: 'Trải nghiệm số', quote: 'Một website đẹp cần giúp người dùng làm đúng việc.', body: 'Thiết kế giao diện rõ ràng, responsive và chuyển động có chủ đích.', points: ['Cấu trúc nội dung', 'UI & prototype', 'Responsive & accessibility'], art: 'steamer', tone: 'ink', action: { label: 'Tạo brief website', href: '#brief' } },
    { kicker: 'Nhận diện', title: 'Bản sắc thương hiệu', quote: 'Từng điểm chạm cùng kể một câu chuyện.', body: 'Tạo hệ thống nhận diện có thể ứng dụng nhất quán từ màn hình đến chất liệu in.', points: ['Logo & typography', 'Màu sắc & quy chuẩn', 'Bao bì & ấn phẩm'], art: 'monogram', tone: 'paper', action: { label: 'Tạo brief thương hiệu', href: '#brief' } },
    { kicker: 'Minh họa', title: 'Đường nét & chất liệu', quote: 'Một màu, nhiều lớp, vô vàn cách kể.', body: 'Xây dựng minh họa và hệ thống họa tiết mang phong cách riêng của thương hiệu.', points: ['Minh họa chủ đạo', 'Họa tiết & icon', 'Ứng dụng trên ấn phẩm'], art: 'tower', tone: 'ink', action: { label: 'Tạo brief minh họa', href: '#brief' } },
  ],
  servicesCopy: { kicker: 'Dịch vụ', title: 'Từ phác thảo *đến hoàn thiện*', intro: 'Mỗi dự án bắt đầu bằng một brief rõ ràng. Mở từng dòng để xem các hạng mục thiết kế.' },
  services: [
    { title: 'Định hướng sáng tạo', summary: 'Hiểu câu chuyện trước khi chọn đường nét.', details: 'Xác định mục tiêu, phong cách và các nguyên tắc hình ảnh để toàn bộ dự án có chung một hướng đi.', deliverables: ['Creative brief', 'Moodboard', 'Concept'], duration: 'Theo phạm vi dự án' },
    { title: 'Nhận diện thương hiệu', summary: 'Một hệ thống, nhiều điểm chạm.', details: 'Thiết kế logo, màu sắc, typography và bộ quy chuẩn giúp thương hiệu được thể hiện nhất quán.', deliverables: ['Logo', 'Bảng màu & typography', 'Brand guidelines'], duration: 'Theo phạm vi dự án' },
    { title: 'Thiết kế website', summary: 'Rõ ràng về nội dung, tinh tế trong trải nghiệm.', details: 'Tổ chức nội dung, thiết kế màn hình responsive và prototype tương tác trước khi triển khai.', deliverables: ['Sitemap', 'UI responsive', 'Prototype'], duration: 'Theo phạm vi dự án' },
    { title: 'Minh họa & họa tiết', summary: 'Một ngôn ngữ hình ảnh có bản sắc.', details: 'Xây dựng bộ minh họa SVG, họa tiết hoặc icon phù hợp với câu chuyện và các ứng dụng của thương hiệu.', deliverables: ['Key visual', 'Minh họa SVG', 'Bộ họa tiết'], duration: 'Theo phạm vi dự án' },
    { title: 'Bao bì & ấn phẩm', summary: 'Mang thương hiệu vào những chất liệu thật.', details: 'Phát triển ứng dụng nhận diện trên bao bì và ấn phẩm, với tệp bàn giao phù hợp cho sản xuất.', deliverables: ['Thiết kế bao bì', 'Ấn phẩm', 'Tệp bàn giao'], duration: 'Theo phạm vi dự án' },
  ],
  pressCopy: { kicker: 'Tuyển chọn', title: 'Dự án & ý tưởng' }, press: articles,
  notes: [
    { title: 'Ý tưởng & thiết kế', body: 'Bàn phác thảo là nơi câu chuyện bắt đầu: nghiên cứu, moodboard và những thử nghiệm đầu tiên.' },
    { title: 'Nhận diện thương hiệu', body: 'Ngòi bút tượng trưng cho bản sắc: logo, typography và hệ thống hình ảnh nhất quán.' },
    { title: 'Thiết kế website', body: 'Một cửa sổ số cho thương hiệu, rõ ràng về nội dung và dễ dùng trên mọi màn hình.' },
    { title: 'Minh họa & ấn phẩm', body: 'Giá vẽ, bảng màu và chất liệu nét khắc tạo nên một thế giới hình ảnh riêng.' },
  ],
  contactBand: { title: 'Cùng tạo một *dấu ấn riêng*.', body: 'Kể một chút về ý tưởng. Bản demo giúp bạn tạo brief trên thiết bị của mình để chỉnh sửa và chia sẻ khi sẵn sàng.', action: { label: 'Tạo brief dự án', href: '#brief' }, secondary: { label: 'Xem dự án concept', href: '#insights' } },
  contact: { email: '', phone: '', location: 'Studio concept · Thiết kế từ những điều tinh tế' }, tagline: 'Nhận diện thương hiệu, website và minh họa. Ý tưởng tinh tế. Dấu ấn bền lâu.',
  columns: [
    { title: 'Nét Studio', links: [{ label: 'Tinh thần Nét', href: '#about' }, { label: 'Chuyên môn', href: '#solutions' }, { label: 'Dự án concept', href: '#insights' }] },
    { title: 'Sáng tạo', links: [{ label: 'Nhận diện thương hiệu', href: '#solutions' }, { label: 'Thiết kế website', href: '#services' }, { label: 'Minh họa & ấn phẩm', href: '#services' }] },
    { title: 'Bắt đầu', links: [{ label: 'Tạo brief', href: '#brief' }, { label: 'Ghi chú thiết kế', href: '#insights' }, { label: 'Thông tin bản demo', href: '#demo' }] },
  ],
  newsletter: { title: 'Một ghi chú cho bạn', body: 'Nhập email để tạo tệp ghi chú về concept này. Tệp chỉ tải về máy, không đăng ký email.', placeholder: 'Email của bạn', success: 'Ghi chú đã tải xuống. Email chưa gửi đến studio.' },
  socials: [], legal: [{ label: 'Quyền riêng tư', href: '#privacy' }, { label: 'Thông tin bản demo', href: '#demo' }], copyright: '© 2026 Nét Studio · Project demo. Thiết kế nền: Kedhareswer Naidu.',
};
