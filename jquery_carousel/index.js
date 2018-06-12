function Carousel(bannerBox, aBox, btnBox){
    this.now = 0; // 当前图片索引
    this.hasStarted = false;
    this.interval = null;
    this.liItems = null;
    this.len = 0;
    this.aBox = null;
    this.bBox = null;
    
    this.init = function(){
        var that = this;
        this.liItems = $(bannerBox).find('li');
        this.len = this.liItems.length;
        this.aBox = $(bannerBox).find(aBox);
        this.bBox = $(bannerBox).find(btnBox);
        this.liItems.first('li').css({
            'opacity': 1,
            'z-index': 1
        }).siblings('li').css({
            'opacity': 0,
            'z-index': 0
        });

        var aDom = '';
        for(var i = 0; i < this.len; i++){
            aDom += '<a></a>';
        }
        $(aDom).appendTo(this.aBox);
        this.aBox.find('a:first').addClass('indicator-active');
        this.bBox.hide();
        // 鼠标移入banner图时，停止轮播并显示前后按钮，移出时开始轮播并隐藏前后按钮
        $(bannerBox).hover(function(){
            that.stop();
            that.bBox.fadeIn(200);
        }, function(){
            that.start();
            that.bBox.fadeOut(200);
        });
        // 鼠标移入指示器时，显示对应图片，移出时继续播放
        this.aBox.find('a').hover(function(){
            that.stop();
            var out = that.aBox.find('a').filter('.indicator-active').index();
            that.now = $(this).index();
            if(out != that.now){
                that.play(out,that.now);
            }
        },function(){
            that.start();
        })
        // 点击左右按钮时显示上一张或下一张
        $(btnBox).find('a:first').click(function(){
            that.next();
        })
        $(btnBox).find('a:last').click(function(){
            that.prev();
        })

    }
    this.init();
    
    // 播放函数
    Carousel.prototype.play = function(out, now) {
        this.liItems.eq(out).stop().animate({
            opacity: 0,
            'z-index': 0
        }, 500).end().eq(now).stop().animate({
            opacity: 1,
            'z-index': 1
        }, 500);
        this.aBox.find('a').removeClass('indicator-active').eq(now).addClass('indicator-active');
    }
    // 前一张
    Carousel.prototype.prev = function() {
        var out = this.now;
        this.now = (--this.now + this.len) % this.len;
        this.play(out,this.now);

    }
    // 后一张
    Carousel.prototype.next = function() {
        var out = this.now;
        this.now = ++this.now % this.len;
        this.play(out,this.now);
    }
    // 开始函数
    Carousel.prototype.start = function() {
        if(!this.hasStarted) {
            this.hasStarted = true;
            var that = this;
            this.interval = setInterval(function(){
                that.next();
            },2000);
        }
    }
    // 停止函数
    Carousel.prototype.stop = function() {
        clearInterval(this.interval);
        this.hasStarted = false;
    }
    this.start();
}


$(function(){
    var banner1 = new Carousel('#j_bg_ban1', '#j_bg_indicator1', '#j_bg_btn1');
    // var banner2 = new Carousel('#j_bg_ban2', '#j_bg_indicator2', '#j_bg_btn2');
})
