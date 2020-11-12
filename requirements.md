# Learn Angular project

[x]  Use Angular CLI ( https://cli.angular.io/ ) to generate a new project.
[]  Register information is saved into local storage.
[]  Login information is checked against saved users in local storage. If the information is correct, save another entry in localStorage with the currentUser.
[]  Create a Route Guard for the Dashboard page, that checks if there is a logged in user (if current user prop exists in local storage). If its not, redirect to login.
[]  Create a route guard for the Login and Register pages. If the user is logged in on page load, redirect to dashboard
[]  Use template forms for login / register UI's
[]  On both dashboard and cart pages a logout icon must be present. When clicked must clear the currentUser prop from localStorage and redirect to login.
[]  Dashboard and Cart pages must be in a seperate module that is lazily loaded by the angular router when the route its accesed.
[]  Create a dashboard service that tracks the cart information on the current session. 


### Login
Form fields: Email, password
Requirments: 
[]  If user attempts login without both fields filled, show error messages under the field.
[]  If user is already logged in, redirect to dashboard. (using the route guard previously mentioned)
[]  Have a redirect using the angular router on the login page that sends the user to register page

### Register
Form fields: Email, password, confirm password, name
Requirments:  
[]  If user is already logged in, redirect to dashboard.
[]  If user attempts registering without all fields filled, or has invalid fields, show error messages under the field 
[]  Have a redirect using the angular router on the register page that sends to login 
[]  Validations: All fields are required, email must match email patterns, password must match confirm password. 

### Dashboard
[x]  Create a json containing product categories, each category containing a set of products, a name and an id. 
[x]  Have a tab selector for the product categories. Whenever a product category is selected, display the products for that category. 
[x]  Each product displays name, description, price and a + and - icon. 
[]  The cart information is saved into localStorage every time a change is made.
[x]  There must be a cart icon present somewhere on top of the dashboard page that displays the number of items in the cart.
[]  When the cart icon is clicked it redirects to the cart page. 

### Cart
[]  Display the existing products in a readonly manner (reuse the component from the dashboard product display, without the + and - ).
[]  Calculate and display the total value of the cart.
