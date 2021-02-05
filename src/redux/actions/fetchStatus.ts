import {
  RESET_FETCH_COUNTRIES,
  ResetFetchCountryStatusAction,
} from '../../types'

export function resetFetchCountryStatus(): ResetFetchCountryStatusAction {
  return {
    type: RESET_FETCH_COUNTRIES,
  }
}
