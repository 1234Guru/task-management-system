import app from '../app';
import request from 'supertest';

let authToken: string;

beforeAll(async () => {
  const user = {
    email: 'testuser@mail.com',
    password: 'test123',
  };

  // Ensure the user exists
  await request(app).post('/api/auth/register').send({
    name: 'Test User',
    ...user,
  });

  const res = await request(app).post('/api/auth/login').send(user);
  authToken = res.body.token;
});

describe('Job API', () => {
  let jobId: number;

  it('should create a job', async () => {
    const res = await request(app)
      .post('/api/jobs')
      .set('Authorization', `Bearer ${authToken}`)
      .send({
        company: 'Google',
        position: 'Software Engineer',
        status: 'Applied',
      });

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('id'); // ✅ ensure the response includes an ID
    jobId = res.body.id;

    // Log for debugging (optional)
    //console.log('✅ Created job with ID:', jobId);
  });

  it('should get all jobs', async () => {
    const res = await request(app)
      .get('/api/jobs')
      .set('Authorization', `Bearer ${authToken}`);

    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('should update the job', async () => {
    const res = await request(app)
      .put(`/api/jobs/${jobId}`)
      .set('Authorization', `Bearer ${authToken}`)
      .send({
        position: 'Updated Position',
      });

    //console.log('🔁 Update job response:', res.body);

    expect(res.statusCode).toBe(200); // Should return 200 if update successful
    expect(res.body.position).toBe('Updated Position');
  });

  it('should delete the job', async () => {
    const res = await request(app)
      .delete(`/api/jobs/${jobId}`)
      .set('Authorization', `Bearer ${authToken}`);

    expect(res.statusCode).toBe(200);
  });
});
