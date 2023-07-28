export default class ui {
  constructor() {
    this.root = document.getElementById('root');
  }

  showProfile(user) {
    this.root.innerHTML = `
    
    <div class="card card-body mb-3">
      <div class="row">
        <div class="col-md-3">
          <img class="img-fluid mb-2" src="${user.avatar_url}">
          <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4"  >View Profile</a>
        </div>
        <div class="col-md-9">
          <span class="btn btn-primary ">Following : ${user.following}</span> 
          <span class="btn btn-secondary ">Followers : ${user.followers}</span> 
          <br><br>
          <ul class="list-group>
            <li class="list-group-item">Company : ${user.company}</li>
            <li class="list-group-item">Website : ${user.blog}</li>
            <li class="list-group-item">Location : ${user.location}</li>
            <li class="list-group-item">Member Since : ${user.created_at}</li>
          </ul>
        </div>
      </div>
    </div>`;
  }

  showError(message) {
    this.root.innerHTML = `<div class="container text-white bg-info p-2 text-center shadow">${message}</div>`;    

  }
}