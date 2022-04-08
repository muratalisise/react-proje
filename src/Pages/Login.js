import React, { Component, useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./İndex.css"
import İndex from './İndex';
import logdata from '../data/Login-data';
import Header from './Header';
import Article from './Article';
import Footer from './Footer';


const Login = () => {
      const [errors , setErrors] = useState([]);
          const [formValues, setFormValue] = useState({
            name : '',
            email : '',
            phone : '',
            work_position : null,
            work_sector : null
          });
          const navigate = useNavigate();

          const myForm = (e) => {
            e.preventDefault();
            let errorsx = [];
            if(formValues.name == '' || formValues.name == null){ 
               errorsx = [
                ...errorsx,
                "name"
              ]
            }

            if(formValues.email == '' || formValues.email == null){
              errorsx = [
                ...errorsx,
                "email",
              ]
              
            }

            if(formValues.phone == ''){
              errorsx = [
                ...errorsx,
                "phone",
              ]
            }

            if(formValues.work_position == ''){
              setErrors([
                ...errors,
                "work_position"
              ])
            }

            if(formValues.work_sector == ''){
              setErrors([
                ...errors,
                "work_sector"
              ])
            }
            if(errorsx.length == 0){
              navigate('/')
            }else{
              setErrors(errorsx);
            }
          }

  const formValueChange = (column,value) => {
    setFormValue({
      ...formValues,
      [column] : value
    })
  }

    return (
        <div>
            <article className='l-article mx-auto my-auto'>
                <Header data={{title:"Test",description:"Teste başlamak için lütfen aşağıda yer alan alanları eksiksiz bir şekilde doldurunuz."}}/>
                <div className='l-box2 mx-auto text-start'>
                  <form>

                <div className='row '>
                    <div className='col-md-6'> 
                          <Article formEleman={{formTitle:"Ad Soyad"}}/>
                          <input className={["form-control l-inpt",errors.includes("email") == true ? "error" : ""].join(' ')} id='name'  name='name' type="text" value={formValues.name} onChange={(e) => {formValueChange('name',e.target.value)}}   ></input> <br />
                            
                          <Article errorCheck={errors.includes("email") ? true : false} formEleman={{formEmail:"E-mail"}}/>
                          <input className={["form-control l-inpt",errors.includes("email") == true ? "error" : ""].join(' ')} value={formValues.email} onChange={(e) => formValueChange('email',e.target.value)} id='email' name='email' type="email"></input> <br />

                          <Article formEleman={{formPhone:"Telefon"}}/>
                          <input className={["form-control l-inpt",errors.includes("email") == true ? "error" : ""].join(' ')} id='phone' name='phone' value={formValues.phone} onChange={(e) => formValueChange('phone',e.target.value)} type="text"  pattern="[0-9]{4}-[0-9]{3}-[0-9]{2}-[0-9]{2}" placeholder='0___-___-__-__'></input> <br />
                    </div>

                    <div className='col-md-6'> 
                            {
                              logdata.map((item) => {
                                return(
                                  <div  style={item.style}>
                                    <label className=''>{item.title}</label> <br />
                                    <select className={["form-select l-inpt",errors.includes("email") == true ? "error" : ""].join(' ')} id='work_position' aria-label="Default select example" value={formValues.work_position} onChange={(e)=> formValueChange("work_position",e.target.value)}>
                                      { 
                                        item.selectValues.map((selectValue) => {
                                          return(
                                            <option value={selectValue.value}>{selectValue.showValue}</option>
                                          )
                                        })
                                      }
                                    </select>
                                  </div>
                                )
                              })
                            }          
                      </div>
                      <button className='l-button btn btn-lg mx-auto' onClick={(e) => {myForm(e)}}>TESTE BAŞLAYIN </button>
                  </div>
                </form>
                    <hr></hr>
                    <Footer footBox={{text:"Katıldığınız online sınav İstanbul Teknik Üniversitesi Genel İngilizce Kursu için seviye belirleme niteliğindedir. Sınav sonucunda belirlenen seviyeniz katılmanız gereken kurs programının seviyesini göstermektedir."}} />
                </div>
            </article>
        </div>
      )
}

export default Login;
