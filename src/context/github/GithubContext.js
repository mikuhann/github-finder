import { createContext, useReducer } from 'react';

import githubReducer from './GithubReducer';

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;
const GithubContext = createContext();
const initialState = {
  users: [],
  loading: false,
}

export const GithubProvider = ({ children }) => {
  const [state, dispatch] = useReducer(githubReducer, initialState);

  const setLoading = () => dispatch({ type: 'SET_LOADING' });

  const getUsers = async () => {
    setLoading();

    const res = await fetch(`${GITHUB_URL}/users`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`
      }
    });

    const data = await res.json();

    dispatch({
      type: 'GET_USERS',
      payload: data
    });

  };

  return (
    <GithubContext.Provider value={{
      users: state.users,
      loading: state.loading,
      getUsers,
    }}>
      {children}
    </GithubContext.Provider>
  );
}

export default GithubContext;
