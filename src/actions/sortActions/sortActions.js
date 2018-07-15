export const SORT_ACTION = 'SORT';

export function sort(payload) {
  return {
    type: SORT_ACTION,
    payload: payload
  }
}

