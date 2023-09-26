import Data from "../Resources/data";
import InspQuestions from "./InspQuestion";
import {useState} from 'react';

function InspectionQuestions(props){
    const questions = Data();
    console.log(questions[0].title);
    const [counter,setCounter] = useState(0);
    let btnClick=()=>{
        if(!(counter>=questions.length)){
            setCounter(counter+1);
        }
        
    }
    let prevQBtnClick = ()=>{
        if(counter>0){
            setCounter(counter-1);
        }
    }

    return(
        <div>
            <div>
                <InspQuestions title={questions[counter].title} myQuestions={questions[counter].questions} /> 
                <button hidden={!(counter>0)} onClick={prevQBtnClick}>Previous Question</button>
                <button disabled={counter>=questions.length-1} onClick={btnClick}>Next Question</button>
                
            </div>
        </div>
    );
}

export default InspectionQuestions;