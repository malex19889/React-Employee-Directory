import React, { Component } from "react";
import Directory from "./Directory"
import Filter from "./filer"
import Sort from "./sortBtns"
import API from "../utils/API";

class DirectoryContainer extends Component {
    state = {
        sort: "",
        order: "",
        employees: [],
        sortedEmployees: []
    };

    // pull gen data from API
    componentDidMount() {
        this.employeeData();
    };
    // get employee data and set state
    employeeData = () => {
        API.search()
            .then((res) => this.setState({
                employees: res.data.results,
                sortedEmployees: res.data.results
            }))
            .catch(err => console.log(err))
    }
    // live filtering of employees
    handleInputChange = event => {

        const employees = this.state.employees;
        const UserInput = event.target.value;

        if (UserInput === "") {
            this.setState({ sortedEmployees: employees })
        } else {
            const sortedEmployees = employees.filter(n => n.name.first.toLowerCase().includes(UserInput.toLowerCase()))
            this.setState({ sortedEmployees });
        }
    };
    // handler for sort click
    handleSortChange = event => {
        const field = event.target.name;
        const order = event.target.value;
        this.sortByName(order, field);
    }

    sortByName = (order, field) => {
        let sorted;
        if (order === "A-Z") {
            sorted = this.state.sortedEmployees.sort((a, b) => (a.name[field] > b.name[field]) ? 1 : -1);

        } else {
            sorted = this.state.sortedEmployees.sort((a, b) => (a.name[field] > b.name[field]) ? -1 : 1);

        }
        this.setState({
            sortedEmployees: sorted,
            order
        });
    }


    render() {
        return (
            <div>
                <Filter handleInputChange={this.handleInputChange} />
                <Sort handleSortChange={this.handleSortChange} />
                <Directory results={this.state.sortedEmployees} />
            </div>
        )
    }
}
export default DirectoryContainer;