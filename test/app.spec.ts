import request from 'supertest';
import app from '../src/app';

describe('Hello World', () => {
  it('Gets Hello World!', () => {
    return request(app).get('/').expect(200).expect('Hello World!');
  });
});
