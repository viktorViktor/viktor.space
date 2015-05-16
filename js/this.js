(function(){
    var words = [
        'an <em>art director</em>',
        'a <em>product designer</em>',
        'a <em>web designer</em>',
        'a <em>"creative"</em>'
        ], i = 0;

    setInterval(function(){
        $('.job-title').fadeOut(function(){
            $(this).html(words[i=(i+1)%words.length]).fadeIn();
        });
    }, 7000);
})();