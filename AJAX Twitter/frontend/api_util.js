const FollowToggle = require('./follow_toggle');
const APIUtil = {
  followUser: id => {

    console.log(`follow INSIDE OF API: ${id}`);
    console.log(id);
    $.ajax({
      url:`/users/${id.userId}/follow`,
      type:'POST',
      dataType: 'JSON',
      success: () => {
        console.log("You have followed the user");
        id.followState = "followed";
        id.$el.data("initialFollowState","followed");
        id.render();
      },
      error: (err) => {
        console.log(`Error follow: ${err}` );
      }
    });
  },

  unfollowUser: id => {
    $.ajax({
      url:`/users/${id.userId}/follow`,
      type:'DELETE',
      dataType: 'JSON',
      success: () => {
        console.log("You have deleted the user");
        id.followState = "unfollowed";
        id.$el.data("initialFollowState","unfollowed");
        id.render();
      },
      error: () => {
        console.log("Error destroy");
      },
    });
  },

  searchUsers: (queryVal)=> {
    return $.ajax({
      url:`/users/search/`,
      dataType: 'JSON',
      data: {query:queryVal}
    });



  }






};



module.exports = APIUtil;
