import { useEffect, useRef } from 'react';

export default function ContentDialog({ entry, copy, onClose }) {
  const dialog = useRef(null);
  useEffect(() => {
    if (entry && !dialog.current.open) dialog.current.showModal();
    if (!entry && dialog.current.open) dialog.current.close();
  }, [entry]);

  return <dialog ref={dialog} className="content-dialog" aria-labelledby="dialog-title" data-lenis-prevent onCancel={event => { event.preventDefault(); onClose(); }} onClick={event => { if (event.target === dialog.current) onClose(); }}>
    {entry && <div className="dialog-body"><button className="dialog-close" onClick={onClose} autoFocus aria-label={copy.closeDetail}>×</button>{entry.image && <img src={`${import.meta.env.BASE_URL}${entry.image.slice(1)}`} alt={`${copy.concept}: ${entry.source}`} width="960" height="760" />}<div className="dialog-copy"><p className="eyebrow">{entry.category || 'Nét Studio'}{entry.date && ` · ${entry.date}`}</p><h2 id="dialog-title">{entry.title}</h2><p>{entry.body}</p>{entry.deliverables && <><h3>{copy.projectItems}</h3><ul>{entry.deliverables.map(item => <li key={item}>{item}</li>)}</ul></>}<button className="dialog-back" onClick={onClose}>{copy.backPage} <span aria-hidden="true">↗</span></button></div></div>}
  </dialog>;
}
