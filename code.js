// This plugin will open a modal to prompt the user to enter a number, and
// it will then create that many rectangles on the screen.
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// This file holds the main code for the plugins. It has access to the *document*.
// You can access browser APIs in the <script> tag inside "ui.html" which has a
// full browser environment (see documentation).
// This shows the HTML page in "ui.html".
figma.showUI(__html__, { visible: false });
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
        figma.ui.postMessage({ type: 'send-img', bData: value }, { origin: "*" });
    }
    catch (error) {
        console.log(error);
    }
});
figma.ui.onmessage = (msg) => __awaiter(this, void 0, void 0, function* () {
    if (msg === "close") {
        figma.closePlugin();
    }
});
