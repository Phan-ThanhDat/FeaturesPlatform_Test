import {
  ADD_ITEM_TO_CART,
  AddItemToCartAction,
  CountryType,
  DECREASE_ITEM_TO_CART,
  DecreaseItemToCartAction,
  REMOVE_ITEM_TO_CART,
  RemoveItemToCartAction,
} from '../../types'

export function addItemTCart(country: CountryType): AddItemToCartAction {
  return {
    type: ADD_ITEM_TO_CART,
    payload: country,
  }
}

export function decreaseItemTCart(
  country: CountryType,
  currentAmount: number = 0
): DecreaseItemToCartAction | RemoveItemToCartAction {
  if (currentAmount <= 1) {
    return {
      type: REMOVE_ITEM_TO_CART,
      payload: country.alpha2Code,
    }
  } else {
    return {
      type: DECREASE_ITEM_TO_CART,
      payload: country,
    }
  }
}

export function removeItemTCart(country: CountryType): RemoveItemToCartAction {
  return {
    type: REMOVE_ITEM_TO_CART,
    payload: country.alpha2Code,
  }
}
