(function () {
    const API_URL = 'http://localhost:5000/api/events';

    let sessionId = localStorage.getItem('sessionId');

    if (!sessionId) {
        sessionId = crypto.randomUUID();
        localStorage.setItem('sessionId', sessionId);
    }

    function sendEvent(type, extra = {}) {
        fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                session_id: sessionId,
                event_type: type,
                page_url: window.location.href,
                timestamp: new Date().toISOString(),
                ...extra
            })
        });

    }

    sendEvent('page_view');

    document.addEventListener("click", function (e) {
        sendEvent("click", 
            {
                x: e.clientX,
                y: e.clientY
            }
        );
    });
})();