# E-Commerce App

## Why
Was inspired by a tech conference talk about how servless architecture is the future.  I wanted to see how practical it is and how it would go about working.  It forced me to learn React and research serveless technology like AWS Lambda and Netlify's similar service. 

## Background
An e-commerce web page that has an interactive navigation menu, multiple categories and subcategories, slides, shopping cart and checkout forms while partially using an amazon data set that was parsed to add a variety of products.

The dataset that was used came from http://jmcauley.ucsd.edu/data/amazon/links.html.  Made it convient to not have to generate so much fake seed data and have access to hyperlinks that connect to pictures.

## Technologies Used
### Front-End
* HTML
* CSS
* JavaScript
* React

### Back-end
* No backend but working on setting up lambda functions via AWS

### Database
* Firebase  (I plan on learning DynamoDB and will switch when I do)

### Deployment
* Netlify

## Phases
### First Phase
*Completed*
* Menu with drop submenu
* Create both a default category page and a page per subcategory
* Sliders where appropriate
* Use data set that can fill in as much of the product information as possible and create categories and subcategories
* Create shopping cart that updates as the quantity fluctuates or deletes
* Create a checkout page with payment field, billing/shipping field and email field.

### Second Phase
*Completed*
* Create form validation for the email, billing and shipping.

*Currently In Progress*
* Research and setup the servless architecture component with AWS Gateway and AWS Lambda or in the alternative Netlify Lambda integration.
* Learn Redux and make the nav cart display more informative with qty and total price
* Add Authentication using AWS Cognito and AWS Amplify

### Third Phase
*Planned To Do*
* Allow a user to search for any product and make the search have autocomplete functionality
* Research and setup the ability to test the payment processing aspect of an e-commerce site
* Allow a user to process an order by validating inputs and create an order page summarizing the data.

