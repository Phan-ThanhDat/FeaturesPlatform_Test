import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import countryApi from '../Api/CountryApi'
import { AppState, CountryType } from '../types'
import Country from '../components/Country'
import { useSelector } from 'react-redux'
import BorderCountryList from '../components/BorderCountryList'

const CountryDetail = () => {
  const { id } = useParams()
  const [country, setCountry] = useState<CountryType | null>(null)
  const [borderCountries, setBorderCountries] = useState<CountryType[] | null>(
    null
  )

  const countryObjectInCart = useSelector<
    AppState,
    { [id: string]: CountryType }
  >(({ cart }) => {
    return { ...cart.countries }
  })

  useEffect(() => {
    async function asyncFn() {
      const country = await countryApi.getByCode(id)
      let borders: CountryType[] | null = null
      if (country?.borders.length > 0) {
        borders = await countryApi.getByCodes(country.borders)
      }
      setCountry(country)
      setBorderCountries(borders)
    }

    asyncFn()
  }, [id])

  if (country) {
    return (
      <Container fluid>
        <Country countryObjectInCart={countryObjectInCart} country={country} />

        <BorderCountryList
          countryObjectInCart={countryObjectInCart}
          countries={borderCountries}
        />
      </Container>
    )
  } else {
    return null
  }
}

export default CountryDetail
