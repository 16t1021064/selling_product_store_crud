import React, { Component } from 'react'

export default class ProductItem extends Component {

    renderRating = (rating) => {
        var result = [];
        for (var i = 1; i <= rating; i++) {
            result.push(<div key={i} className="bi-star-fill"></div>);
        }
        for (var j = 1; j <= (5 - rating); j++) {
            result.push(<div key={j + i} className="bi-star"></div>);
        }
        return result;
    }
    onDeleteHandler = (id) => {
        const { deleteProduct } = this.props;
        if (window.confirm('bạn có muốn xóa sản phẩm này không ?')) {
            deleteProduct(id);
        }
    }
    handleProductEditing = (product) => {
        const { setProductEditing, showForm } = this.props
        setProductEditing(product);
        showForm();
    }
    render() {
        const { product } = this.props;
        return (
            <div className="col mb-5">
                <div className="card h-100">
                    {/* Product image*/}
                    <img className="card-img-top" src={product.photo} alt="..." />
                    {/* Product details*/}
                    <div className="card-body p-4">
                        <div className="text-center">
                            {/* Product name*/}
                            <h5 className="fw-bolder">{product.name}</h5>
                            {/* Product reviews*/}
                            <div className="d-flex justify-content-center small text-warning mb-2">
                                {this.renderRating(product.rating)}
                            </div>
                            {/* Product price*/}
                            {product.price}
                        </div>
                    </div>
                    {/* Product actions*/}
                    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent d-flex justify-content-center">
                        <div className="text-center mr-2">
                            <button
                                className="btn btn-primary"
                                onClick={() => this.handleProductEditing(product)}
                            >
                                Sửa
                            </button>
                        </div>
                        <div className="text-center">
                            <button
                                className="btn btn-danger"
                                onClick={() => this.onDeleteHandler(product.id)}
                            >
                                Xóa
                            </button></div>
                    </div>
                </div>
            </div >
        )
    }
}
