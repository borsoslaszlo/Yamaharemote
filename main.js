const { app, BrowserWindow } = require('electron')




const createWindow = () => {
    const win = new BrowserWindow({
      width: 800,
      height: 600,
      
      webPreferences: {
        nodeIntegration: true,
        defaultEncoding: 'UTF-8',
        worldSafeExecuteJavaScript: true,
        /* See https://stackoverflow.com/questions/63427191/security-warning-in-the-console-of-browserwindow-electron-9-2-0 */
        enableRemoteModule: true
      }
      
    })
  
    win.loadFile('index.html')
    

  }


  app.whenReady().then(() => {
    createWindow()
    
    
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
          createWindow()
          
        }
      })
  })

  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit()
    }
  })


  


  