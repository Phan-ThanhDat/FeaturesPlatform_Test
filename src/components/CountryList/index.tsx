import React, { useEffect, useState, FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import _ from 'lodash'

import {
  Paper,
  TableContainer,
  Table,
  CircularProgress,
} from '@material-ui/core'
import { AppState, CountryType } from '../../types'
import { sortObjInArr } from '../../helpers/common'
import { fetchCountry } from '../../redux/actions/country'
import useDeepEffect from '../../Hooks/useDeepEffect'

import CountryListHeader from './CountrListHeader'
import CountryListItem from './CountryListItem'
import { makeStyles } from '@material-ui/core/styles'
import useLazyLoading from '../../Hooks/useLazyLoading'

const useStyle = makeStyles({
  root: {
    position: 'relative',
  },
  loadingWrap: {
    position: 'absolute',
    textAlign: 'center',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    background: '#cccccc8a',
    paddingTop: '10%',
    // transform: 'translateX(-50%)'
  },
  centerText: {
    textAlign: 'center',
  },
})

type Props = {
  // countries: CountryType[]
}
const CountryList: FC<Props> = () => {
  const showFields = ['fag', 'name', 'population', 'languages', 'region', null]
  const showFieldWidths = ['10%', '20%', '20%', '20%', '20%', '10%']

  const dispatch = useDispatch()

  const countryObjectInCart = useSelector<
    AppState,
    { [id: string]: CountryType }
  >(({ cart }) => {
    return { ...cart.countries }
  })

  const fetchCountriesStatus = useSelector<AppState, boolean | null>(
    ({ fetchStatus }) => fetchStatus.fetchCountries
  )

  const countries = useSelector<AppState, CountryType[]>(({ country }) => {
    return _.cloneDeep(Object.values(country))
  })
  const [displayCountries, setDisplayCountries] = useState<
    CountryType[] | null
  >(countries)

  const classes = useStyle()

  const displayCountriesLazyLoad = useLazyLoading<CountryType>(
    displayCountries,
    10
  )

  useEffect(() => {
    dispatch(fetchCountry())
  }, [dispatch])

  useDeepEffect(() => {
    setDisplayCountries(countries)
  }, [countries])

  // end detect scroll bottom
  const buildList = (): React.ReactNode | null => {
    if (displayCountriesLazyLoad) {
      return displayCountriesLazyLoad.map((country) => {
        const countryIdInCart = country.alpha2Code
        let orderAmount = countryObjectInCart[countryIdInCart]?.orderAmount
        return (
          <CountryListItem
            key={country.alpha2Code}
            orderAmount={orderAmount}
            country={country}
          />
        )
      })
    }
    return null
  }

  const sortHandler = (title: string, isAsc: boolean) => {
    const clonedCountries = sortObjInArr(displayCountries, title, isAsc)
    setDisplayCountries(clonedCountries)
  }

  return (
    <TableContainer className={classes.root} component={Paper}>
      {fetchCountriesStatus === null && (
        <div className={classes.loadingWrap}>
          <CircularProgress />
        </div>
      )}
      <Table aria-label="simple table">
        <CountryListHeader
          titles={showFields}
          colWidths={showFieldWidths}
          onSort={sortHandler}
          sort={[false, true, true]}
        />

        {displayCountriesLazyLoad && displayCountriesLazyLoad.length > 0 && (
          <tbody>{buildList()}</tbody>
        )}
      </Table>

      {fetchCountriesStatus === false && (
        <div className={classes.centerText}>
          <p>There is no items</p>
        </div>
      )}
    </TableContainer>
  )
}

export default CountryList
