# E-Commerce App

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
* No backend currently but will be using AWS Lambda functions (FaaS) soon to process the payment as the app gets developed further so the app can have a serverless architecture.

### Database
* Firebase  (I plan on learning DynamoDB and will switch when I do)

### Deployment
* Firebase  (This will also change once I starting using AWS Lambda functions and other AWS microservices)

## Phases
### First Phase
* Menu with drop submenu (DONE)
* Create both a default category page and a page per subcategory (DONE)
* Sliders where appropriate (DONE)
* Use data set that can fill in as much of the product information as possible and create categories and subcategories (DONE)
* Create shopping cart that updates as the quantity fluctuates or deletes (DONE)
* Create a checkout page with payment field, billing/shipping field and email field. (DONE)
* Create form validation for the email, billing and shipping. (DONE)

### Second Phase
* Create validation for payment field.
* Learn redux and make the 'cart' (nav) more informative with qty and total price
* Allow a user to process an order by validating inputs and create an order page summarizing the data. (In progress)
* Allow a user to search for any product and make the search have autocomplete functionality (In progress)
* Investigate and setup the payment processing aspect of an e-commerce site using AWS Lambda functions.


