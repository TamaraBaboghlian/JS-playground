getUser(10, function (user) {
  console.log("user", user);
  getRepose(user.githubUsername, function (repos) {
    console.log(repos);
  });
});

function getUser(id, callback) {
  setTimeout(() => {
    console.log("Reading a user from database...");
    callback({ id, githubUsername: "Tamara" });
  }, 1000);
}

function getRepose(username, callback) {
  setTimeout(function () {
    console.log("Calling github API...");
    callback({ username, repos: ["repo1", "repo2", "repo3"] });
  }, 2000);
}
