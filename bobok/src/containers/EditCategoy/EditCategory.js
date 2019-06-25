import React, {Component} from 'react';
import {Button, Col, Form, FormGroup, FormText, Input, Label} from "reactstrap";
import {connect} from "react-redux";
import {editCategory, fetchCategoryById} from "../../store/actons/categoryActions";

class EditCategory  extends Component {

    state = {
        title: ''
    };

    componentDidMount () {
        if (this.props.match.params.id) {
            this.props.fetchCategory(this.props.match.params.id).then(
                () => {
                    this.setState({title: this.props.category.title})
                }
            )
        }

    }

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
                                onClick={() => this.props.editCategory(this.props.match.params.id, {...this.state})}
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
    category: state.information.category
});

const mapDispatchToProps = dispatch => ({
    fetchCategory: id => dispatch(fetchCategoryById(id)),
    editCategory: (id, data) => dispatch(editCategory(id, data))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditCategory);