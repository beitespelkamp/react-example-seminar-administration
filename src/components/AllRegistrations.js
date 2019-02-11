import React, { Component } from 'react';
import './AllRegistrations.css';
import { Table, Container, Button } from 'reactstrap';
import ModalForm from './ModalForm';

class AllRegistrations extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            data: this.getData("allEntries"),
            form_object: {},
            objectIndex: 0
        };

        this.toggle = this.toggle.bind(this);
        this.getData = this.getData.bind(this);
        this.saveData = this.saveData.bind(this);
        this.editRow = this.editRow.bind(this);
        this.deleteRow = this.deleteRow.bind(this);
        this.saveEditedObject = this.saveEditedObject.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    getData(key) {
        if (localStorage.getItem(key)) {
            return JSON.parse(localStorage.getItem(key));
        }
        return [];
    }

    saveData(key, value) {
        localStorage.setItem(key, JSON.stringify(value));

    }

    editRow(index) {
        this.setState({ objectIndex: index });
        var data = this.getData("allEntries");
        var selectedRow = data[index];
        this.setState({ form_object: selectedRow });
        this.toggle();
    }

    deleteRow(index) {
        var storedData = this.getData("allEntries");
        storedData.splice(index, 1);
        this.saveData("allEntries", storedData);
        this.setState({ data: this.getData("allEntries") });
    }

    handleChange (event) {
        const updatedObject = this.state.form_object;
        updatedObject[event.target.name] = event.target.value;
        this.setState({ form_object: updatedObject });
        event.preventDefault();
    }

    saveEditedObject () {
        var objects = this.getData("allEntries");
        objects[this.state.objectIndex] = this.state.form_object;
        this.saveData("allEntries", objects);
        this.setState({ data: this.getData("allEntries")});
        this.toggle();
    }

    render() {
        return (
            <Container>
                <Table id="table">
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Seminar</th>
                            <th>Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.data.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{item.first_name}</td>
                                    <td>{item.last_name}</td>
                                    <td>{item.seminar}</td>
                                    <td>{item.date}</td>
                                    <td>
                                        <Button id="btn1" size="sm" onClick={() => this.editRow(index)}>Edit</Button>{' '}
                                        <Button size="sm" color="secondary" onClick={() => this.deleteRow(index)}>Delete</Button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </Table>
                <div>
                    <ModalForm show={this.state.modal} toggle={this.toggle} form_object={this.state.form_object} save={this.saveEditedObject} handleChange={this.handleChange}/>
                </div>
            </Container>
        );
    }
}
export default AllRegistrations;