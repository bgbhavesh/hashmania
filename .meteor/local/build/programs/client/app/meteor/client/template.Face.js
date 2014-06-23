(function(){
UI.body.contentParts.push(UI.Component.extend({render: (function() {
  var self = this;
  return HTML.Raw("<!-- Body ends -->");
})}));
Meteor.startup(function () { if (! UI.body.INSTANTIATED) { UI.body.INSTANTIATED = true; UI.DomRange.insert(UI.render(UI.body).dom, document.body); } });

Template.__define__("body", (function() {
  var self = this;
  var template = this;
  return [ HTML.DIV({
    id: "bodyWrapper"
  }, "\n		", Spacebars.include(self.lookupTemplate("bodystatic")), "\n		", Spacebars.include(self.lookupTemplate("main")), "\n		\n "), HTML.Raw('\n<iframe id="hashFaqForm" src="https://docs.google.com/forms/d/1oIoqFrz1F55Nc4i_v4IgSxmWbf9wLPTQGJrC3DyA-L8/viewform">\n</iframe>') ];
}));

Template.__define__("bodystatic", (function() {
  var self = this;
  var template = this;
  return HTML.Raw('<div id="loader" style="display: none;">\n	<div id="loginLoader">\n		\n	</div>\n	  <div id="loadClass"> \n		\n		<div id="loaderLogo"> Hash Republic </div>\n		<div id="loaderProcess"> Loading Please Wait.. </div>\n		<div id="loaderMessage"> Initializing </div>\n	  </div>      \n  </div>\n  <div id="loaderError" class="ui button"> Running out of patience.</div>');
}));

Template.__define__("main", (function() {
  var self = this;
  var template = this;
  return [ HTML.DIV({
    id: "Main"
  }, "\n	", Spacebars.include(self.lookupTemplate("BeforeLogin")), "\n	", Spacebars.include(self.lookupTemplate("keyword")), "\n  "), HTML.Raw('\n  <div id="displayScore">\n  	\n  </div>\n  '), HTML.DIV({
    id: "loginScreen"
  }, HTML.Raw('\n  <div id="loginLoader">\n	\n	</div>\n	'), HTML.DIV({
    id: "loginWrapper"
  }, HTML.Raw('\n		  <!--<div id="loginwithapp" class="button"> Login With App </div>-->\n		  '), Spacebars.include(self.lookupTemplate("loginWithInstagram")), HTML.Raw("\n		  <br>\n\n	 ")), "\n	 \n  "), HTML.Raw('\n  <div id="snapButtonWrapper">\n  </div>\n  <div id="snapButton">\n  <i class="icon list layout"></i> \n  </div>\n	<div id="welcomePopUpBackground"></div>\n	<div id="welcomePopUp" class="ui inverted segment"> <br>\n		<div id="pushtext">Welcome to HashRepublic!</div>\n		Facehash gets you on the map as an expert on a hash tag. Pick one and start tapping the images. \n		The game is simple. Have fun!<br><br>\n		<div id="hideWelcomePopUp" class="tiny circular ui button">ok</div><br><br>\n	</div>\n\n	<div id="thankyouBackgroud"></div>\n	<div id="thankyou" ref="thankyouBackgroud" class="ui inverted segment"> <br>\n		<div id="pushtext">Hi again!</div>\n		Thank you for verifying your email! <br>\n		<div class="hideAfterComplete">\n			Next you need a face <br>\n			from <br>\n			<div id="loginButtonWithInstagram" class="ui instagram button loginButton">\n				  <i class="instagram icon"></i>\n				  Login With Instagram\n			</div>\n			<br>\n			OR <br>\n			<div id="loginButtonWithFacebook" class="ui facebook button loginButton">\n				  <i class="facebook icon"></i>\n				  Login With Facebook\n			</div>\n			<br>\n			OR <br>\n			<div id="loginButtonWithGooglePlus" class="ui google plus button loginButton">\n				  <i class="google plus icon"></i>\n				  Login With Google+\n			</div>\n			<br>\n			AND \n			<br>\n			\n		</div>\n		<br>\n			Choose Password \n		<br>\n		<div class="field passwordClass">\n			<!-- <label>Password</label> -->\n			<div class="ui left labeled icon input">\n		  	<input id="sePassThankyou1" type="password">\n	  		<i class="lock icon"></i>\n	  		<div class="ui corner label">\n	    		<i class="icon asterisk"></i>\n		  	</div>\n			</div>\n		</div><br>\n		<div class="field passwordClass">\n			<!-- <label>Password</label> -->\n			<div class="ui left labeled icon input">\n		  	<input id="sePassThankyou2" type="password">\n	  		<i class="lock icon"></i>\n	  		<div class="ui corner label">\n	    		<i class="icon asterisk"></i>\n		  	</div>\n			</div>\n		</div><br>\n		<div id="seLoginThankyou" class="ui blue submit button">Login</div>\n		<br><br>\n		<div id="passwordError" class="ui error message">\n			<div id="errorMessage" class="header">Password do not match</div>\n		</div>\n\n	</div>\n\n  '), HTML.DIV({
    id: "snapy",
    "class": "ui large vertical inverted labeled icon sidebar menu active"
  }, HTML.Raw('\n\n	 <div class="item">\n	  <div id="LeaderBoard"><b>Leaders</b></div>\n	  <div id="section1" class="menu">\n		\n	  </div>\n	</div>\n	<!-- <div class="leaderSection">\n			{{> leadersboard}}\n		</div> -->\n<!-- <div class="leaderSection">\n	  			{{> leadersboard}}\n	  		</div> -->\n\n\n<!-- \n	  <div id="showpicsmenu1">\n	<div class="item" id="menuresents">\n	  <b id="Recentslabel"> Preview </b>\n	  {{> Section1}}\n	</div></div> -->\n	'), HTML.DIV({
    id: "gamemenu"
  }, "\n	", HTML.DIV({
    "class": "item"
  }, "\n		", Spacebars.include(self.lookupTemplate("profilemenu")), "\n	"), "\n\n	", HTML.DIV({
    "class": "item"
  }, HTML.Raw('\n	<div id="menuGame"><b>Game</b></div>\n	  '), HTML.DIV({
    "class": "menu"
  }, HTML.Raw('\n		<a id="contest" class="item"><i class="time icon"></i> <div id="timer"> No Contest Now </div> </a>\n		'), HTML.A({
    "class": "item"
  }, HTML.Raw('<i class="star half empty icon"></i> '), Spacebars.include(self.lookupTemplate("distanceTemplate"))), "\n	  "), "\n	"), HTML.Raw('\n\n	<div class="item">\n	  <div id="accounts"><b>Accounts</b></div>\n	  <div class="menu">\n		<a id="loginwithInsta" class="item"> <i class="instagram icon"></i>  Log in with Instagram </a>\n		<a id="shareApp" class="item"> <i class="upload icon"></i> Share </a>\n		<a id="shareAppOnFacebook" class="item"> <i class="upload icon"></i> Share on Facebook</a>\n		<a id="logout" class="item"> <i class="sign out icon"></i> Log Out </a>  \n	  </div>\n	</div>\n\n	<div class="item">\n	  <div id="invitefriends"><b>Invite Friends</b></div>\n	  <div class="menu">\n		  <a id="invfacebook" class="item"> <i class="facebook icon"></i> Facebook </a>\n		  <a id="invgoogle" class="item"><i class="google plus icon"></i> Google Plus </a>\n		  <a id="invtwitter" class="item"><i class="twitter icon"></i> Twitter </a>\n		  <a id="invmail" class="item"><i class="mail icon"></i> Email </a>\n\n	  </div>\n	</div>\n\n	<div class="item">\n	  <div id="settings"><b>Settings</b></div>\n	  <div class="menu">\n		  <a id="languageButton" class="item"> Language</a><br>\n		  <!-- <div id="optimize">\n			<div class="ui toggle checkbox">\n			  <input type="checkbox" name="pet" id="optimizeCheckBox">\n			  <label>Optimize</label>\n			</div>\n		  </div> -->\n		  <a id="hideVotesButton" class="item"> Votes</a><br>\n		  <a id="hideCommentsButton" class="item"> Comments</a><br>\n		  <a class="item">Resolution\n			<div class="ui tiny buttons" style="font-size: 0.7em;">\n			<div id="lowReso" class="ui button">Low</div>\n			<div class="or" style="font-size: 0.8em;"></div>\n			<div id="MediumReso" class="ui button">Medium</div>\n			<div class="or" style="font-size: 0.8em;"></div>\n			<div id="HighReso" class="ui button">High</div>\n			</div>\n		  </a>\n	  	<!-- <a class="ui item form">\n		  <div class="grouped inline fields">\n		    <div class="field">\n		      <div class="ui radio checkbox">\n		      	<label>Low</label>\n		        <input type="radio" name="fruit" checked="">\n		        \n		      </div>\n		    </div>\n		    <div class="field">\n		      <div class="ui radio checkbox">\n		        <input type="radio" name="fruit">\n		        <label>Medium</label>\n		      </div>\n		    </div>\n		    <div class="field">\n		      <div class="ui radio checkbox">\n		        <input type="radio" name="fruit">\n		        <label>High</label>\n		      </div>\n		    </div>\n		    \n		  </div>\n		</a> -->\n	</div>\n	</div>\n	<div class="item">\n	  <div id="tapmate">\n	  	<b>Hash Republic</b></div>\n	  <div class="menu">\n			<a id="FAQButton" class="item"><i class="question icon"></i> FAQ </a>\n			<a id="contactUsButton" class="item"> <i class="phone icon"></i> Contact Us </a>\n			<a id="aboutUsButton" class="item"><i class="font icon"></i> About </a>\n			<a id="feedbackButton" class="item"><i class="edit icon"></i> Feedback </a>\n			<a id="videotutorial" class="item"><i class="video icon"> </i> Video tutorial</a>\n	  </div>\n	</div>\n\n	\n	\n	\n  ')), "\n") ];
}));

Template.__define__("allLeadersboard", (function() {
  var self = this;
  var template = this;
  return UI.Each(function() {
    return Spacebars.call(self.lookup("eachlead"));
  }, UI.block(function() {
    var self = this;
    return [ "\n		", HTML.DIV({
      "class": "leadersface"
    }, "  \n			", HTML.IMG({
      src: function() {
        return Spacebars.mustache(self.lookup("face"));
      }
    }), "\n			", HTML.DIV({
      id: "leadersScore",
      style: "font-size: small;top: 63%;position: absolute;left: 20%;"
    }, function() {
      return Spacebars.mustache(self.lookup("heatScore"));
    }), "\n			", HTML.DIV({
      id: "leadersRank",
      style: "font-size: small;top: 0%;position: absolute;left: 2%;"
    }, function() {
      return Spacebars.mustache(self.lookup("rank"));
    }), "\n			", HTML.DIV({
      id: "leadersPercentile",
      style: "font-size: small;top: 0%;position: absolute;left: 47%;"
    }, function() {
      return Spacebars.mustache(self.lookup("percentile"));
    }), "\n		"), "\n		\n		\n	" ];
  }));
}));

Template.__define__("keyword", (function() {
  var self = this;
  var template = this;
  return [ HTML.Raw('<div id="keywordPopupBackground"></div>\n\n  '), HTML.DIV({
    id: "keywordPopup",
    "class": "ui vertical menu"
  }, "\n  	", HTML.DIV({
    "class": "allLeaderSection"
  }, "\n			", Spacebars.include(self.lookupTemplate("allLeadersboard")), "\n	"), HTML.Raw('\n  \n  		<div class="searchicon"> <b> #</b></div>\n		<div id="keywordButton" class="ui icon input">\n			<input id="searchKeyword" type="text" placeholder="search Instagram..">\n			<i id="hashgosearch" class="search icon"></i>\n			\n	    </div>	\n	   <!--  <div  id="hashgocancel" class="ui icon button">\n			<i class="remove circle icon"></i>\n	    </div>  -->\n	    <!-- <div id="hashgocancel" class="ui button"> </div> -->\n	  <!-- <div id="keywordButton">\n		  #<input id="searchKeyword" type="text">\n		  <input id="hashgosearch" type="button" class="ui button" value="GO"> \n			\n	  </div> -->\n	  '), HTML.DIV({
    id: "keywords"
  }, "\n	    ", HTML.P({
    "class": "ui link list"
  }, "\n			", UI.Each(function() {
    return Spacebars.call(self.lookup("eachkeyword"));
  }, UI.block(function() {
    var self = this;
    return [ "\n				", HTML.A({
      "class": [ "eachkeyword ", function() {
        return Spacebars.mustache(self.lookup("color"));
      }, "Keyword" ],
      style: [ "font-size: ", function() {
        return Spacebars.mustache(self.lookup("size"));
      }, "px;" ]
    }, " ", HTML.U(" #", function() {
      return Spacebars.mustache(self.lookup("keyword"));
    })), "\n			" ];
  })), "		\n		"), "\n	  "), "\n  ") ];
}));

Template.__define__("loginWithInstagram", (function() {
  var self = this;
  var template = this;
  return HTML.Raw('<div id="loginsignupform" class="ui form segment">\n   		<div id="loginwrapper">\n			<div class="field emailLoginClass">\n				<!-- <label>Email</label> -->\n				<div class="ui left labeled icon input">\n				<input id="seEmailLogin" type="text" placeholder="Email">\n				<i class="mail icon"></i>\n				<div class="ui corner label">\n				    <i class="icon asterisk"></i>\n				</div>\n				</div>\n			</div>\n	   		<div class="field passwordLoginClass">\n				<!-- <label>Password</label> -->\n				<div class="ui left labeled icon input">\n			  	<input id="sePassLogin" type="password">\n		  		<i class="lock icon"></i>\n		  		<div class="ui corner label">\n		    		<i class="icon asterisk"></i>\n			  	</div>\n				</div>\n			</div>\n			<div id="seErrorLogin" class="ui error message">\n				<div id="errorMessage" class="header">We noticed some issues</div>\n			</div>\n			<div id="seLoginLogin" class="ui blue submit button">Login with Password</div>\n				<div id="orID" class="ui horizontal divider">\n		      Or\n		    </div>\n		    <div class="ui ignored warning message">\n		      <p>Enter logging and password.</p>\n		    </div>\n	    </div>\n		<div class="field emailClass">\n			<!-- <label>Email</label> -->\n			<div class="ui left labeled icon input">\n			<input id="seEmail" type="text" placeholder="Email">\n			<i class="mail icon"></i>\n			<div class="ui corner label">\n			    <i class="icon asterisk"></i>\n			</div>\n			</div>\n		</div>\n		<div class="field passwordClass">\n			<!-- <label>Password</label> -->\n			<div class="ui left labeled icon input">\n		  	<input id="sePass" type="password">\n	  		<i class="lock icon"></i>\n	  		<div class="ui corner label">\n	    		<i class="icon asterisk"></i>\n		  	</div>\n			</div>\n		</div>\n		<div id="seError" class="ui error message">\n			<div id="errorMessage" class="header">We noticed some issues</div>\n		</div>\n		<div id="seLogin" class="ui blue submit button">Login with Password</div>\n		<div id="seSignup" class="ui blue submit button">Sign Up With Email</div>\n    </div>');
}));

Template.__define__("distanceTemplate", (function() {
  var self = this;
  var template = this;
  return [ function() {
    return Spacebars.mustache(Spacebars.dot(self.lookup("distance"), "score"));
  }, " | ", function() {
    return Spacebars.mustache(Spacebars.dot(self.lookup("distance"), "heatScore"));
  } ];
}));

Template.__define__("Section1", (function() {
  var self = this;
  var template = this;
  return HTML.DIV({
    id: "section1",
    "class": "menu"
  }, "\n	", UI.Each(function() {
    return Spacebars.call(self.lookup("recents"));
  }, UI.block(function() {
    var self = this;
    return [ "\n	  ", HTML.DIV({
      "class": "recentIcons",
      likeid: function() {
        return Spacebars.mustache(self.lookup("likeid"));
      }
    }, "  \n		  ", HTML.IMG({
      src: function() {
        return Spacebars.mustache(self.lookup("low"));
      }
    }), "        \n	  "), "\n	" ];
  })), "   \n  ");
}));

Template.__define__("leadersboard", (function() {
  var self = this;
  var template = this;
  return UI.Each(function() {
    return Spacebars.call(self.lookup("eachlead"));
  }, UI.block(function() {
    var self = this;
    return [ "\n		\n		", HTML.DIV({
      "class": "leadersface"
    }, "  \n			", HTML.IMG({
      src: function() {
        return Spacebars.mustache(self.lookup("face"));
      }
    }), "\n			", HTML.DIV({
      id: "leadersScore",
      style: "font-size: small;top: 63%;position: absolute;left: 20%;"
    }, function() {
      return Spacebars.mustache(self.lookup("customScore"));
    }), "\n			", HTML.DIV({
      id: "leadersRank",
      style: "font-size: small;top: 0%;position: absolute;left: 2%;"
    }, function() {
      return Spacebars.mustache(self.lookup("rank"));
    }), "\n			", HTML.DIV({
      id: "leadersPercentile",
      style: "font-size: small;top: 0%;position: absolute;left: 47%;"
    }, function() {
      return Spacebars.mustache(self.lookup("percentile"));
    }), "\n		"), "\n		\n		\n	" ];
  }));
}));

Template.__define__("profilemenu", (function() {
  var self = this;
  var template = this;
  return UI.Each(function() {
    return Spacebars.call(self.lookup("user"));
  }, UI.block(function() {
    var self = this;
    return [ "\n	", HTML.DIV(HTML.B("Profile")), "\n    ", HTML.DIV({
      "class": "menu",
      id: "profileItem"
    }, "\n        ", HTML.A({
      "class": "item"
    }, "\n        	", HTML.DIV({
      id: "contest",
      "class": "item"
    }, "\n        	", HTML.IMG({
      src: function() {
        return Spacebars.mustache(self.lookup("profile_picture"));
      },
      style: "width: 29%;float: left;"
    }), "\n        	", HTML.DIV({
      style: "text-align: left;margin-left: 35%;"
    }, "Username: ", function() {
      return Spacebars.mustache(self.lookup("username"));
    }, "\n	        	", HTML.BR(), HTML.BR(), " ", HTML.BR(), HTML.BR(), HTML.Comment(" Email: {{email}} "), "\n	        	"), "\n        	"), "\n        "), "\n        ", HTML.A({
      "class": "item"
    }), "\n    "), "\n    " ];
  }));
}));

Template.__define__("BeforeLogin", (function() {
  var self = this;
  var template = this;
  return [ HTML.DIV({
    id: "beforeLogin"
  }, "\n	", Spacebars.include(self.lookupTemplate("header")), HTML.Raw('  \n	<!-- <div class="leaderSection">\n			{{> leadersboard}}\n	</div> -->\n	'), HTML.DIV({
    id: "hashOverlay"
  }, HTML.Raw('\n	<div id="surveybighandle">\n		<i id="updownarrow" class="huge sort ascending icon"></i>\n			<div class="hashKeyword">  </div>\n			<!-- <div class="leaderSection">\n	  			{{> leadersboard}}\n	  		</div> -->\n	</div>\n	'), HTML.DIV({
    "class": "leaderSection"
  }, "\n			", Spacebars.include(self.lookupTemplate("leadersboard")), HTML.Raw('\n		\n	<div id="surveybig" class="ui labeled vertical fluid  icon menu" style="">\n  		\n  	</div>\n  	')), HTML.Raw('\n	<div id="NweImageAdded" class="tapToShow">NEW</div>\n	<div id="loadMoreImg" class="tapToShow  loadmore">OLD</div>\n	<div id="totalimages" class="tapToShow"><i class="level up icon"></i></div>\n	<div id="toComeimages" class="tapToShow"><i class="level down icon"></i></div>\n	')), "\n  "), HTML.Raw('\n  	<div id="semanticLoader" class="ui active dimmer">\n		<div class="ui text myloader">Loading</div>\n	</div>\n	<div id="commentingOverlay" ref="commentingCommentOverlay" likeid="" clientid="">\n\n	</div>\n	'), HTML.DIV({
    id: "commentingCommentOverlay",
    likeid: "",
    clientid: ""
  }, HTML.Raw('\n		<div class="imageComment" style="float:left">\n			<img src="">\n		</div>\n			'), HTML.DIV({
    "class": "ui right labeled icon input submitComment"
  }, "\n				", HTML.TEXTAREA({
    id: "commentInput",
    type: "text",
    rows: "4",
    placeholder: "Enter Comment"
  }), "\n			"), HTML.Raw('\n			<div id="cross" style=""><i class="remove icon"></i>\n		</div>\n		<!-- <i class="comment icon"></i> -->\n		<div id="showallcomments">\n\n		</div>\n	')) ];
}));

Template.__define__("header", (function() {
  var self = this;
  var template = this;
  return [ HTML.DIV({
    id: "headerSection"
  }, " \n	", Spacebars.include(self.lookupTemplate("server")), HTML.Raw(' \n	\n	<div class="three" style="font-size:0px;"> . </div>\n	<div class="header">\n		<div class="appname"> . </div>\n	</div>\n	\n	\n  ')), HTML.Raw(' \n  <div id="toastArea">  </div>') ];
}));

Template.__define__("server", (function() {
  var self = this;
  var template = this;
  return HTML.DIV({
    id: "status",
    "class": [ function() {
      return Spacebars.mustache(self.lookup("status"));
    }, "Status" ],
    "data-step": "1",
    "data-intro": "Online / Offline",
    "data-position": "left"
  }, HTML.Raw('\n		<!-- <div id="tapmateLogo" class="{{status}}Status"> </div>  -->\n	'));
}));

Template.__define__("Section2", (function() {
  var self = this;
  var template = this;
  return [ HTML.Raw('<div id="currentFollowWrapper"></div> \n		'), HTML.DIV({
    id: "currentFollow"
  }, HTML.Raw('\n			<div class="ui icon button">\n				<i class="left arrow icon" id="openclosearrow"></i>\n			</div> \n			 \n				'), HTML.IMG({
    "class": "currentFollowimg",
    src: function() {
      return Spacebars.mustache(Spacebars.dot(self.lookup("currentFollow"), "profile_picture"));
    }
  }), "\n			\n		"), "\n  ", HTML.DIV({
    id: "section2",
    "data-step": "2",
    "data-intro": "Users of Tapmate.",
    "class": "ui inverted segment"
  }, "\n  		", HTML.DIV({
    id: "keyboardButton",
    "class": "ui button tiny"
  }, function() {
    return Spacebars.mustache(self.lookup("alpahbet"));
  }), HTML.Raw('\n    <!-- <div id="groupButton" class="button"><i class="hide icon"></i></div> -->\n    <!-- <div id="openUser" class="button"><i class="hide icon"></i></div> -->\n  '), HTML.DIV({
    "class": "followSection"
  }, "\n        \n    ", UI.Each(function() {
    return Spacebars.call(self.lookup("follows"));
  }, UI.block(function() {
    var self = this;
    return [ "\n      ", HTML.DIV({
      "class": [ "followsIcons ", function() {
        return Spacebars.mustache(self.lookup("activity"));
      } ],
      myid: function() {
        return Spacebars.mustache(self.lookup("followid"));
      },
      name: function() {
        return Spacebars.mustache(self.lookup("username"));
      },
      type: "me",
      hits: function() {
        return Spacebars.mustache(self.lookup("hits"));
      }
    }, "  \n        ", HTML.IMG({
      src: function() {
        return Spacebars.mustache(self.lookup("profile_picture"));
      }
    }), "\n        ", HTML.DIV({
      "class": [ function() {
        return Spacebars.mustache(self.lookup("status"));
      }, "users usersstatus" ]
    }, " "), "        \n      "), "\n    " ];
  })), HTML.Raw('\n    \n    <div class="ui inverted divider" style="top: -4%; position: relative;"></div>\n  ')), HTML.Raw('\n  \n  <div class="buttonSection">\n    <div id="addGroup" class="groupfollow" data-title="Alert" data-content="The @ button allows you to invite people by adding them to the group.">  \n      <div id="showcheckmark"> </div>   \n      <div id="hidecheckmark"> </div>   \n    </div>\n    <div id="atbutton" class="square">\n        <img src="images/email.png">\n    </div>\n    <div class="ui inverted divider"></div>\n  </div>\n  <div id="section2Label"><i style="font-size:2em;" class="user icon"></i></div>\n  \n  '), HTML.DIV({
    id: "groupDiv"
  }, "\n    \n      ", Spacebars.include(self.lookupTemplate("grouptemplate")), "\n    \n  "), "\n  ") ];
}));

Template.__define__("grouptemplate", (function() {
  var self = this;
  var template = this;
  return UI.Each(function() {
    return Spacebars.call(self.lookup("group"));
  }, UI.block(function() {
    var self = this;
    return [ "\n	", HTML.DIV({
      "class": [ function() {
        return Spacebars.mustache(self.lookup("activity"));
      }, " followsgroup" ],
      myid: function() {
        return Spacebars.mustache(self.lookup("_id"));
      },
      type: "group"
    }, "  \n		", HTML.DIV({
      "class": "groupCount ui blue tiny button"
    }, function() {
      return Spacebars.mustache(Spacebars.dot(self.lookup("."), "follows", "length"));
    }), "\n		", HTML.DIV({
      "class": "groupImages"
    }, "   \n			", UI.Each(function() {
      return Spacebars.call(self.lookup("picture"));
    }, UI.block(function() {
      var self = this;
      return [ "\n				", HTML.IMG({
        "class": "groupicons",
        src: function() {
          return Spacebars.mustache(self.lookup("."));
        }
      }), "\n			" ];
    })), "\n		"), "\n	"), "\n  	" ];
  }));
}));

Template.__define__("hashmania", (function() {
  var self = this;
  var template = this;
  return "";
}));

Template.__define__("perbig", (function() {
  var self = this;
  var template = this;
  return HTML.DIV({
    "class": "bigFeed bigSecondFeed",
    likeid: function() {
      return Spacebars.mustache(self.lookup("likeid"));
    }
  }, " \n	     \n		", HTML.IMG({
    src: function() {
      return Spacebars.mustache(self.lookup("low"));
    }
  }), "\n	  \n		", HTML.DIV({
    "class": "quadrant",
    id: function() {
      return Spacebars.mustache(self.lookup("likeid"));
    }
  }, HTML.Raw('\n			<div id="hprogressBar" class="ui failed progress"><div></div><hr style="height:2px;width:100%;margin-bottom:-8px;padding:0px;margin-top: 0px;border-top-width: 0px;"></div>\n			<div id="inerhprogressBar">\n				<i class="big bullhorn icon" style="margin-left: 0px"></i>\n			</div>\n			<div id="outer" class="ui warning progress">\n				<div class="inner" id="verticalprogress"></div> <hr style="height:100%;width:2px;margin-bottom:-8px;padding:0px;">\n			</div>\n\n			<div id="inner-inner"><i class="big thumbs up icon" style="margin-left: 0px;"></i></div>     \n		')), "\n	");
}));

Template.__define__("srvyvotes", (function() {
  var self = this;
  var template = this;
  return UI.Each(function() {
    return Spacebars.call(self.lookup("votes"));
  }, UI.block(function() {
    var self = this;
    return [ "\n		", HTML.DIV({
      "class": "voting",
      style: [ "left : ", function() {
        return Spacebars.mustache(self.lookup("left"));
      }, "%;top:", function() {
        return Spacebars.mustache(self.lookup("top"));
      }, "%;" ],
      myid: function() {
        return Spacebars.mustache(self.lookup("followid"));
      },
      votingid: function() {
        return Spacebars.mustache(self.lookup("_id"));
      }
    }, "\n		  ", HTML.IMG({
      src: function() {
        return Spacebars.mustache(self.lookup("profile_picture"));
      }
    }), "          \n		"), "\n  " ];
  }));
}));

})();
