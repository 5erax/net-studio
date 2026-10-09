import test from 'node:test';
import assert from 'node:assert/strict';
import { categories, projects, filterProjects, createBrief } from '../src/lib/content.js';
import { contentByLocale, getArticles } from '../src/lib/studioContent.js';
import { interfaceCopy } from '../src/lib/interfaceCopy.js';

test('filters include all projects and correctly isolate each category', () => {
  assert.deepEqual(filterProjects('Tất cả'), projects);
  for (const category of categories.slice(1)) {
    const result = filterProjects(category);
    assert.ok(result.length > 0);
    assert.ok(result.every(project => project.category === category));
  }
  assert.deepEqual(filterProjects('unknown'), []);
  assert.equal(new Set(projects.map(project => project.id)).size, projects.length);
});

const fields = { name: '  Nguyễn An  ', email: 'an@example.com', service: 'Nhận diện', description: 'Thiết kế nhận diện cho một không gian trà mới.' };

test('brief keeps Vietnamese content, trims name, and discloses local-only behavior', () => {
  const brief = createBrief(fields);
  assert.ok(brief.includes('Họ tên: Nguyễn An\n'));
  assert.ok(brief.includes(fields.description));
  assert.ok(brief.includes('Chưa gửi đến studio.'));
});

test('brief rejects incomplete, invalid and oversized input', () => {
  for (const change of [{ name: ' ' }, { name: 'a'.repeat(101) }, { email: 'invalid' }, { email: 'a\nb@example.com' }, { service: 'unknown' }, { description: 'ngắn' }, { description: 'a'.repeat(3001) }]) {
    assert.throws(() => createBrief({ ...fields, ...change }));
  }
});

test('English brief translates labels and validation without changing user input', () => {
  const brief = createBrief(fields, 'en');
  assert.ok(brief.includes('Name: Nguyễn An\n'));
  assert.ok(brief.includes('Design direction: Brand identity\n'));
  assert.ok(brief.includes(fields.description));
  assert.ok(brief.includes('Not sent to the studio.'));
  assert.throws(() => createBrief({ ...fields, email: 'invalid' }, 'en'), { message: interfaceCopy.en.invalidEmail });
});

test('both languages retain the same navigation targets and article identities', () => {
  assert.deepEqual(contentByLocale.vi.nav.map(link => link.href), contentByLocale.en.nav.map(link => link.href));
  assert.deepEqual(getArticles('vi').map(article => [article.id, article.href]), getArticles('en').map(article => [article.id, article.href]));
  assert.deepEqual(Object.keys(interfaceCopy.vi).sort(), Object.keys(interfaceCopy.en).sort());
  assert.equal(getArticles('en').filter(article => article.category === 'Notes').length, 4);
  assert.equal(contentByLocale.en.solutions.length, contentByLocale.vi.solutions.length);
});
