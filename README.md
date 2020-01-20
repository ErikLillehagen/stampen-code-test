# React Coding Test

In this test you will be asked to perform a few tasks in a simple React app to showcase what you can do. Before you start looking at the tasks and thinking about how to solve them, keep these important facts in mind:

* Simplicity and readability are at the core of good code. Keep your solutions as straight forward and readable as possible.
* We won't judge you based on how you did something, but based on **WHY** you chose to do it that way.
* You are free to modify the existing components and codebase at will (we will be asking why).
* Don't rush. We rather see 2 well implemented features than 4 bad ones.
* Even if you feel like your results were bad, submit the code and let's discuss it. We'd love to learn about your thought process about where the shortcommings happened and why.

##	Setting up the project

All you reallt need to get going is to run ```npm install``` in your terminal.
Once the dependencies are installed, run ```npm start``` and the project will be fired up in your browser.

Node-fetch is installed as a dependency and behaves exactly like the browser native fetch API, but feel free to use axios or any other library for http calls if you have other preferences.

##	The Task

In this test, you will be handed an empty Star Wars themed React app with a couple of stale components, found in src/Components:
1. Movies
2. Single Movie
3. Characters
4. Navbar
5. Loading
6. MovieListItem
7. CharacterListItem

Some of these components hold a hardcoded data object that they render into view. Complete the following tasks to achieve MVP:

1. Use the nav buttons in the **UI/Navbar** component to allow the user to switch between the **Movies** and **Characters** pages.
2. Replace the hardCoded data in **Pages/Movies** with live data fetched from the Star Wars API (https://swapi.co/).
3. Make use of component states and hooks across the app to ensure you are fetching data as little as possible, only when needed and at the right time.
4. Use the **UI/Loading** component as placeholder when loading movie data.
5. When a user clicks on a movie item in **Pages/Movie**, switch to the **SingleMovie** page, and make it display data for the clicked movie.
6. When a given movie is clicked for the first time, fetch each characters individual data for that movie, and make it available for the **Characters** component to render when the user goes there. This will result in the characters list growing untl all movies have been clicked once.

##	Bonus task

1. Implement your own **SingleCharacter** component that will be visited each time a user clicks on a single character.
2. When a user visits this component, fetch and display data regarding the character's race, planet and starships.

## Tips

Keep an eye on network calls. We want to do as few of these as possible.
If you have any questions regarding the task, contact andreas.casen@stampen.com.

