"use strict"



function lastCommit(userName) {
 return fetch('https://api.github.com/users/userName/events/public', {headers: {'Authorization': accessToken}});

}