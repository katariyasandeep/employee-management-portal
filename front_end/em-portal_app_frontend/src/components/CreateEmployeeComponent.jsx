import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';

class CreateEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            //step 2 for direct update
            id: this.props.match.params.id,
            firstName: '',
            lastName: '',
            address: '',
            team: '',
            salary: '',
            gender: ''
        }

        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.saveorUpdateEmployee = this.saveorUpdateEmployee.bind(this);
    }
    // step 3 for direct create
    componentDidMount() {
        //step 4
        if (this.state.id === '_add_') {
            return
        }
        else {
            EmployeeService.getEmployeeById(this.state.id).then((res) => {
                let employee = res.data;
                this.setState({
                    firstName: employee.firstName,
                    lastName: employee.lastName,
                    address: employee.address,
                    team: employee.team,
                    salary: employee.salary,
                    gender: employee.gender
                });
            });
        }

    }


    saveorUpdateEmployee = (e) => {
        e.preventDefault();
        let employee = { firstName: this.state.firstName, lastName: this.state.lastName, address: this.state.address, team: this.state.team, salary: this.state.salary, gender: this.state.gender };
        console.log('employee => ' + JSON.stringify(employee));

        //step 5
        if (this.state.id === '_add_') {
            EmployeeService.createEmployee(employee).then(res => {
                this.props.history.push('/employees');
            });
        }
        else {
            EmployeeService.updateEmployee(employee, this.state.id).then(res => {
                this.props.history.push('/employees');
            });
        }

    }

    changeFirstNameHandler = (event) => {
        this.setState({ firstName: event.target.value });
    }

    changeLastNameHandler = (event) => {
        this.setState({ lastName: event.target.value });
    }

    changeAddressHandler = (event) => {
        this.setState({ address: event.target.value });
    }

    changeTeamHandler = (event) => {
        this.setState({ team: event.target.value });
    }

    changeSalaryHandler = (event) => {
        this.setState({ salary: event.target.value });
    }
    
    changeGenderHandler = (event) => {
        this.setState({ gender: event.target.value });
    }
    cancel() {
        this.props.history.push('/employees');
    }

    getTitle() {
        if (this.state.id === '_add_') {
            return <h3 className="text-center">Add Employee</h3>
        }
        else {
            return <h3 className="text-center">Update Employee</h3>
        }
    }
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">

                        <div className="card col-md-6 offset-md-3 offset-md-3" style={{ marginTop: "20px" }}>
                            {
                                this.getTitle()
                            }
                            <div className="card-body"  >
                                <form>
                                    <div className="form-group">
                                        <label> First Name: </label>
                                        <input placeholder="First Name" name="firstName" className="form-control"
                                            value={this.state.firstName} onChange={this.changeFirstNameHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Last Name: </label>
                                        <input placeholder="Last Name" name="lastName" className="form-control"
                                            value={this.state.lastName} onChange={this.changeLastNameHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Address: </label>
                                        <input placeholder="Address" name="address" className="form-control"
                                            value={this.state.address} onChange={this.changeAddressHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Team: </label>
                                        <input placeholder="Team" name="team" className="form-control"
                                            value={this.state.team} onChange={this.changeTeamHandler} />
                                    </div>


                                    {/* salary */}

                                    <div className="form-group">
                                        <label> Salary: </label>
                                        <input placeholder="Salary" name="salary" className="form-control"
                                            value={this.state.salary} onChange={this.changeSalaryHandler} />
                                    </div>




                                    {/* gender  */}
                                    <div className="form-group" style={{marginBottom: "10px"}}>
                                        <label style={{ marginRight: "10px" }}> Gender: </label>
                                        <select value={this.state.gender} onChange={this.changeGenderHandler} style={{ marginBlock: "10px" }}>
                                            <option name="male" > Male</option>
                                            <option name="female" >Female</option>
                                            <option name="other" >Other</option>
                                        </select>
                                    </div>



                                    <button className="btn btn-success" onClick={this.saveorUpdateEmployee} >Save</button>


                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginTop: "10px"}} style={{marginLeft: "10px"}} >Cancel</button>

                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default CreateEmployeeComponent;