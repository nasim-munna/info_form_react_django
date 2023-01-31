import React from "react";
import { Alert, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Success =()=>{
    return(
        <div className="pt-10">
            <Container className="pt-10">
                <Alert variant="success">
                    <Alert.Heading>Your form submitted Successfully!!</Alert.Heading>
                </Alert>
                <Link to="/" >Back to Home</Link>
            </Container>
        </div>
    )
}

export default Success;