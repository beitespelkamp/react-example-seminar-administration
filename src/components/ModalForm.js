import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, Label, Input, Row, Col } from 'reactstrap';

class ModalForm extends Component {
    render() {
        return (
            <Modal isOpen={this.props.show} toggle={this.props.toggle} className="Modal">
                <ModalHeader toggle={this.props.toggle}>Edit Table Entry</ModalHeader>
                <ModalBody>
                    <Form id="form">
                        <Row form>
                            <Col md={4}>
                                <Label for="FirstName" id="fname">First Name:</Label>
                            </Col>
                            <Col md={8}>
                                <Input type="text" name="first_name" id="firstname" value={this.props.form_object.first_name} onChange={this.props.handleChange}/>
                            </Col>
                        </Row>
                        <Row form>
                            <Col md={4}>
                                <Label for="LastName" id="lname">Last Name:</Label>
                            </Col>
                            <Col md={8}>
                                <Input type="text" name="last_name" id="lastname" value={this.props.form_object.last_name} onChange={this.props.handleChange}/>
                            </Col>
                        </Row>
                        <Row form>
                            <Col md={4}>
                                <Label for="seminars" id="seminar">Seminar Selection:</Label>
                            </Col>
                            <Col md={8}>
                                <Input type="select" name="seminar" id="seminars" value={this.props.form_object.seminar} onChange={this.props.handleChange}>
                                    <option null>Please select a seminar...</option>
                                    <option>Introductory Event</option>
                                    <option>Excel Basics</option>
                                    <option>SAP Basics</option>
                                    <option>PowerPoint Basics</option>
                                    <option>Hardcopy Configuration</option>
                                </Input>
                            </Col>
                        </Row>
                        <Row form>
                            <Col md={4}>
                                <Label for="Date" id="date_label">Date:</Label>
                            </Col>
                            <Col md={8}>
                                <Input type="date" name="date" id="date" value={this.props.form_object.date} onChange={this.props.handleChange}/>
                            </Col>
                        </Row>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={this.props.save}>Save</Button>{' '}
                    <Button color="secondary" onClick={this.props.toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        )
    }
}
export default ModalForm;