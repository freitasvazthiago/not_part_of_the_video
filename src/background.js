chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        console.log(sender);
        console.log(sender.tab ?
                    "from a content script:" + sender.tab.url :
                    "from the extension");
        if (request.greeting == "hello")
            sendResponse({farewell: "goodbye"});
    }
);

//video = document.getElementsByClassName('video-stream')[0];
//console.log(video.currentTime);