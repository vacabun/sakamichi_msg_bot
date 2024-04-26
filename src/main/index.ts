import { ipcMain, BrowserWindow } from 'electron';
ipcMain.on('sakamichi_msg_bot.Greeting', (e, name: string) => {
  console.log('Hello, ' + name + '!');

});

export const onBrowserWindowCreated = (window: BrowserWindow) => {
  console.log('A window has just been created');
  console.log(window);
};