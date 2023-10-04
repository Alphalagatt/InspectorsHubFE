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
        },
        {
            title:"Valuation",
            questions:[
                {
                    question:"Valuation Details, Does the building have a valuation report on file?",
                    answers:[
                        {
                            type:"Radio_Options",
                            values:["Yes","Not Sighted"]
                        },
                        {
                            type:"Text"
                        }
                    ]
                },
                {
                    question:"Valuation sum",
                    answers:[
                        {
                            type:"Number"
                        }
                    ]
                },
                {
                    question:"Name of company that produced the report",
                    answers:[
                        {
                            type:"Text"
                        }
                    ]
                },
                {
                    question:"Date of the latest building valuation report on file",
                    answers:[
                        {
                            type:"Date"
                        }
                    ]
                },
                {
                    question:"Is there a land valuation report on file",
                    answers:[
                        {
                            type:"Radio_Options",
                            values:["Yes","Not Sighted"]
                        },
                        {
                            type:"attachment",
                            values:""
                        }
                    ]
                },
            ],
        },
        {
            title:"Financials",
            questions:[
                {
                    question:"COMPLEX - Administrative Fund",
                    answers:[
                        {
                            type:"Number"
                        }
                    ]
                },
                {
                    question:"COMPLEX - Capital Works Fund",
                    answers:[
                        {
                            type:"Number"
                        }
                    ]
                },
                {
                    question:"COMPLEX - Investment Fund",
                    answers:[
                        {
                            type:"Number"
                        }
                    ]
                },
                {
                    question:"COMPLEX - Arrears",
                    answers:[
                        {
                            type:"Number"
                        }
                    ]
                },
                {
                    question:"SUBJECT LOT - Administrative Fund",
                    answers:[
                        {
                            type:"Number"
                        }
                    ]
                },
                {
                    question:"SUBJECT LOT - Capital Works Fund",
                    answers:[
                        {
                            type:"Number"
                        }
                    ]
                },
                {
                    question:"SUBJECT LOT - What date are levies paid up to?",
                    answers:[
                        {
                            type:"Date"
                        }
                    ]
                },
                {
                    question:"SUBJECT LOT - What are the current arrears?",
                    answers:[
                        {
                            type:"Number"
                        }
                    ]
                },
            ]
        },
        {
            title:"Expenditure History",
            questions:[
                {
                    question:"Expenditure for the period to date",
                    answers:[
                        {
                            type:"Date"
                        },
                        {
                            type:"Text"
                        },
                        {
                            type:"attachment",
                            values:""
                        }
                    ]
                },
                {
                    question:"Expenditure for financial year ending?",
                    answers:[
                        {
                            type:"Date"
                        },
                        {
                            type:"Text"
                        },
                        {
                            type:"attachment",
                            values:""
                        }
                    ]
                },
                {
                    question:"Expenditure for financial year ending?",
                    answers:[
                        {
                            type:"Date"
                        },
                        {
                            type:"Text"
                        },
                        {
                            type:"attachment",
                            values:""
                        }
                    ]
                },
                {
                    question:"Expenditure for financial year ending?",
                    answers:[
                        {
                            type:"Date"
                        },
                        {
                            type:"Text"
                        },
                        {
                            type:"attachment",
                            values:""
                        }
                    ]
                },
                {
                    question:"Expenditure for financial year ending?",
                    answers:[
                        {
                            type:"Date"
                        },
                        {
                            type:"Text"
                        },
                        {
                            type:"attachment",
                            values:""
                        }
                    ]
                }
            ]
        },
        {
            title:"Special Levies",
            questions:[
                {
                    question:"Are there any CURRENT special levies for the SUBJECT LOT?",
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
                    question:"Is there any possibility of a special levy being imposed in the near FUTURE for the SUBJECT LOT?",
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
                    question:"Have there been any special levies in the PAST over the COMPLEX?",
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
                    question:"Are there any CURRENT special levies imposed over the COMPLEX?",
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
                    question:"Are there any special levies noted for the FUTURE for the COMPLEX?",
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
            title:"Compliance",
            questions:[
                {
                    question:"Is there a current ANNUAL FIRE SAFETY STATEMENT?",
                    answers:[
                        {
                            type:"Radio_Options",
                            values:["Yes","Not Sighted"]
                        },
                        {
                            type:"Date",
                        },
                        {
                            type:"attachment",
                            values:""
                        }
                    ]
                },
                {
                    question:"Is there a WORK HEALTH & SAFETY report on file?",
                    answers:[
                        {
                            type:"Radio_Options",
                            values:["Yes","Not Sighted"]
                        },
                        {
                            type:"Date",
                        },
                        {
                            type:"attachment",
                            values:""
                        }
                    ]
                },
                {
                    question:"Is there an ASBESTOS REPORT / Register & Management Plan on file?",
                    answers:[
                        {
                            type:"Radio_Options",
                            values:["Yes","Not Sighted"]
                        },
                        {
                            type:"Date",
                        },
                        {
                            type:"attachment",
                            values:""
                        }
                    ]
                },
                {
                    question:"Is a Termite / Timber Inspection report noted on file for the strata scheme?",
                    answers:[
                        {
                            type:"Radio_Options",
                            values:["Yes","Not Sighted"]
                        },
                        {
                            type:"Date",
                        },
                        {
                            type:"attachment",
                            values:""
                        }
                    ]
                },
                {
                    question:"Is there a 10 YEAR SINKING / CAPITAL WORKS FUND report on file?",
                    answers:[
                        {
                            type:"Radio_Options",
                            values:["Yes","Not Sighted"]
                        },
                        {
                            type:"Date",
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
            title:"By-Laws",
            questions:[
                {
                    question:"Do the records suggest that the BY-LAWS have been changed or added to in the past two years?",
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
                    question:"What is the attitude of the owner’s corporation for the keeping of animals?",
                    answers:[
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
                    question:"Is there any evidence that the keeping of an animal is prohibited / refused?",
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
                    question:"Is there any evidence that the keeping of an animal has been approved?",
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
                    question:"Were any exclusive use by-laws registered in the past two years affecting the subject Lot?",
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
                }
            ]
        },
        {
            title:"Certificate Of Title",
            questions:[
                {
                    question:"Was the Original Certificate of Title sighted?",
                    answers:[
                        {
                            type:"Radio_Options",
                            values:["Yes","No"]
                        },
                    ]
                },
                {
                    question:"The certificate of Title on file sighted has Edition Number",
                    answers:[
                        {
                            type:"Number",
                        },
                    ]
                },
                {
                    question:"Unit entitlement for this Lot Number",
                    answers:[
                        {
                            type:"Number",
                        },
                    ]
                },
                {
                    question:"Aggregate Entitlement for the complex",
                    answers:[
                        {
                            type:"Number",
                        },
                    ]
                },
                {
                    question:"Number of Units",
                    answers:[
                        {
                            type:"Number",
                        },
                    ]
                },
                {
                    question:"Number of Lots",
                    answers:[
                        {
                            type:"Number",
                        },
                    ]
                },
            ]
        },
        {
            title:"Strata Plan",
            questions:[
                {
                    question:"Was the Original Certificate of Title sighted?",
                    answers:[
                        {
                            type:"Radio_Options",
                            values:["Yes it is","No it is Not"]
                        },
                    ]
                },
                {
                    question:"Strata Plan registration date",
                    answers:[
                        {
                            type:"Date",
                        },
                    ]
                },
                {
                    question:"Internal Unit Size",
                    answers:[
                        {
                            type:"Text",
                        },
                    ]
                },
                {
                    question:"Balcony Size",
                    answers:[
                        {
                            type:"Text",
                        },
                    ]
                },
                {
                    question:"Car space / Garage area",
                    answers:[
                        {
                            type:"Text",
                        },
                    ]
                },
                {
                    question:"Storeroom area",
                    answers:[
                        {
                            type:"Text",
                        },
                    ]
                },
            ]
        },
        {
            title:"Strata Roll/Owners Details",
            questions:[
                {
                    question:"Does the strata roll comply with division 1 - Sections 176 to 181?",
                    answers:[
                        {
                            type:"Radio_Options",
                            values:["Yes","No"]
                        },
                    ]
                },
                {
                    question:"Has the Initial Period expired?",
                    answers:[
                        {
                            type:"Radio_Options",
                            values:["Yes","No"]
                        },
                    ]
                },
                {
                    question:"Lot Owners Name",
                    answers:[
                        {
                            type:"Text"
                        },
                    ]
                },
                {
                    question:"Does this lot have a registered mortgage?",
                    answers:[
                        {
                            type:"Radio_Options",
                            values:["Yes","None"]
                        },
                    ]
                },
                {
                    question:"Are the original owners details present within the strata roll?",
                    answers:[
                        {
                            type:"Radio_Options",
                            values:["Yes","Not Sighted"]
                        },
                    ]
                }
            ]
        },
        {
            title:"AGMs, SCMs and EGMs",
            questions:[
                {
                    question:"When was the last Annual General Meeting held?",
                    answers:[
                        {
                            type:"Date"
                        },
                    ]
                },
                {
                    question:"Admin Fund per annum adopted in the last AGM",
                    answers:[
                        {
                            type:"Number"
                        },
                    ]
                },
                {
                    question:"Capital Fund per annum adopted in the last AGM",
                    answers:[
                        {
                            type:"Number"
                        },
                    ]
                },
                {
                    question:"Auditor appointed",
                    answers:[
                        {
                            type:"Radio_Options",
                            values:["Yes","Not Sighted"]
                        },
                    ]
                },
                {
                    question:"Has insurance details been discussed?",
                    answers:[
                        {
                            type:"Radio_Options",
                            values:["Yes","Not Sighted"]
                        },
                    ]
                },
                {
                    question:"Date of the oldest AGM sighted within this search",
                    answers:[
                        {
                            type:"Date"
                        },
                    ]
                },
                {
                    question:"Date of most recent AGM / SCM / EGM minutes sighted",
                    answers:[
                        {
                            type:"Date"
                        },
                    ]
                },
                {
                    question:"Was the First AGM found in this search? (add date if noted)",
                    answers:[
                        {
                            type:"Radio_Options",
                            values:["Yes","Not Sighted"]
                        },
                        {
                            type:"Date"
                        },
                    ]
                },
                {
                    question:"Are any meetings of the Owners Corporation scheduled in the near future?",
                    answers:[
                        {
                            type:"Radio_Options",
                            values:["Yes","Not Sighted"]
                        },
                        {
                            type:"Date"
                        },
                    ]
                },
                {
                    question:"Executive Committee Members Are",
                    answers:[
                        {
                            type:"Text"
                        },
                    ]
                },
                {
                    question:"State of harmony within the scheme",
                    answers:[
                        {
                            type:"Radio_Options",
                            values:["Yes there have been concerns","No, there are no concerns"]
                        },
                        {
                            type:"Text"
                        },
                    ]
                }
            ]
        },
        {
            title:"Managing Agent",
            questions:[
                {
                    question:"Is there a Managing Agent/strata company representing the body corporate?",
                    answers:[
                        {
                            type:"Radio_Options",
                            values:["Yes","No, the complex is self managed"]
                        },
                    ]
                },
                {
                    question:"Books and records as presented were found to be in?",
                    answers:[
                        {
                            type:"Radio_Options",
                            values:["Good Order","Fair Order","Bad Order"]
                        },
                    ]
                }
            ]
        }
    ];

    return questions;

}

export default Data;