# Prototokos

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.2.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).


# Requirements

✔️ Use Angular CLI ( https://cli.angular.io/ ) to generate a new project.

✔️ Register information is saved into local storage.

✔️ Login information is checked against saved users in local storage. If the information is correct, save another entry in localStorage with the currentUser.

✔️ Create a Route Guard for the Dashboard page, that checks if there is a logged in user (if current user prop exists in local storage). If its not, redirect to login.

✔️ Create a route guard for the Login and Register pages. If the user is logged in on page load, redirect to dashboard

✔️ Use template forms for login / register UI's

✔️ On both dashboard and cart pages a logout icon must be present. When clicked must clear the currentUser prop from localStorage and redirect to login.

✔️ Dashboard and Cart pages must be in a seperate module that is lazily loaded by the angular router when the route its accesed.

✔️ Create a dashboard service that tracks the cart information on the current session.


### Login

Form fields: Email, password

✔️ If user attempts login without both fields filled, show error messages under the field.

✔️ If user is already logged in, redirect to dashboard. (using the route guard previously mentioned)

✔️ Have a redirect using the angular router on the login page that sends the user to register page (? - maybe on the dashboard page)

### Register

Form fields: Email, password, confirm password, name

✔️ If user is already logged in, redirect to dashboard.

✔️ If user attempts registering without all fields filled, or has invalid fields, show error messages under the field 

✔️ Have a redirect using the angular router on the register page that sends to login 

✔️ Validations: All fields are required, email must match email patterns, password must match confirm password. 


### Dashboard

✔️ Create a json containing product categories, each category containing a set of products, a name and an id. 

✔️ Have a tab selector for the product categories. Whenever a product category is selected, display the products for that category. 

✔️ Each product displays name, description, price and a + and - icon. 

✔️ The cart information is saved into localStorage every time a change is made.

✔️ There must be a cart icon present somewhere on top of the dashboard page that displays the number of items in the cart.

✔️ When the cart icon is clicked it redirects to the cart page. 

### Cart

✔️ Display the existing products in a readonly manner (reuse the component from the dashboard product display, without the + and - ).

✔️ Calculate and display the total value of the cart.

### Other requirements

✔️ Have a smart / dumb components architecture approach ( https://blog.angular-university.io/angular-2-smart-components-vs-presentation-components-whats-the-difference-when-to-use-each-and-why/ )

✔️ Retrieve the mock data from a Fake HTTP Api using the HttpClient service.

✔️ Read up on change detection strategies and optimize your application performance ( https://blog.angular-university.io/how-does-angular-2-change-detection-really-work/ )

✔️ Implement NGRX for state management in your application ( https://ngrx.io/ ) and change the cart adding flow / session management / product retrieval to be through ngrx. 

✔️ Work on styles

✔️ Add a readme file with existing features and how to run the app

❌ Add the optional scenario where a product can have extras ( Ex Product: Latte; Ex extras: Short, Tall, Grande ). The extras can have a price of their own or be free. On the product model define a property that indicates if choosing a extra is mandatory or not. 

❌ Create a custom form control for the extra selecting component.  ( https://medium.com/@lukaonik/how-to-write-custom-form-controls-in-angular-1285ed00bba0 ).

❌ Create a feature module that will export the custom form control. ( https://angular.io/guide/feature-modules )
