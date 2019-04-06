'use strict'

import { app, BrowserWindow, Tray, dialog, Menu } from 'electron'

/**
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */
if (process.env.NODE_ENV !== 'development') {
  global.__static = require('path').join(__dirname, '/static').replace(/\\/g, '\\\\')
}

let mainWindow
let tray
let contextMenu
const winURL = process.env.NODE_ENV === 'development'
  ? `http://localhost:9080`
  : `file://${__dirname}/index.html`

function createWindow () {
  mainWindow = new BrowserWindow({
    height: 550, // 高
    width: 900, // 宽
    show: true, // 创建后是否显示
    frame: false, // 是否创建frameless窗口
    fullscreenable: true, // 是否允许全屏
    fullscreen: false,
    center: true, // 是否出现在屏幕居中的位置
    titleBarStyle: 'hidden', // 标题栏的样式，有hidden、hiddenInset、customButtonsOnHover等
    resizable: true, // 是否允许拉伸大小
    transparent: true, // 是否是透明窗口（仅macOS）
    vibrancy: 'ultra-dark', // 窗口模糊的样式（仅macOS）
    webPreferences: {
      backgroundThrottling: false // 当页面被置于非激活窗口的时候是否停止动画和计时器
    }
  })

  mainWindow.loadURL(winURL)
  // mainWindow.openDevTools()
  mainWindow.on('closed', () => {
    mainWindow = null
  })
  if (process.platform === 'darwin' || process.platform === 'win32') {
    createTray()
  }
}

function createContextMenu () {
  return Menu.buildFromTemplate([
    {
      label: '关于',
      click () {
        dialog.showMessageBox({
          message: 'Electron-Computer-Info',
          detail: '技术栈：electron-vue\n作者: Nick\nGithub:https://github.com/nick233333/electron-computer-info'
        })
      }
    },
    {
      label: '重启',
      click () {
        app.relaunch()
        app.exit(0)
      }
    },
    {
      role: 'quit',
      label: '退出'
    }
  ])
}

function createTray () {
  if (tray) {
    return false
  }
  const menubarPic = process.platform === 'darwin' ? `${__static}/logo-darwin.png` : `${__static}/logo-win32.png`
  tray = new Tray(menubarPic)
  tray.on('right-click', () => {
    if (mainWindow) {
      mainWindow.hide()
    }
    contextMenu = createContextMenu()
    tray.popUpContextMenu(contextMenu)
  })
  tray.on('click', () => {
    if (mainWindow) {
      mainWindow.isVisible() ? mainWindow.hide() : mainWindow.show()
    }
  })
}

const shouldQuit = app.makeSingleInstance((commandLine, workingDir) => {
  if (mainWindow) {
    mainWindow.isMinimized() && mainWindow.restore()
    mainWindow.focus()
  }
})
if (shouldQuit) {
  app.quit()
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
  mainWindow.show()
})
