import React, { Component } from "react";
import Directory from "./Directory"
import Filter from "./filer"
import API from "../utils/API";

class DirectoryContainer extends Component {
    state = {
        sort: "",
        employees: []
    };

    // pull gen data from API
    componentDidMount(){
        this.employeeData();
    };

    employeeData = ()=>{
        API.search()
        .then((res)=> this.setState({employees: res.data.results}))
        .catch(err=> console.log(err))
    }

    render(){
        return(
            <div>
                <Filter />
                <Directory results={this.state.employees}/>
            </div>
        )
    }
}
export default DirectoryContainer;