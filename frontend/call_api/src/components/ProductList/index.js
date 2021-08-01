import React, { Component } from 'react'
import ProductItem from '../ProductItem'

export default class ProductList extends Component {

    render() {
        const { productList, deleteProduct, setProductEditing, showForm, productEditing } = this.props;
        return (
            <section className="py-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                    {
                        productList.map(product => {
                            return (
                                <ProductItem
                                    key={product.id}
                                    product={product}
                                    deleteProduct={deleteProduct}
                                    setProductEditing={setProductEditing}
                                    showForm={showForm}
                                    productEditing={productEditing}
                                />
                            )
                        })
                    }
                </div>
            </section>
        )
    }
}
