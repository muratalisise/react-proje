import React, { Component, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Login';
import "./İndex.css"
import data from '../data/data';    


const İndex = () => {
    const [currentQuestionNumber,setCurrentQuestionNumber] = useState(0);
    const [lastQuestions , setLastQuestions] = useState([]);
    const [lastQuestionsAnswers , setLastQuestionsAnswers] = useState([]);
    const [currentQuestion,setCurrentQuestion] = useState({});
    const [tempAnswer,setTempAnswer] = useState(null);
    const [prograssbarnumber, setprograssBarNumber] = useState(0);
    const [timer, setTimer] = useState(0);


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



    useEffect(() => {
        setInterval(() => {
          setTimer(timer => timer + 1);
        }, 1000);
      }, [])


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

    return (
<div>                  
           <article className='article mx-auto' id='ortala' >
                <div className='article container'>
                    <div className='article row'>
                        <div className='module col-lg-12 col-md-12 col-sm-12' id='modular-questions'></div>
                        <div className='module col-lg-12 col-md-12 col-sm-12  ' id='module-test'>

                                <div className='test-title'>
                                    <span>{currentQuestionNumber+1}</span>
                                    <div>
                                            {timer}    
                                    </div>
                                    <p>Lütfen sağlıklı bir değerlendirme için bilmediğiniz soruları boş bırakınız</p>
                                </div>
                               

                            
                                <div className='test-description'>
                                    <p>&nbsp;</p>
                                    <p>
                                        <strong className='text-box'>Choose the best answer which completes the sentence.</strong>    
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
                                     {/* <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width:"1.53846153846%"}} ></div> */}
                                        <div style={{height:'8px',width:`${(((currentQuestionNumber + 1) / data.length) * 100) + "%"}`,background:'#4DA4F0'}}></div>
                                    </div>
                                </div>
                                
                               

                                <div className='test-note'>
                                Lütfen sağlıklı bir değerlendirme için bilmediğiniz soruları boş bırakınız    
                                </div>
                            <br />
                            <hr />
                            <div className='box'>
                            Katıldığınız online sınav İstanbul Teknik Üniversitesi Genel İngilizce Kursu için seviye belirleme niteliğindedir. Sınav sonucunda belirlenen seviyeniz katılmanız gereken kurs programının seviyesini göstermektedir.
                            </div>
                        </div>
                    </div>
                    <button className='btn btn-danger shadow mx-auto me-1 mt-4' id='i-button' type='submit'><Link style={{color:"white"}} to="./Finish">TESTİ BİTİR</Link></button>
                </div>
           </article>
        </div>
      )
}   
export default İndex;