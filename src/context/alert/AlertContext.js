import { createContext, useReducer } from 'react';
import alertReducer from './AlertReducer';

import { Actions } from '../../constants/context/alert/Actions';


const AlertContext = createContext();

export const AlertProvider = ({ children }) => {
  const initialState = null;

  const [state, dispatch] = useReducer(alertReducer, initialState);

  const setAlert = (msg, type) => {
    dispatch({
      type: Actions.set_alert,
      payload: { msg, type }
    });

    setTimeout(() => dispatch({
      type: Actions.remove_alert
    }), 3000);
  }

  return (
    <AlertContext.Provider value={{
      alert: state,
      setAlert,
    }}>
      {children}
    </AlertContext.Provider>
  )
}

export default AlertContext;
