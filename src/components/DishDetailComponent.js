import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,CardTitle } from 'reactstrap';

class DishDetail extends Component {

    renderDish(dish){
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

    renderComments(dish){
        if(dish) {
            const comm = dish.comments.map((comm) => {
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
    render(){
        return(
            <div className="row">
                <div className='col-12 col-md-5 m-1'>
                    <Card>{this.renderDish(this.props.renderDish)}</Card>
                </div>
                <div className='col-12 col-md-5 m-1'>
                    {this.renderComments(this.props.renderDish)}
                </div>
            </div>
        );
    }
}

export default DishDetail;