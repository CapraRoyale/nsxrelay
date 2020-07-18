// Import relevant components
import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import gpio from "onoff/gpio";

// Contain all GPIO pins and associated relay info in an array of objects
const relayGPIO = [
    { id: 2, title: 'Relay', type: 0 },
    { id: 3, title: 'Relay', type: 0 },
    { id: 4, title: 'Relay', type: 0 },
    { id: 14, title: 'Relay', type: 0 },
    { id: 15, title: 'Relay', type: 0 },
    { id: 18, title: 'Relay', type: 0 },
    { id: 17, title: 'Relay', type: 0 },
    { id: 27, title: 'Relay', type: 0 },
    { id: 22, title: 'Relay', type: 0 },
    { id: 23, title: 'Relay', type: 0 },
    { id: 24, title: 'Relay', type: 0 },
    { id: 10, title: 'Relay', type: 0 },
    { id: 9, title: 'Relay', type: 0 },
    { id: 11, title: 'Relay', type: 0 },
    { id: 25, title: 'Relay', type: 0 },
    { id: 8, title: 'Relay', type: 0 }
];


// Map each object in the array to the RelayButton component and assign a number based on it's index (+1 to shift everything forward from 0)
const btnArray = relayGPIO.map((button, index) =>
    <Row>
        <Col>
            <Col>
                <Button size="lg" onClick={() => {

                }}>
                    {button.title} {index + 1}
                </Button>
            </Col >
        </Col>
    </Row>
);


// Export the following React component for use in other components and final rendering
export default class ButtonArray extends React.Component {
    render() {
        return (
            btnArray
        );
    };
};