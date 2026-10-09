import { useEffect, useRef, useState } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { categories, filterProjects } from '../lib/content.js';

export default function Portfolio() {
  const [category, setCategory] = useState('Tất cả');
  const [selected, setSelected] = useState(null);
  const dialog = useRef(null);
  const trigger = useRef(null);
  const visible = filterProjects(category);

  useEffect(() => { ScrollTrigger.refresh(); }, [category]);
  useEffect(() => {
    if (selected && !dialog.current.open) dialog.current.showModal();
  }, [selected]);

  function close() {
    dialog.current.close();
    setSelected(null);
    trigger.current?.focus();
  }

  return (
    <section id="du-an" className="work-section section-wrap" aria-labelledby="work-title">
      <div className="section-heading" data-reveal>
        <div><p className="eyebrow">01 / Tuyển chọn</p><h2 id="work-title">Từ ý tưởng<br /><em>đến dấu ấn.</em></h2></div>
        <p className="section-note">Ba dự án concept.<br />Ba cách kể một câu chuyện.</p>
      </div>
      <div className="filters" aria-label="Lọc dự án">
        {categories.map(item => <button key={item} aria-pressed={category === item} onClick={() => setCategory(item)}>{item}{item === 'Tất cả' && <span>03</span>}</button>)}
      </div>
      <p className="sr-only" role="status">Đang hiển thị {visible.length} dự án: {category}.</p>
      <div className="project-grid">
        {visible.map((project, index) => (
          <article className={`project-card project-${project.id}`} key={project.id}>
            <button className="project-open" aria-label={`Xem dự án ${project.name}`} onClick={event => { trigger.current = event.currentTarget; setSelected(project); }}>
              <div className="project-image"><img src={project.image} alt={`Minh họa concept ${project.name}`} loading="lazy" width="960" height="760" /><span className="image-label">CONCEPT / {project.year}</span><span className="project-arrow" aria-hidden="true">↗</span></div>
              <div className="project-meta"><div><span className="project-number">0{index + 1}</span><h3>{project.name}</h3></div><span>{project.category}</span></div>
            </button>
            <p className="project-subtitle">{project.subtitle}</p>
          </article>
        ))}
      </div>
      <dialog ref={dialog} className="project-dialog" aria-labelledby="dialog-title" data-lenis-prevent onCancel={event => { event.preventDefault(); close(); }} onClick={event => { if (event.target === dialog.current) close(); }}>
        {selected && <div className="dialog-body">
          <button className="dialog-close" onClick={close} autoFocus aria-label="Đóng chi tiết dự án">×</button>
          <img src={selected.image} alt={`Concept ${selected.name}`} width="960" height="760" />
          <div className="dialog-copy"><p className="eyebrow">{selected.category} / Concept {selected.year}</p><h2 id="dialog-title">{selected.name}</h2><p>{selected.description}</p><h3>Hạng mục thiết kế</h3><ul>{selected.deliverables.map(item => <li key={item}>{item}</li>)}</ul><div className="palette" aria-label="Bảng màu">{selected.palette.map(color => <span key={color} style={{ backgroundColor: color }} title={color}><span className="sr-only">{color}</span></span>)}</div><a className="text-link" href="#lien-he" onClick={close}>Tạo brief tương tự <span aria-hidden="true">↗</span></a></div>
        </div>}
      </dialog>
    </section>
  );
}
