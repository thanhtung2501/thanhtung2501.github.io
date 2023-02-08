$(function() {
    const answerHander = () => {
        const showHideMsg = () => {
            $('#msg').text('');
        };

        const answerSuccess = (res) => {
            $('#8ball').val(res.ans);
            $('#msg').text('Success!!!!');
            setTimeout(showHideMsg, 3000);
        };

        const noSuccess = (err) => {
            $('#8ball').val(err);
            $('#msg').text('Error!!!!');
            setTimeout(showHideMsg, 3000);
        };

        const data = {
            ans: $('#8ball').val()
        };

        $.get({
            url: '/8ball',
            data: data,
            contenType: "application/json; charset=utf-8"
        }).done(answerSuccess)
        .fail(noSuccess);
    };

    $('#ask8Ball').click(answerHander);

    $('#8ball').keypress((event) => {
        let keycode = (event.keyCode ? event.keyCode : event.which);
        if (keycode == '13') {
            answerHander();
        }
    });
});