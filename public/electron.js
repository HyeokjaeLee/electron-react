const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require("path");
const isDev = require("electron-is-dev");
const { ipcMain } = require("electron");

app.on("ready", async () => {
  const win = new BrowserWindow({
    width: 1200,
    height: 1000,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"), // use a preload script
    },
  });
  win.loadURL(
    isDev
      ? "http://localhost:3000"
      : `file://${path.join(__dirname, "../build/index.html")}`
  );
  ipcMain.on("toElectron", (event, data) => {
    console.log(data);
    win.webContents.send("fromElectron", "I'm in electron.js");
  });
});

app.on("window-all-closed", () => {
  app.quit();
});
