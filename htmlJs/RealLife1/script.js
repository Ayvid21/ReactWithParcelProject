var currentStatus = document.querySelector("h5");
var addFriend = document.querySelector("#addFriend");

// if we have two seperate buttons to add friend and remove a friend
// var unfollow = document.querySelector('#unfollow');
// addFriend.addEventListener("click", function() {
//     currentStatus.innerHTML = "Following";
//     currentStatus.style.color = '#0fbd6e'
// })

// unfollow.addEventListener("click", function() {
//     currentStatus.innerHTML= 'Stranger';
//     currentStatus.style.color = '#ed3c65'
// })


// add and remove friend using single button
var flag = 1; 
addFriend.addEventListener("click", function() {
    if(flag == 0) {
        currentStatus.innerHTML = "Following";
        currentStatus.style.color = '#0fbd6e';
        addFriend.innerHTML = 'Remove';
        addFriend.style.backgroundColor = '#d8d8d8'
        addFriend.style.color = '#000'
        flag = 1;
    } else {
        currentStatus.innerHTML= 'Stranger';
        currentStatus.style.color = '#ed3c65';
        flag = 0; 
        addFriend.innerHTML = 'Add Friend';
        addFriend.style.backgroundColor = '#11a1a1'
        addFriend.style.color = '#fff'
    }
})