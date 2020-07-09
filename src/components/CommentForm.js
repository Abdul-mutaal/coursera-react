import React, {Component} from 'react';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Button, Label, Col, Row } from 'reactstrap';
import Modal from 'react-bootstrap/Modal';
import './CommentForm.css';

const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => (val) && (val.length >= len);

class CommentForm extends Component {
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(values){
        this.props.postComment(this.props.dishId, values.rating, values.name, values.comment);
    }

    render(){
        const showHideClassName = this.props.show ? "modal display-block" : "modal display-none";
        return(
            <div className={this.props.show ? "modal display-block" : "modal display-none"}>
                <Modal.Dialog>
                    <Modal.Header>
                        <Modal.Title>Submit Comment</Modal.Title>
                        <p onClick={this.props.hideModal}>close</p>
                    </Modal.Header>
                    <Modal.Body>
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Label htmlfor="rating" md={2}>Rating</Label>
                            </Row>
                            <Row>
                                <Col md={10}>
                                    <Control.select model=".rating" name="rating"
                                        className="form-control" >
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlfor="name" md={3}>Your name</Label>
                            </Row>
                            <Row>
                                <Col md={10}>
                                    <Control.text model=".name" name="name"
                                        placeholder="Your Name"
                                        className="form-control"
                                        validators={{
                                            minLength: minLength(3), maxLength: maxLength(15)
                                        }}
                                        />
                                        <Errors
                                            className="text-danger"
                                            model=".name"
                                            show="touched"
                                            messages={{
                                                minLength: 'Length must be greater than 2',
                                                maxLength: 'Length must be 15 or less'
                                            }}
                                        />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlfor="comment" md={2}>Comment</Label>
                            </Row>
                            <Row>
                                <Col md={10}>
                                    <Control.textarea model=".comment" name="comment"
                                        rows="12"
                                        className="form-control textarea"/>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{size:10, offset:2}}>
                                    <Button type="submit" color="primary">
                                        Submit
                                    </Button>
                                </Col>
                            </Row>
                        </LocalForm>
                    </Modal.Body>
                </Modal.Dialog>
            </div>
        );
    }
}

export default CommentForm;