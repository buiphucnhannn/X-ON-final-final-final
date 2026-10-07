const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

/**
 * Universal fetch wrapper for client-side API requests
 */
export async function apiRequest(endpoint, options = {}) {
  const url = `${API_BASE_URL}${endpoint.startsWith('/') ? endpoint : `/${endpoint}`}`;

  const defaultHeaders = {
    'Content-Type': 'application/json',
  };

  const response = await fetch(url, {
    ...options,
    headers: {
      ...defaultHeaders,
      ...options.headers,
    },
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(data.message || `Request failed with status ${response.status}`);
  }

  return data;
}

export const api = {
  checkHealth: () => apiRequest('/health'),
  getUsers: () => apiRequest('/users'),
  getUserById: (id) => apiRequest(`/users/${id}`),
  createUser: (userData) =>
    apiRequest('/users', {
      method: 'POST',
      body: JSON.stringify(userData),
    }),
  updateUser: (id, userData) =>
    apiRequest(`/users/${id}`, {
      method: 'PUT',
      body: JSON.stringify(userData),
    }),
  deleteUser: (id) =>
    apiRequest(`/users/${id}`, {
      method: 'DELETE',
    }),
};
