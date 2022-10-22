import { useContext } from 'react'

import { CartContext } from '../../contexts/cart.context'

import { CartIconConainer, ShoppingIcon, ItemCount } from './cart-icon.styles'


const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext)

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen)

  return (
    <CartIconConainer onClick={toggleIsCartOpen}>
      <ShoppingIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconConainer>
  )
}

export default CartIcon