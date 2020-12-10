import React from "react";

function Sort(props) {
    return (
        <form>
            <div role="group" aria-label="Button group with nested dropdown">
                <div class="btn-group dropdown">
                    <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Sort by First name
            </button>
                    <div className="dropdown-menu dropdown-menu-right" id="firstName">
                        <button className="dropdown-item" type="button" name="first" value="A-Z" onClick={props.handleSortChange}>A-Z</button>
                        <button className="dropdown-item" type="button" name="first" value="Z-A" onClick={props.handleSortChange}>Z-A</button>
                    </div>
                </div>

                <div class="btn-group dropdown">
                    <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Sort by Last name
            </button>
                    <div className="dropdown-menu dropdown-menu-right" id="lastName">
                        <button className="dropdown-item" type="button" name="last" value="A-Z" onClick={props.handleSortChange}>A-Z</button>
                        <button className="dropdown-item" type="button" name="last" value="Z-A" onClick={props.handleSortChange}>Z-A</button>
                    </div>
                </div>
            </div>
        </form>
    )
}
export default Sort;