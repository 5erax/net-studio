import { getProjects } from './content.js';

const notes = {
  vi: [
    { id: 'logo', title: 'Nếu bỏ logo đi, thương hiệu còn là mình không?', body: 'Đó là câu hỏi Nét dùng để thử một hệ thống nhận diện. Một màu, cách đặt chữ hay khoảng trống cũng có thể khiến người ta nhận ra bạn. Logo là điểm bắt đầu; điều cần thiết kế là cách các chi tiết cùng xuất hiện trên bao bì, website và những vật nhỏ nhất.' },
    { id: 'web', title: 'Một trang web nên trả lời câu hỏi nào trước?', body: 'Trước khi vẽ màn hình, hãy viết ra điều người xem đang muốn biết. Bạn làm gì? Điều đó có phù hợp với họ không? Họ có thể bắt đầu từ đâu? Sắp xếp câu trả lời theo thứ tự ấy thường làm rõ cấu trúc hơn việc thêm một khối hình ảnh đẹp.' },
    { id: 'illustration', title: 'Chừa một khoảng trắng cho hình được thở', body: 'Khi một hình chưa rõ, thêm nét không phải lúc nào cũng là cách giải quyết. Thử bỏ bớt một cụm chi tiết, nới khoảng cách và nhìn lại ở kích thước nhỏ. Khoảng trắng giúp người xem biết nên nhìn vào đâu, đồng thời cho những đường nét còn lại một vai trò rõ hơn.' },
    { id: 'motion', title: 'Hiệu ứng kết thúc ở đâu, trải nghiệm bắt đầu ở đó', body: 'Một chuyển động nên giúp người xem hiểu điều vừa xảy ra: nội dung nào mở ra, lựa chọn nào đã đổi, họ đang ở đâu trên trang. Nếu phải chờ hiệu ứng mới thao tác được, hãy rút ngắn hoặc bỏ nó. Nét ưu tiên phản hồi nhanh, chuyển động có nhịp và phiên bản giảm chuyển động.' },
  ],
  en: [
    { id: 'logo', title: 'Take away the logo. Does the brand still feel like itself?', body: 'That is how Nét tests a visual identity. A color, a way of setting type or even a space can become recognizable. The logo is a starting point; the real task is designing how these details work together on packaging, a website and the smallest objects.' },
    { id: 'web', title: 'Which question should a website answer first?', body: 'Before drawing a screen, write down what the visitor needs to know. What do you do? Is it right for them? Where can they start? Putting those answers in order often brings more clarity than adding another beautiful image.' },
    { id: 'illustration', title: 'Leave some space for the image to breathe', body: 'When an image feels unclear, more lines are not always the answer. Remove a cluster of details, open up the spacing and look again at a smaller scale. Empty space guides attention and gives the remaining lines a clearer role.' },
    { id: 'motion', title: 'Where the effect ends, the experience begins', body: 'Motion should help someone understand what just happened: which content opened, which choice changed or where they are on a page. If an effect delays an action, shorten it or remove it. Nét favors quick responses, a considered rhythm and a reduced-motion version.' },
  ],
};
export function getArticles(locale = 'vi') {
  const en = locale === 'en';
  return [
    ...getProjects(locale).map(p => ({ id: p.id, title: `${p.name} — ${p.subtitle}`, source: p.name, date: en ? 'Concept study · 2026' : 'Nghiên cứu concept · 2026', category: p.category, href: `#story-${p.id}`, image: p.image, body: p.description, deliverables: p.deliverables })),
    ...notes[en ? 'en' : 'vi'].map((note, i) => ({ ...note, source: 'Nét Studio', date: `${en ? 'Note' : 'Ghi chú'} 0${i + 1}`, category: en ? 'Notes' : 'Ghi chú', href: `#story-${note.id}` })),
  ];
}
const shared = { brand: 'Nét Studio', monogram: 'N', theme: 'light', palette: 'cobalt', paletteSwitcher: true, intro: true, socials: [] };
export const contentByLocale = {
  vi: {
    ...shared,
    nav: [{ label: 'Về Nét', href: '#about' }, { label: 'Chuyên môn', href: '#solutions' }, { label: 'Dịch vụ', href: '#services' }, { label: 'Dự án & ghi chú', href: '#insights' }],
    cta: { label: 'Mở một đề bài', href: '#brief' },
    hero: { title: 'Để ý tưởng\ncó hình hài.', subtitle: 'Một tên gọi, một trang web, một hình minh họa. Nét nối những điều ấy thành câu chuyện của bạn.', action: { label: 'Đi vào thế giới Nét', href: '#solutions' }, est: 'Xưởng thiết kế · Concept', edition: 'Nét Studio — Nº 01' },
    clients: ['Đặt câu hỏi', 'Tìm đường nét', 'Thử một hướng', 'Chọn điều cần giữ', 'Vẽ thành hình', 'Đưa vào sử dụng'], clientsLabel: 'Một ý tưởng · Qua từng nét',
    about: { kicker: 'Tinh thần Nét', statement: 'Có những ý tưởng chưa biết kể thế nào. Nét tìm *đường nét, hình ảnh và trải nghiệm* để câu chuyện ấy thành hình.', body: 'Nét đặt sự rõ ràng trước sự phô diễn. Từ một chi tiết nhỏ đến cả hệ thống, mỗi quyết định cần có lý do: giúp người xem hiểu, nhận ra và muốn khám phá tiếp. Một thiết kế hoàn thiện khi nó dùng được trong đời sống, chứ không chỉ đẹp trên bản trình bày.', stats: [{ value: 4, label: 'Góc nhìn thiết kế' }, { value: 3, label: 'Nghiên cứu concept' }, { value: 7, label: 'Dự án & ghi chú' }], seal: 'Hiểu điều cần kể · Vẽ điều cần thấy · ' },
    solutionsCopy: { kicker: 'Chuyên môn', title: 'Bốn góc nhìn, *một câu chuyện*', intro: 'Chọn một dấu trang. Từ câu hỏi đầu tiên đến hình ảnh cuối cùng, mỗi góc nhìn giữ một phần việc riêng.' },
    solutions: [
      { kicker: 'Ý tưởng', title: 'Chiến lược sáng tạo', quote: 'Hiểu điều cần kể.', body: 'Gỡ đề bài trước khi gỡ rối bằng hình ảnh. Xác định điều cần nói, người cần nghe và cảm giác cần để lại.', points: ['Câu hỏi & mục tiêu', 'Cấu trúc câu chuyện', 'Hướng hình ảnh'], art: 'typewriter', tone: 'paper', action: { label: 'Phác đề bài của bạn', href: '#brief' } },
      { kicker: 'Website', title: 'Trải nghiệm số', quote: 'Đẹp, rồi dễ dùng.', body: 'Biến nội dung thành một hành trình ngắn và rõ. Mỗi màn hình có một việc cần giúp người xem hoàn thành.', points: ['Nội dung & điều hướng', 'Giao diện trên mọi màn hình', 'Tương tác & chuyển động'], art: 'steamer', tone: 'ink', action: { label: 'Mở đề bài website', href: '#brief' } },
      { kicker: 'Nhận diện', title: 'Bản sắc thương hiệu', quote: 'Nhận ra từ một nét.', body: 'Tìm những chi tiết khiến thương hiệu được nhận ra, rồi nối chúng thành hệ thống dùng được ở nhiều điểm chạm.', points: ['Logo & cách đặt chữ', 'Màu sắc & nguyên tắc', 'Ứng dụng nhận diện'], art: 'monogram', tone: 'paper', action: { label: 'Mở đề bài nhận diện', href: '#brief' } },
      { kicker: 'Minh họa', title: 'Đường nét & chất liệu', quote: 'Một hình, nhiều chuyện.', body: 'Vẽ những hình ảnh có vai trò trong câu chuyện. Thử chúng ở kích thước nhỏ, trên giấy và trong chuyển động.', points: ['Hình ảnh chủ đạo', 'Họa tiết & biểu tượng', 'Ứng dụng trên ấn phẩm'], art: 'tower', tone: 'ink', action: { label: 'Mở đề bài minh họa', href: '#brief' } },
    ],
    servicesCopy: { kicker: 'Phạm vi thiết kế', title: 'Đề bài nhỏ. *Cách làm đến nơi.*', intro: 'Bắt đầu ở phần bạn cần nhất. Mở từng dòng để xem công việc và những gì có thể bàn giao.' },
    services: [
      { title: 'Làm rõ hướng đi', summary: 'Tìm câu hỏi đáng giải quyết.', details: 'Đọc bối cảnh, xác định người sử dụng và thống nhất mục tiêu. Chọn một hướng hình ảnh có thể giải thích, thay vì gom những hình đẹp nhưng không liên quan.', deliverables: ['Đề bài sáng tạo', 'Bảng định hướng hình ảnh', 'Nguyên tắc thiết kế'], duration: 'Thống nhất sau khi làm rõ đề bài' },
      { title: 'Xây hệ thống nhận diện', summary: 'Từ logo đến những chi tiết nhỏ.', details: 'Thiết kế các thành phần nhận diện và cách chúng đi cùng nhau. Kiểm tra ở một màu, kích thước nhỏ và trong những ứng dụng dự kiến.', deliverables: ['Logo & phiên bản sử dụng', 'Màu sắc & typography', 'Hướng dẫn ứng dụng'], duration: 'Theo số lượng ứng dụng' },
      { title: 'Thiết kế & dựng website', summary: 'Một lối đi rõ cho người xem.', details: 'Sắp xếp nội dung, dựng giao diện responsive và triển khai các tương tác cần thiết. Kiểm tra bàn phím, màn hình nhỏ và tốc độ phản hồi trước khi đưa trang lên web.', deliverables: ['Cấu trúc trang', 'Giao diện & tương tác', 'Website & hướng dẫn bàn giao'], duration: 'Theo chức năng cần triển khai' },
      { title: 'Vẽ ngôn ngữ minh họa', summary: 'Hình ảnh cùng nói một giọng.', details: 'Tạo một bộ hình có chung nguyên tắc về nét, hình khối và mật độ. Thử từ hình chủ đạo đến biểu tượng nhỏ để giữ cách kể nhất quán.', deliverables: ['Hình minh họa chủ đạo', 'Bộ hình & họa tiết', 'Tệp dùng cho web và in'], duration: 'Theo số lượng & độ chi tiết' },
      { title: 'Đưa thiết kế vào đời sống', summary: 'Từ màn hình đến chất liệu thật.', details: 'Ứng dụng hệ thống lên bao bì, ấn phẩm và những vật cần dùng. Làm rõ kích thước, chất liệu và yêu cầu sản xuất trước khi chuẩn bị tệp.', deliverables: ['Thiết kế ứng dụng', 'Bản kiểm tra kích thước', 'Tệp bàn giao sản xuất'], duration: 'Theo hạng mục & chất liệu' },
    ],
    pressCopy: { kicker: 'Sổ tay Nét', title: 'Dự án & ghi chú' }, press: getArticles('vi'),
    notes: [
      { title: 'Bàn đặt câu hỏi', body: 'Nơi đề bài được viết lại cho rõ: làm cho ai, cần nói gì, điều gì nên giữ?' },
      { title: 'Nét nhận diện', body: 'Một ngòi bút, một dấu hiệu. Từ chi tiết dễ nhớ đến hệ thống có thể dùng lâu dài.' },
      { title: 'Cửa sổ trải nghiệm', body: 'Nội dung, hình ảnh và thao tác gặp nhau trong một website dễ tìm đường.' },
      { title: 'Khoảng vẽ tự do', body: 'Thử hình, thử nét, thử chất liệu — rồi chọn điều thực sự giúp câu chuyện rõ hơn.' },
    ],
    contactBand: { title: 'Một ý tưởng nhỏ. *Một nét bắt đầu.*', body: 'Có thể bạn đã biết mình cần gì. Có thể mới chỉ có một câu hỏi. Cả hai đều là một khởi đầu tốt.', action: { label: 'Viết đề bài của bạn', href: '#brief' }, secondary: { label: 'Xem các nghiên cứu', href: '#insights' } },
    contact: { email: '', phone: '', location: 'Xưởng thiết kế thương hiệu, website & minh họa' }, tagline: 'Hiểu điều cần kể. Vẽ điều cần thấy. Để ý tưởng có hình hài.',
    columns: [
      { title: 'Thế giới Nét', links: [{ label: 'Tinh thần Nét', href: '#about' }, { label: 'Bốn góc nhìn', href: '#solutions' }, { label: 'Dự án & ghi chú', href: '#insights' }] },
      { title: 'Công việc', links: [{ label: 'Nhận diện thương hiệu', href: '#solutions' }, { label: 'Website & trải nghiệm', href: '#services' }, { label: 'Minh họa & ấn phẩm', href: '#services' }] },
      { title: 'Cùng bắt đầu', links: [{ label: 'Tạo brief', href: '#brief' }, { label: 'Đọc sổ tay', href: '#insights' }, { label: 'Về trang này', href: '#demo' }] },
    ],
    newsletter: { title: 'Trước khi bắt đầu', body: 'Năm câu hỏi để làm rõ ý tưởng. Nhập email để tạo tệp ghi chú; không đăng ký nhận thư.', placeholder: 'Email của bạn', success: 'Ghi chú đã tải xuống. Không đăng ký email.' },
    legal: [{ label: 'Quyền riêng tư', href: '#privacy' }, { label: 'Về trang này', href: '#demo' }], copyright: '© 2026 Nét Studio · Concept sáng tạo. Thiết kế nền: Kedhareswer Naidu.',
  },
  en: {
    ...shared,
    nav: [{ label: 'About Nét', href: '#about' }, { label: 'Expertise', href: '#solutions' }, { label: 'Services', href: '#services' }, { label: 'Work & notes', href: '#insights' }],
    cta: { label: 'Start with a brief', href: '#brief' },
    hero: { title: 'Give your ideas\na form.', subtitle: 'A name, a website, an illustration. Nét connects the pieces into a story that feels like you.', action: { label: 'Step into Nét', href: '#solutions' }, est: 'Design studio · Concept', edition: 'Nét Studio — Nº 01' },
    clients: ['Ask a question', 'Find a line', 'Try a direction', 'Choose what stays', 'Give it form', 'Put it to use'], clientsLabel: 'One idea · Line by line',
    about: { kicker: 'The spirit of Nét', statement: 'Some ideas haven’t found their voice yet. Nét works with *lines, images and experiences* to give them a form.', body: 'Clarity comes before spectacle. From a small detail to an entire system, every decision needs a reason: to help someone understand, recognize and explore. A design is complete when it works in everyday life, beyond the presentation.', stats: [{ value: 4, label: 'Design perspectives' }, { value: 3, label: 'Concept studies' }, { value: 7, label: 'Projects & notes' }], seal: 'Understand the story · Draw what matters · ' },
    solutionsCopy: { kicker: 'Expertise', title: 'Four perspectives, *one story*', intro: 'Choose a bookmark. From the first question to the final image, each perspective has a part to play.' },
    solutions: [
      { kicker: 'Ideas', title: 'Creative direction', quote: 'Find the story first.', body: 'Untangle the brief before reaching for images. Define what needs to be said, who needs to hear it and what should stay with them.', points: ['Questions & goals', 'Story structure', 'Visual direction'], art: 'typewriter', tone: 'paper', action: { label: 'Outline your brief', href: '#brief' } },
      { kicker: 'Websites', title: 'Digital experiences', quote: 'Beautiful. Then useful.', body: 'Turn content into a short, clear journey. Every screen should help someone accomplish something.', points: ['Content & navigation', 'Interfaces for every screen', 'Interaction & motion'], art: 'steamer', tone: 'ink', action: { label: 'Start a website brief', href: '#brief' } },
      { kicker: 'Identity', title: 'Brand identity', quote: 'Recognized in a line.', body: 'Find the details that make a brand recognizable, then build them into a system that works across touchpoints.', points: ['Logo & typography', 'Colors & principles', 'Identity applications'], art: 'monogram', tone: 'paper', action: { label: 'Start an identity brief', href: '#brief' } },
      { kicker: 'Illustration', title: 'Lines & materials', quote: 'One image, many stories.', body: 'Draw images that play a part in the story. Test them at small sizes, on paper and in motion.', points: ['Key visuals', 'Patterns & symbols', 'Print applications'], art: 'tower', tone: 'ink', action: { label: 'Start an illustration brief', href: '#brief' } },
    ],
    servicesCopy: { kicker: 'Design scope', title: 'A small brief. *A considered process.*', intro: 'Start with the part you need most. Open a row to explore the work and what can be delivered.' },
    services: [
      { title: 'Find the direction', summary: 'A question worth answering.', details: 'Read the context, define the audience and agree on a goal. Choose a visual direction that can be explained, rather than collecting beautiful but unrelated images.', deliverables: ['Creative brief', 'Visual direction board', 'Design principles'], duration: 'Defined after reviewing the brief' },
      { title: 'Build a visual identity', summary: 'From the logo to the smallest detail.', details: 'Design the identity elements and how they work together. Test them in one color, at small sizes and in their intended applications.', deliverables: ['Logo & variations', 'Colors & typography', 'Application guidelines'], duration: 'Based on the applications needed' },
      { title: 'Design & build a website', summary: 'A clear path for the visitor.', details: 'Organize content, build responsive interfaces and implement useful interactions. Check keyboard access, small screens and response speed before publishing.', deliverables: ['Page structure', 'Interfaces & interactions', 'Website & handover guide'], duration: 'Based on the features required' },
      { title: 'Draw an illustration language', summary: 'Images that speak the same language.', details: 'Create a collection with shared principles for lines, shapes and density. Test it from key visuals to small symbols to keep the story consistent.', deliverables: ['Key illustration', 'Image & pattern collection', 'Web & print files'], duration: 'Based on quantity & detail' },
      { title: 'Bring the design into everyday life', summary: 'From the screen to real materials.', details: 'Apply the system to packaging, print and useful objects. Clarify dimensions, materials and production requirements before preparing the files.', deliverables: ['Application designs', 'Dimension checks', 'Production files'], duration: 'Based on scope & materials' },
    ],
    pressCopy: { kicker: 'The Nét notebook', title: 'Work & notes' }, press: getArticles('en'),
    notes: [
      { title: 'A desk for questions', body: 'Where the brief becomes clear: who is it for, what needs to be said and what should stay?' },
      { title: 'A recognizable line', body: 'A pen nib, a mark. From a memorable detail to a system built for lasting use.' },
      { title: 'A window to experience', body: 'Content, images and actions meet in a website that is easy to navigate.' },
      { title: 'Room to draw freely', body: 'Try a shape, a line, a material — then choose what makes the story clearer.' },
    ],
    contactBand: { title: 'A small idea. *A line to begin.*', body: 'You might know exactly what you need. You might only have a question. Both are a good place to start.', action: { label: 'Write your brief', href: '#brief' }, secondary: { label: 'Explore the studies', href: '#insights' } },
    contact: { email: '', phone: '', location: 'A studio for brand identity, websites & illustration' }, tagline: 'Understand the story. Draw what matters. Give your ideas a form.',
    columns: [
      { title: 'The world of Nét', links: [{ label: 'The spirit of Nét', href: '#about' }, { label: 'Four perspectives', href: '#solutions' }, { label: 'Work & notes', href: '#insights' }] },
      { title: 'The work', links: [{ label: 'Brand identity', href: '#solutions' }, { label: 'Websites & experiences', href: '#services' }, { label: 'Illustration & print', href: '#services' }] },
      { title: 'Let’s begin', links: [{ label: 'Create a brief', href: '#brief' }, { label: 'Read the notebook', href: '#insights' }, { label: 'About this site', href: '#demo' }] },
    ],
    newsletter: { title: 'Before we begin', body: 'Five questions to clarify your idea. Enter an email to create a notes file; this does not subscribe you to a newsletter.', placeholder: 'Your email', success: 'Notes downloaded. No email subscription created.' },
    legal: [{ label: 'Privacy', href: '#privacy' }, { label: 'About this site', href: '#demo' }], copyright: '© 2026 Nét Studio · Creative concept. Visual foundation: Kedhareswer Naidu.',
  },
};
export const studioContent = contentByLocale.vi;
export const articles = studioContent.press;
