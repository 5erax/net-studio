import { useState } from 'react';
import { categories, createBrief } from '../lib/content.js';
import { interfaceCopy } from '../lib/interfaceCopy.js';

export default function BriefForm({ locale = 'vi' }) {
  const copy = interfaceCopy[locale];
  const [feedback, setFeedback] = useState({ text: '', error: false });

  function submit(event) {
    event.preventDefault();
    try {
      const fields = Object.fromEntries(new FormData(event.currentTarget));
      const text = createBrief(fields, locale);
      const url = URL.createObjectURL(new Blob([text], { type: 'text/plain;charset=utf-8' }));
      const link = document.createElement('a');
      link.href = url;
      link.download = 'net-studio-brief.txt';
      document.body.appendChild(link);
      link.click();
      link.remove();
      setTimeout(() => URL.revokeObjectURL(url), 1000);
      setFeedback({ text: copy.briefSuccess, error: false, locale });
    } catch (error) {
      setFeedback({ text: error.message, error: true, locale });
    }
  }

  return <section id="brief" data-sec="brief" className="contact-section ctl-wrap" aria-labelledby="contact-title">
    <div className="contact-intro" data-reveal><p className="eyebrow">{copy.briefKicker}</p><h2 id="contact-title">{copy.briefTitle[0]}<br /><em>{copy.briefTitle[1]}</em></h2><p>{copy.briefIntro}</p><div className="contact-flower" aria-hidden="true">✳</div><p className="demo-note">{copy.localNotice}</p></div>
    <form className="brief-form" onSubmit={submit}>
      <div className="form-row"><label htmlFor="name">{copy.name}<input id="name" name="name" autoComplete="name" required maxLength="100" placeholder={copy.namePlaceholder} /></label><label htmlFor="email">{copy.email}<input id="email" name="email" type="email" autoComplete="email" required maxLength="254" placeholder="you@example.com" /></label></div>
      <label htmlFor="service">{copy.service}<select id="service" name="service" required defaultValue=""><option value="" disabled>{copy.chooseService}</option>{categories.slice(1).map((item, i) => <option key={item} value={item}>{copy.categories[i + 1]}</option>)}</select></label>
      <label htmlFor="description">{copy.description}<textarea id="description" name="description" required minLength="20" maxLength="3000" rows="4" placeholder={copy.descriptionPlaceholder} /></label>
      <button className="button button-blue" type="submit">{copy.downloadBrief} <span aria-hidden="true">↗</span></button>
      <p className={`form-feedback ${feedback.error && feedback.locale === locale ? 'error' : ''}`} role="status" aria-live="polite">{feedback.locale === locale ? feedback.text : copy.noServer}</p>
    </form>
  </section>;
}
