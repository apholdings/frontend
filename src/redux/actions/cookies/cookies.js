import { ACCEPT_COOKIES, REJECT_COOKIES } from './types';

export const acceptCookies = () => async (dispatch) => {
  dispatch({
    type: ACCEPT_COOKIES,
  });
};

export const rejectCookies = () => async (dispatch) => {
  dispatch({
    type: REJECT_COOKIES,
  });
};
