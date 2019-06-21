import React, {Component} from 'react';
import {loginUser} from "../../store/actons/usersActions";
import {Button, Col, Form, FormGroup, Input, Label} from "reactstrap";
import {connect} from "react-redux";

class Login extends Component {

    state = {
        username: '',
        password: ''
    };

    changeHandler = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };

    submitHandler = event => {
        event.preventDefault();
        this.props.loginUser({...this.state});
    };


    render() {
        return (
            <div className="formBlock">
                <h5><strong>Катталуу формасы</strong></h5>
                <hr/>
                <div className="form">
                    <Form onSubmit={this.submitHandler}>
                        <FormGroup row>
                            <Label for="username" sm={3}><strong>Логин</strong></Label>
                            <Col sm={9}>
                                <Input
                                    type="text"
                                    name="username"
                                    id="username"
                                    value={this.state.username}
                                    onChange={this.changeHandler}
                                />
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Label for="password" sm={3}><strong>Сыр соз</strong></Label>
                            <Col sm={9}>
                                <Input
                                    type="password"
                                    name="password"
                                    id="password"
                                    value={this.state.password}
                                    onChange={this.changeHandler}
                                />
                            </Col>
                        </FormGroup>

                        <FormGroup check row>
                            <Col sm={{ size: 10, offset: 3 }}>
                                <Button type="submit" color="primary">Катталуу</Button>
                            </Col>
                        </FormGroup>
                    </Form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    user: state.information.user
});

const mapDispatchToProps = dispatch => ({
    loginUser: userData => dispatch(loginUser(userData))
});


export default connect(mapStateToProps, mapDispatchToProps)(Login);