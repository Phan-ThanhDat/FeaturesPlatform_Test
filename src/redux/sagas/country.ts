import { takeEvery, put, call } from 'redux-saga/effects'
import { CountryType, FETCH_COUNTRY, SagaFetchCountryAction } from '../../types'
import countryApi from '../../Api/CountryApi'
import { fetchCountryFail, fetchCountrySuccess } from '../actions/country'
import { resetFetchCountryStatus } from '../actions/fetchStatus'

function* fetchCountry(action: SagaFetchCountryAction) {
  try {
    yield put(resetFetchCountryStatus())
    let countries: CountryType[]
    if (action.payload) {
      countries = yield call(
        countryApi.getByName.bind(countryApi),
        action.payload
      )
    } else {
      countries = yield call(countryApi.getAll.bind(countryApi))
    }

    yield put(fetchCountrySuccess(countries))
  } catch (e) {
    yield put(fetchCountryFail())
  }
}

export default [takeEvery(FETCH_COUNTRY, fetchCountry)]
