import React, { FC } from 'react'
import { CountryType } from '../../types'
import { useDispatch } from 'react-redux'
import { removeItemTCart } from '../../redux/actions/cart'
import { Link } from 'react-router-dom'
import useTheme from '../../Hooks/useTheme'
import {
  Grid,
  ListItem,
  List,
  ListItemSecondaryAction,
  ListItemAvatar,
  Avatar,
  ListItemText,
  IconButton,
} from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'

type Props = {
  list: CountryType[]
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 752,
      width: 300,
      padding: '10px',
    },
    demo: {
      backgroundColor: theme.palette.background.paper,
    },
    avatar: {
      width: 60,
      marginRight: '20px',
    },
    amount: {
      color: `${theme.palette.common.black}`,
    },
  })
)

const CartList: FC<Props> = ({ list }) => {
  const classes = useStyles()
  const { themeColor } = useTheme()
  const dispatch = useDispatch()
  const removeCountryFromCart = (country: CountryType) => {
    dispatch(removeItemTCart(country))
  }
  const buildList = () => {
    if (list) {
      return list.map((country) => (
        <ListItem key={country.alpha2Code}>
          <ListItemAvatar>
            <Avatar
              className={classes.avatar}
              variant={'rounded'}
              src={country.flag}
              alt={`${country.name}'s Flag`}
            />
          </ListItemAvatar>
          <ListItemText>
            <Link
              style={{ color: themeColor.primary }}
              className="cart--item--title"
              to={`/countries/${country.alpha2Code}`}
            >
              {country.name}
            </Link>
          </ListItemText>
          <ListItemText className={classes.amount}>
            X {country.orderAmount}
          </ListItemText>
          <ListItemSecondaryAction>
            <IconButton
              edge="end"
              onClick={() => removeCountryFromCart(country)}
              aria-label="delete"
            >
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      ))
    }
    return null
  }
  return (
    <Grid className={classes.root} item xs={12} md={6}>
      <Grid item className={classes.demo}>
        <List>{buildList()}</List>
      </Grid>
    </Grid>
  )
}

export default CartList
