import React, { FC } from 'react'
import { CountryType } from '../../types'

import { captialize } from '../../helpers/common'
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'
import CartButtonGroup from '../CartButtonGroup'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 200,
  },
})

type Props = {
  country: CountryType
  orderAmount?: number
}
const BorderCountryItem: FC<Props> = ({ country, orderAmount }) => {
  const classes = useStyles()
  const showFields = ['capital', 'nativeName']

  return (
    <Card>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={country.flag}
          title={`${country.name}'s flag`}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            <Link to={`/countries/${country.alpha2Code}`}>{country.name}</Link>
          </Typography>
          {showFields.map((field) => (
            <Typography
              key={field}
              variant="body2"
              color="textSecondary"
              component="p"
            >
              {captialize(field)}: {country[field as keyof CountryType]}
            </Typography>
          ))}
        </CardContent>
      </CardActionArea>
      <CardActions>
        <CartButtonGroup
          country={country}
          orderAmount={orderAmount}
          size="small"
        />
      </CardActions>
    </Card>
  )
}

export default BorderCountryItem
