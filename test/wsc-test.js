jQuery.fn.doesExist = function(){
        return jQuery(this).length > 0;
};

var article_border_color = $("#WikiaFooter section").css("border-color");
var button_background_color = $("#WikiaPageBackground").css("background-color");
var button_border_color = article_border_color;

$("#WikiaArticle").css("border-color", article_border_color).css("border-top", "1px solid").css("padding-top", "10px");
$("#WikiaPageHeader").css("border-bottom", "0").css("margin-bottom", "0");

// check if div#WikiaRail exists

var sidebar_exists = $("#WikiaRail").doesExist();

var orig_height = parseInt($("#WikiaRail").height(), 10).toString() + "px";
var new_left = parseInt($("#WikiaRail").width(), 10).toString() + "px";
var new_height = "30px";
var orig_width = parseInt($("#WikiaArticle").width(), 10).toString() + "px";
var new_width = parseInt($("#WikiHeader").width(), 10).toString() + "px";


if($.cookie('collapsed-cookie') === null) { 
    $.cookie('collapsed-cookie', 'false', {expires:7});
}

var collapsed = $.cookie('collapsed-cookie');

//change look of button here
if (sidebar_exists) {
  $("#WikiaSearch").after('<div id="WikiaSidebarCollapseButton"><div  id="WikiaSidebarCollapseButtonChild">&gt;&gt;</div></div>');
  $("#WikiaSidebarCollapseButton").css({
    position : 'absolute',
    height : '0px'
  });
  $("#WikiaSidebarCollapseButtonChild").css({
    position : 'relative',
    left : '340px',
    top : '-37px',
    height : '25px',
    width : '30px',
    cursor : 'default',
    'font-size' : '20px',
    'text-align' : 'center',
    'background-color' : button_background_color,
    'border-left' : '1px solid' + button_border_color
  });
  var $set = $("#WikiaRail").children();    
  $set.slice(2,$set.length).wrapAll('<div id="collapsing-tags"/>');
  $("#collapsing-tags").css("position", "relative")
  
  if ($.cookie('collapsed-cookie')=='true') {
    collapse();
  }
}

//Add animation funcionality here
function expand() {
        
  $("#WikiaSidebarCollapseButtonChild").html("&gt;&gt;");
  $("#collapsing-tags").css("left", new_left).animate({ left: "0px" }, 400);
  $("#WikiaArticle").animate({ width: orig_width }, 400);
  setTimeout( function(){
    $("#WikiaRail").css("overflow", "visible");
  },400);
  collapsed = 'false';
  $.cookie('collapsed-cookie', collapsed);
}

function collapse() {

  $("#WikiaSidebarCollapseButtonChild").html("&lt;&lt;");
  $("#WikiaRail").css("overflow", "hidden");
  $("#collapsing-tags").css("left", "0px").animate({ left: new_left }, 400);
  $("#WikiaArticle").animate({ width: new_width }, 400);
  collapsed = 'true';
  $.cookie('collapsed-cookie', collapsed);
}

$("#WikiaSidebarCollapseButton").click(function () {
  if (collapsed=='true') {
    expand();
  } else {
    collapse();
  }
});
