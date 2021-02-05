import {
  CountryType,
  FETCH_COUNTRY,
  FETCH_COUNTRY_FAIL,
  FETCH_COUNTRY_SUCCESS,
  FetchCountryFailAction,
  SagaFetchCountryAction,
  SagaFetchCountrySuccessAction,
} from '../../types'

// redux-thunk
// export const fetchCountry = (keyword: string | undefined = undefined) => async (
//   dispatch: Dispatch
// ) => {
//   let countries: CountryType[]
//   try {
//     if (keyword && keyword !== '') {
//       countries = await countryApi.getByName(keyword)
//     } else {
//       countries = await countryApi.getAll()
//     }
//     dispatch({
//       type: FETCH_COUNTRY,
//       payload: countries,
//     })
//   } catch (e) {
//     dispatch({
//       type: FETCH_COUNTRY_FAIL,
//     })
//   }
// }

export const fetchCountry = (
  keyword: string | undefined = undefined
): SagaFetchCountryAction => {
  return {
    type: FETCH_COUNTRY,
    payload: keyword,
  }
}

export const fetchCountrySuccess = (
  countries: CountryType[]
): SagaFetchCountrySuccessAction => {
  return {
    type: FETCH_COUNTRY_SUCCESS,
    payload: countries,
  }
}

export const fetchCountryFail = (): FetchCountryFailAction => {
  return {
    type: FETCH_COUNTRY_FAIL,
  }
}
