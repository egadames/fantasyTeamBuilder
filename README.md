### Team: 
Sin Cho Chan, Erik Adames, David Hughey and Adeola Afariogun

### Location of URLs
  * This is the link to the github repo:
    * https://github.com/egadames/project03
  * This is the link to the live website:
    * https://thawing-sierra-93407.herokuapp.com/

### Website Concept: 
Our website is a NBA fantasy team Manager!
The app is way to get current stats on active NBA players, edit, delete and review flashcards for studying.

### Process:  

What challenges did you encounter?
* The challenges arose from the modulization of various components and containers. As redux allows the state to be updated continously. The challenges were getting the proper name identification for each state. As sometimes they would return an array and sometimes an object. 

What were your successes?
  * With the power of redux we were able to naviagte the state smoothly and even without hitting the backend for data.

### What were the technologies used? 
  * MongoDb
  * Heroku for the domain
  * Mlab MySql
  * HTML
  * JavaScript
  * React
  * Semantic UI CSS
  * Redux

### Home Page
  * This will load a starting page that contains a navbar and a desciption of the features of the app 
  * The nav bar contains 2 different layouts depending if the user is logged in or not.
  * If the user is not logged in they only have access to the homepage, sign up and sign in page.
  * If the user is logged in they have access to the view user team page and create team page.

### SignUp, SignIn and SignOut Pages
  * The signup and signin page contain an input that requires the user to enter an email and a password.
  * The inputs are validated and required the user to enter a valid email. The password must be at least 6 letters.
  * The pages contain an random basketball image that is loaded on reload.
  * The signout page logs the user out and gives them the option to sign back in. 

### Create Team Page
  * This page allows users to view all active players in the NBA in a table format. 
  * The table contains 4 columns which are Name, Position, Fantasy Points and Add Player to team.
  * The Name and Position columns are sortable and searchable so a user can filter the data. Fantasy points is also sortable and can be combined with position to obtain the most fantasy points by position.
  * The Fantasy Points are based the NBA base fantasy points scale. The data is filtered and sum to represent the potential points a player should average per game. 
  * This page also contains a team loading box that will hold the users player selection. Once the player selects a player the image of that player appears in the loading box. The average fantasy points for that player is added to the header which contains the sum of fantasy points for that team..
  * The images contains an a delete icon once clicked will delete the player from the loading box.
  * There is also a 'Make Team' button that will once clicked will create the team and link that team with the current user.

  ### Load Team Page
  * This page contains all the teams created by the user. 
  * The teams are loaded into a carousel that will allow users to cycle though their teams and see what they have created.
  * Each team contains the total fantasy points for that team.
  * There is a delete icon that once clicked will delete the team from the user's team.

### Screenshot
![1](https://github.com/egadames/project03/blob/master/asset/img/screentshot1.JPG)
![2](https://github.com/egadames/project03/blob/master/asset/img/screentshot2.JPG)
![3](https://github.com/egadames/project03/blob/master/asset/img/screentshot3.JPG)
![4](https://github.com/egadames/project03/blob/master/asset/img/screentshot4.JPG)
