import React from 'react'
import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";

const Staff = ({staff,  onClick}) => {
    return (
        <Card onClick={onClick}>
        <CardImg width="100%" src={staff.image} alt={staff.name} />
      
          <CardTitle>{staff.name}</CardTitle>
     
      </Card>
    )
}

export default Staff
