import {
  CountryState,
  FETCH_COUNTRY_FAIL,
  FETCH_COUNTRY_SUCCESS,
  SagaCountryActions,
} from '../../types'

const initialValue: CountryState = {}

export default function country(
  state: CountryState = initialValue,
  action: SagaCountryActions
): CountryState {
  switch (action.type) {
  case FETCH_COUNTRY_SUCCESS: {
    // convert country array to object with key is unique alpha2Code stirng
    let countryObjs = action.payload.reduce<{ [c: string]: any }>(
      (acc, country) => {
        acc[country.alpha2Code] = country
        return acc
      },
      {}
    )
    return { ...countryObjs }
  }
  case FETCH_COUNTRY_FAIL: {
    return { ...state }
  }
  default: {
    return { ...state }
  }
  }
}
