import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppState, CountryType } from '../../types'
import { Box, IconButton, Badge } from '@material-ui/core'
import {
  Theme,
  withStyles,
  createStyles,
  makeStyles,
} from '@material-ui/core/styles'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import { toggleDrawer } from '../../redux/actions'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    buttonIcon: {
      color: theme.palette.primary.contrastText,
    },
  })
)

const StyledBadge = withStyles((theme: Theme) =>
  createStyles({
    badge: {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  })
)(Badge)

const CartButton = () => {
  const dispatch = useDispatch()
  const classes = useStyles()

  const [noOfCountry, setNoOfCountry] = useState<number>(0)
  const [isShow, toggle] = useState<boolean>(false)
  const countriesInCart = useSelector<AppState, CountryType[]>(({ cart }) => {
    return [...Object.values(cart.countries)]
  })

  const toggleLeftDrawer = () => {
    if (isShow) {
      dispatch(toggleDrawer({ anchor: 'right', open: true }))
    }
  }

  useEffect(() => {
    setNoOfCountry(countriesInCart.length)
    if (countriesInCart.length === 0) {
      toggle(false) // isShow off
    } else {
      toggle(true)
    }
  }, [countriesInCart])
  return (
    <Box className="cart--button--wrap">
      <IconButton
        className={classes.buttonIcon}
        onClick={toggleLeftDrawer}
        aria-label="cart"
      >
        <StyledBadge badgeContent={noOfCountry} color="secondary">
          <ShoppingCartIcon />
        </StyledBadge>
      </IconButton>
    </Box>
  )
}

export default CartButton
