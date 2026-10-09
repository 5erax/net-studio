import test from 'node:test';
import assert from 'node:assert/strict';
import { categories, projects, filterProjects, createBrief } from '../src/lib/content.js';

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
