$(document).ready(function(){
    var defaultX = $('#wrapper').css('left');
    var defaultY = $('#wrapper').css('top');
    var defaultXNode = $('#node').css('left');
    var defaultYNode = $('#node').css('top');

    var moveAmountX = $('#wrapper').css('left');
    var moveAmountY = $('#wrapper').css('top');
    var moveAmountXNode = $('#node').css('left');
    var moveAmountYNode = $('#node').css('top');

    var defaultXBody = $('body').css('left');
    var defaultYBody = $('body').css('top');

    var moveAmountXBody = $('body').css('left');
    var moveAmountYBody = $('body').css('top');

    var currentMousePos = {x: -1, y: -1};


        $(document).mousemove(function (event) { 
            currentMousePos.x = event.pageX;
            currentMousePos.y = event.pageY;


            /* Wrapper*/
            var moveX = (parseInt(moveAmountX) - parseInt(currentMousePos.x)) * 0.05;
            var moveY = (parseInt(moveAmountY) - parseInt(currentMousePos.y)) * 0.05;
            var movingX = parseInt(defaultX) + parseInt(moveX);
            var movingY = parseInt(defaultY) + parseInt(moveY);

            $('#wrapper').css("left", movingX);
            $('#wrapper').css("top", movingY);

            /* Nodes */
            var moveXNode = (parseInt(moveAmountXNode) - parseInt(currentMousePos.x)) * 0.06;
            var moveYNode = (parseInt(moveAmountYNode) - parseInt(currentMousePos.y)) * 0.06;
            var movingXNode = parseInt(defaultXNode) + parseInt(moveXNode);
            var movingYNode = parseInt(defaultYNode) + parseInt(moveYNode);

            $('#node').css("left", movingXNode);
            $('#node').css("top", movingYNode);

            /* Body */
            var moveXBody = (parseInt(moveAmountXBody) - parseInt(currentMousePos.x)) * 0.01;
            var moveYBody = (parseInt(moveAmountYBody) - parseInt(currentMousePos.y)) * 0.01;
            var movingXBody = parseInt(defaultXBody) + parseInt(moveXBody);
            var movingYBody = parseInt(defaultYBody) + parseInt(moveYBody);

            $('body').css('background-position', movingXBody + 'px ' + movingYBody + 'px ');

            // alpha testing purposes
            $("span:first").text("(e.pageX)=  " + currentMousePos.x);
            $("span:last").text("(e.pageY)= " + currentMousePos.y);
            $("p:first").text("(move amount x)=  " + movingXNode);
            $("p:last").text("(move amount y)= " + movingYNode);

            currentMousePos = {x: -1, y: -1};
        });
});