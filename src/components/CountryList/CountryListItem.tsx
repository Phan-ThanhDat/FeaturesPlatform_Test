import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { CountryType } from '../../types'
import CardImage from '../common/Card/CardImage'
import { TableRow, TableCell } from '@material-ui/core'
import CartButtonGroup from '../CartButtonGroup'

type Props = {
  country: CountryType
  orderAmount?: number
}

const CountryListItem: FC<Props> = React.memo(({ country, orderAmount }) => {
  return (
    <TableRow>
      <TableCell>
        <CardImage>
          <img src={country.flag} alt={`${country.name}'s Flag`} />
        </CardImage>
      </TableCell>
      <TableCell>
        <Link to={`/countries/${country.alpha2Code}`}>{country.name}</Link>
      </TableCell>
      <TableCell>{country.population}</TableCell>
      <TableCell>
        <ul>
          {country.languages.map((lang, index) => (
            <li key={index}>{lang.name}</li>
          ))}
        </ul>
      </TableCell>
      <TableCell>{country.region}</TableCell>
      <TableCell>
        <CartButtonGroup
          country={country}
          orderAmount={orderAmount}
          size="medium"
        />
      </TableCell>
    </TableRow>
  )
})

export default CountryListItem
