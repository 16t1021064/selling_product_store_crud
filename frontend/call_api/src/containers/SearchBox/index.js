import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as productActions from '../../actions/product'

class SearchBox extends Component {
    onChange = (e) => {
        const keyword = e.target.value;
        const { productActionCreators } = this.props;
        const { filterProduct } = productActionCreators
        filterProduct(keyword);
    }
    render() {
        return (
            <div className='col-md-12 justify-content-center'>
                <input className="form-control mb-2  border-primary" type="text" name="searchText" placeholder="nhập từ khóa tìm kiếm" onChange={this.onChange} />
            </div>
        )
    }
}


const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        productActionCreators: bindActionCreators(productActions, dispatch),
    }
}

export default connect(null, mapDispatchToProps)(SearchBox)
