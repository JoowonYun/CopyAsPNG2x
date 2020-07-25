// This plugin will open a modal to prompt the user to enter a number, and
// it will then create that many rectangles on the screen.

// This file holds the main code for the plugins. It has access to the *document*.
// You can access browser APIs in the <script> tag inside "ui.html" which has a
// full browser environment (see documentation).

// This shows the HTML page in "ui.html".
figma.showUI(__html__, { visible: false });

// Calls to "parent.postMessage" from within the HTML page will trigger this
// callback. The callback will be passed the "pluginMessage" property of the
// posted message.
interface ExportSettingsImage {
  readonly format: "JPG" | "PNG"
  readonly contentsOnly?: boolean    // defaults to true
  readonly suffix?: string
  readonly constraint?: ExportSettingsConstraints
}

let exportSetting: ExportSettingsImage = {
  format: "PNG",
  suffix: "",
  contentsOnly: true,
  constraint: {
    type: "SCALE",
    value: 2
  }
}

figma.currentPage.selection[0].exportAsync(exportSetting).then((value) => {
  try {
    figma.ui.postMessage({type: 'send-img', bData: value}, {origin: "*"})

  } catch (error) {
    console.log(error)    
  }
})

figma.ui.onmessage = async (msg) => {
  if(msg === "close") {
    figma.closePlugin()
  }
}
