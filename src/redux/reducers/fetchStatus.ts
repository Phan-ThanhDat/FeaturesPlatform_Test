import {
  FETCH_COUNTRY_FAIL,
  FETCH_COUNTRY_SUCCESS,
  FetchStatusAction,
  FetchStatusState,
  RESET_FETCH_COUNTRIES,
} from '../../types'

const initialValue = {
  fetchCountries: null,
}

export default function fetchStatus(
  state: FetchStatusState = initialValue,
  action: FetchStatusAction
): FetchStatusState {
  switch (action.type) {
  case RESET_FETCH_COUNTRIES: {
    return { ...state, fetchCountries: null }
  }
  case FETCH_COUNTRY_SUCCESS: {
    return { ...state, fetchCountries: true }
  }
  case FETCH_COUNTRY_FAIL: {
    return { ...state, fetchCountries: false }
  }
  default: {
    return { ...state }
  }
  }
}
