import React from "react";

function Sort(props) {
    return (
        <form>
        <div className="btn-group" role="group" aria-label="Button group with nested dropdown">
            <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Sort by First name
            </button>
            <div className="dropdown-menu dropdown-menu-right">
                <button className="dropdown-item" type="button" name="first" value="A-Z" onClick={props.handleSortChange}>A-Z</button>
                <button className="dropdown-item" type="button" name="first" value="Z-A" onClick={props.handleSortChange}>Z-A</button>
            </div>
            <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Sort by Last name
            </button>
            <div className="dropdown-menu dropdown-menu-right">
                <button className="dropdown-item" type="button" name="last" value="A-Z" onClick={props.handleSortChange}>A-Z</button>
                <button className="dropdown-item" type="button" name="last" value="Z-A" onClick={props.handleSortChange}>Z-A</button>
            </div>
        </div>
        </form>
    )
}
export default Sort;