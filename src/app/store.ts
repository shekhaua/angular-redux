import {tassign} from 'tassign';

export const INCREMENT_VISITS = 'INCREMENT_VISITS';
export const FETCHING_ON = 'FETCHING_ON';
export const FETCHING_OFF = 'FETCHING_OFF';
export const FETCH_SALES_OK = 'FETCH_SALES_OK';
export const FETCH_SALES_ERR = 'FETCH_SALES_ERR';

export interface IAppState {
  visits: number;
  isFetching: boolean;
  sales: Array<any>;
}

export const INITIAL_STATE: IAppState = {
  visits: 0,
  isFetching: true,
  sales: []
};

export function rootReducer(state: IAppState, action): IAppState {
  switch (action.type) {
    case INCREMENT_VISITS:
      return tassign(state, { visits: state.visits + 1 });
    case FETCHING_ON:
      return tassign(state, { isFetching: true });
    case FETCHING_OFF:
      return tassign(state, { isFetching: false });
    case FETCH_SALES_OK:
      return tassign(state, { sales: action.sales });
    case FETCH_SALES_ERR:
      return tassign(state, { sales: [] });
  }
  return state;
}

