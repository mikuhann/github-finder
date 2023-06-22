import { Actions } from '../../constants/context/alert/Actions';

const alertReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case Actions.set_alert:
      return action.payload;
    case Actions.remove_alert:
      return null;
    default:
      return state;
  }
}

export default alertReducer;
