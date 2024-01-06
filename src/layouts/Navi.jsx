import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { Dropdown, Label,Menu,Container } from "semantic-ui-react";
import ProductList from '../pages/ProductList'
import { Grid, GridColumn, GridRow } from 'semantic-ui-react'
import { Route, Routes } from 'react-router-dom'
import ProductDetail from '../pages/ProductDetail'
import CartDetail from '../pages/CartDetail'
import { ToastContainer } from 'react-toastify'
import ProductAdd from '../pages/ProductAdd'
import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
export default function Navi() {

    const { cartItems } = useSelector((state) => state.cart);
    const [isAuthenticated, setIsAuthenticated] = useState(true)
    let navigate = useNavigate()
  
    function handleSignOut() {
      setIsAuthenticated(false)
      navigate("/")
    }
  
    function handleSignIn() {
      setIsAuthenticated(true)
    }
  
    return (
      <div>
        <Menu inverted fixed="top">
          <Container>
            <Menu.Item name="home" />
            <Menu.Item name="messages" />
  
            <Menu.Menu position="right">
              {cartItems.length>0 && <CartSummary/>}
              {isAuthenticated 
              ?<SignedIn signOut={handleSignOut} /> 
              :<SignedOut signIn={handleSignIn}/>} 
            </Menu.Menu>
          </Container>
        </Menu>
      </div>
    );
  }