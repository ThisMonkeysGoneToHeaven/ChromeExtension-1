console.log('background.js running');

chrome.browserAction.onClicked.addListener(buttonClicked);

async function buttonClicked(tab){
    console.log('extension button clicked!');
    const mssg = {
        txt: "hello"
    };
    const response = await chrome.tabs.sendMessage(tab.id, mssg);
    // console.log('response in background script - ' + response);
}