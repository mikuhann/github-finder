import { ROUTES } from '../../constants/Routes';

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const searchUsers = async (search) => {
  const params = new URLSearchParams({
    q: search,
  });

  const res = await fetch(`${GITHUB_URL}/search/users?${params}`, {
    headers: {
      Authorization: `token ${GITHUB_TOKEN}`
    }
  });

  const { items } = await res.json()

  return items;
}

export const getUser = async (login) => {
  const res = await fetch(`${GITHUB_URL}/users/${login}`, {
    headers: {
      Authorization: `token ${GITHUB_TOKEN}`,
    }
  });

  if (res.status === 404) {
    return window.location = ROUTES.not_found;
  }

  return await res.json();
}

export const getUserRepos = async (login) => {
  const params = new URLSearchParams({
    sort: `created`,
    per_page: 10,
  });

  const res = await fetch(`${GITHUB_URL}/users/${login}/repos?${params}`, {
    headers: {
      Authorization: `token ${GITHUB_TOKEN}`,
    }
  });

  return await res.json();
}