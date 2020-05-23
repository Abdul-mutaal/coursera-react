import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,CardTitle } from 'reactstrap';
import { render } from '@testing-library/react';

class DishDetail extends Component {
    constructor(props) {
        super(props);
    }

    renderDish(dish){
        if(dish != null){
            return(
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
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
                    <div>
                        <li>
                            <div className='mb-3'>
                                {comm.comment}
                            </div>
                            <div className='mb-3'>
                                --{comm.author}, {new Date(comm.date).toLocaleDateString()}
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