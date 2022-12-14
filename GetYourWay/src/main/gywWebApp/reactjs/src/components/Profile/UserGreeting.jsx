import React from 'react';
import {useState, useEffect} from "react";
import axios from "axios";
import {Col, Container, Row} from "react-bootstrap";
import ChangePassword from "./ChangePassword";
import ManageSubscription from "./ManageSubscription";
import EditProfile from "./EditProfile";
const UserGreeting = () => {
    const [user, setUser ] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_SPRING_ROOT}/user/${localStorage.getItem("logged_in_as")}`).then(
            response => {setUser(response.data); setLoading(false)}
        ).catch(error => console.log(error));
    },[]);


    return (
        <Container>
            <Row className={"mb-3"}>
                <h3>Profile</h3>
            </Row>
            <Row>
                <Col md={6}>
                    <div className={`bg-light shadow-sm rounded-3 p-3 mb-3`}>
                        <EditProfile user={user} setUser={setUser}/>
                    </div>
                </Col>
                <Col md={6}>
                    <div className={`bg-light shadow-sm rounded-3 p-3 mb-3`}>
                        <ChangePassword />
                    </div>
                </Col>
            </Row>
            <Row>
                <Col md={6}>
                    <div className={`bg-light shadow-sm rounded-3 p-3 mb-3`}>
                        <ManageSubscription />
                    </div>
                </Col>
            </Row>
        </Container>
    )
}
export default UserGreeting;
