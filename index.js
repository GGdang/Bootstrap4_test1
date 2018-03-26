$(function(){
    new Vue({
        el:'.Bikin-Demo',
        data:{
            window:{
                scrollTop:0,
                windowX:0,
                windowY:0,
                introduceY:0,
                contentY:0,
                expenseY:0,
                ourteamY:0,
                contactY:0
            }
        },
        methods:{
            animate:function(){
                const self = this;
                let ul_one=document.getElementById('menu-link');
                let ul_one_lis=ul_one.getElementsByTagName('li');
                for(let i = 0 ;i<ul_one_lis.length;i++){
                    ul_one_lis[i].index = i;
                    ul_one_lis[i].onclick=function(){
                        let num = this.index+1;
                        console.log(num);
                        switch(num){
                            case 1:
                            $("html,body").stop(true,false).animate({scrollTop:self.window.introduceY-100},600);
                            break;
                            case 2:
                            $("html,body").stop(true,false).animate({scrollTop:self.window.contentY-100},600); 
                            break;
                            case 3:
                            $("html,body").stop(true,false).animate({scrollTop:self.window.expenseY-100},600);
                            break;
                            case 4:
                            $("html,body").stop(true,false).animate({scrollTop:self.window.ourteamY-100},600); 
                            break;
                            case 5:
                            $("html,body").stop(true,false).animate({scrollTop:self.window.contactY-100},600); 
                            break; 
                        }
                    }
                }    
            },
            animateTop:function(){
                $("html,body").stop(true,false).animate({scrollTop:0},600); 
            }
        },
        computed:{
            topbtn:function(){
                const self = this;
                if(self.window.scrollTop>200){
                    $('.topbtn').stop(true,false).animate({right:50},600)
                }else{
                    $('.topbtn').stop(true,false).animate({right:-100},600)
                }
            }
        },
        watch:{
        },
        created:function(){
            const self=this;
            self.window.scrollTop=$(window).scrollTop();
            window.addEventListener('scroll',function(){
                self.window.scrollTop=$(window).scrollTop();
            })
            self.window.windowX=document.body.clientWidth;
            self.window.windowY=document.body.clientHeight;
            self.window.introduceY=$('.introduce').offset().top;
            self.window.contentY=$('.content').offset().top;
            self.window.expenseY=$('.expense').offset().top;
            self.window.ourteamY=$('.ourTeam').offset().top;
            self.window.contactY=$('.contactUs').offset().top;
            window.addEventListener('resize',function(){
                self.window.windowX=document.body.clientWidth;
                self.window.windowY=document.body.clientHeight;
                self.window.introduceY=$('.introduce').offset().top;
                self.window.contentY=$('.content').offset().top;
                self.window.expenseY=$('.expense').offset().top;
                self.window.ourteamY=$('.ourTeam').offset().top;
                self.window.contactY=$('.contactUs').offset().top;
            })
            if(self.window.scrollTop>200){
                $('.topbtn').css({right:50});     
            }
        }
    })

})