const FollowToggle = require('./follow_toggle');
const UsersSearch = require('./users_search');

$( () => {

  const $allButtons = $('.follow-toggle');
  // for each this initialization
  $allButtons.each( (index,el) => {
    let $el = $(el);
    let ft = new FollowToggle($el);
    ft.handleClick();
  });

  const $searchNav = $('.users-search');
  let search = new UsersSearch($searchNav);
  search.handleInput();
});
