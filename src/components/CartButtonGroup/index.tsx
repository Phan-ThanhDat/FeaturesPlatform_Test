import React, { FC } from 'react'

import AddIcon from '@material-ui/icons/Add'
import RemoveIcon from '@material-ui/icons/Remove'
import { makeStyles } from '@material-ui/core/styles'
import { CountryType } from '../../types'
import { addItemTCart, decreaseItemTCart } from '../../redux/actions/cart'
import { useDispatch } from 'react-redux'

import CustomBtn from './../Button'
import useTheme from 'Hooks/useTheme'
import useMuiTheme from 'Hooks/useMuiTheme'

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    'min-width': '40px',
    '&:focus': {
      outline: 'none',
    },
  },
  number: {
    margin: 0,
    padding: '0 15px',
  },
})
export type TCartButtonGroupProps = {
  country: CountryType
  orderAmount?: number
  size?: 'small' | 'medium' | 'large'
}
const CartButtonGroup: FC<TCartButtonGroupProps> = ({
  country,
  orderAmount,
  size = 'small',
}) => {
  const dispatch = useDispatch()
  const classes = useStyles()
  const addToCart = () => {
    dispatch(addItemTCart(country))
  }
  const decreaseToCart = () => {
    dispatch(decreaseItemTCart(country, orderAmount))
  }
  const getTheme = useTheme()

  const {
    themeMuiObject: { palette },
  } = useMuiTheme()
  const currentBg = (palette?.['primary'] as any)[500]

  if (orderAmount) {
    return (
      <div className={classes.root}>
        <CustomBtn
          style={{
            color: getTheme.themeColor.secondary,
            backgroundColor: currentBg,
          }}
          onClick={addToCart}
          className={classes.button}
          display={(size === 'large' && 'big') || undefined}
        >
          <AddIcon />
        </CustomBtn>
        <p className={classes.number}>{orderAmount}</p>
        <CustomBtn
          onClick={decreaseToCart}
          className={classes.button}
          style={{
            color: getTheme.themeColor.secondary,
            backgroundColor: currentBg,
          }}
          display={(size === 'large' && 'big') || undefined}
        >
          <RemoveIcon />
        </CustomBtn>
      </div>
    )
  } else {
    return (
      <CustomBtn
        onClick={addToCart}
        style={{
          color: getTheme.themeColor.secondary,
          backgroundColor: currentBg,
        }}
        display={(size === 'large' && 'big') || undefined}
      >
        Add
      </CustomBtn>
    )
  }
}

export default CartButtonGroup
