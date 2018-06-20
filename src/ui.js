let userContainer = document.getElementById("user-info");
let repositoryContainer = document.getElementById("repositories");

export function showUserInfo(profile) {
  let html = `
  <div class="row">
  <div class="col-md-4">
    <div class="card" style="width: 18rem;">
      <h4 class="card-text text-center">${profile.login}</h4>
      <img class="card-img-top" src=${profile.avatar_url} alt="Card image cap">
      <div class="card-body text-center">
        <a href=${profile.html_url} class="btn btn-primary">View Page</a>
      </div>
    </div>
  </div>
  <div class="col-md-8">
    <ul class="list-group">
      <li class="list-group-item">Location: ${profile.location}</li>
      <li class="list-group-item">Bio: ${profile.bio || "N/A"}</li>
      <li class="list-group-item">Company: ${profile.company || "N/A"}</li>
      <li class="list-group-item">Blog: N/A</li>
      <li class="list-group-item">Followers: ${profile.followers}</li>
      <li class="list-group-item">Following: ${profile.following}</li>
      <li class="list-group-item">User Since: ${profile.created_at}</li>
    </ul>
  </div>
</div>
  `;
  userContainer.innerHTML = html;
}

export function showRepos(repos) {
  let repositories = '';
  for (let repo of Object.entries(repos)) {
    repositories += `<li class="list-group-item"><a href=${repo[1].html_url}>${repo[1].name}</a></li>`
  }
  let html = `
  <div class="row">
  <div class="col-md-12">
    <h2>Repositories</h2>
    <ul class="list-group">
    ` + repositories +
    `</ul>
    </div>
  </div>`;

  repositoryContainer.innerHTML = html

}

export function hideUserInfo() {
  userContainer.innerHTML = "";
  repositoryContainer.innerHTML = "";

}
