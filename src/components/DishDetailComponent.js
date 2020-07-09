import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import CommentForm from './CommentForm';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';

    function RenderDish({dish}){
        if(dish != null){
            return(
                <Card>
                    <CardImg width="100%" src={baseUrl + dish.image} alt={dish.name} />
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

    function RenderComments({comments, postComment, dishId, showModal}){
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
            if(this.props.isLoading){
                return(
                    <div className="container">
                        <div className="row">
                            <Loading />
                        </div>
                    </div>
                );
            }
            else if(this.props.errMess){
                return(
                    <div className="container">
                        <div className="row">
                            <h4>{this.props.errMess}</h4>
                        </div>
                    </div>
                );
            }
            else if(this.props.dish != null) {
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
                                    postComment={this.props.postComment}
                                    dishId={this.props.dish.id}
                                    showModal={this.showModal}
                                />
                            <CommentForm hideModal={this.hideModal} show={this.state.show} dishId={this.props.dish.id} addComment={this.props.postComment}/>
                        </div>
                    </div>
                );
            }
        }
    }
export default DishDetail;