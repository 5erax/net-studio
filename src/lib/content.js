import { interfaceCopy } from './interfaceCopy.js';

export const categories = interfaceCopy.vi.categories;

export const projects = [
  {
    id: 'mien', name: 'Miên', category: 'Nhận diện', year: '2026', image: '/images/mien.svg',
    subtitle: 'Một khoảng lặng giữa thành phố.',
    description: 'Một nghiên cứu nhận diện cho không gian trà tưởng tượng. Đề bài: làm thế nào để cảm giác chậm lại được nhận ra ngay trên một chiếc hộp? Miên dùng khoảng trắng rộng, tên gọi mềm và một nét lá vừa đủ. Bao bì là nơi thử xem nhận diện có còn rõ khi chỉ còn một màu và một diện tích nhỏ.',
    deliverables: ['Định hướng thương hiệu', 'Logo & hệ thống nhận diện', 'Bao bì & ấn phẩm'],
    palette: ['#203fa5', '#f6f3e9', '#a6b1a0'],
    en: { category: 'Brand identity', name: 'Miên', subtitle: 'A quiet moment in the city.', description: 'A brand study for an imagined tea space. The question: can a box make you feel like slowing down? Miên combines generous space, a soft wordmark and a single leaf. The packaging tests whether the identity still reads clearly in one color and at a small scale.', deliverables: ['Brand direction', 'Logo & visual identity', 'Packaging & print'] },
  },
  {
    id: 'forma', name: 'Forma', category: 'Thiết kế web', year: '2026', image: '/images/forma.svg',
    subtitle: 'Không gian cho những điều tinh giản.',
    description: 'Một nghiên cứu website cho bộ sưu tập đồ vật tưởng tượng. Forma đặt câu hỏi về thứ tự thông tin: người xem cần biết điều gì trước khi chọn một món đồ? Trang tập trung vào hình dáng, vật liệu và công dụng, với điều hướng ngắn để việc khám phá không trở thành một mê cung.',
    deliverables: ['Cấu trúc nội dung', 'Thiết kế giao diện responsive', 'Prototype tương tác'],
    palette: ['#433e33', '#e6dfcf', '#b5a38d'],
    en: { category: 'Web design', name: 'Forma', subtitle: 'Room for the essentials.', description: 'A website study for an imagined collection of objects. Forma asks what someone needs to know before choosing a piece. Shape, material and purpose take priority, with a short navigation path that keeps discovery from becoming a maze.', deliverables: ['Content structure', 'Responsive interface design', 'Interactive prototype'] },
  },
  {
    id: 'vuon', name: 'Vườn trong phố', category: 'Minh họa', year: '2026', image: '/images/vuon.svg',
    subtitle: 'Một thế giới nhỏ, vẽ bằng những nét mảnh.',
    description: 'Một thử nghiệm minh họa về khoảng xanh trong nhịp sống đô thị. Từ vài hình lá và đường cong, các nét được sắp thành cụm, chừa khoảng thở giữa những vùng đậm. Bộ hình thử cùng một ngôn ngữ trên bìa ấn phẩm, họa tiết và những chi tiết nhỏ, thay vì chỉ đẹp ở một kích thước.',
    deliverables: ['Minh họa chủ đạo', 'Bộ họa tiết', 'Ứng dụng trên ấn phẩm'],
    palette: ['#203fa5', '#dfe5ef', '#f6f3e9'],
    en: { category: 'Illustration', name: 'Garden in the City', subtitle: 'A small world, drawn one line at a time.', description: 'An illustration experiment about green spaces in city life. A few leaf shapes and curves become clusters of lines, with breathing room between darker areas. The same visual language is tested on covers, patterns and small details, rather than at just one scale.', deliverables: ['Key illustration', 'Pattern collection', 'Print applications'] },
  },
];

export function getProjects(locale = 'vi') {
  return locale === 'en' ? projects.map(({ en, ...project }) => ({ ...project, ...en })) : projects;
}

export function filterProjects(category) {
  return projects.filter(project => category === 'Tất cả' || project.category === category);
}

export function createBrief(fields, locale = 'vi') {
  const copy = interfaceCopy[locale] || interfaceCopy.vi;
  const name = String(fields.name ?? '').trim();
  const email = String(fields.email ?? '').trim();
  const description = String(fields.description ?? '').trim();
  const service = String(fields.service ?? '');
  if (!name || name.length > 100) throw new Error(copy.invalidName);
  if (email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) throw new Error(copy.invalidEmail);
  if (!categories.slice(1).includes(service)) throw new Error(copy.invalidService);
  if (description.length < 20 || description.length > 3000) throw new Error(copy.invalidDescription);
  return `${copy.briefHeading}\n\n${copy.briefName}: ${name}\nEmail: ${email}\n${copy.briefService}: ${copy.categories[categories.indexOf(service)]}\n\n${copy.briefIdea}:\n${description}\n\n${copy.briefDisclaimer}\n`;
}
