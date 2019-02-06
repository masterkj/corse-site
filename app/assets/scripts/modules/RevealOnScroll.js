import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
import smoothScroll from 'jquery-smooth-scroll';

class RevealOnScroll {
  constructor(el, offset) {
    this.itemsToReveal = el;
    this.offset=offset;
    this.pageSection = $(".page-section");
    this.headerLinks = $(".primary-nav a");
    this.hideInitially();
    this.createWayPoints();
    this.createPageSection();
    this.addSmoothScroll();
  }

  hideInitially() {
    this.itemsToReveal.addClass("reveal-item");
  }

  createWayPoints() {
    var offset = this.offset;
    this.itemsToReveal.each(function() {
      var currentItem = this;
      new Waypoint ({
        element: currentItem,
        handler: function() {
          $(currentItem).addClass("reveal-item--is-visable");
        },
        offset: offset
      })
    });
  }

  createPageSection() {
    var that=this;
    this.pageSection.each(function() {
      var currentPageSection = this;
       new Waypoint({
         element: currentPageSection,
         handler: function(direction) {
           if(direction == "down"){
           var matchingHeaderLink = currentPageSection.getAttribute("data-matching-link");
           that.headerLinks.removeClass("is-current-link")
           $(matchingHeaderLink).addClass("is-current-link");
          }
         },
         offset: "20%"
       });

       new Waypoint({
         element: currentPageSection,
         handler: function(direction) {
           if(direction == "up"){
           var matchingHeaderLink = currentPageSection.getAttribute("data-matching-link");
           that.headerLinks.removeClass("is-current-link")
           $(matchingHeaderLink).addClass("is-current-link");
          }
         },
         offset: "-60%"
       })
    })
  }

  addSmoothScroll() {
    this.headerLinks.smoothScroll();
  }

}

export default RevealOnScroll;
