import React, { FC } from 'react'
import { addItemTCart } from '../../redux/actions/cart'
import { useDispatch } from 'react-redux'
import { CountryType } from '../../types'
import { Button } from '@material-ui/core'

type Props = {
  country: CountryType
  hasAdded?: boolean
}
const AddButton: FC<Props> = ({ country, hasAdded = false }) => {
  const dispatch = useDispatch()
  const addToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    dispatch(addItemTCart(country))
  }
  return (
    <Button
      variant={'contained'}
      color={'primary'}
      disabled={hasAdded}
      onClick={addToCart}
    >
      {hasAdded ? 'Added' : 'Add'}
    </Button>
  )
}

export default AddButton
