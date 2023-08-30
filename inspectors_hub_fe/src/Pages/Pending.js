import { useEffect, useState } from "react";
import TitleBar from "../Components/TitleBar";
import axios from "axios";
import TableFrame from "../Components/TableFrame";


function Pending(){
    const [error, setError] = useState(null);
    const [isLoading,setIsLoading] = useState(true);
    const [myData,setData] = useState(null);
    useEffect(()=>{
        axios.post("http://localhost:5000/data",'{"Job_Number": 100223,"Strata_Plan": 14373,"Lot_Number": 34,"Date_Of_Inspection": "21/08/2023","Property_Address": "4 Ward Ave Potts Point NSW 2011","Inspectors_Name": "Alpha Lagatt"}').then(res=>{
            setIsLoading(false);
            setData(JSON.stringify(res.data));
        }).catch(err=>{
            setIsLoading(false);
            setError(err.message);
        })
    },[]);
    if(isLoading){
        return(
            <div className="pages">
                <TitleBar Title="Reports In Progress"/>
                Loading...
            </div>
        );
    }else if(error && !myData){
        return(
            <div className="pages">
                <TitleBar Title="Reports In Progress"/>
                {error}
            </div>
        );
    }else if(!isLoading && !error){
        return(
            <div className="pages">
                <TitleBar Title="Reports In Progress"/>    
                <TableFrame myData={JSON.parse(myData)} />
            </div>
        );
    };
};

export default Pending;