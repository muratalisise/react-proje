import React, { Component, useState } from 'react'
import { Link } from 'react-router-dom'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./İndex.css"

import İndex from './İndex';





const Login = () => {

  

    return (
        <div>
            <article className='l-article mx-auto my-auto'>
                <div className='l-box mx-auto'>
                    <h1 className='l-baslik'>TEST</h1>
                    <div className='l-line mx-auto'></div>
                    <p className='l-text mt-3'>Teste başlamak için lütfen aşağıda yer alan alanları eksiksiz bir şekilde doldurunuz.</p>
                </div>
                <div className='l-box2 mx-auto text-start'>
                  <form>
                <div className='row '>
                    <div className='col-md-6'> 
                          <label htmlFor='name'>Ad Soyad</label> <br />
                          <input className='form-control l-inpt' name='name' type="text"></input> <br />

                          <label htmlFor='email'>E-mail</label> <br />
                          <input className='form-control l-inpt' name='email' type="text"></input> <br />

                          <label htmlFor='phone'>Telefon</label> <br />
                          <input className='form-control l-inpt' name='phone' type="text"  pattern="[0-9]{4}-[0-9]{3}-[0-9]{2}-[0-9]{2}" placeholder='0___-___-__-__'></input> <br />
                    </div>

                    <div className='col-md-6'> 
                          <label>Çalıştığınız Pozisyon</label> <br />
                          <select className="form-select l-inpt" aria-label="Default select example">
                            <option selected>Seçiniz...</option>
                            <option value="1">Çalışmıyor</option>
                            <option value="2">Öğrenci</option>
                            <option value="3">Öğretmen</option>
                            <option value="4">İşçi</option>
                            <option value="5">Mühendis</option>
                          </select>
                          <label className='mt-4'>Çalıştığınız Sektör</label> <br />
                          <select className="form-select l-inpt" aria-label="Default select example">
                            <option selected>Seçiniz...</option>
                            <option value="1">Satış/TeleSatış</option>
                            <option value="2">Muhasebe/Finans</option>
                            <option value="3">Bilişim/Telekom</option>
                            <option value="3">Sağlık</option>
                            <option value="3">Yapı/Mimar/İnşaat</option>
                          </select>                   
                      </div>
                      
                  <button className='l-button btn mx-auto mt-4' type='submit'><Link style={{color:"white"}} to="/">TESTE BAŞLAYIN</Link></button>
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
