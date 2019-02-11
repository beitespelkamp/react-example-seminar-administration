import React, { Component } from 'react';
import { Button, Form, Label, Input, Row, Col, Container } from 'reactstrap';
import './Registration.css';

class Registration extends Component {
  constructor() {
    super();
    this.state = {
      form: {},
      result: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const updatedForm = this.state.form;
    updatedForm[event.target.name] = event.target.value;
    this.setState({ form: updatedForm });
    event.preventDefault();
  }

  handleSubmit() {
    this.addData();
    this.display();
  }

  display() {
    const result = this.state.form.first_name + ' ' + this.state.form.last_name + ' registered at the seminar ' + this.state.form.seminar + ' on ' + this.state.form.date;
    this.setState({ result: result });
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

  addData() {
    var existingEntries = this.getData("allEntries");
    if (existingEntries == null) existingEntries = [];

    var form_item = {
      first_name: this.state.form.first_name,
      last_name: this.state.form.last_name,
      seminar: this.state.form.seminar,
      date: this.state.form.date
    };

    this.saveData("formData", form_item);
    existingEntries.push(form_item);
    this.saveData("allEntries", existingEntries);

    const clear = { first_name: "", last_name: "", seminar: "", date: "" };
    this.setState({ form: clear });
  }

  render() {
    return (
      <Container>
        <Form id="form" onSubmit={this.handleSubmit}>
          <Row form>
            <Col md={3}>
              <Label for="FirstName" id="fname">First Name:</Label>
            </Col>
            <Col md={9}>
              <Input type="text" name="first_name" id="firstname" value={this.state.form.first_name} onChange={this.handleChange} />
            </Col>
          </Row>
          <Row form>
            <Col md={3}>
              <Label for="LastName" id="lname">Last Name:</Label>
            </Col>
            <Col md={9}>
              <Input type="text" name="last_name" id="lastname" value={this.state.form.last_name} onChange={this.handleChange} />
            </Col>
          </Row>
          <Row form>
            <Col md={3}>
              <Label for="seminars" id="seminar">Seminar Selection:</Label>
            </Col>
            <Col md={9}>
              <Input type="select" name="seminar" id="seminars" value={this.state.form.seminar} onChange={this.handleChange}>
                <option>Please select a seminar...</option>
                <option value="Introductory Event">Introductory Event</option>
                <option value="Excel Basics">Excel Basics</option>
                <option value="SAP Basics">SAP Basics</option>
                <option value="PowerPoint Basics">PowerPoint Basics</option>
                <option value="Hardcopy Configuration">Hardcopy Configuration</option>
              </Input>
            </Col>
          </Row>
          <Row form>
            <Col md={3}>
              <Label for="Date" id="date_label">Date:</Label>
            </Col>
            <Col md={9}>
              <Input type="date" name="date" id="date" value={this.state.form.date} onChange={this.handleChange} />
            </Col>
          </Row>
          <Row form>
            <Col md={3}></Col>
            <Col md={9}>
              <p>{this.state.result}</p>
            </Col>
          </Row>
          <Row form>
            <Col md={3}></Col>
            <Col md={9}>
              <Button id="button" type="submit" value="Submit">Submit</Button>
            </Col>
          </Row>
        </Form>
      </Container>
    );
  }
}
export default Registration;