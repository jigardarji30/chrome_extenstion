
$(document).on('click', '.submit-get-hash', function (e) {
    e.preventDefault();
    chrome.runtime.sendMessage({
        method: 'POST',
        action: 'xhttp',
        url: 'http://localhost/larahashpassword/home.php',
        dataType: 'JSON',
        data: { string: $('.string').val() }
    }, function (response) {
        console.log(response);
        response = JSON.parse(response);
        if (response.status == true) {
            $('.error-string').html('');
            $('.getHashshow').show();
            $('.getHash').html(response.data);
        }
        if (response.status == false) {
            $('.getHashshow').hide();
            $('.error-string').html('');
            $('.string').addClass('error-show');
            $('.error-string').append(`<div class="">${response.message}</div>`);
        }
    })
})
