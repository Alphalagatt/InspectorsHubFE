
function InspQuestions(props){

    return(
        <div>
            <h2>{props.title}</h2>
            {props.myQuestions.map(item=>{
                return <div>
                    {item.question}
                <div>
                    {item.answers.map(ans=>{
                        if(item.answers.length>1){
                        if(ans.type==="Radio_Options"){
                            return ans.values.map(radio_items=>{
                                return<div>
                                    <input type="radio" id={radio_items} value={radio_items}/>
                                    <label for={radio_items}>{radio_items}</label><br></br>
                                </div>
                            })
                        }
                        
                        if(ans.type==="Text"){
                            return<button>add text</button>
                        }
                        
                        if(ans.type==="attachment"){
                            return<button>Attach Snapshot</button>
                        }
                        
                        if(ans.type==="Date"){
                            return<button>Pick Date</button>
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
                            return<input type="text"/>
                        }else if(ans.type==="attachment"){
                            return<button>Attach Snapshot</button>
                        }else if(ans.type==="Date"){
                            return<input type="date"/>
                        }else if(ans.type==="Number"){
                            return<input type="Number"/>
                            
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