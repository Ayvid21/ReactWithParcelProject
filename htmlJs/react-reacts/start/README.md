# to run this project if we get any permission issue and it does not start, do-> 
    1. use node version above 20
        a. node -v 
        b. nvm use 20 (if not 20)
    2. sudo chown -R $(whoami) .(full stop is included)
    3. rm -rf node_modules
        rm package-lock.json
    4. sudo npm cache clean --force
    5. sudo npm i
    6. npm start

#learning which is not learnt yet
# REACT


# PARCEL - It is a bundler just like Webpack -> Read documentation of Parcel 
- Dev Build
- Creates Local Server
- HMR (Hot Module Replacement) --> updated the changes on the browser as soon as the changes gets saved
- HMR is done using File Watching Algorithm - Written in C++
- Faster Builds and Faster Developer Experience as it is Caching
- Image optimization 
- Minification of files
- Bundling
- Compresses the code 
- Uses consistent hashing -> read
- Code splitting
- Differential Bundling - to run the application on different browsers even in the older browsers
- Diagnostics
- Error Handling
- Can Host the application on HTTPs as well
- Tree Sharing (remove unused code using tree shaking algo)
- Create different build/bundles for Dev and Production

# Read about browserslist.dev web site


# Component composition -> when we pass one or more react component in a react component 

# food ordering app

/**
 * Header
 *  - Logo
 *  - Navigation
 * Body
 *  - Search
 *  - RestaurantList
 *      - RestaurantCards
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 */

 # React Hooks
 Normal JS utility functions
- useState() -> to generate super powerful react variable
- useEffect()

# Reconciliation algo (React fiber)(in react 16)
Whenever something changes on UI it is called as reconciliation.
virtual DOM is the representation os the actual DOM 

# Diff algo
- it finds out the difference between the old Virtual DOM and the new Virtual DOM, it will then actually updates the DOM on every render cycle.

# fetch -> it is a method provided by the JS engine, it return a promise

# Our browsers block us to call an API from one origin to different origin

#CORS

# state ->
- whenever state variables update, react triggers a reconciliation cycle(re-render the component).

# why is react fast?
- The new reconciliation algo(react fiber) finds out the difference between the two virtual dom and updates the dom only when required in the portion of the dom.

# useEffect ->
- If there is no dependency array, the useEffect is called on every render

- If there dependency array is empty = []
the useEffect is called on initial render only(just once);

- If there is something in the dependency array then useEffect is called every time the item in the array is updated
eg -> [btnName] -> if the btnName is updated then the useEffect is called.

# useState -> 
- It is use to create local state variable inside the functional component
- Never create useState variable outside the functional component.
- Never create useState variable inside if-else condition / loops / functions it will create inconsistency.


# Types of routing in web apps
- Client side routing -> when no network call goes and all the components are already present from the first time loading of the page.

- Server side routing -> when the whole page is reloaded and we send a network call to fetch some data and then render it on our page.

# Dynamic routing
Having specific / different routes for all the items that we have eg-> each restaurant will have there own route.

# LifeCycleMethod for class based components ->
    - constructor,
    - render,
    - componentDidMount

# Things we do once the component is mount successfully 
- it is used to make API calls,
- in useEffect we do the API calls and firstly we load the component, once the component is loaded with basic details then we make an API call and fill the details

# Why do we make API calls inside componentDidMount
- In react component when we make an Api call we want to render the component onces then make the API call and then fill the data inside the component. Instead of waiting for the API call to return the data to render the component, otherwise the component will not render and it will keep waiting for the data to come from the API.
so react quickly render the component then make the api call then render the data.

# What of we have two components what will be the lifecycle method from the parent class based component

Parent constructor
Parent render
child1 constructor
child1 render
child2 constructor
child2 render
child1 component did mount
child2 component did mount
Parent component did mount

it follows firstly the render phase then comes the commit phase

1. render phase -> 
    a. constructor mounting
    b. render mounting

2. commit phase -> 
    a. react updates the DOM and refs
    b. componentDidMount

React batches up the render phase for multiple children then goes to commit phase.

# Why react batches up the render phase for multiple children then goes to commit phase?
In the commit phase the react starts to update the DOM and the ref and as we know DOM manipulation is the most expensive thing when we are updating the component. We we load a component DOM manipulation is very very expensive and it take a lot of time. That is why react batched the multiple children in the render phase.

# What happens in the render phase?
it goes for the reconciliation phase. When the react is rendering the components, it triggers the reconciliation and in this it find out the diff between the virtual DOM and then tries to update the DOM.
