import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class RevealOnScroll {
  constructor(el, offset) {
    this.itemsToReveal = el;
    this.offset=offset;
    this.hideInitially();
    this.createWayPoints();
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

}

export default RevealOnScroll;
