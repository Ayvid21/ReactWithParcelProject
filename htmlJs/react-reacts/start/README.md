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