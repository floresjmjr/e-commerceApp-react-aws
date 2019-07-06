// Two Major categories, ["Home & Kitchen", "Video Games"]
// [{category: 'Home Kitchen', subcategories: [1,2,3]}, {}]
AllProducts = [];

//Collect all "categories"
AllProducts.forEach((product)=>{
  product.categories.forEach((categories)=>{
    if(categories[0] === "Video Games" || categories.length === 1){
    } else {
      if(!CategoryList.includes(categories[1])){
            CategoryList.push(categories[1]);
      }
    }
  })
})

//After video games out and those with no subcategories
var CategoryList = ["Kitchen & Dining", "Artwork", "Furniture", "Bedding", "Storage & Organization", "Bath", "Heating, Cooling & Air Quality", "Irons & Steamers", "Vacuums & Floor Care"]


//Create object with subcategories
var catObjs = CategoryList.map((cat)=>{
  return {category: cat, subcategories: [], productCount: 0}
})

AllProducts.forEach((product)=>{
  product.categories.forEach((categories)=>{
    if(categories[0] === "Video Games" || categories.length === 1){
    } else {
      catObjs.forEach((catObj)=>{
        if(catObj.category === categories[1]){
          catObj.subcategories = categories.slice(2)
          catObj.productCount += 1;
        }
      });
    }
  })
})

//Firebase data structure and importing json
//https://project-name-jf.firebaseio.com/Category1.json
// {
//   "Category1": {
//     "asinNumbers" 
//   }
// }