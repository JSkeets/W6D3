/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

const FollowToggle = __webpack_require__(1);
const UsersSearch = __webpack_require__(3);

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


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

let apiUtil = __webpack_require__(2);
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


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

const FollowToggle = __webpack_require__(1);
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


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

const APIUtil = __webpack_require__(2);

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


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map