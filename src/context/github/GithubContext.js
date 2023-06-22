import { createContext, useReducer } from 'react';

import githubReducer from './GithubReducer';

import { Actions } from '../../constants/context/github/Actions';
import { ROUTES } from '../../constants/Routes';

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;
const GithubContext = createContext();

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  }

  const [state, dispatch] = useReducer(githubReducer, initialState);

  const setLoading = () => dispatch({ type: Actions.set_loading });

  const searchUsers = async (search) => {
    setLoading();

    const params = new URLSearchParams({
      q: search,
    });

    const res = await fetch(`${GITHUB_URL}/search/users?${params}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`
      }
    });

    const data = await res.json();

    dispatch({
      type: Actions.search_users,
      payload: data.items,
    });
  }

  const getUser = async (login) => {
    setLoading();

    const res = await fetch(`${GITHUB_URL}/users/${login}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      }
    });

    if (res.status === 404) {
      return window.location = ROUTES.not_found;
    }

    const data = await res.json();

    dispatch({
      type: Actions.get_user,
      payload: data,
    });
  }

  const getUserRepos = async (login) => {
    setLoading();

    const params = new URLSearchParams({
      sort: `created`,
      per_page: 10,
    });

    const res = await fetch(`${GITHUB_URL}/users/${login}/repos?${params}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      }
    });

    const data = await res.json();

    dispatch({
      type: Actions.get_repos,
      payload: data,
    });
  }

  const clearUsers = () => dispatch({ type: Actions.clear_users });

  return (
    <GithubContext.Provider value={{
      users: state.users,
      loading: state.loading,
      user: state.user,
      repos: state.repos,
      searchUsers,
      clearUsers,
      getUser,
      getUserRepos,
    }}>
      {children}
    </GithubContext.Provider>
  );
}

export default GithubContext;
