import React from 'react';
import {Link} from 'react-router-dom'; 

const Header  = (props)=>{
        return(
            <div className="row header ">
                <div className="col-sm-10 pt-3">
                    <Link className=" pl-3" to="/">Home</Link>
                    <Link className=" pl-3" to="/aboutUs">About Us</Link>
                    <Link className="pl-3" to="/courses">Courses</Link>
                </div>
                <div className="col-sm-2 pt-1 ">

                    { !(props.isloggedOut) && <button className="btn btn-danger  " onClick={props.logoutBtnClicked} >
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Logout&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </button>
                   }
                </div>
            </div>
           
        );
}
export default Header;

// props.logoutbutton is defined in login component only (not defined in app component)
// undefined == false 