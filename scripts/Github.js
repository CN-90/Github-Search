const axios = require('axios');

class Github {
  constructor() { }

  getUserProfile(userName){
    axios.get('https://api.github.com/users/CN-90')
      .then(userProfile => console.log(userProfile.data))
  }
  
}

module.exports = Github;