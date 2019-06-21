import React, {Component} from 'react';
import {Button, Col, Form, FormGroup, Input, Label} from "reactstrap";
import './NewInfo.css';
import {connect} from "react-redux";
import {createInformation} from "../../store/actons/informtionActions";

class NewInfo extends Component {

    state = {
        category: '',
        name: '',
        address: '',
        phone: '',
        image: '',
    };

    changeHandler = event => {
      this.setState({
        [event.target.name]: event.target.value
      })
    };

    fileChangeHandler = event => {
        this.setState({
            [event.target.name]: event.target.files[0]
        });
    };

    submitFormHandler = event => {
        event.preventDefault();

        const formData = new FormData();

        Object.keys(this.state).forEach(key => {
            formData.append(key, this.state[key]);
        });

        this.props.createInfo(formData);
        this.props.history.push('/');
    };

    render() {
        return (
            <div className="formBlock">
                <h5><strong>Жаны маалымат кошуу</strong></h5>
                <hr/>
                <div className="form">

                    <Form onSubmit={this.submitFormHandler}>
                        <FormGroup row>
                            <Label for="category" sm={3}><strong>Категория</strong></Label>
                            <Col sm={9}>
                                <Input
                                    type="select"
                                    name="category"
                                    id="category"
                                    value={this.state.category}
                                    onChange={this.changeHandler}
                                >
                                    <option value="">Категорияны танданыз</option>
                                {this.props.categories.map(category => {
                                    return (
                                        <option
                                            value={category._id}
                                            key={category._id}
                                        >{category.title}</option>

                                    )
                                })}
                                </Input>
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Label for="name" sm={3}><strong>Мекеменин аталышы</strong></Label>
                            <Col sm={9}>
                                <Input
                                    type="text"
                                    name="name"
                                    id="name"
                                    value={this.state.name}
                                    onChange={this.changeHandler}
                                />
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Label for="address" sm={3}><strong>Дареги</strong></Label>
                            <Col sm={9}>
                                <Input
                                    type="text"
                                    name="address"
                                    id="address"
                                    value={this.state.address}
                                    onChange={this.changeHandler}
                                />
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Label for="phone" sm={3}><strong>Байланыш номери</strong></Label>
                            <Col sm={9}>
                                <Input
                                    type="text"
                                    name="phone"
                                    id="phone"
                                    value={this.state.phone}
                                    onChange={this.changeHandler}
                                />
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Label for="file" sm={3}><strong>Мекеменин суроту</strong></Label>
                            <Col sm={9}>
                                <Input
                                    type="file"
                                    name="image"
                                    id="file"
                                    onChange={this.fileChangeHandler}
                                />
                            </Col>
                        </FormGroup>

                        <FormGroup check row>
                            <Col sm={{ size: 10, offset: 3 }}>
                                <Button type="submit" color="primary">Кошуу</Button>
                            </Col>
                        </FormGroup>
                    </Form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    categories: state.information.categories
});

const mapDispatchToProps = dispatch => ({
    createInfo: infoData => dispatch(createInformation(infoData))
});

export default connect(mapStateToProps, mapDispatchToProps)(NewInfo);