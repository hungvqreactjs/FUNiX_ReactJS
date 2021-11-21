import React, {useState} from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Label,
  Row,
  Col,

} from "reactstrap";
import { Link } from "react-router-dom";
import { Control, LocalForm } from "react-redux-form";

const CommentForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const handleSubmit = (values) => {
    toggle();
    
    console.log("CommentForm : " + JSON.stringify(values));
    alert("CommentForm: " + JSON.stringify(values));
}
  return(
    <div>
        <Button outline onClick={toggle}><span className="fa fa-pencil fa-lg"></span> Submit Comment</Button>
        <Modal isOpen={isOpen} toggle={toggle}>
        <ModalHeader toggle={toggle}>Submit Comment</ModalHeader>
        <ModalBody>
            <LocalForm onSubmit={(values) => handleSubmit(values)}>
                <Row className="form-group">
                    <Col>
                    <Label htmlFor="rating">Rating</Label>
                    <Control.select model=".rating" id="rating" className="form-control">
                        <option value="1">1 Star</option>
                        <option value="2">2 Star</option>
                        <option value="3">3 Star</option>
                        <option value="4">4 Star</option>
                        <option value="5">5 Star</option>
                    </Control.select>
                    </Col>
                </Row>
                <Row className="form-group">
                    <Col>
                    <Label htmlFor="comment">Comment</Label>
                    <Control.textarea model=".comment" id="comment"
                                rows="6" className="form-control" />
                    </Col>
                </Row>
                <Button type="submit" className="bg-primary">
                    Submit
                </Button>
            </LocalForm>
        </ModalBody>
       </Modal>
    </div>
    );

}

const DishDetail = ({ dish, comments }) => {

  const RenderDish = (dish) => {

    return (
      <div className=" col-12 col-md-5 m-1">
      <Card key={dish.dish.id}>
        <CardImg top src={dish.dish.image} alt={dish.dish.name} />
        <CardBody>
          <CardTitle>{dish.dish.name}</CardTitle>
          <CardText>{dish.dish.description}</CardText>
        </CardBody>
      </Card>
      </div>
    );
  };
  const RenderComments = (comments, postComment) => {

    if (comments != null)
      return (
        <div className=" col-12 col-md-5 m-1">
          <h4>Comments</h4>
          <ul className="list-unstyled">
            {comments.comments.map((comment) => {
              return (
                <li key={comment.id}>
                  <p>{comment.comment}</p>
                  <p>{comment.author}</p>
                </li>
              );
            })}
          </ul>
          <CommentForm postComment={postComment}/>
        </div>
      );
    else return <div></div>;
  };

  return (
    <div>
           <div className="container">
           <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Menu</h3>
                        <hr />
                    </div>                
                </div>
            <div className="row">
      <RenderDish dish={dish} />
      <RenderComments comments={comments} />
      </div>
      </div>
    </div>
  );
};

export default DishDetail;
