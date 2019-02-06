import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class StickyHeader {
  constructor() {
    this.sitHeader = $(".site-header");
    this.headerTrigger = $(".large-hero__title");
    this.createHeaderWaypoint();
  }

  createHeaderWaypoint() {
    var that = this;
    new Waypoint({
      element: this.headerTrigger[0],
      handler: function(direction) {
        if(direction == "down"){
          that.sitHeader.addClass("site-header--dark");
        }else {
          that.sitHeader.removeClass("site-header--dark");
        }
      }
    });
  }

}

export default StickyHeader;
