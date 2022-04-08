import React, { Component, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Login';
import "./İndex.css"
import data from '../data/data';    
import { useTimer } from 'react-timer-hook';
import Header from './Header';
import HomePageHeader from './HomePageHeader';
import HomePageFooter from './HomePageFooter';

const İndex = () => {
    const [currentQuestionNumber,setCurrentQuestionNumber] = useState(0);
    const [lastQuestions , setLastQuestions] = useState([]);
    const [lastQuestionsAnswers , setLastQuestionsAnswers] = useState([]);
    const [currentQuestion,setCurrentQuestion] = useState({});
    const [tempAnswer,setTempAnswer] = useState(null);
    const [prograssbarnumber, setprograssBarNumber] = useState(0);

    const MyTimer = ({ expiryTimestamp }) => {
        const {
          seconds,
          minutes,
          hours,
    } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });

    return (
        <div style={{textAlign: 'center'}}>
          <div >
            <span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
          </div>
          
        </div>
      );
    }
      


    const AnswerQuestion = (slug) => {
        setTempAnswer(slug);
    }

    useEffect(() => {
        if(lastQuestionsAnswers.find((item,i) => i == currentQuestionNumber)){
            setTempAnswer(lastQuestionsAnswers.find((item,i) => i == currentQuestionNumber));
        }
        setCurrentQuestion(data.find((item,key) => key==currentQuestionNumber));
        console.log(currentQuestionNumber)
    }, [currentQuestionNumber])



 
    useEffect(() => {
        if(lastQuestionsAnswers.find((item,i) => i == prograssbarnumber)){
            setTempAnswer(lastQuestionsAnswers.find((item,i) => i == prograssbarnumber));
        }
        setCurrentQuestion(data.find((item,key) => key==prograssbarnumber));
    }, [prograssbarnumber])



    const changeQuestion = (param1) => {
        if(param1 == 'next'){
          
            let lastAnswerChecked = lastQuestionsAnswers.find((item,i) => i === currentQuestionNumber);
            if(lastAnswerChecked){
                let newQuestionsAnswers = lastQuestionsAnswers.map((item,i) => {
                    if(i === currentQuestionNumber){
                        return tempAnswer;
                    }else{
                        return item;
                    }
                });
                setLastQuestions([...lastQuestions,currentQuestion]);
                setLastQuestionsAnswers(newQuestionsAnswers);
                setCurrentQuestionNumber(currentQuestionNumber + 1);
                setprograssBarNumber(prograssbarnumber + 1);


            }else{
                setLastQuestions([...lastQuestions,currentQuestion]);
                setLastQuestionsAnswers([...lastQuestionsAnswers,tempAnswer]);
                setCurrentQuestionNumber(currentQuestionNumber + 1);
                setprograssBarNumber(prograssbarnumber + 1);
            }
        }else{
            setCurrentQuestionNumber(currentQuestionNumber - 1);
            setprograssBarNumber(prograssbarnumber - 1);
        }

        setTempAnswer(null);
    }

    const time = new Date();
  time.setSeconds(time.getSeconds() + 5100); // 10 minutes timer
    return (
<div>                  
           <article className='article mx-auto' id='ortala' >
                <div className='article container'>
                    <div className='article row'>
                        <div className='module col-lg-12 col-md-12 col-sm-12' id='modular-questions'></div>
                        <div className='module col-lg-12 col-md-12 col-sm-12' id='module-test'>
                                <div className='test-title'>
                                    <span>{currentQuestionNumber+1}</span>
                                    <div>
                                    <MyTimer expiryTimestamp={time} />
                                    </div>
                                    <HomePageHeader indexTitle={{title:"Lütfen sağlıklı bir değerlendirme için bilmediğiniz soruları boş bırakınız"}} /> 
                                </div>
                                <div className='test-description'>
                                    <p>&nbsp;</p>
                                    <p style={{float:"left"}}>
                                            Choose the best answer which completes the sentence.       
                                    </p>    
                                    <p>&nbsp;</p>    
                                    <p>&nbsp;</p>    
                                </div>
                                <div>
                                    <div className='test-question'>
                                        <p>{currentQuestion.question}</p>
                                    </div>
                                    {
                                        currentQuestion.answers ? 
                                        currentQuestion.answers.map((answer,i) => {
                                            return(
                                                <div key={i} className='test-answers'>

                                                    <input onClick={() => AnswerQuestion(answer.slug)} checked={tempAnswer == answer.slug} type="radio" name='answerid' id={answer.slug}></input>
                                                    <label style={{marginLeft:"5px", marginTop:"-5px"}} htmlFor={answer.slug} id='c20' className='title-radio'>{answer.answer}</label>  <br/> 

                                                </div> 
                                            )
                                        })

                                        : ''
                                    }
                                </div>
                           
                                <div className='test-buttons'>
                                    <button onClick={() => changeQuestion('prev')} className='buttons'><span> <i className="fa-solid fa-angles-left"></i> ÖNCEKİ</span> </button>
                                    <button onClick={() => changeQuestion('next')} className='buttons'><span>SONRAKİ <i className="fa-solid fa-angles-right"></i> </span></button>
                                </div>

                                <div className='resultmessage'>
                                    <div></div>
                                </div>

                                <div className='test-progressbar'>
                                    <p>
                                        {prograssbarnumber} / {data.length}
                                    </p>
                                   
                                    <div style={{height:'10px',width:'100%'}}>
                                        <div style={{height:'8px',width:`${(((currentQuestionNumber + 1) / data.length) * 100) + "%"}`,background:'#4DA4F0'}}></div>
                                    </div>
                                </div>

                                <HomePageFooter footText={{textBottom:"Lütfen sağlıklı bir değerlendirme için bilmediğiniz soruları boş bırakınız"}} footBox={{textBox:"Katıldığınız online sınav İstanbul Teknik Üniversitesi Genel İngilizce Kursu için seviye belirleme niteliğindedir. Sınav sonucunda belirlenen seviyeniz katılmanız gereken kurs programının seviyesini göstermektedir."}} />
                        </div>
                    </div>
                    <button className='btn btn-danger shadow mx-auto me-1 mt-4' id='i-button' type='submit'><Link style={{color:"white"}} to="./Finish">TESTİ BİTİR</Link></button>
                </div>
           </article>
        </div>
      )
}   
export default İndex;