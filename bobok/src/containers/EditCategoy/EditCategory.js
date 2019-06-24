import React, {Component} from 'react';
import {Button, Col, Form, FormGroup, FormText, Input, Label} from "reactstrap";
import {connect} from "react-redux";

class EditCategory extends Component {

    state = {
        title: ''
    };

    inputChangeHandler = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };


    render() {
        return (
            <div style={{marginTop: '40px'}}>
                <Form>
                    <FormGroup row>
                        <Label for="title" sm={2}>Категория</Label>
                        <Col sm={10}>
                            <Input
                                type="text"
                                name="title"
                                id="title"
                                value={this.state.title}
                                onChange={this.inputChangeHandler}
                            />
                            <FormText color="muted">
                                Эски категорияны жаны аталышка озгортунуз!
                            </FormText>
                        </Col>
                    </FormGroup>

                    <FormGroup check row>
                        <Col sm={{ size: 10, offset: 2 }}>
                            <Button
                                color="success"
                            >Озгортуу</Button>
                        </Col>
                    </FormGroup>
                </Form>
            </div>
        );
    }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(EditCategory);