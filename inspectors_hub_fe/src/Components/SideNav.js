import { NavLink } from "react-router-dom";

function SideNav(){
    return(
        <div className="SideNav">
            <img src="https://www.thepropertyinspectors.com.au/wp-content/uploads/2014/05/tpi4.png" alt="no img"/>
            <div className="links-cont">
                <div className="links-item"><NavLink activeClassName="Links-active" className={({isActive, isPending})=> isActive?"Links-active" : isPending?"Links":"Links"} to="/">Dashboard</NavLink></div>
                <div className="links-item"><NavLink activeClassName="Links-active" className={({isActive, isPending})=> isActive?"Links-active" : isPending?"Links":"Links"} to="/all-reports">All Reports</NavLink></div>
                <div className="links-item"><NavLink activeClassName="Links-active" className={({isActive, isPending})=> isActive?"Links-active" : isPending?"Links":"Links"} to="/assigned">Assigned</NavLink></div>
                <div className="links-item"><NavLink activeClassName="Links-active" className={({isActive, isPending})=> isActive?"Links-active" : isPending?"Links":"Links"} to="/completed">Completed</NavLink></div>
                <div className="links-item"><NavLink activeClassName="Links-active" className={({isActive, isPending})=> isActive?"Links-active" : isPending?"Links":"Links"} to="/pending">Pending</NavLink></div>
                <div className="links-item"><NavLink activeClassName="Links-active" className={({isActive, isPending})=> isActive?"Links-active" : isPending?"Links":"Links"} to="/correspondence">Correspondence</NavLink></div>
                <div className="links-item"><NavLink activeClassName="Links-active" className={({isActive, isPending})=> isActive?"Links-active" : isPending?"Links":"Links"} to="/reinspection">Reinspections</NavLink></div>
                <div className="links-item"><NavLink activeClassName="Links-active"className="Links" to="/">Logout</NavLink></div>
            </div>
        </div>
    );
};

export default SideNav;