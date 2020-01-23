# burger

## Summary 
This app is a practice in building MYSQL database. The app allows you to enter a burger name, attaches that name to list of other burgers that have been created, and allows you to click a button that moves that particular item to the "devoured list" showing that the burger has been eating. 

## Link to site
https://aqueous-river-50604.herokuapp.com/

## Site Picture
![Site](/public/img/burger.png)


## Technologies Used
- HTML - used to create elements on the DOM
- CSS - styles html elements on page
- Git - version control system to track changes to source code
- GitHub - hosts repository that can be deployed to GitHub Pages
- Bootstrap - front-end framework used to create modern websites and web apps.
- Jquery - jQuery is a JavaScript library designed to simplify building websites.
- MYSQL - MySQL is an open-source relational database management system.
- Heroku - Cloud platform to host deployed websites.
- Handlebars - Handlebars is a simple templating language.It uses a template and an input object to generate HTML or other text formats.
- Sequalize - Sequelize is a promise-based Node.js ORM for Postgres, MySQL, MariaDB, SQLite and Microsoft SQL Server.
- Express - Web application framework for Node.js. Designed for building web applications and APIs.
- Node JS - An open-source, cross-platform, JavaScript runtime environment that executes JavaScript code outside of a browser.

## Code Snippet
```javascript
    module.exports = function(sequelize, DataTypes) {
        var Burger = sequelize.define("Burgers", {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            burger_name: DataTypes.STRING,
            devoured: {
                type: DataTypes.BOOLEAN,
                defaultValue: false
            }
        });
        return Burger;
    };


```
- The code snippit above is the mysql model used to store the data entered on the page.


## Author Links
[LinkedIn](https://www.linkedin.com/in/ken-bains)
[GitHub](https://github.com/ken-Bains)
