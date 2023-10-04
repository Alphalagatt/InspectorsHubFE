
function InspQuestions(props){

    return(
       
        <div>
            <h2 className="title">{props.title}</h2>
            {props.myQuestions.map(item=>{
                return <div className="questions">
                    {item.question}
                <div className="answers">
                    {item.answers.map(ans=>{
                        if(item.answers.length>1){
                        if(ans.type==="Radio_Options"){
                            return ans.values.map(radio_items=>{
                                return<div className="answers_radio">
                                    <input type="radio" id={radio_items} value={radio_items} name={item.question}/>
                                    <label for={radio_items}>{radio_items}</label><br></br>
                                </div>
                            })
                        }
                        
                        if(ans.type==="Text"){
                            return<button className="answers_btn">add text</button>
                        }
                        
                        if(ans.type==="attachment"){
                            return<button className="answers_btn">Attach Snapshot</button>
                        }
                        
                        if(ans.type==="Date"){
                            return<button className="answers_btn">Pick Date</button>
                        }else{
                            return "";
                        }
                    }else{
                        if(ans.type==="Radio_Options"){
                            return ans.values.map(radio_items=>{
                                
                                return<div>
                                    <input type="radio" id={radio_items} value={radio_items}/>
                                    <label for={radio_items}>{radio_items}</label><br></br>
                                </div>
                            })
                        }
                        
                        if(ans.type==="Text"){
                            return<input className="answers_input" type="text"/>
                        }else if(ans.type==="attachment"){
                            return<button className="answers_btn">Attach Snapshot</button>
                        }else if(ans.type==="Date"){
                            return<input className="answers_input" type="date"/>
                        }else if(ans.type==="Number"){
                            return<input className="answers_input" type="Number"/>
                            
                        } else {
                            return "";
                        }
                    }
                    })}   
                </div>    
                </div>;
            })}
            
        </div>
    )
    
}

export default InspQuestions;