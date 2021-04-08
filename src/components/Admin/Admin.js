
import React from 'react';
import { Col, Nav, Row, Tab } from 'react-bootstrap';
import AddBook from '../AddBook/AddBook';
import ManageBook from '../ManageBook/ManageBook';
import NoMatch from '../NoMatch/NoMatch';
import './Admin.css';

const Admin = () => {
    return (
        <div className="tab">
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row>
                    <div className="cart">
                        <Col sm={1}>
                            <div className="cart-2">
                                <Nav variant="pills" className="flex-column">
                                    <Nav.Item>
                                        <Nav.Link className="w-25" eventKey="first">Manage Books</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link className="w-25" eventKey="second">Add Book</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link className="w-25" eventKey="third">Edit Book</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </div>
                        </Col>
                    </div>
                    <div className="detail">
                    <Col sm={10}>
                        <div>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <ManageBook />
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <AddBook />
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <NoMatch />
                                </Tab.Pane>
                            </Tab.Content>
                        </div>
                    </Col>
                    </div>
                    
                </Row>
            </Tab.Container>
        </div>
    );
};

export default Admin;