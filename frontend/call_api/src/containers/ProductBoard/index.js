import React, { Component } from 'react'
import ProductList from '../../components/ProductList'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as productActions from '../../actions/product'
import * as formActions from '../../actions/form'
import ProductForm from '../../components/ProductForm'
import SearchBox from '../SearchBox'
import Product from '../../components/Product'
import $ from 'jquery'

class ProductBoard extends Component {

    componentDidMount() {
        const { productActionCreators } = this.props;
        const { fetchProductList } = productActionCreators;
        fetchProductList();
    }
    renderForm = () => {
        let xhtml = null;
        const { formStatus, formActionCreators, productActionCreators, productEditing, title } = this.props;
        const { changeFormTitle, hideForm, showForm } = formActionCreators;
        const { addProduct, setProductEditing, updateProduct } = productActionCreators
        if (formStatus && productEditing === null) {
            changeFormTitle('Thêm mới');
            xhtml = (
                <ProductForm
                    title={title}
                    hideForm={hideForm}
                    addProduct={addProduct}
                    setProductEditing={setProductEditing}

                />
            )
        } else if (formStatus && productEditing !== null) {
            changeFormTitle('Sửa sản phẩm');
            xhtml = (
                <ProductForm
                    title={title}
                    hideForm={hideForm}
                    addProduct={addProduct}
                    setProductEditing={setProductEditing}
                    productEditing={productEditing}
                    updateProduct={updateProduct}
                />
            )
        }
        else {
            xhtml = (
                <div className="text-center">
                    <button className="btn btn-primary w-75" onClick={showForm}>Thêm sản phẩm</button>
                </div>
            )
        }
        return xhtml;
    }
    onShowCreateModal = () => {
        $('#mymodal').modal();
    }
    render() {
        const { productList } = this.props
        const { deleteProduct, setProductEditing } = this.props.productActionCreators
        const { showForm } = this.props.formActionCreators
        return (
            <div className="row justify-content-end my-3">
                <div className="col">
                    
                </div>
                <div className="col-auto">
                    <SearchBox />
                </div>
                <Product modalId="mymodal" />
                {
                    this.renderForm()
                }
                <div className="col-md-12">
                    <ProductList
                        productList={productList}
                        deleteProduct={deleteProduct}
                        setProductEditing={setProductEditing}
                        showForm={showForm}
                    />
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        productList: state.product.productList,
        formStatus: state.form.formStatus,
        title: state.form.title,
        productEditing: state.product.productEditing
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        productActionCreators: bindActionCreators(productActions, dispatch),
        formActionCreators: bindActionCreators(formActions, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductBoard)