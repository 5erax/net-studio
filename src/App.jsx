import { useEffect, useRef, useState } from 'react';
import { C as CobaltToileLanding, EngravedMark, palettes } from './components/template/CobaltToileLanding.jsx';
import Magnet from './components/react-bits/Magnet.jsx';
import BriefForm from './components/BriefForm.jsx';
import ContentDialog from './components/ContentDialog.jsx';
import { useStudioMotion } from './hooks/useStudioMotion.js';
import { contentByLocale } from './lib/studioContent.js';
import { interfaceCopy } from './lib/interfaceCopy.js';

function savedPreference(key, choices, fallback) {
  try { const value = localStorage.getItem(key); return choices.includes(value) ? value : fallback; }
  catch { return fallback; }
}

export default function App() {
  const root = useRef(null);
  const trigger = useRef(null);
  const [entryId, setEntryId] = useState(null);
  const [locale, setLocale] = useState(() => savedPreference('net-language', ['vi', 'en'], 'vi'));
  const [palette, setPalette] = useState(() => savedPreference('net-palette', Object.keys(palettes), 'cobalt'));
  const copy = interfaceCopy[locale];
  const studioContent = contentByLocale[locale];
  const entry = studioContent.press.find(article => article.id === entryId) || copy[entryId] || null;
  const { magnetEnabled, navigate } = useStudioMotion(root);

  useEffect(() => {
    document.documentElement.lang = locale;
    document.title = copy.pageTitle;
    document.querySelector('meta[name="description"]').content = copy.pageDescription;
    document.querySelector('meta[name="theme-color"]').content = palettes[palette].paper;
    document.documentElement.style.backgroundColor = palettes[palette].paper;
    document.body.style.backgroundColor = palettes[palette].paper;
    try { localStorage.setItem('net-language', locale); localStorage.setItem('net-palette', palette); }
    catch { /* Preferences are optional when browser storage is unavailable. */ }
  }, [locale, palette, copy]);

  function openContent(event) {
    const anchor = event.target.closest('a');
    if (!anchor) return;
    const href = anchor.getAttribute('href');
    const id = href?.slice(1);
    const next = studioContent.press.find(article => article.href === href) || (['privacy', 'demo'].includes(id) && copy[id]);
    if (!next) return;
    event.preventDefault();
    trigger.current = anchor;
    setEntryId(next.id || id);
  }

  function closeContent() {
    setEntryId(null);
    trigger.current?.focus();
  }

  function downloadNote(email) {
    const text = `${copy.noteHeading}\n\nEmail: ${email}\n\n${copy.noteBody}\n\n${copy.noteDisclaimer}\n`;
    const url = URL.createObjectURL(new Blob([text], { type: 'text/plain;charset=utf-8' }));
    const link = document.createElement('a');
    link.href = url;
    link.download = 'net-studio-ghi-chu.txt';
    document.body.appendChild(link);
    link.click();
    link.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  const mark = <Magnet disabled={!magnetEnabled} padding={12} magnetStrength={12} activeTransition="transform .2s cubic-bezier(.23,1,.32,1)" inactiveTransition="transform .2s cubic-bezier(.23,1,.32,1)"><EngravedMark /></Magnet>;

  const preferences = <div className="page-preferences">
    <div className="language-switch" role="group" aria-label={copy.language}>{['vi', 'en'].map(language => <button key={language} type="button" lang={language} aria-label={language === 'vi' ? 'Tiếng Việt' : 'English'} aria-pressed={locale === language} onClick={() => setLocale(language)}>{language.toUpperCase()}</button>)}</div>
    <details className="palette-menu" onKeyDown={event => { if (event.key === 'Escape') { event.currentTarget.open = false; event.currentTarget.querySelector('summary').focus(); } }}>
      <summary aria-label={copy.colors}><span className="palette-dot" aria-hidden="true" /><span>{locale === 'vi' ? 'Màu' : 'Color'}</span></summary>
      <div className="palette-options" role="group" aria-label={copy.colors}>{Object.entries(palettes).map(([key, color]) => <button key={key} type="button" aria-pressed={palette === key} onClick={event => { setPalette(key); const menu = event.currentTarget.closest('details'); menu.open = false; menu.querySelector('summary').focus(); }}><i aria-hidden="true" style={{ backgroundColor: color.ink }} />{color.label}<span aria-hidden="true">{palette === key ? '✓' : ''}</span></button>)}</div>
    </details>
  </div>;

  return <div ref={root} onClick={openContent} className="net-app" style={{ '--ink': palettes[palette].ink, '--paper': palettes[palette].paper }}><a className="skip-link" href="#noi-dung">{copy.skip}</a><div className="reading-progress" aria-hidden="true" /><CobaltToileLanding {...studioContent} ui={copy} locale={locale} palette={palette} onPaletteChange={setPalette} headerControls={preferences} logo={mark} navigate={navigate} onSubscribe={downloadNote} contactContent={<BriefForm locale={locale} />} /><ContentDialog entry={entry} copy={copy} onClose={closeContent} /></div>;
}
