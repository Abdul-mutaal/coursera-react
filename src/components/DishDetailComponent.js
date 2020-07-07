import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import CommentForm from './CommentForm';

    function RenderDish({dish}){
        if(dish != null){
            return(
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        }
        else {
            return(
                <div></div>
            );
        }
    }

    function RenderComments({comments, addComment, dishId, showModal}){
        if(comments != null) {
            const comm = comments.map((comm) => {
                return(
                    <div key={comm.id}>
                        <li>
                            <div className="container">
                                <div className="mb-3">
                                    {comm.comment}
                                </div>
                                <div className="mb-3">
                                    --{comm.author}, {new Intl.DateTimeFormat('en-US', {year:'numeric', month:'short',day:'2-digit'}).format(new Date(Date.parse(comm.date)))}
                                </div>
                            </div>
                        </li>
                    </div>
                );
            });
            return(
                <div>
                    <h4>Comments:</h4>
                    <ul className="list-unstyled">
                        {comm}
                    </ul>
                    <button type="button" onClick={showModal}>
                        Submit Comment
                    </button>
                </div>
            )
        }
        else{
            return(
                <div></div>
            );
        }
    }

    class DishDetail extends Component{
        constructor(props){
            super(props);
            this.state = {
                show: false
            }
        }

        showModal = () => {
            this.setState({ show: true });
        };

        hideModal = () => {
            this.setState({ show: false });
        };

        render(){
            return(
                <div className="container">
                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{this.props.dish.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-21">
                            <h3>{this.props.dish.name}</h3>
                            <hr />
                        </div>
                    </div>
                    <div className='row'>
                        <RenderDish dish={this.props.dish} />
                        <RenderComments comments={this.props.comments}
                                addComment={this.props.addComment}
                                dishId={this.props.dish.id}
                                showModal={this.showModal}
                            />
                        <CommentForm hideModal={this.hideModal} show={this.state.show} dishId={this.props.dish.id} addComment={this.props.addComment}/>
                    </div>
                </div>
            );
        }
    }
export default DishDetail;