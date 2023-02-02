$(function() {
    let item = $('#circle'); 
    let inc = item.width();
    let interval = setInterval(function() {
        inc += 10;
        $('#circle').width(inc).height(inc);
    }, 250);

    item.click(() => {
        clearInterval(interval);
        item.remove();
    });

    $('#start').click(function() {
        const circleWidth = $('#inputWidth').val();
        const numCircles = $('#numberCircles').val();
        const clazz = 'circle';
    
        
        let circleBlock = $('#circleBlock');
        
        for (let i = 0; i < numCircles; i++) {
            let aCircle = $('<div>', {
                id: 'newId' + i,
                class: clazz,
                width: circleWidth,
                height: circleWidth
            });

            circleBlock.append(aCircle);
        }
    });

});