/* eslint-disable default-param-last */
import { ACCEPT_COOKIES, REJECT_COOKIES } from '../actions/cookies/types';

const initialState = {
  cookies: null,
};

export default function cookies(state = initialState, action) {
  // eslint-disable-next-line
  const { type, payload } = action;

  switch (type) {
    case ACCEPT_COOKIES:
      return {
        ...state,
        cookies: true,
      };
    case REJECT_COOKIES:
      return {
        ...state,
        cookies: false,
      };
    default:
      return state;
  }
}
