function Data(){
    const questions = [
        {
            title:"Building Defect Matters",
            questions:[
                {
                    question: "Are there any MAJOR BUILDING DEFECTS or MAJOR REMEDIAL WORKS noted?",
                    answers:[
                        {
                            type:"Radio_Options",
                            values:["Yes","Not Sighted"]
                        },
                        {
                            type:"Text",
                        },
                        {
                            type:"attachment",
                            values:""
                        }
                    ]
                },
                {
                    question: "Was there any evidence of any claims under HOMEOWNERS BUILDING WARRANTY noted?",
                    answers:[
                        {
                            type:"Radio_Options",
                            values:["Yes","Not Sighted"]
                        },
                        {
                            type:"Text",
                        },
                        {
                            type:"attachment",
                            values:""
                        }
                    ]
                },
                {
                    question: "Was there any evidence of any other MAJOR REMEDIAL WORKS for the strata scheme for the PAST 2 YEARS excluding H.O.W. Building Defect Claims?",
                    answers:[
                        {
                            type:"Radio_Options",
                            values:["Yes","Not Sighted"]
                        },
                        {
                            type:"Text",
                        },
                        {
                            type:"attachment",
                            values:""
                        }
                    ]
                },
                {
                    question: "Was there any evidence of any other MAJOR REMEDIAL WORKS proposed for the strata scheme in the FUTURE excluding H.O.W Building Defects Claims?",
                    answers:[
                        {
                            type:"Radio_Options",
                            values:["Yes","Not Sighted"]
                        },
                        {
                            type:"Text",
                        },
                        {
                            type:"attachment",
                            values:""
                        }
                    ]
                },
                
                
                
                
            ]
        },
        {
            title:"Insurance",
            questions:[
                {
                    question: "Insurance Premium Amount?",
                    answers:[
                        {
                            type:"Number",
                        }
                    ]
                },
                {
                    question: "Insurance Premium Due Date?",
                    answers:[
                        {
                            type:"Date",
                        }
                    ]
                },
                {
                    question: "Sum Insured",
                    answers:[
                        {
                            type:"Number",
                        }
                    ]
                },
                {
                    question: "Name of the insurance company providing the insurance:",
                    answers:[
                        {
                            type:"Text",
                        }
                    ]
                },
                {
                    question:  "Name of the insurance broker",
                    answers:[
                        {
                            type:"Text",
                        }
                    ]
                },
                {
                    question: "Insurance Policy Number?",
                    answers:[
                        {
                            type:"Text",
                        }
                    ]
                },
                {
                    question: "Have there been any insurance claims exceeding $2,000 in the last two years?",
                    answers:[
                        {
                            type:"Radio_Options",
                            values:["Yes","Not Sighted"]
                        },
                        {
                            type:"Text",
                        },
                        {
                            type:"attachment",
                            values:""
                        }
                    ]
                },
                {
                    question: "Has the copy of the insurance policy been attached to this report?",
                    answers:[
                        {
                            type:"Radio_Options",
                            values:["Yes","Not Sighted"]
                        },
                        {
                            type:"Text"
                        }
                    ]
                }
                
            ]
        }
    ];

    return questions;

}

export default Data;