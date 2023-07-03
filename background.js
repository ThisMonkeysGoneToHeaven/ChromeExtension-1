console.log('background.js running');

chrome.browserAction.onClicked.addListener(buttonClicked);

async function buttonClicked(tab){
    const mssg = {
        txt: "hello"
    };
    const response = await chrome.tabs.sendMessage(tab.id, mssg);
    console.log('response in background script - ' + response);
}