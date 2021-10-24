import React, { Component } from 'react'
import { Card, CardImg, CardText, CardBody,
    CardTitle } from 'reactstrap';
    import {DISHES} from '../shared/dishes'

export class Dishdetail extends Component {
   
    render() {
        return (
                <Card>
                    <CardImg top src={this.props.image} alt={this.props.name} />
                    <CardBody>
                      <CardTitle>{this.props.name}</CardTitle>
                      <CardText>{this.props.description}</CardText>
                    </CardBody>
                </Card>
        )
    }
}

export default Dishdetail
