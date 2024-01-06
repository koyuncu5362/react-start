
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
import React from 'react'
import { Dropdown,Menu, Image } from 'semantic-ui-react'

export default function SignedIn({signOut}) {
  return (
    <div>
        <Menu.Item>
            <Dropdown pointing="top left" text="Muhammed" >
              <Dropdown.Menu>
                <Dropdown.Item text="İnformation" icon="info"/>
                <Dropdown.Item text="Çıkış Yap" icon="sign-out" onClick={signOut}/>
              </Dropdown.Menu>
            </Dropdown>
        </Menu.Item>
    </div>
  )
}