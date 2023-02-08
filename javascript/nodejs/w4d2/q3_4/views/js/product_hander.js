$(function() {
    const showHideMsg = () => {
        // $('#msg').text('');
        $('#msg').hide();
    }

    const addSucess = (res) => {
        $('#msg').text('Added to cart successful!!!!');
        $('#msg').show();
        setTimeout(showHideMsg, 3000);
    };

    const addFailure = () => {
        $('#msg').text('Error!!!!');
        $('#msg').show();
        setTimeout(showHideMsg, 3000);
    };

    const arrItem = $('a[name=addToCart]');
    for (let i = 0; i < arrItem.length; i++) {
        let item = arrItem[i];
        item.click(() => {
            console.log(this);
            const index = $('#index')
            const name = $('#name').val();
            const price = $('#price').val();
            const quantity = $('#quantity').val();
    
            const data = {
                index: $('#index').val()
                // name: name,
                // price: price,
                // quantity: quantity
            };
    
            $.post('/addToCart', {
                data: JSON.stringify(data),
                contenType: "application/json; charset=utf-8"
            }).done(addSucess)
            .fail(addFailure);
        });
    }

    // $('a[name=addToCart]').click(() => {
    //     const index = $('#index')
    //     const name = $('#name').val();
    //     const price = $('#price').val();
    //     const quantity = $('#quantity').val();

    //     const data = {
    //         index: $('#index').val()
    //         // name: name,
    //         // price: price,
    //         // quantity: quantity
    //     };

    //     $.post('/addToCart', {
    //         data: JSON.stringify(data),
    //         contenType: "application/json; charset=utf-8"
    //     }).done(addSucess)
    //     .fail(addFailure);
    // });

});