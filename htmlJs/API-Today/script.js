let userData; 
fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => {
            console.log("My Data is:")
            console.log(json)
            userData = json
      })