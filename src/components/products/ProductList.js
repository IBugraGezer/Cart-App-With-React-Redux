import React, { Component } from "react";
import { connect } from "react-redux";
import { Badge } from "reactstrap";

class ProductList extends Component {
  render() {
    return (
      <div>
        <h3>Products</h3>
        <h5>Current category: {this.props.currentCategory.categoryName}</h5>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentCategory: state.changeCategoryReducer,
  };
}

export default connect(mapStateToProps)(ProductList);
