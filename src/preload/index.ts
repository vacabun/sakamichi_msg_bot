import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('sakamichi_msg_bot', {
  greeting: (name: string) => {
    ipcRenderer.send('sakamichi_msg_bot.Greeting', name);
  }
});