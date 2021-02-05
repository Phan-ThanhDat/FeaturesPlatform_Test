import React, { FC } from 'react'
import Drawer from '@material-ui/core/Drawer/Drawer'
import { useDispatch, useSelector } from 'react-redux'
import { AppState, CountryType } from '../../types'
import { toggleDrawer } from '../../redux/actions'
import CartList from '../Cart/CartList'

const RightDrawer: FC = () => {
  const dispatch = useDispatch()
  const open = useSelector<AppState, boolean>(({ ui }) => ui.drawer.right)
  const onClose = () => dispatch(toggleDrawer({ anchor: 'right', open: false }))
  const countriesInCart = useSelector<AppState, CountryType[]>(({ cart }) => {
    return [...Object.values(cart.countries)]
  })
  return (
    <Drawer anchor={'right'} open={open} onClose={onClose}>
      <CartList list={countriesInCart} />
    </Drawer>
  )
}

export default RightDrawer
