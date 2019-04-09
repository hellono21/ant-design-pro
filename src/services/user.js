import request from '@/utils/request';

export async function query() {
  return request('/api/users');
}

export async function queryCurrent() {
  return request('/api/currentUser');
}

export async function queryProfile() {
  return request('/v1/users/profile', { withAuthorization: true });
  //return request('/v1/users/profile');
}
