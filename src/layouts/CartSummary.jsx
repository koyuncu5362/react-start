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
export default function CartSummary() {
    const { cartItems } = useSelector((state) => state.cart);
  
    return (
      <div>
        <Dropdown item text="Cart Sum">
  
          <Dropdown.Menu>
            {cartItems.map((cartItem) => (
  
              <Dropdown.Item key={cartItem.product.id}>
                {cartItem.product.title}
                <Label>
                  {cartItem.quantity}
                </Label>
  
              </Dropdown.Item>
            ))}
            <Dropdown.Divider />
            <Dropdown.Item as={NavLink} to="/Cart">
              Sepete Git
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    );
  }