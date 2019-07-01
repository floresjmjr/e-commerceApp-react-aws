import React from 'react';
import './ProductsPage.css'
import ProductList from './ProductList/ProductList';
import CategoryPage from './CategoryPage/CategoryPage';
import SubcategoryPage from './SubcategoryPage/SubcategoryPage';

const subcategoryPage = (props) => {
  let rawTitleData = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et fringilla massa. Ut rutrum, odio imperdiet iaculis placerat, est nisi placerat turpis, sit amet dignissim leo lectus non libero. Phasellus magna massa, euismod vitae ligula nec, consectetur tempus sapien. Sed posuere nulla erat, id vulputate enim bibendum vel. Morbi gravida, enim vulputate blandit fermentum, leo velit vehicula justo, id iaculis tortor leo a tortor. Sed pretium, ligula at aliquam tempor, magna turpis eleifend velit, nec consequat risus diam vitae sapien. Integer mi augue, pellentesque at faucibus sit amet, hendrerit nec purus. In hac habitasse platea dictumst. In ornare eros efficitur, sagittis tortor at, laoreet augue. Duis vitae urna nec neque auctor ultrices ac ut tellus".replace(/[^A-Za-z]/g, ' ')
  let rawSubTitleData = "Nulla sed tortor a magna accumsan tempor. Curabitur hendrerit ut quam in pellentesque. Donec sodales aliquet cursus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu ipsum et erat vehicula pellentesque ut ut lacus. Fusce quis elit enim. Nunc non lectus et nisl mattis tristique. Praesent scelerisque sit amet mauris vel malesuada. Ut gravida dolor id orci bibendum, quis euismod metus fringilla. Suspendisse est quam, tempor ut gravida a, suscipit lobortis nisi. Aliquam nulla ex, tempus sed accumsan ut, consectetur iaculis felis. Integer viverra odio ante, nec posuere tortor interdum a. Fusce vel tellus et eros condimentum consequat. Nunc maximus blandit lectus sed interdum. Sed consequat laoreet odio, lobortis pellentesque ipsum sagittis a. Nam feugiat augue enim, in aliquam magna egestas cursus".replace(/[^A-Za-z]/g, ' ')
  const titles = rawTitleData.split(' ').slice(50);
  const subTitles = rawSubTitleData.split(' ').slice(50)

  const priceGenerator = () => { 
    return Math.floor(Math.random()*10+10)
  }

  // const itemData = titles.map((string, idx)=>{
  //   <li className='ProductListItem'>
  //   <img src={"https://via.placeholder.com/175x200"} alt=''/>
  //   <div className='ProductText'>
  //     <h5 className='ProductListTitle'>First</h5>
  //     <h6 className='ProductListSubTitle'>Subtitle of First</h6>
  //     <p className='ProductListPrice'>$10.00</p>
  //   </div>
  // </li>
  // })

  let productPage;
  let productList = ''
  let categoryTitle = props.match.path.split('-').join(' ').slice(1);

  if(props.location.pathname === props.match.path){
    productList = <ProductList title={categoryTitle}/>
    productPage = <CategoryPage products={productList} />
  } else {
    const regex = props.match.path += '/'
    const subcategory = props.location.pathname.replace(regex, '')
    productList = <ProductList title={categoryTitle} subTitle={subcategory}/>
    productPage = <SubcategoryPage products={productList}/>
  }

  return (
    <div>
      {productPage}
    </div>
  )

}



export default subcategoryPage;