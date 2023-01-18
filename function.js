$(function() {
    var minutes = 00;
    var seconds = 00;
    var tens = 00;

    var Interval;

    $("#start").on('click', function() {
        clearInterval(Interval);
        Interval = setInterval(startTimer, 10);
    });

    $('#stop').on('click', function(){
        clearInterval(Interval);
        
        
    });

    $('#reset').on('click', function(){
        clearInterval(Interval);
        minutes = seconds = tens = 00;
        $('#tens').html("00");
        $('#seconds').html("00");
        $('#minutes').html("00");
    });


    function startTimer() {
        tens++;
        if(tens < 9){
            $('#tens').html("0" + tens);
        }
        if(tens > 10){
            $('#tens').html(tens);
        }
        if(tens > 99){
            tens = 00;
            seconds++;
            if(seconds < 10){
                $('#seconds').html("0" + seconds);
            }
            if(seconds >= 10){
                $('#seconds').html(seconds);
            }
        }
        if(seconds > 59){
            seconds = 00;
            minutes++;
            $('#seconds').html("00");
            if(minutes < 10){
                $('#minutes').html('0' + minutes);
            }
            if(minutes >= 10){
                $('#minutes').html(minutes);
            }
        }
    }
});