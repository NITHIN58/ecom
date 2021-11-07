import React from 'react'
import { Button } from './NavBar/Button'
import Navbar from './NavBar/Navbar'
import { Link  } from 'react-router-dom'
import { Route } from 'react-router'
import AddProduct from '../AddProduct'
export default function Header() {
    return (
        <div>
            {/* <p1>header</p1>
           <img src="" alt="logo" />
           <p1>Welcome #name</p1>
           <button>Login</button>
           */}
           <Navbar></Navbar>
          
               <Route path="/addproduct">
                    <AddProduct/>
               </Route>
          
        </div>
    )
}
