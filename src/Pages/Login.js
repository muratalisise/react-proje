import React, { Component, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./İndex.css"
import İndex from './İndex';


const Login = () => {

            
          const [formValues, setFormValue] = useState({
            name : '',
            email : '',
            phone : '',
            work_position : null,
            work_sector : null
          });
          const [nameErr, setNameErr] = useState("");

          const myForm = (e) => {
            e.preventDefault();
            formValidation();
          }

          const formValidation = () => {

            const nameErr = {};
            let isValid = true;

            if(formValues.name == ''){
              alert('Lütfen isminizi giriniz.');
            }

            if(formValues.email == ''){
              alert('Lütfen E-mail giriniz.');
            }

            if(formValues.phone == ''){
              alert('Lütfen phone giriniz.');
            }

            if(formValues.work_position == ''){
              alert('Lütfen çalıştığınız Pozisyon giriniz.');
            }

            if(formValues.work_sector == ''){
              alert('Lütfen çalıştığınız sektörü giriniz');
            }

            setNameErr(nameErr);
            return isValid;

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
                <div className='l-box mx-auto'>
                    <h1 className='l-baslik'>TEST</h1>
                    <div className='l-line mx-auto'></div>
                    <p className='l-text mt-3'>Teste başlamak için lütfen aşağıda yer alan alanları eksiksiz bir şekilde doldurunuz.</p>
                </div>
                <div className='l-box2 mx-auto text-start'>
                  <form >
                <div className='row '>
                    <div className='col-md-6'> 
                          <label htmlFor='name'>Ad Soyad</label> <br />
                          <input className='form-control l-inpt' id='name'  name='name' type="text" value={formValues.name} onChange={(e) => {formValueChange('name',e.target.value)}}   ></input> <br />
                            {
                              Object.keys(nameErr).map((key) => {
                                return <div style={{color:"red"}}> {nameErr[key]} </div>
                              })
                            }
                          <label htmlFor='email'>E-mail</label> <br />
                          <input className='form-control l-inpt' value={formValues.email} onChange={(e) => formValueChange('email',e.target.value)} id='email' name='email' type="email"></input> <br />

                          <label htmlFor='phone'>Telefon</label> <br />
                          <input className='form-control l-inpt' id='phone' name='phone' value={formValues.phone} onChange={(e) => formValueChange('phone',e.target.value)} type="text"  pattern="[0-9]{4}-[0-9]{3}-[0-9]{2}-[0-9]{2}" placeholder='0___-___-__-__'></input> <br />
                    </div>

                    <div className='col-md-6'> 
                          <label>Çalıştığınız Pozisyon</label> <br />
                          <select className="form-select l-inpt" id='work_position' aria-label="Default select example" value={formValues.work_position} onChange={(e)=> formValueChange("work_position",e.target.value)}>
                            <option selected>Seçiniz...</option>
                            <option value="1">Çalışmıyor</option>
                            <option value="2">Öğrenci</option>
                            <option value="3">Öğretmen</option>
                            <option value="4">İşçi</option>
                            <option value="5">Mühendis</option>
                          </select>
                          <label className='mt-4'>Çalıştığınız Sektör</label> <br />
                          <select className="form-select l-inpt" id='work_sector' aria-label="Default select example" value={formValues.work_sector} onChange={(e) => formValueChange("work_sector",e.target.value)}>
                            <option selected>Seçiniz...</option>
                            <option value="1">Satış/TeleSatış</option>
                            <option value="2">Muhasebe/Finans</option>
                            <option value="3">Bilişim/Telekom</option>
                            <option value="3">Sağlık</option>
                            <option value="3">Yapı/Mimar/İnşaat</option>
                          </select>                   
                      </div>
                      
                  <button className='l-button btn mx-auto mt-4' type='submit' onClick={myForm} style={{color:"white"}}> <Link style={{color:"white"}} to="/">TESTE BAŞLAYIN</Link>  </button>
                </div>
                </form>
                    <hr></hr>
                  <div className='box'>
                  Katıldığınız online sınav İstanbul Teknik Üniversitesi Genel İngilizce Kursu için seviye belirleme niteliğindedir. Sınav sonucunda belirlenen seviyeniz katılmanız gereken kurs programının seviyesini göstermektedir.
                  </div>

                </div>
            </article>
        </div>
      )
}

export default Login;
