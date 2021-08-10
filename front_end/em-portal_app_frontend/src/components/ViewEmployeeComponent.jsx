import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';

class ViewEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            employee: {}
        }
    }

    componentDidMount() {
        EmployeeService.getEmployeeById(this.state.id).then(res => {
            this.setState({ employee: res.data });
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className="card col-md-6 offset-md-3" style={{ marginTop: "10px" }} >
                    <h3 className="text-center" > View Employee Details</h3>
                    <div className="card-body">
                        <div className="row">
                            <label> Employee First Name: { this.state.employee.firstName }</label>
                            {/* <div> { this.state.employee.firstName }</div> */}
                        </div>
                        <div className="row">
                            <label> Employee Last Name: { this.state.employee.lastName }</label>
                            {/* <div> { this.state.employee.lastName }</div> */}
                        </div>
                        <div className="row">
                            <label> Employee Address: { this.state.employee.address }</label>
                            {/* <div> { this.state.employee.address }</div> */}
                        </div>
                        <div className="row">
                            <label> Employee Team: { this.state.employee.team }</label>
                            {/* <div> { this.state.employee.team }</div> */}
                        </div>
                        {/* salary */}
                        <div className="row">
                            <label> Employee Salary: { this.state.employee.salary }</label>
                            {/* <div> { this.state.employee.salary }</div> */}
                        </div>

                        {/* gender */}
                        <div className="row">
                            <label> Employee Gender: { this.state.employee.gender }</label>
                            {/* <div> { this.state.employee.salary }</div> */}
                        </div>


                    </div>
                </div>
            </div>
        );
    }
}

export default ViewEmployeeComponent;