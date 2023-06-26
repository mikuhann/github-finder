import { Actions } from '../../constants/context/github/Actions';

const githubReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case Actions.search_users:
      return {
        ...state,
        users: payload,
        loading: false,
      };
    case Actions.get_user_and_repos:
      return {
        ...state,
        ...payload,
        loading: false,
      }
    case Actions.clear_users:
      return {
        ...state,
        users: []
      };
    case Actions.set_loading:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export default githubReducer;
