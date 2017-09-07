const APIUtil = require('./api_util');

class UsersSearch {
  constructor($el) {
    this.$input = $('#searchName');
    this.$ul = $('.users');

    this.$el = $el;
  }


  handleInput() {
    let userSearch = this;
    let prevInput = "";

    this.$input.on("keypress", function (event) {
      prevInput += event.key;
      this.$input.attr("value", prevInput);
      event.preventDefault();
      APIUtil.searchUsers(prevInput)
        .then( (data)=> this.renderResults(data) );

      // let data = APIUtil.searchUsers(prevInput);
      // console.log("data in handleinput", data);
      // console.log("json", data.responseJSON);
      // console.log("state:", data.state);
    }.bind(this));
  }

  renderResults(data) {
    console.log(data);
    // let $data = $(data[0].username);
    console.log(data[0].username);
    $(".users").children().remove();
      data.forEach(function (el) {
            $(".users").append(`<h5>${el.username}</h5>`);
      });
  }
}



module.exports = UsersSearch;

//420
//420
//420
//420
//420
//420
//420
//420
