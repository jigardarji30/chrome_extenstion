
chrome.runtime.onMessage.addListener(function (request, sender, callback) {
    if (request.action == "xhttp") {
        data = request.data;
        $.ajax({
            type: request.method,
            url: request.url,
            data: data,
            success: function (response, data) {
                if (data == "success") {
                    callback(response);
                }
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                callback();
            }
        });

        return true;
    }
});