import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';

class UpdateEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            firstName: '',
            lastName: '',
            address: '',
            team: ''
        }

        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.updateEmployee = this.updateEmployee.bind(this);
    }

    componentDidMount(){
        EmployeeService.getEmployeeById(this.state.id).then( (res) =>{
            let employee = res.data;
            this.setState({firstName: employee.firstName,
                lastName: employee.lastName,
                address: employee.address,
                team: employee.team
            });
        });
    }
    updateEmployee = (e) => {
        e.preventDefault();
        let employee = {firstName: this.state.firstName, lastName: this.state.lastName, address: this.state.address, team: this.state.team};
        console.log('employee => ' + JSON.stringify(employee));
        EmployeeService.updateEmployee(employee, this.state.id).then( res => {
            this.props.history.push('/employees');
        });

        // EmployeeService.createEmployee(employee).then(res =>{
        //     this.props.history.push('/employees');
        // });
    }

    changeFirstNameHandler= (event) => {
        this.setState({firstName: event.target.value});
    }

    changeLastNameHandler= (event) => {
        this.setState({lastName: event.target.value});
    }

    changeAddressHandler= (event) => {
        this.setState({address: event.target.value});
    }

    changeTeamHandler= (event) => {
        this.setState({team: event.target.value});
    }

    cancel(){
        this.props.history.push('/employees');
    }
    render() {
        return (
            <div>
               <div className = "container">
                   <div className = "row">
                   
                       <div className = "card col-md-6 offset-md-3 offset-md-3" style={{marginTop: "20px"}}>
                           <h3 className = "text-center">Update Employee</h3>
                           <div className = "card-body"  >
                               <form>
                                   <div className = "form-group">
                                       <label> First Name: </label>
                                       <input placeholder="First Name" name="firstName" className="form-control"
                                            value={this.state.firstName} onChange={this.changeFirstNameHandler}/>
                                   </div>
                                   <div className = "form-group">
                                       <label> Last Name: </label>
                                       <input placeholder="Last Name" name="lastName" className="form-control"
                                            value={this.state.lastName} onChange={this.changeLastNameHandler}/>
                                   </div>
                                   <div className = "form-group">
                                       <label> Address: </label>
                                       <input placeholder="Address" name="address" className="form-control"
                                            value={this.state.address} onChange={this.changeAddressHandler}/>
                                   </div>
                                   <div className = "form-group">
                                       <label> Team: </label>
                                       <input placeholder="Team" name="team" className="form-control"
                                            value={this.state.team} onChange={this.changeTeamHandler}/>
                                   </div>

                                    <button className="btn btn-success" onClick={this.updateEmployee} style={{marginBlock: "20px"}}>Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                 </form>
                           </div>
                       </div>
                    
                   </div>
               </div>
            </div>
        );
    }
}


export default UpdateEmployeeComponent;