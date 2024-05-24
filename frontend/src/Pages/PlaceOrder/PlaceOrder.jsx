import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../Context/StoreContext'

const PlaceOrder = () => {
  const {getTotalCartAmount} = useContext(StoreContext)
  return (
    <form  className="place-order">
      <div className="place-order-left">
        <p className='title'>Delivery Information</p>
        <div className="multi-fields">
          <input type="text" placeholder='Frist-Name' />
          <input type="text" placeholder='Last-Name' />
        </div>
        <input type="email" placeholder='E-mail address' />
        <input type="text" placeholder='Street' />
        <div className="multi-fields">
          <input type="text" placeholder='City' />
          <input type="text" placeholder='State' />
        </div>
        <div className="multi-fields">
          <input type="text" placeholder='Zip-code' />
          <input type="text" placeholder='Country' />
        </div>
        <input type="text"placeholder='Phone Number' />
      </div>

      <div className="place-order-right">
       <div className="cart-total">
          <h2>Cart Totals</h2>
          <div className="">
          <div className="cart-details">
              <p>Sub Total</p>
              <p>$ {getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-details">
              <p>Delivery Free</p>
              <p>$ {getTotalCartAmount() === 0 ? 0 : 2}</p>
            </div>
            <hr />
            <div className="cart-details">
              <b>Total</b>
              <b>$ {getTotalCartAmount === 0 ? 0 :  getTotalCartAmount() + 2}</b>
            </div>
            </div>
            <button>PROCEED TO PAYMENT</button>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder