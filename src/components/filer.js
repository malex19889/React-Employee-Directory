import React from "react";

function Filter(props) {
    return(
        <div>
       
        <nav className="navbar navbar-dark bg-dark">
             <h1 className="navbar-brand">Directory</h1>
             <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="search" placeholder="Search by name" name="search" list="employees"  onChange={props.handleInputChange} aria-label="Search"/>
            </form>
        </nav>
        

        </div>
    )
}
export default Filter

