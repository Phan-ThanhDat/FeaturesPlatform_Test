import React, { FC } from 'react'
import { CountryType } from '../../types'
import BorderCountryItem from './BorderCountryItem'
import { Container, Grid, Typography } from '@material-ui/core'

type Props = {
  countries: CountryType[] | null
  countryObjectInCart: { [char: string]: CountryType }
}
const BorderCountryList: FC<Props> = ({ countries, countryObjectInCart }) => {
  const buildList = () => {
    if (countries && countries.length > 0) {
      return countries.map((country) => {
        let orderAmount = undefined
        if (countryObjectInCart[country.alpha2Code]) {
          orderAmount = countryObjectInCart[country.alpha2Code].orderAmount
        }

        return (
          <Grid item md={4} key={country.alpha2Code}>
            <BorderCountryItem orderAmount={orderAmount} country={country} />
          </Grid>
        )
      })
    }
    return (
      <Grid>
        <p>There is no country</p>
      </Grid>
    )
  }

  return (
    <Container className="mt-5">
      <hr />
      <Typography variant="h3" gutterBottom>
        Border Countries:
      </Typography>
      <Grid container spacing={3}>
        {buildList()}
      </Grid>
    </Container>
  )
}

export default BorderCountryList
