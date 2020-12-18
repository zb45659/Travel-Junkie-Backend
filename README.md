# Travel-Junkie-Backend


Travel Junkie is an application designed to make the process of searching for things to do in a new city easier for the everyday traveler.

# Project Links
[Deployed Heroku] (https://dashboard.heroku.com/apps/travel-junkie-backend)
# Gettin Started 

- All planning material including how the project was mapped out can be located inside the /planning directory.

# Requirements
It is important to keep in mind the goal of this program and these projects, they are to utilize the skills you have been taught and the skills that employers care about. You should strive to build projects that will catch an employers eye and get you hired.

## Technical Requirements
-**Database:**
Created a DB using pgAdmin4 that stores 3 tables to I used to create my backend data for Travel Junkie. This database includes a user table, a location table, and a guide table.
-**Users:**
The user table was created and requires a name, username, and password. This allows the user to create a profile. In order to complete this, I created a authorization controller to hold information regarding the user. I needed to use bcrypt to encrypt the password. I also used cookies and tokens to store user data.
-**Locations:**
The location table was created to store the locations into certain guides based on the users interest. This table requires a location name, a latitude, and a longitude. I used lat and lng because the google maps API I incorporated requires these co-ordinates. 
-**Guides:**
The guide table keeps track of all guides that the users create. This table only requires the user to name it, but their ID will track it to them. This table was necessary to store locations for the user. 

# Technology Used
- **Command Line:** used to interact with computer, to create and move files 
- **Visual Studio Code:** used to build code with HTML, CSS, and JavaScript
- **Google Chrome:** used for launching website, and researching tips and tricks 
- **Google Chrome Dev Tools:** used to debug code when running into problems, and to help visualize where code would show up in browser
- **Heroku:** used for deployment
- **CodePen:** used to sample code segments, and test different sceneraios on code
- **W3schools:** useful website that helped with styling my app
- **Node.js:** framework that works on top of node
- **REACT:** framework used to store backend rendring of API data


# Issues / Missed opertunities
-**More Tables:** Unable to get reviews added to the Guide table to are created by the user. This is something I will work through post MVP.
-**Authorized Users:** Would like to have an Admin account, post MVP.


