import { combineReducers } from 'redux'

import product from './product'
import ui from './ui'
import cart from './cart'
import country from './country'
import fetchStatus from './fetchStatus'
import { DEBUG_MODE } from '../store'

const createRootReducer = () =>
  combineReducers({
    product,
    ui,
    cart,
    country,
    fetchStatus,
    debug: (t) => DEBUG_MODE,
  })

export default createRootReducer
