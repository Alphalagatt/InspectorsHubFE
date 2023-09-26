import InspectionQuestions from "../Components/InspectionQuestions";
import TitleBar from "../Components/TitleBar";
function Assigned(){
    
    return(
        <div className="pages ">
            <TitleBar Title="My New Reports"/>
              <InspectionQuestions />
        </div>
    );
};


export default Assigned;