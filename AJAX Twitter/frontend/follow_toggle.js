let apiUtil = require('./api_util');
class FollowToggle {
  constructor($el) {
    this.userId = $el.data("userId");
    this.followState = $el.data("initialFollowState");
    this.$el = $el;
    this.render();

    // console.log(this);
  }

  render() {
    // console.log(this.followState);
    // console.log(this.userId);
    if (this.followState === "unfollowed") {
      this.$el.text("Follow!");
    } else {
      this.$el.text("Unfollow!");
    }
  }




  handleClick() {
    let followToggle = this;
    this.$el.click( function(event) {
      // console.log("inside",this);
      // console.log(event);
      // console.log(this.followState);
      event.preventDefault();
      if(this.followState === "unfollowed") {
        // console.log("INSIDE OF HANDLE CLICK",this);
        apiUtil.followUser(this);
      } else {
        apiUtil.unfollowUser(this);

      }
    }.bind(this));


  // finish handleclick
  }

// finish class
}

module.exports = FollowToggle;
