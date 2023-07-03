console.log('Member of the Panda Community!');

function changeParasToPurple(){
    let paragrahps = document.getElementsByTagName('p');
    for (elem of paragrahps){
        elem.style['background-color'] = '#FF00FF';
        }
}

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse){
        console.log('mssg received at content-script : ' + request.txt);
        if(request.txt === 'hello'){
            changeParasToPurple();
        }
    }
);