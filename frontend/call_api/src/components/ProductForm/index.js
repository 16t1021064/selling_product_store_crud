import React, { Component } from 'react'
import { isEmpty } from 'validator';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import CheckButton from 'react-validation/build/button';
const required = (value) => {
    if (isEmpty(String(value))) {
        return <small className="form-text text-danger">Vui lòng điền trường còn trống</small>;
    }
}
const rating = (value) => {
    if (value < 0 || value > 5) {
        return <small className="form-text text-danger">Đánh giá phải lớn hơn 0 và nhỏ hơn hoặc bằng 5</small>;
    }
}
class ProductForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productEditing: null,
            name: '',
            rating: 0,
            price: 0,
            photo: ''
        };
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeHandler = this.onChangeHandler.bind(this);
    }
    componentWillMount() {
        if (this.props.productEditing) {
            const { productEditing } = this.props;
            this.setState({
                productEditing: productEditing,
                name: productEditing.name,
                rating: productEditing.rating,
                price: productEditing.price,
                photo: productEditing.photo
            })
        }
    }
    onSubmit(e) {
        e.preventDefault();
        const { addProduct, hideForm, setProductEditing, updateProduct } = this.props;
        const { productEditing } = this.state
        this.form.validateAll()
        if (this.checkBtn.context._errors.length === 0) {
            var product = {
                name: this.state.name,
                rating: this.state.rating,
                price: this.state.price,
                photo: this.state.photo
            }
            if (productEditing === null) {

                addProduct(product);
            } else {
                updateProduct(product, productEditing.id)
            }
            setProductEditing(null);
            hideForm();
        }

    }
    onChangeHandler(event) {
        const { target } = event;
        const { value, name } = target;
        this.setState({
            [name]: value
        })
    }
    onCloseHandler = () => {
        const { hideForm, setProductEditing } = this.props
        hideForm();
        setProductEditing(null)
    }
    render() {
        const { title } = this.props;
        return (
            <>
                <div className="col-md-3"></div>
                <div className="login-container col-md-12">
                    <h2><span className="badge badge-primary">{title}</span></h2>
                    <div className="form-box">
                        <Form onSubmit={e => this.onSubmit(e)} ref={c => { this.form = c }}>
                            <div className="form-group">
                                <label htmlFor="name">Tên sản phẩm:</label>
                                <Input
                                    name="name"
                                    onChange={this.onChangeHandler}
                                    type="text"
                                    placeholder="Tên sản phẩm"
                                    className="form-control"
                                    validations={[required]}
                                    value={this.state.name}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="rating">Xếp hạng:</label>
                                <Input
                                    name="rating"
                                    onChange={this.onChangeHandler}
                                    type="number"
                                    placeholder="Xếp hạng"
                                    className="form-control"
                                    validations={[rating, required]}
                                    value={this.state.rating}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="price">Giá:</label>
                                <Input
                                    name="price"
                                    onChange={this.onChangeHandler}
                                    type="text"
                                    placeholder="Giá"
                                    className="form-control"
                                    validations={[required]}
                                    value={this.state.price}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="photo">Link ảnh:</label>
                                <Input
                                    name="photo"
                                    onChange={this.onChangeHandler}
                                    type="text"
                                    placeholder="Link ảnh"
                                    className="form-control"
                                    validations={[required]}
                                    value={this.state.photo}
                                />
                            </div>
                            <div className="float-right">
                                <button className="btn btn-primary mr-2" type="submit">Lưu</button>
                                <CheckButton style={{ display: 'none' }} ref={c => { this.checkBtn = c }} />
                                <button className="btn btn-info btn-warning " onClick={this.onCloseHandler}>Bỏ qua</button>
                            </div>
                        </Form>
                    </div>
                </div>
            </>
        )
    }
}
export default ProductForm

