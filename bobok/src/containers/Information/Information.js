import React, {Component} from 'react';
import {deleteInfo, fetchInformation} from "../../store/actons/informtionActions";
import {connect} from "react-redux";
import './Information.css';
import {Link, NavLink} from "react-router-dom";
import {Button, Col, ListGroup, ListGroupItem, Modal, ModalFooter, Row} from "reactstrap";
import {deleteCategory, fetchCategories} from "../../store/actons/categoryActions";

class Information extends Component {

    state = {
        modal: null,
        categoryName: null
    };

    hideModal = () => {
        this.setState({modal: !this.state.modal})
    };

    showModal = (information) => {
        this.setState({
            modal: information
        })
    };

    categoryName = (name) => {
        this.setState({
            categoryName: name
        })
    };

    componentDidMount() {
        this.props.fetchInformation(this.props.match.params.id);
        this.props.fetchCategories();
    };

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.id !== this.props.match.params.id){
            this.props.fetchInformation(this.props.match.params.id)
        }
    }

    newCategory = event => {
        event.preventDefault();
        this.props.history.push('/new/category');
    };

    deleteInfoHandler = ( id) => {
        this.props.deleteInfo(id);
        this.props.history.push('/')
    };

    editCategory = (id) => {
        this.props.history.push('/edit/category/' + id)
    };

    render() {
        const categories = this.props.categories ? this.props.categories.map(category => {
            return (
                <div key={category._id} style={{position: 'relative'}}>

                    {this.props.user &&
                    this.props.user.role === "aidaraliuulu@gmail.com" ?
                        <div className="deleteCategoryItem">
                            <i onClick={() => this.props.deleteCategory(category._id)}
                               className="fas fa-trash-alt"></i>

                            <i onClick={() => this.editCategory(category._id)}
                               className="far fa-edit"></i>
                        </div>
                        :null
                    }

                    <ListGroupItem
                        onClick={() => this.categoryName(category)}
                        className="ListGroupItem"
                        tag={NavLink}
                        to={"/category/" + category._id}
                    >
                        {category.title}
                        <div className="deleteCategory">

                        </div>
                    </ListGroupItem>
                </div>
            )
        }) : null;

        const information = this.props.information ? this.props.information.map(item => {
            return (
                <div  key={item._id} className="RegionItem">
                    <div className="RegionItemBody">
                        {this.props.user && this.props.user.role === "aidaraliuulu@gmail.com" ?
                            <i onClick={() => this.deleteInfoHandler(item._id)}
                               className="fas fa-trash-alt deleteInfo"></i>
                            :null
                        }
                        <img className="img"
                             src={"http://localhost:8000/uploads/" + item.image}
                             alt="Card image cap"
                        />
                        <div style={{width: "250px", margin: "0 auto"}}>
                            <h6 onClick={() => this.showModal(item)} className="title"><strong>{item.name}</strong></h6>
                        </div>
                    </div>
                </div>
            )
        }) : null;

        return (
            <div className="infoContent" style={{marginTop: "20px"}}>
                <Row>
                    <Col sm={4}>
                        {
                            this.props.user && this.props.user.role === "aidaraliuulu@gmail.com" ?
                                <div style={{marginBottom: '10px'}}>
                                <Button onClick={this.newCategory} color="warning">
                                    Жаны категория кошуу
                                </Button>
                            </div> : null
                        }
                        <ListGroup >
                            <ListGroupItem
                                onClick={() => this.categoryName({title:"Бардыгы"})}
                                className="ListGroupItem"
                                tag={NavLink}
                                exact
                                to={"/"}
                            >
                                Бардыгы
                            </ListGroupItem>
                            {categories}

                        </ListGroup>
                    </Col>
                    <Col sm={8}>
                        <div className="infoBlock">
                            <h5 className="infoText">
                                <strong>
                                    {this.state.categoryName ? this.state.categoryName.title : "Баардыгы"}
                                    </strong>
                            </h5>

                            {
                                this.props.user && this.props.user.role === "aidaraliuulu@gmail.com" ?
                                <Link to="/new/information">
                                <Button color="warning" >Жаны маалмат кошуу</Button>
                                </Link> : null
                            }
                        </div>
                        <hr/>
                        <div className="info">
                            {information}
                        </div>
                    </Col>
                </Row>

                <Modal
                    size="auto"
                    isOpen={this.state.modal}
                    toggle={this.hideModal}
                    className={this.props.className}>
                    {
                        this.state.modal &&
                            <div style={{textAlign: "center"}}>
                                <img style={{width: "490px", height:"300px", margin: "5px 0"}}
                                     src={"http://localhost:8000/uploads/" + this.state.modal.image}
                                     alt="Card image cap"
                                />
                                <div style={{textAlign: "left", marginLeft: "20px"}}>
                                    <p><strong>Аталышы: </strong> <span> {this.state.modal.name}</span></p>
                                    <p><strong>Дареги: </strong> <span> {this.state.modal.address}</span></p>
                                    <p><strong>Байланыш номери:</strong> <span> {this.state.modal.phone}</span></p>
                                </div>
                            </div>
                    }
                    <ModalFooter>
                        <Button color="danger" onClick={this.hideModal}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    information: state.information.information,
    categories: state.information.categories,
    user: state.information.user
});

const mapDispatchToProps = dispatch => ({
    fetchInformation: categoryId => dispatch(fetchInformation(categoryId)),
    fetchCategories: () => dispatch(fetchCategories()),
    deleteInfo: id => dispatch(deleteInfo(id)),
    deleteCategory: categoryId => dispatch(deleteCategory(categoryId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Information);