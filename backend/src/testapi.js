const axios = require('axios');

const API_URL = 'http://localhost:5000/api';

async function testAPI() {
  try {
    // Test register
    console.log('Testing register...');
    const registerResponse = await axios.post(`${API_URL}/auth/register`, {
      name: 'Test User',
      email: 'test@example.com',
      password: '123456'
    });
    console.log('Register success:', registerResponse.data);

    // Test login
    console.log('\nTesting login...');
    const loginResponse = await axios.post(`${API_URL}/auth/login`, {
      email: 'test@example.com',
      password: '123456'
    });
    console.log('Login success:', loginResponse.data);

    // Get auth token
    const token = loginResponse.data.token;

    // Test get news (public)
    console.log('\nTesting get news...');
    const newsResponse = await axios.get(`${API_URL}/news`);
    console.log('Get news success:', newsResponse.data);

    // Test create news (protected)
    console.log('\nTesting create news...');
    const createNewsResponse = await axios.post(
      `${API_URL}/news`,
      {
        title: 'Test News',
        content: 'This is a test news article'
      },
      {
        headers: { Authorization: `Bearer ${token}` }
      }
    );
    console.log('Create news success:', createNewsResponse.data);

  } catch (error) {
    console.error('Error:', error.response ? error.response.data : error.message);
  }
}

testAPI();