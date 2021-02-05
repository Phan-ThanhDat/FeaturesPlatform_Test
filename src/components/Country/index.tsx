import React, { FC, useEffect, useState } from 'react'
import { CountryType } from '../../types'
import { Box, Container, Grid, Typography } from '@material-ui/core'
import { captialize } from '../../helpers/common'
import CardImage from '../common/Card/CardImage'
import CartButtonGroup from '../CartButtonGroup'

type Props = {
  country: CountryType
  countryObjectInCart: { [char: string]: CountryType }
}
const Country: FC<Props> = ({ country, countryObjectInCart }) => {
  const [orderAmount, setOrderAmount] = useState<number | undefined>(undefined)
  const showFields = [
    'capital',
    'nativeName',
    'population',
    'area',
    'timezones',
  ]

  useEffect(() => {
    if (countryObjectInCart[country.alpha2Code]) {
      setOrderAmount(countryObjectInCart[country.alpha2Code].orderAmount)
    } else {
      setOrderAmount(undefined)
    }
  }, [country.alpha2Code, countryObjectInCart])

  return (
    <Container className="mt-5">
      <Grid container spacing={3}>
        <Grid item md={6}>
          <CardImage>
            <img src={country.flag} alt={`${country.name}'s flag`} />
          </CardImage>
        </Grid>
        <Grid item md={6}>
          <Typography variant="h1" component="h2">
            {country.name}
          </Typography>
          {showFields.map((field) => (
            <Typography key={field} variant="body2" gutterBottom>
              {captialize(field)}: {country[field as keyof CountryType]}
            </Typography>
          ))}
          <Box mt={3}>
            <CartButtonGroup
              country={country}
              orderAmount={orderAmount}
              size="large"
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Country
