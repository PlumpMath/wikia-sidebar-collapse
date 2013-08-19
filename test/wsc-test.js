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
var new_height = "30px";
var orig_width = parseInt($("#WikiaArticle").width(), 10).toString() + "px";
var new_width = parseInt($("#WikiHeader").width(), 10).toString() + "px";

if (sidebar_exists) {
  $("#WikiaSearch").after('<div id="WikiaSidebarCollapseButton"><div  id="WikiaSidebarCollapseButtonChild"></div></div>');
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
    'background-color' : button_background_color,
    'border-left' : '1px solid' + button_border_color
  });
}

var collapsed = false;

function expand() {
  $("#WikiaRail").css("height", orig_height).css("overflow", "visible");
  $("#WikiaArticle").css("width", orig_width);
  collapsed = false;
}

function collapse() {
  $("#WikiaRail").css("height", new_height).css("overflow", "hidden");
  $("#WikiaArticle").css("width", new_width);
  collapsed = true;
}

$("#WikiaSidebarCollapseButton").click(function () {
  if (collapsed) {
    expand();
  } else {
    collapse();
  }
});
