// This plugin will open a modal to prompt the user to enter a number, and
// it will then create that many rectangles on the screen.
// This file holds the main code for the plugins. It has access to the *document*.
// You can access browser APIs in the <script> tag inside "ui.html" which has a
// full browser environment (see documentation).
// This shows the HTML page in "ui.html".
figma.showUI(__html__);
let exportSetting = {
    format: "PNG",
    suffix: "",
    contentsOnly: true,
    constraint: {
        type: "SCALE",
        value: 2
    }
};
figma.currentPage.selection[0].exportAsync(exportSetting).then((value) => {
    try {
        // figma.ui.postMessage({type: 'send-img', data: Buffer.from(value).toString('base64'), bData: value})  
        figma.ui.postMessage({ type: 'send-img', bData: value }, { origin: '*' });
    }
    catch (error) {
        console.log(error);
    }
    // figma.closePlugin()
});
