/*滚动添加css*/
var off1 = 1;
var off2 = 1;
var off3 = 1;


var isScroll = {
    /*初始化*/
    init: function (_el) {
        this.start(_el);
        $(window).on('scroll', function () {
           isScroll.start(_el)
        });
    },
    /*开始*/
    start: function (_el) {
        var self = this;
        var video1 = $('.video1 video');
        var video2 = $('.video2 video');
        var video3 = $('.video3 video');
        $(_el).each(function () {
            var _self = $(this);
            /*滚动高度*/
            var isScrollTop = $(window).scrollTop();
            /*滚动视度*/
            var isWindowHeiget = $(window).height() * 0.8;
            /**/
            var _class = $(this).data('animation');
            if (isScrollTop + isWindowHeiget > $(this).offset().top) {
                _self.addClass(_class);
            }
        });
        if ($(window).scrollTop()  > video1.offset().top && off1 == 1) {
            video1[0].play();
            off1 = 0;
            //var t = setTimeout(function(){
            //    video1.css("z-index",998);
            //},500);
        }
        if ($(window).scrollTop()  > video2.offset().top && off2 == 1) {
            video2[0].play();
            off2 = 0;
        }
        if ($(window).scrollTop() + $(window).height() * 0.1  > video3.offset().top && off3 == 1) {
            video3[0].play();
            off3 = 0;
        }
    }
};
