import Data from "../Resources/data";
import InspQuestions from "./InspQuestion";
import {useState} from 'react';

function InspectionQuestions(props){
    const questions = Data();
    console.log(questions[0].title);
    const [counter,setCounter] = useState(0);

    let btnClick =()=>{
        if(!(counter>=questions.length)){
            setCounter(counter+1);
        }
        
    };

    let prevQBtnClick = ()=>{
        if(counter>0){
            setCounter(counter-1);
        }
    };

    let NavigatorClick = (val)=>{
        setCounter(val);
    };

    return(
        <div className="Question_Container">
            <div className="Question_Nav">
                {questions.map((item, key)=>{
                    return <div className={key===counter?"Question_Nav_Items_selected":"Question_Nav_Items"} onClick={()=>{NavigatorClick(key)}}>{item.title}</div>
                })}
            </div>
            <div className="Question_Body">
                <InspQuestions title={questions[counter].title} myQuestions={questions[counter].questions} /> 
                <div className="nav_btn_cont">
                <button className="nav_btn" hidden={!(counter>0)} onClick={prevQBtnClick}>Previous Question</button>
                <button className="nav_btn" disabled={counter>=questions.length-1} onClick={btnClick}>Next Question</button>
                </div>
            </div>
        </div>
    );
}

export default InspectionQuestions;