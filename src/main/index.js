'use strict'

import { app, BrowserWindow, Tray } from 'electron'

/**
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */
if (process.env.NODE_ENV !== 'development') {
  global.__static = require('path').join(__dirname, '/static').replace(/\\/g, '\\\\')
}

let mainWindow
let tray
const winURL = process.env.NODE_ENV === 'development'
  ? `http://localhost:9080`
  : `file://${__dirname}/index.html`

function createWindow () {
  /**
   * Initial window options
   */
  mainWindow = new BrowserWindow({
    height: 600, // 高
    width: 900, // 宽
    title: 'title',
    show: true, // 创建后是否显示
    frame: true, // 是否创建frameless窗口
    fullscreenable: true, // 是否允许全屏
    center: true, // 是否出现在屏幕居中的位置
    backgroundColor: '#fff', // 背景色，用于transparent和frameless窗口
    titleBarStyle: '#f90', // 标题栏的样式，有hidden、hiddenInset、customButtonsOnHover等
    resizable: true, // 是否允许拉伸大小
    transparent: false, // 是否是透明窗口（仅macOS）
    vibrancy: 'ultra-dark', // 窗口模糊的样式（仅macOS）
    webPreferences: {
      backgroundThrottling: false // 当页面被置于非激活窗口的时候是否停止动画和计时器
    }
  })

  mainWindow.loadURL(winURL)

  mainWindow.on('closed', () => {
    mainWindow = null
  })
  if (process.platform === 'darwin' || process.platform === 'win32') {
    createTray()
  }
}
function createTray () {
  const menubarPic = process.platform === 'darwin' ? `${__static}/favicon.png` : `${__static}/favicon.png`
  tray = new Tray(menubarPic)
  tray.on('right-click', () => {
    mainWindow.isVisible() ? mainWindow.hide() : mainWindow.show()
  })
  tray.on('click', () => {
    mainWindow.isVisible() ? mainWindow.hide() : mainWindow.show()
  })
}
app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
  app.title = '111'
})
