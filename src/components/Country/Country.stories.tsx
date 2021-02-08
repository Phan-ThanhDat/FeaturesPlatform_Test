import React from 'react'
import { Provider } from 'react-redux'
import makeStore from 'redux/store'
import { Story, Meta } from '@storybook/react/types-6-0'

import { Container, Grid, Typography, Box } from '@material-ui/core'

import CartButtonGroup from 'components/CartButtonGroup'
import CardImage from 'components/common/Card/CardImage'
import { captialize } from 'helpers/common'
import Country, { Props } from './index'
import ThemeContextProvider from '../../Provider'
import { CountryType } from 'types'

import '../../assets/css/colors.css'
import '../../assets/css/weight.css'
import '../../assets/css/grid.css'
import '../../assets/css/motion.css'
import '../../assets/css/layers.css'

export default {
  title: 'Custom/Country',
  component: Country,
  argTypes: {
    orderAmount: { control: 'number' },
  },
} as Meta

const store = makeStore()
const mockCountryData: CountryType = {
  orderAmount: 0,
  name: 'Finland',
  topLevelDomain: ['1', '2'],
  alpha2Code: 'FI',
  alpha3Code: 'FIN',
  callingCodes: ['callingCodes1', 'callingCodes2'],
  capital: 'Helsinki',
  altSpellings: ['altSpellings1', 'altSpellings2'],
  region: 'Eu',
  subregion: 'subregion',
  population: 500000,
  latlng: [200, 300],
  demonym: 'demonym',
  area: 200000,
  gini: 400,
  timezones: ['300', '400'],
  borders: ['Nor', 'Swe'],
  nativeName: 'fin',
  numericCode: '+358',
  currencies: [
    {
      code: 'Eur',
      name: 'eur',
      symbol: '$',
    },
  ],
  languages: [
    {
      iso639_1: 'iso639_1',
      iso639_2: 'iso639_2',
      name: 'name',
      nativeName: 'Suomi',
    },
  ],
  translations: { tranlations: 'fin' },
  flag: 'https://restcountries.eu/data/fin.svg',
  regionalBlocs: [
    {
      acronym: 'string',
      name: 'string',
      otherAcronyms: [],
      otherNames: [],
    },
  ],
  cioc: 'string',
}

const Template: Story<Props> = (args: JSX.IntrinsicAttributes & Props) => {
  return (
    <Provider store={store}>
      <ThemeContextProvider>
        <Country {...args} />
      </ThemeContextProvider>
    </Provider>
  )
}

export const CountryComponent = Template.bind({})
CountryComponent.args = {
  country: mockCountryData,
  countryObjectInCart: { mockCountryData },
}
interface ICountryProps {
  country: CountryType
  countryObjectInCart: {
    [char: string]: CountryType
  }
  args: JSX.IntrinsicAttributes & ICountryProps
}
const Template2: Story<ICountryProps> = ({
  country,
  countryObjectInCart,
}: ICountryProps) => {
  const [orderAmount, setOrderAmount] = React.useState<number | undefined>(
    undefined
  )
  const showFields = [
    'capital',
    'nativeName',
    'population',
    'area',
    'timezones',
  ]

  React.useEffect(() => {
    if (countryObjectInCart[country.alpha2Code]) {
      setOrderAmount(countryObjectInCart[country.alpha2Code].orderAmount)
    } else {
      setOrderAmount(undefined)
    }
  }, [country.alpha2Code, countryObjectInCart])
  return (
    <Provider store={store}>
      <ThemeContextProvider>
        <Container className="mt-5">
          <Grid container spacing={3}>
            <Grid item md={6}>
              <CardImage>
                <img
                  src={country.flag}
                  alt={`${country.name}'s flag`}
                  style={{ width: '100%' }}
                />
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
      </ThemeContextProvider>
    </Provider>
  )
}

export const CountryComponent2 = Template2.bind({})
CountryComponent2.args = {
  country: mockCountryData,
  countryObjectInCart: { mockCountryData },
}
