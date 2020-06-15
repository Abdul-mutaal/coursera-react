import React from 'react';
import { Card, CardImg, CardText, CardBody,CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

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

    function RenderComments({comments}){
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
                </div>
            )
        }
        else{
            return(
                <div></div>
            );
        }
    }

    const DishDetail = (props) => {
        console.log("Comments= "+props.comments.id);
        return(
                <div className="container">
                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-21">
                            <h3>{props.dish.name}</h3>
                            <hr />
                        </div>
                    </div>
                    <div className='row'>
                        <RenderDish dish={props.dish} />
                        <RenderComments comments={props.comments} />
                    </div>
                </div>
        );
    }
export default DishDetail;