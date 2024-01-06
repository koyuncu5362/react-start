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
export default function Dashboard() {

  
    return (
      <div>
        <ToastContainer position="bottom-left"/>
        <Grid >
          <GridRow>
            <GridColumn width={6}>
              <Categories>
  
              </Categories>
            </GridColumn>
            <GridColumn width={10}>
              <Routes>
                <Route exact path="/" Component={ProductList}/>
                <Route exect path="/products" Component={ProductList}/>
                <Route path="/products/:title/:id" Component={ProductDetail}/>
                <Route path="/cart" Component={CartDetail}/>
                <Route path="/product/add" Component={ProductAdd}/>
              </Routes>
            </GridColumn>
          </GridRow>
        </Grid>
    </div>
    )
  }