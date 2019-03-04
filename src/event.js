export default function Event(sender) {
  this.sender = sender
  this.listeners = []
}

Event.prototype = {
  attach: function(listener) {
    this.listeners.push(listener)
  },

  notify: function(props) {
    for (let prop in this.listeners) {
      if (props && props.hasOwnProperty(prop)) {
        let listener = this.listeners[prop]
        listener(this.sender, props)
      }
    }
  },
}
