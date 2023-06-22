import { createContext, useReducer } from 'react';

import githubReducer from './GithubReducer';

import { Actions } from '../../constants/context/github/Actions';

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;
const GithubContext = createContext();

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
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

  const clearUsers = () => dispatch({ type: Actions.clear_users });

  return (
    <GithubContext.Provider value={{
      users: state.users,
      loading: state.loading,
      searchUsers,
      clearUsers,
    }}>
      {children}
    </GithubContext.Provider>
  );
}

export default GithubContext;
