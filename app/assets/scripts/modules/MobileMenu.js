import $ from 'jquery';

class MobileMenu {
  constructor(){
    this.menuIcon = $(".site-header__menu-btn");
    this.menuContent = $(".site-header__menu-items");
    this.siteHeader = $(".site-header");
    this.events();
  }

  events() {
    this.menuIcon.click(this.toggleMenuContent.bind(this));
  }

  toggleMenuContent() {
    this.menuContent.toggleClass("site-header__menu-items--is-visable");
    this.siteHeader.toggleClass("site-header--is-expanded");
    this.menuIcon.toggleClass('site-header__menu-btn--close-x');
  }
}

export default MobileMenu;
