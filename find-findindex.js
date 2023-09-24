//part 1

function findUserByUsername(usersArray, username) {
  return usersArray.find(function(user){
    return user.username === username;
  })
}

//part 2

function removeUser(usersArray, username) {
  let foundIndex = usersArray.findIndex(function(user){
    return user.username === username;
  })
  if(foundIndex === -1) return;

  return usersArray.splice(foundIndex,1)[0];
}