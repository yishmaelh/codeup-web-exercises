"use strict"



function lastCommit(userName) {
 return fetch(`https://api.github.com/users/${userName}/events/public`, {
  headers: {'Authorization': accessToken}}).then(response => {
   return response.json();
 }).then(data => console.log('Last commit was :', data[0].created_at))
     .catch(error => console.error('An error has occured', error));
}

console.log(lastCommit('yishmaelh'));