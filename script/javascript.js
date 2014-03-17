$(document).ready(function(){
    var defaultX = $('#wrapper').css('left');
    var defaultY = $('#wrapper').css('top');
    var moveAmountX = $('#wrapper').css('left');
    var moveAmountY = $('#wrapper').css('top');

    var defaultYNode = $('.node').css('top');
    var defaultXNode = $('.node').css('left');
    var moveAmountXNode = $('.node').css('left');
    var moveAmountYNode = $('.node').css('top');

    var defaultYSelected = $('.selected').css('top');
    var defaultXSelected = $('.selected').css('left');
    var moveAmountXSelected = $('.selected').css('left');
    var moveAmountYSelected = $('.selected').css('top');

    var defaultXBody = $('body').css('left');
    var defaultYBody = $('body').css('top');
    var moveAmountXBody = $('body').css('left');
    var moveAmountYBody = $('body').css('top');

    var defaultXFooter = $('#footer').css('left');
    var defaultYFooter = $('#footer').css('top');
    var moveAmountXFooter = $('#footer').css('left');
    var moveAmountYFooter = $('#footer').css('top');

    var currentMousePos = {x: -1, y: -1};

      if(window.DeviceMotionEven==undefined) { 
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
             var moveXNode = (parseInt(moveAmountXNode) - parseInt(currentMousePos.x)) * 0.01;
             var moveYNode = (parseInt(moveAmountYNode) - parseInt(currentMousePos.y)) * 0.01;
             var movingXNode = parseInt(defaultXNode) + parseInt(moveXNode);
             var movingYNode = parseInt(defaultYNode) + parseInt(moveYNode);

             $('.node').css("left", movingXNode);
             $('.node').css("top", movingYNode);

             /* Nodes Selected */
             var moveAmountXSelected = (parseInt(moveAmountXSelected) - parseInt(currentMousePos.x)) * 0.01;
             var moveAmountYSelected = (parseInt(moveAmountYSelected) - parseInt(currentMousePos.y)) * 0.01;
             var movingXSelected = parseInt(defaultXSelected) + parseInt(moveXNode);
             var movingYSelected = parseInt(defaultYSelected) + parseInt(moveYNode);

             $('.selected').css("left", movingXNode);
             $('.selected').css("top", movingYNode);

             /* Footer */ 
             var moveXFooter = (parseInt(moveAmountXFooter) - parseInt(currentMousePos.x)) * 0.1;
             var moveYFooter = (parseInt(moveAmountYFooter) - parseInt(currentMousePos.y)) * 0.1;
             var movingXFooter = parseInt(defaultXFooter) + parseInt(moveXFooter);
             var movingYFooter = parseInt(defaultYFooter) + parseInt(moveYFooter);

             $('#footer').css("left", movingXFooter);
             $('#footer').css("top", movingYFooter);

             /* Body */
             var moveXBody = (parseInt(moveAmountXBody) - parseInt(currentMousePos.x)) * 0.007;
             var moveYBody = (parseInt(moveAmountYBody) - parseInt(currentMousePos.y)) * 0.007;
             var movingXBody = parseInt(defaultXBody) + parseInt(moveXBody);
             var movingYBody = parseInt(defaultYBody) + parseInt(moveYBody);

             if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) { 
                 $('body').css('background-position-x', movingXBody + 'px ');
                 $('body').css('background-position-y', movingYBody + 'px ');
             } else { 
                 $('body').css('background-position', movingXBody + 'px ' + movingYBody + 'px ');
             }

             // alpha testing purposes
             $("span:first").text("(e.pageX)=  " + currentMousePos.x);
             $("span:last").text("(e.pageY)= " + currentMousePos.y);
             $("p:first").text("(move amount x)=  " + movingXNode);
             $("p:last").text("(move amount y)= " + movingYNode);

             currentMousePos = {x: -1, y: -1}; 
        });
      } else { 
         window.ondevicemotion = function (event) { 
            var x = 0;
            var y = 0;
            
            x = event.acceleration.x;
            y = event.acceleration.y;

            /* Wrapper*/
             var moveX = (parseInt(moveAmountX) - parseInt(x)) * 0.05;
             var moveY = (parseInt(moveAmountY) - parseInt(y)) * 0.05;
             var movingX = parseInt(defaultX) + parseInt(moveX);
             var movingY = parseInt(defaultY) + parseInt(moveY);

             $('#wrapper').css("left", movingX);
             $('#wrapper').css("top", movingY);

             /* Nodes */
             var moveXNode = (parseInt(moveAmountXNode) - parseInt(x)) * 0.01;
             var moveYNode = (parseInt(moveAmountYNode) - parseInt(y)) * 0.01;
             var movingXNode = parseInt(defaultXNode) + parseInt(moveXNode);
             var movingYNode = parseInt(defaultYNode) + parseInt(moveYNode);

             $('.node').css("left", movingXNode);
             $('.node').css("top", movingYNode);

             /* Nodes Selected */
             var moveAmountXSelected = (parseInt(moveAmountXSelected) - parseInt(x)) * 0.01;
             var moveAmountYSelected = (parseInt(moveAmountYSelected) - parseInt(y)) * 0.01;
             var movingXSelected = parseInt(defaultXSelected) + parseInt(moveXNode);
             var movingYSelected = parseInt(defaultYSelected) + parseInt(moveYNode);

             $('.selected').css("left", movingXNode);
             $('.selected').css("top", movingYNode);

             /* Footer */ 
             var moveXFooter = (parseInt(moveAmountXFooter) - parseInt(x)) * 0.1;
             var moveYFooter = (parseInt(moveAmountYFooter) - parseInt(y)) * 0.1;
             var movingXFooter = parseInt(defaultXFooter) + parseInt(moveXFooter);
             var movingYFooter = parseInt(defaultYFooter) + parseInt(moveYFooter);

             $('#footer').css("left", movingXFooter);
             $('#footer').css("top", movingYFooter);

             /* Body */
             var moveXBody = (parseInt(moveAmountXBody) - parseInt(x)) * 0.007;
             var moveYBody = (parseInt(moveAmountYBody) - parseInt(y)) * 0.007;
             var movingXBody = parseInt(defaultXBody) + parseInt(moveXBody);
             var movingYBody = parseInt(defaultYBody) + parseInt(moveYBody);

             if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) { 
                 $('body').css('background-position-x', movingXBody + 'px ');
                 $('body').css('background-position-y', movingYBody + 'px ');
             } else { 
                 $('body').css('background-position', movingXBody + 'px ' + movingYBody + 'px ');
             }

             // alpha testing purposes
             $("span:first").text("Device on Iphone=  " + x);
             $("span:last").text("(e.pageY)= " + y);
             $("p:first").text("(move amount x)=  " + movingXNode);
             $("p:last").text("(move amount y)= " + movingYNode);
         }
      }
});