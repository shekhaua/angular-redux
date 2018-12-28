export const INCREMENT_VISITS = 'INCREMENT_VISITS';

export interface IAppState {
  visits: number;
}

export const INITIAL_STATE: IAppState = {
  visits: 0
};

export function rootReducer(state, action) {
  switch (action.type) {
    case INCREMENT_VISITS:
      return Object.assign({}, state, { visits: state.visits + 1 });
  }
  return state;
}

