import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

export class Dishdetail extends Component {
  render() {
    const { dish } = this.props;
    return (
      <Card>
        <CardImg top src={dish.image} alt={dish.name} />
        <CardBody>
          <CardTitle>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
    );
  }
}

export default Dishdetail;

// import React from 'react'

// const Dishdetail = ({dishes}) => {
//     return (
//                <Card>
//         <CardImg top src={dishes.image} alt={dishes.name} />
//         <CardBody>
//           <CardTitle>{dishes.name}</CardTitle>
//           <CardText>{dishes.description}</CardText>
//         </CardBody>
//       </Card>
       
//     )
// }

// export default Dishdetail

