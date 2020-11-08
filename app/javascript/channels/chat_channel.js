import consumer from "./consumer"

consumer.subscriptions.create("ChatChannel", {
  connected() {
    console.log("connected chat channel")
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
    console.log("disconnected chat channel")
  },

  received(data) {
    // Called when there's incoming data on the websocket for this channel
    console.log(data)
  }
});
