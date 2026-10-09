export const categories = ['Tất cả', 'Nhận diện', 'Thiết kế web', 'Minh họa'];

export const projects = [
  {
    id: 'mien', name: 'Miên', category: 'Nhận diện', year: '2026', image: '/images/mien.svg',
    subtitle: 'Một khoảng lặng giữa thành phố.',
    description: 'Concept nhận diện cho một không gian trà. Nét vẽ thực vật, sắc cobalt và chất liệu giấy tạo nên cảm giác chậm rãi, gần gũi.',
    deliverables: ['Định hướng thương hiệu', 'Logo & hệ thống nhận diện', 'Bao bì & ấn phẩm'],
    palette: ['#203fa5', '#f6f3e9', '#a6b1a0'],
  },
  {
    id: 'forma', name: 'Forma', category: 'Thiết kế web', year: '2026', image: '/images/forma.svg',
    subtitle: 'Không gian cho những điều tinh giản.',
    description: 'Concept website cho một thương hiệu đồ vật và nội thất. Bố cục biên tập, hình khối kiến trúc và điều hướng rõ ràng đặt sản phẩm ở vị trí trung tâm.',
    deliverables: ['Cấu trúc nội dung', 'Thiết kế giao diện responsive', 'Prototype tương tác'],
    palette: ['#433e33', '#e6dfcf', '#b5a38d'],
  },
  {
    id: 'vuon', name: 'Vườn trong phố', category: 'Minh họa', year: '2026', image: '/images/vuon.svg',
    subtitle: 'Một thế giới nhỏ, vẽ bằng những nét mảnh.',
    description: 'Bộ minh họa concept lấy cảm hứng từ vườn thực vật và kỹ thuật tranh khắc. Các nét lặp có nhịp tạo chiều sâu bằng một màu duy nhất.',
    deliverables: ['Minh họa chủ đạo', 'Bộ họa tiết', 'Ứng dụng trên ấn phẩm'],
    palette: ['#203fa5', '#dfe5ef', '#f6f3e9'],
  },
];

export function filterProjects(category) {
  return projects.filter(project => category === 'Tất cả' || project.category === category);
}

export function createBrief(fields) {
  const name = String(fields.name ?? '').trim();
  const email = String(fields.email ?? '').trim();
  const description = String(fields.description ?? '').trim();
  const service = String(fields.service ?? '');
  if (!name || name.length > 100) throw new Error('Vui lòng nhập tên hợp lệ (tối đa 100 ký tự).');
  if (email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) throw new Error('Vui lòng kiểm tra địa chỉ email.');
  if (!categories.slice(1).includes(service)) throw new Error('Vui lòng chọn một dịch vụ.');
  if (description.length < 20 || description.length > 3000) throw new Error('Mô tả cần từ 20 đến 3.000 ký tự.');
  return `BRIEF DỰ ÁN — NÉT STUDIO\n\nHọ tên: ${name}\nEmail: ${email}\nDịch vụ: ${service}\n\nÝ tưởng của bạn:\n${description}\n\nTệp được tạo trên thiết bị của bạn. Chưa gửi đến studio.\n`;
}
