import React, {Component} from 'react';
import './SubcategoryPage.css';
import axios from 'axios';
import ProductList from '../ProductList/ProductList';
import Spinner from '../../Spinner/Spinner';

class SubcategoryPage extends Component {

  state = {
    productList: [],
    doneLoading: false,
    subcategory: ''
  }

  createProductList = () => {
    const encodedCat = encodeURI(this.props.match.params.category)
    const url = `https://e-commerce-jf.firebaseio.com/${encodedCat}.json`
    axios.get(url)
    .then((response)=>{
      let productList = [];
      const categoryProducts = response.data;
      for(var asinNumber in categoryProducts) {
        let newObj = {}
        for(var productKey in categoryProducts[asinNumber]) {
          newObj[productKey] = categoryProducts[asinNumber][productKey]
        }
        productList.push(newObj)
      }
      productList = this.filterSubcategoryItems(productList)
      this.setState({productList: productList, doneLoading: true, subcategory: this.props.match.params.subcategory})
    })
  }

  filterSubcategoryItems = (categoryItems) =>{
    return categoryItems.filter((itemObj)=>{
      if(itemObj.categories[0].includes(this.props.match.params.subcategory)) {
        return itemObj;
      }
    })
  }

  setCategory = () => {
    const newCat = this.props.match.params.subcategory;
    const oldCat = this.state.subcategory;
    if(newCat === oldCat) {
    } else {
      this.createProductList();
    }
  }

  render() {
    console.log('Subcategory', this.props)
    this.setCategory()
    let products = [];
    if(this.state.doneLoading) {
      products = <ProductList products={this.state.productList}/>
    } else {
      products = <Spinner />
    }
    return (
      <div>
        <h2 className='ProductListHeader'>{this.props.match.params.subcategory}</h2>
        {products}
      </div>
    )
  }
}


export default SubcategoryPage;