import React from 'react'
import * as Yup from "yup";
import { Button } from "semantic-ui-react";
import { Form, Formik } from "formik";
import TobetoTextInput from "../utilities/customFormControls/TobetoTextInput";
import { useParams } from "react-router-dom";
import { Card, Button, Image } from "semantic-ui-react";
import ProductService from "../services/productService";


export default function ProductAdd() {


    const initialValues = {
      title: "",
      price: 39,
    };
    const schema = Yup.object({
      title: Yup.string().required("Adı"),
      price: Yup.number().required("Fiyatı"),
    });
  
    return (
      <div>
        <Formik initialValues={initialValues} 
        validationSchema={schema}
        onSubmit={(values)=>{
          console.log(values)
        }}
        >
          <Form className="ui form">
              <TobetoTextInput name="title" />
              <TobetoTextInput name="price" />
            <Button type="submit">Ekle</Button>
          </Form>
        </Formik>
      </div>
    );
  }