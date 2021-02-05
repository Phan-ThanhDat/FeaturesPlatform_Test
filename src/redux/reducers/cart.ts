import {
  ADD_ITEM_TO_CART,
  CartActions,
  CartState,
  DECREASE_ITEM_TO_CART,
  REMOVE_ITEM_TO_CART,
} from '../../types'

const initialValue: CartState = {
  countries: {},
}

export default function cart(
  state: CartState = initialValue,
  action: CartActions
): CartState {
  switch (action.type) {
  case ADD_ITEM_TO_CART: {
    let country = action.payload
    let countryId = country.alpha2Code
    let amount = 0
    if (state.countries[countryId]) {
      amount = state.countries[countryId].orderAmount
    }
    amount += 1
    return {
      ...state,
      countries: {
        ...state.countries,
        [countryId]: { ...country, orderAmount: amount },
      },
    }
  }
  case DECREASE_ITEM_TO_CART: {
    let country = action.payload
    let countryId = country.alpha2Code
    let amount = 0
    if (state.countries[countryId]) {
      amount = state.countries[countryId].orderAmount
      amount -= 1
      return {
        ...state,
        countries: {
          ...state.countries,
          [countryId]: { ...country, orderAmount: amount },
        },
      }
    } else {
      return { ...state }
    }
  }
  case REMOVE_ITEM_TO_CART: {
    let countryId = action.payload
    let clonedCountries = { ...state.countries }
    delete clonedCountries[countryId]
    return { ...state, countries: { ...clonedCountries } }
  }
  default: {
    return state
  }
  }
}
