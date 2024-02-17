document.getElementById("send").addEventListener("click", () => {

    //Request permission from user to recieve notification
    Notification.requestPermission().then(permission => {
        if(permission === 'granted'){
            const notification = new Notification("RMES Notification", {
                body: "Your student has arrived at Ramon Magsaysay Elementary School",
                data: { hello: "World" },
                icon: "girl meme.jfif",
                tag: "Welcome message"
            })

            notification.addEventListener("close", e => {
                
            })
        } else{
            console.log("permission failed");
        }
    });
    
    
    // //register the service worker to handle push events
    // navigator.serviceWorker.register('service-worker.js').then(registration => {
    //     console.log("registration successful");
    // }).catch(error => {
    //     console.error('service -wroker registration failed:', error);
    // });
    
    // //handle push events inside the service worker to handle push events
    // self.addEventListener("push", event => {
    //     const options = {
    //         body: event.data.text(),
    //     };
    
    //     event.waitUntil(
    //         self.registration.showNotification('Ramon magsaysay Monitoring system', options)
    //     )
    
    // })
})
