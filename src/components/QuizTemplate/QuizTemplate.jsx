import { useEffect, useRef, useState } from "react";
import Header from "../../Header";
import styles from "./QuizTemplate.module.css"

let INDEXES = [0,1,2,3];
    INDEXES = shuffleIndexes(INDEXES);

export default function QuizTemplate(props){
    const COLORS  = [
        "#50727B",
        "#9290C3",
        "#F6B17A",
        "#008170",
    ];

    let header_txt = "";
    let index = 0;
    let timer = useRef("");

    let [questionIndex , setIndex] = useState(0);
    let [seconds , setSeconds] = useState(45);
    
   
    
    if(props.data.topic === "Quotes"){
        header_txt = "Do you know who said these famous quotes?";
    }

   useEffect(() => {
   
    if (seconds != 0 ){
         timer.current = setInterval(() => {
            clearInterval(timer.current);
            setSeconds(--seconds)
            
        },1000)
    }
        
   }, [seconds])
  
   
    return(
        <div className={styles["main-container"]}>
            <Header/>
            <div className={styles["quiz-container"]}>
                <div className={styles.timer}><span>00</span> : <span>{(seconds <= 9)? "0" + seconds : seconds}</span></div>
                <p>{(header_txt) ? header_txt : ""}</p>
                <div className={styles.display}>
                    <h1 className="question">{props.data.questions[questionIndex]}</h1>
                </div>
                <div className={styles.answers} onClick={(e) => {
                    if (e.target.tagName === "BUTTON"){
                        let button = e.target;
                        let isCorrect = Boolean(e.target.getAttribute("correctansw"));

                       if (isCorrect){
                            button.style.backgroundColor = "green";
                            setTimeout(() => {
                                button.style.backgroundColor = `${COLORS[index]}`;
                                setIndex(++questionIndex)
                            },1000)
                       }
                       
                    }
                }}>
                    <button  
                        style={{backgroundColor : COLORS[index++]}} 
                        correctansw = {(props.data.answers[questionIndex][INDEXES[0]].correct) ? 1 : ""}>
                            <p>A.</p>
                            <p>{props.data.answers[questionIndex][INDEXES[0]].A}</p>
                    </button>

                    <button 
                        style={{backgroundColor : COLORS[index++]}}
                        correctansw = {(props.data.answers[questionIndex][INDEXES[1]].correct) ? 1 : ""}>
                            <p>B.</p>
                            <p>{props.data.answers[questionIndex][INDEXES[1]].A}</p>
                    </button>

                    <button 
                        style={{backgroundColor : COLORS[index++]}} 
                        correctansw = {(props.data.answers[questionIndex][INDEXES[2]].correct) ? 1 : ""}>
                            <p>C.</p>
                            <p>{props.data.answers[questionIndex][INDEXES[2]].A}</p>
                    </button>

                    <button 
                        style={{backgroundColor : COLORS[index++]} } 
                        correctansw = {(props.data.answers[questionIndex][INDEXES[3]].correct) ? 1 : ""}>
                            <p>D.</p>
                            <p>{props.data.answers[questionIndex][INDEXES[3]].A}</p>
                    </button>
                </div>
                <div className={styles.dir_buttons} onClick={(e) => {
                    
                    if(e.target.tagName === "BUTTON" || e.target.tagName === "P"){
                        if(e.target.textContent === '>' ){
                            if (questionIndex == props.data.questions.length - 1) return;
                            e.target.click();
                            setIndex(questionIndex++);
                            
                        } else {
                            if(questionIndex === 0) return;
                            e.target.click();
                            setIndex(questionIndex--);
                          
                            
                        }
                    }
                }}>
                    <button><p>{"<"}</p></button>
                    <p><span>{questionIndex + 1}</span>/10</p>
                    <button><p>{">"}</p></button>
                </div>
            </div>
        </div>
    )
}

//Shuffle Indexes to position answers randomized 
function shuffleIndexes(arr){

    for(let i = arr.length - 1 ; i>= 0 ; i--){
        let randIndex = Math.floor(Math.random() * arr.length);
        let tempIndex = arr[i];

        arr[i] = arr[randIndex];
        arr[randIndex] = tempIndex; 
    }

    return arr;
}



