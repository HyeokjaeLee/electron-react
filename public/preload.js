const { contextBridge } = require("electron");

// Expose protected methods that allow the renderer process to use
// the ipcRenderer without exposing the entire object
contextBridge.exposeInMainWorld("communication", {
  send: (message) => {
    console.log(message);
  },
  receive: () => "receive message",
});
