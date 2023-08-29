import {ReactComponent as Bell} from "../Resources/bell.svg";
import {ReactComponent as Settings} from "../Resources/settings.svg";
import {ReactComponent as User} from "../Resources/user.svg";
import {Link} from "react-router-dom";

function TopRibbon(){
    return(
        <div className="top-ribbon">
            <Bell className="icons"/>
            <Settings className="icons"/>
            <Link to="/account">
                <User className="icons"/>
            </Link>
        </div>
    );
};


export default TopRibbon;