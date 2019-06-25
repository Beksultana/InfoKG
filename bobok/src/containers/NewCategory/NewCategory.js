import React, {Component} from 'react';
import {createCategory} from "../../store/actons/categoryActions";
import {Button, Col, Form, FormGroup, FormText, Input, Label} from "reactstrap";
import {connect} from "react-redux";

class NewCategory extends Component {

    state = {
        title: ''
    };

    inputChangeHandler = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    createCategoryHandler = (data) => {
        this.props.createCategory(data);
        this.props.history.push('/');
    };

    render() {
        console.log(this.props.category);
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
                                Жаны категориянын аталышын жазыныз!
                            </FormText>
                        </Col>
                    </FormGroup>

                    <FormGroup check row>
                        <Col sm={{ size: 10, offset: 2 }}>
                            <Button
                                color="success"
                                onClick={() => this.createCategoryHandler({...this.state})}
                            >Кошуу</Button>
                        </Col>
                    </FormGroup>
                </Form>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    createCategory: categoryData => dispatch(createCategory(categoryData)),
});

export default connect(null, mapDispatchToProps)(NewCategory);