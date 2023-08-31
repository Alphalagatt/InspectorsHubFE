import TitleBar from "../Components/TitleBar";
//import {useState} from "react";
function Assigned(){
    
    return(
        <div className="pages">
            <TitleBar Title="My New Reports"/>
            <div className="inspection-page">
                <div className="inspection-subpage">
                    <div id="1" className="inspection-question inspection-question.active">
                        <div className="page-top">Previous</div>
                        Building Defect Matters
                        <a href="#2"> Next question</a>
                    </div>
                    <div id="2" className="inspection-question">
                        Are there any Major Building Defects or Major Remedial Works Noted?
                        <a href="#3">Next question</a>
                    </div>
                    <div id="3" className="inspection-question">
                        Was there any evidence of any claims under HomeOwners Building warranty  noted?
                        <a href="#4">Next Question</a>
                    </div>
                    <div id="4" className="inspection-question">
                        Was there any evidence of any other MAJOR REMEDIAL WORKS for the strata scheme for the PAST 2 YEARS excluding H.O.W. Building Defect Claims?
                        <a href="#5">Next Question</a>
                    </div>
                    <div id="5" className="inspection-question">
                        Was there any evidence of any other MAJOR REMEDIAL WORKS proposed for the strata scheme in the FUTURE excluding H.O.W Building Defects Claims?
                        <a href="#4">Previous Question</a>
                    </div>
                </div>
                <div className="inspection-subpage">Page2</div>
                <div className="inspection-subpage">Page3</div>
                <div className="inspection-subpage">Page4</div>
                <div className="inspection-subpage">Page5</div>
            </div>
        </div>
    );
};


export default Assigned;