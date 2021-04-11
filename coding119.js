function getUser(id, cb) {
      setTimeout(function() {
        cb('user id '+id+': Tamara', 'is married')
    }, 5)
}

getUser(13, function(username, status) {
    console.log(username, status)
});
