import { createContext, useEffect, useState } from "react";
// import { food_list } from "../assets/assets/assets";
import { food_list } from "../assets/assets/assets";

export const StoreContext = createContext(null);

const StoreContectProvide = (props) =>{
    const[cartItems,setCartItems]= useState({})

    const addToCart = (itemid) =>{
        if(!cartItems[itemid]){
            setCartItems((prev)=>({...prev,[itemid]: 1}))
        }
        else {
            setCartItems((prev)=>({...prev,[itemid]: prev[itemid]+1}))
        }
    }

    const removeFromCart = (itemid) =>{
        setCartItems( (prev)=>({...prev,[itemid]:prev[itemid] -1}))
    }

    const getTotalCartAmount = () =>{
        let totalAmount = 0;
        for(const item in cartItems){
            if(cartItems[item] > 0){
                let itemInfo = food_list.find((product) => product._id === item);
                totalAmount += itemInfo.price*cartItems[item];
            }
        }
        return totalAmount;
    }

    const contextValue ={
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount
    }

    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )

}
export default StoreContectProvide;