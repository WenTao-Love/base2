
// http://www.w3.org/TR/DOM-Level-2-Events/events.html#Events-DocumentEvent

var DocumentEvent = Interface.extend({  
  "@!(document.createEvent)": {
    createEvent: function(document, type) {
      var event = document.createEventObject ? document.createEventObject() : {};
      event.bubbles = false;
      event.cancelable = false;
      event.eventPhase = 0;
      event.target = document;
      event.currentTarget = null;
      event.relatedTarget = null;
      event.timeStamp = new Date().valueOf();
      return Event(event);
    }
  },
  
  "@(document.createEvent)": {
    "@!(document.createEvent('Events'))": { // before Safari 3
      createEvent: function(document, type) {
        return this.base(document, type == "Events" ? "UIEvents" : type);
      }
    }
  }
});
