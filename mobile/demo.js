/** layer mobile demo */

!function(){

var demo = {};

//扫二维码
window.erweima && (erweima.onclick = function(){
    layer.open({
        type: 1,
        content: '<img src="./layer-mobile.png">'
    })
});

//小试牛刀
demo.trys = function(index){

    //提示框
    if(index === 0){
        layer.open({
            content: '您好',
            time: 0
        });
    }

    //信息框
    else if(index === 1){
        layer.open({
            title: '信息'
            ,content: '移动版和PC版不能同时存在同一页面'
            ,btn: ['我知道了']
        });
    }

    //询问框
    else if(index === 2){
        layer.open({
            title: '提示',
            content: '您确定要刷新一下本页面吗？',
            btn: ['嗯', '不要'],
            yes: function(index){
                location.reload();
                layer.close(index);
            }
        });
    }

    //页面层
    else if(index === 3){
        layer.open({
            type: 1,
            content: '<h2>弹出页面测试</h2><ul><li><a href="##">广东省</a></li><li><a href="##">福建省</a></li><li><a href="##">山西省</a></li><li><a href="##">福建省</a></li></ul>',
            anim: true,
            style: 'position:fixed; left:10%; top:10%; width:80%; height:80%; border:none;'
        });
    }

    //加载条
    else if(index === 4){
        layer.open({
            type: 2
            //,shade: false
            ,time: 5
            //,content: '加载测试中…'
        });
    }
};

if(window.trys){
    var tryas = trys.getElementsByTagName('a');
    for(var i = 0, len = tryas.length; i < len; i++){
        (function(i){
            tryas[i].addEventListener('click', function(){
                demo.trys(i);
            });
        }(i));
    };
}

//展开演示代码
if(window.seecodes){
    var ishide, exttext = seecodes.innerHTML;
    seecodes.onclick = function(){
        if(!ishide){
            trycode.style.display='block';
            this.innerHTML = '隐藏';
            ishide = true;
        } else {
            trycode.style.display='none';
            this.innerHTML = exttext;
            ishide = false;
        }
    }
}

if(window.downs){
    downs.onclick = function(){
        var xhr = new XMLHttpRequest();
        xhr.open('get', '/item/filedown.asp?id=3957', true)
        xhr.send(null);
    };
}


}();




