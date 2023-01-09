function getFirstMenuItemContent() {
    var menuList = document.getElementById("menu");
    var firstMenuItem = menuList.firstElementChild;
    return firstMenuItem.innerHTML;
  }
  console.log(getFirstMenuItemContent());
module.exports = getFirstMenuItemContent;