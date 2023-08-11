        Alexandru-Valentin Livadaru -> Fabric Application

Arhitecture:

Front-end: React

Back-end: Laravel

Database: MySql (+ Laravel)

What to watch:

-   tests for front-end (Jest) and for back-end (Laravel)

-   State management was done using useContext, useState and useEffect,
    as well as custom hooks

-   While the application is loading, a spinner will appear to indicate
    that the resources are being fetched

-   Responsive design

-   Different database tables for the movies and posters (linked with foreign key)

-   Only unique data is being stored in the database (using the Laravel controller)

-   MaterialUI was used as front-end library

How to run application:

-   Go to root folder and run "php artisan serve"

-   Open new terminal from root folder and type "mysql -u root -p" (type "root" when prompt appears,
    the password is in the .env file

-   type "CREATE TABLE fabric_test";

-   \*\* from root folder, open new terminal and type "php artisan migrate" to create "movies" and "posters" tables

-   type "php artisan test" to test the back-end APIs

-   type "php artisan migrate:rollback --step=1" to delete tables, go to \*\* and repeat
    commands if you want to test again

-   go to react folder and run "npm i" (to install packages)

-   "npm test" will run the front-end tests

-   type "npm run dev" to start the front-end application
