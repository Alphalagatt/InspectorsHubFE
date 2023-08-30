import TitleBar from "../Components/TitleBar";

function Assigned(){
    
    return(
        <div className="pages">
            <TitleBar Title="My New Reports"/>
            <div className="inspection-page">
                <div className="inspection-subpage">Page1</div>
                <div className="inspection-subpage">Page2</div>
                <div className="inspection-subpage">Page3</div>
                <div className="inspection-subpage">Page4</div>
                <div className="inspection-subpage">Page5</div>
            </div>
        </div>
    );
};


export default Assigned;