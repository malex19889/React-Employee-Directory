import React from "react";

function Directory(props) {
    return (

        <ul className="list-unstyled row">
            {props.results.map(result => (

                <li className="media shadow-sm p-3 mb-5 bg-white rounded border border-secondary col-md-6" key={result.id.value}>
                    <img src={result.picture.large} className="mr-3" alt={result.name.first} />
                    <div className="media-body ">
                    <h5 className="mt-0 mb-1">{result.name.first + " " + result.name.last}</h5>
                    <p>Phone: {result.phone}</p>
                    <p>email: {result.email}</p>
                    <p>location: {result.location.city}, {result.location.state}, ({result.location.country})</p>
                    </div>
                </li>))}
        </ul>




    )
}

export default Directory;