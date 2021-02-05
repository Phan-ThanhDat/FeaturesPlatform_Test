import { AxiosRequestConfig, AxiosResponse } from 'axios'
import { CountryType } from '../types'
import ApiFactory from './index'

const baseUrl = 'https://restcountries.eu/rest/v2'

interface ICountryApi {
  getAll: () => any
  getByName: (name: string) => any
}

const axiosInstance = ApiFactory(baseUrl)

class CountryApi implements ICountryApi {
  private _http = axiosInstance

  private _fetch(
    url: string,
    params?: Object
  ): Promise<AxiosResponse<CountryType[] | CountryType>> {
    let conf: AxiosRequestConfig = {
      params: params,
    }
    return this._http.get(url, conf)
  }

  async getAll(): Promise<CountryType[]> {
    try {
      let res: AxiosResponse = await this._fetch('/all')
      return res.data
    } catch (e) {
      throw e
    }
  }

  async getByName(name: string): Promise<CountryType[]> {
    try {
      let res: AxiosResponse = await this._fetch(`/name/${name}`)
      return res.data
    } catch (e) {
      throw e
    }
  }

  async getByCode(code: string): Promise<CountryType> {
    try {
      let res: AxiosResponse = await this._fetch(`/alpha/${code}`)
      return res.data
    } catch (e) {
      throw e
    }
  }

  async getByCodes(codes: string[]): Promise<CountryType[]> {
    try {
      let res: AxiosResponse = await this._fetch(`/alpha`, {
        codes: codes.join(';'),
      })
      return res.data
    } catch (e) {
      throw e
    }
  }
}

const countryApi = new CountryApi()
export default countryApi
