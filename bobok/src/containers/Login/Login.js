import React, {Component, Fragment} from 'react';
import {Alert, Button, Col, Form, FormGroup} from "reactstrap";
import FormElement from "../../components/UI/Form/FormElement";
import {loginUser} from "../../store/actons/usersActions";
import {connect} from "react-redux";

class Login extends Component {
    state = {
        username: '',
        password: ''
    };

    inputChangeHandler = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    submitFormHandler = event => {
        event.preventDefault();

        this.props.loginUser({...this.state});
    };

    render() {
        return (
            <Fragment>
                <h2 style={{marginTop: '20px'}}>Кируу учун болукчо</h2>
                <hr/>
                {this.props.error && (
                    <Alert color="danger">
                        {this.props.error.error || this.props.error.global}
                    </Alert>
                )}

                <Form onSubmit={this.submitFormHandler}>
                    <FormElement
                        propertyName="username"
                        title="Логин"
                        type="email"
                        value={this.state.username}
                        onChange={this.inputChangeHandler}
                        placeholder="aidasultan@gmail.com"
                        autoComplete="current-username"
                    />

                    <FormElement
                        propertyName="password"
                        title="Сыр соз"
                        type="password"
                        value={this.state.password}
                        onChange={this.inputChangeHandler}
                        placeholder="Сыр созунузду жазыныз"
                        autoComplete="current-password"
                    />

                    <FormGroup row>
                        <Col sm={{offset: 2, size: 10}}>
                            <Button type="submit" color="success">
                                Кируу
                            </Button>
                        </Col>
                    </FormGroup>
                </Form>
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    error: state.information.loginError
});

const mapDispatchToProps = dispatch => ({
    loginUser: userData => dispatch(loginUser(userData))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
