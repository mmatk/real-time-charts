const OpenWebsocket = () => {
   const theSocketUrl = window.location.protocol !== "https:" ? "ws://damp-beyond-64138.herokuapp.com/ws" : "wss://damp-beyond-64138.herokuapp.com/ws";

   const SOCKET = new WebSocket(theSocketUrl);
   SOCKET.on = {};
   SOCKET.watchedFeeds = {}
   SOCKET.dispatchEvent = ((SOCKET) => {
      return (name, callback) => {
         SOCKET.on[name] = callback;
      }
   })(SOCKET);

   SOCKET.onmessage = function(event) {

      let theData = JSON.parse(event.data);
      if (!SOCKET.watchedFeeds[theData.symb]) {
         SOCKET.watchedFeeds[theData.symb] = true;
         SOCKET.on.liveFeedStarted(theData.symb);
      }
      SOCKET.on[theData.symb](theData);
   }
   return SOCKET;
}

module.exports = OpenWebsocket;