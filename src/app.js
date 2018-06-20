let input = document.getElementById("userInput");
let ui = require('./ui');
// require('babel-polyfill');



input.addEventListener("keyup", e => {
  if (e.target.value.trim("") !== "") {
    getUserProfile(e.target.value).then(user => {
      if (user.profile.message === "Not Found") {
        ui.hideUserInfo();
      } else {
        ui.showUserInfo(user.profile);
        ui.showRepos(user.repos);
      }
    });
  } else {
    ui.hideUserInfo();
  }
});

async function getUserProfile(username) {
  let response = await fetch(
    `https://api.github.com/users/${username}`
  );
  let profile = await response.json();

  let repoResponse = await fetch(
    `https://api.github.com/users/${username}/repos?per_page=10'`
  );
  let repos = await repoResponse.json();

  return {
    profile,
    repos
  };
}
