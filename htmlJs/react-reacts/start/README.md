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