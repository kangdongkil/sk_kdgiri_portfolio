jQuery(function($){
    $('.on_list').on('click', 'a',function(event){
        event.preventDefault();
    var $this = $(this);
    var src = $this.find('>img').attr('src');
    var str = /off/i;
    var filename = src.match(str);
    
    $('.on_list > li').attr('src',filename);
    });
});