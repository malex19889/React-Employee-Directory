import React, { Component } from "react";
import Directory from "./Directory"
import Filter from "./filer"
import API from "../utils/API";

class DirectoryContainer extends Component {
    state = {
        sort: "",
        employees: [],
        sortedEmployees: []
    };

    // pull gen data from API
    componentDidMount(){
        this.employeeData();
    };

    employeeData = ()=>{
        API.search()
        .then((res)=> this.setState({
            employees: res.data.results,
            sortedEmployees: res.data.results
        }))
        .catch(err=> console.log(err))
    }

    handleInputChange = event => {

        const employees = this.state.employees;
        const UserInput = event.target.value;
       
        if(UserInput === ""){ 
            this.setState({sortedEmployees:employees})
        } else{
            const sortedEmployees = employees.filter(n => n.name.first.toLowerCase().includes(UserInput.toLowerCase())) 
           this.setState({ sortedEmployees}); 
        }
        


    };
    
    render(){
        return(
            <div>
                <Filter  handleInputChange={this.handleInputChange} />
                <Directory results={this.state.sortedEmployees}/>
            </div>
        )
    }
}
export default DirectoryContainer;