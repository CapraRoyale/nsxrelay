import React from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

export default class RelayButton extends React.Component {
    render() {
        return (
            <Col>
                <Button size="lg">{this.props.children}</Button>
            </Col>
        );
    };
};