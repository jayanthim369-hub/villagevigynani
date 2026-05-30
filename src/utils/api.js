const API_BASE = '/api';

async function request(method, url, data = null) {
  const token = localStorage.getItem('vv_token');
  const headers = { 'Content-Type': 'application/json' };
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }
  
  const config = { method, headers };
  if (data) {
    config.body = JSON.stringify(data);
  }
  
  try {
    const res = await fetch(`${API_BASE}${url}`, config);
    if (!res.ok) {
      const err = await res.json().catch(() => ({ message: 'Something went wrong' }));
      throw new Error(err.message || 'API request failed');
    }
    return await res.json();
  } catch (error) {
    console.error(`API Error on ${method} ${url}:`, error);
    throw error;
  }
}

export const api = {
  get: (url) => request('GET', url),
  post: (url, data) => request('POST', url, data),
  put: (url, data) => request('PUT', url, data),
  del: (url) => request('DELETE', url),
};

export default api;
