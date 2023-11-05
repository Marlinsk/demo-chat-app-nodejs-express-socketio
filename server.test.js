const request = require('supertest');
const http = require('./server'); 
const mongoose = require('mongoose');

const closeServer = async () => {
  try {
    await mongoose.connection.close(); 
    http.close(); 
  } catch (error) {
    console.error('Database connection failed:', error);
    process.exit(1); 
  }
};

describe('API Endpoints', () => {
  it('GET /messages should return all messages', async () => {
    const response = await request(http).get('/messages');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  it('GET /messages/:user should return messages for a specific user', async () => {
    const user = 'Arun'; 
    const response = await request(http).get(`/messages/${user}`);
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  it('POST /messages should add a new message', async () => {
    const newMessage = {
      name: 'TestUser',
      message: 'Hello, Jest!'
    };
    const response = await request(http)
      .post('/messages')
      .send(newMessage);

    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Message Posted');
  });

  afterAll(async () => {
    await closeServer(); 
  });
});
