$(document).ready(function () {
    var selection = 1; 
    $('#bubble1').addClass('selectedBubble');     

    gameLoop = setInterval(function(){ 
        if(selection == 5){            
            updateSlide(6);
            selection = 1;            
        }
        else{
            selection +=1;
            updateSlide(selection);
        }
    }, 5000);

    $('#lButton').on("click", function(){            
        if(selection == 1){            
            updateSlide(0);
            selection = 5;            
        }
        else{
            selection -=1;
            updateSlide(selection);
        }
        //Stop the loop
        clearInterval(gameLoop);
        //Restart the loop
        gameLoop = setInterval(function(){ 
            if(selection == 5){            
                updateSlide(6);
                selection = 1;            
            }
            else{
                selection +=1;
                updateSlide(selection);
            }
        }, 5000);        
    });
    $('#rButton').on("click", function(){
        if(selection == 5){
            updateSlide(6);
            selection = 1;
        }
        else{
            selection +=1;
            updateSlide(selection);
        }        
        //Stop the loop
        clearInterval(gameLoop);
        //Restart the loop
        gameLoop = setInterval(function(){ 
            if(selection == 5){            
                updateSlide(6);
                selection = 1;            
            }
            else{
                selection +=1;
                updateSlide(selection);
            }
        }, 5000);

    }); 
    $('.bubbles').on("click", function(){        
        $('.bubbles').removeClass('selectedBubble');
        $(this).addClass('selectedBubble');
        var selectedValue = parseInt($(this).attr('id')[6]);
        selection = selectedValue;
        updateSlide(selectedValue);
        //Stop the loop
        clearInterval(gameLoop);
        //Restart the loop
        gameLoop = setInterval(function(){ 
            if(selection == 5){            
                updateSlide(6);
                selection = 1;            
            }
            else{
                selection +=1;
                updateSlide(selection);
            }
        }, 5000);

    });      
});

function updateSlide(selection){      
    updateBubble(selection);
    switch(selection){
        case 0:
            setTimeout(
            function(){
                $('#window').css("left", "-3500px");
            }, 1025);
            $( "#window" ).animate({
                    left: 0
                }, 1000);
            break;
        case 1:
            $( "#window" ).animate({
                left: -700 
            }, 1000 );
            break;
        case 2:
             $( "#window" ).animate({
                left: -1400 
            }, 1000 );                
            break;
        case 3:
             $( "#window" ).animate({
                left: -2100 
            }, 1000 );
            break;        
        case 4:
             $( "#window" ).animate({
                left: -2800 
            }, 1000 );
            break;
        case 5:
             $( "#window" ).animate({
                left: -3500
            }, 1000 );
            break;
        case 6:
            setTimeout(
            function(){
                $('#window').css("left", "-700px");
            }, 1025);
            $( "#window" ).animate({
                    left: -4200
                }, 1000);
            break;
    }
}

function updateBubble(selection){
if(selection > 0 && selection < 6){
        var bubbleString = "#bubble" + selection;         
    }
    else if(selection == 0){
        var bubbleString = "#bubble5";
    }
    else if(selection == 6){
        var bubbleString = "#bubble1";
    }
    $('.bubbles').removeClass('selectedBubble');
    $(bubbleString).addClass('selectedBubble');
}

