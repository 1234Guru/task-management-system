import app from '../app'
import request from 'supertest';
let token: string;

describe('Auth API', () => {

  const user = {
    name: 'Test User',
    email: `test${Date.now()}@mail.com`,
    password: 'test123'
  };

  it('should register a user', async () => {
    const res = await request(app).post('/api/auth/register').send(user);

    expect(res.statusCode).toBe(201);
    expect(res.body.message).toContain('registered');
  });

  it('should login and return token', async () => {
    const res = await request(app).post('/api/auth/login').send({
      email: user.email,
      password: user.password,
    });

    expect(res.statusCode).toBe(200);
    expect(res.body.token).toBeDefined();

    token = res.body.token;
  });

  // Export token for use in job tests
});
export { token };
