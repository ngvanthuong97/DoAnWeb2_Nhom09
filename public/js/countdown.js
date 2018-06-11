$(document).ready(function() {
    var interval = setInterval(function(){
        $('.time').each(function(){
            if ($(this).html() == 'NaN:NaN' || $(this).html() == 'Ending ...')
            {
                $(this).html('Ending ...');
            }
            else
            {
                var timer = $(this).html();
                timer = timer.split(':');
                var minutes = parseInt(timer[0], 10);
                var seconds = parseInt(timer[1], 10);
                seconds -= 1;
                if (minutes < 0) return clearInterval(interval);
                if (minutes < 10 && minutes.length != 2) minutes = '0' + minutes;
                if (seconds < 0 && minutes != 0) {
                    minutes -= 1;
                    if (minutes < 10 && minutes.length != 2) minutes = '0' + minutes;
                    seconds = 59;
                }
                else if (seconds < 10 && length.seconds != 2) seconds = '0' + seconds;
                $(this).html(minutes + ':' + seconds);
                
                if (minutes == 0 && seconds == 0)
                {
                    //clearInterval(interval);
                    $(this).html('Ending ...');
                }
            }
        });
    }, 1000);
});

/*$(document).ready(function() {
    $('.time').each(function() {
        var self = this;
        var inter = setInterval(function() {
            var timer = $(self).html();
            timer = timer.split(':');

            var m = parseInt(timer[0], 10);
            var s = parseInt(timer[1], 10);

            s -= 1;

            if (s < 0 && m != 0) {
                m -= 1;
                s = 59;                     
            } else if (m == 0 && s < 0) {
                clearInterval(inter);                       
                $(self).html("end!");
                //console.log("continue");
            } else {
                if (m < 10) {
                    m = '0' + m;    
                } 
                if (s < 10) {
                    s = '0' + s;    
                }
                $(self).html(m + ":" + s);
            }
        }, 1000); 
    });
});
*/