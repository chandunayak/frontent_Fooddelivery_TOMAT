import React from 'react'
import './ExploreMenu.css';

import {menu_list} from '../../assets/assets/assets'

const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className='explore-menu' id="explore-menu">
        
            <h1>Explore Our Menu</h1>
            <p className='explore-menu-text'>choose from a deserve menu featuring a delecated array of dishes.
                 Our mission is to satisfy the customer best meals in your Website.</p>
                 <div className="explore-menu-list">
                    {menu_list.map( (item,index) =>{
                        return (
                            <div  onClick={() => setCategory(prev => prev === item.menu_name?"All":item.menu_name)} 
                            key={index} className="explore-menu-list-item">
                                <img src={item.menu_image} alt="" className={category === item.menu_name?"active":""}/>
                                <p>{item.menu_name}</p>
                            </div>
                        )
                    })}
                 </div>
                 <hr />

    </div>
  )
}

export default ExploreMenu