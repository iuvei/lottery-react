export function showDialogTip(msg, time) {
    var wait = time || 1000, dialogTip = $('<div class="dialog-tip"><span class="tip">'+msg+'</span></div>'), position = window.innerHeight*(Math.random()/3+1) / 3;
    dialogTip.appendTo($('body'));
    dialogTip.animate({ bottom: position + 'px',opacity:1 }, 200, 'ease-in', function () { window.setTimeout(function () { dialogTip.fadeOut(function () { dialogTip.remove() }); }, wait) });
}

export function showDialogInfo(msg, time, fun){
    var dom = $('<div class="dialog" style="display:block;"><div class="content"><div class="ctn-close"><a href="javascript:;" id="btnCloseInfo" class="close"><img src="'+require('./component/img/icon-close.png')+'" width="100%"/></a></div>' +
        '<div class="width80"><p class="tip-info">'+msg+'</p><br /><button class="btn btn-brown btn-block" id="btnCloseConfig">确定'+(time?'(<span id="countDown">'+time+'</span>)':'')+'</button></div></div></div>'),interval=null;
    dom.appendTo($('body'));
    if(time){
        var interval = setInterval(function () {
            $('#countDown').text(--time);
            if (time === 0) { clearInterval(interval); setTimeout(function () { dom.remove();if(fun){fun.call(this);} }, 100); }
        }, 1000);
    }
    $('#btnCloseInfo,#btnCloseConfig').click(function(){dom.remove();if(interval){clearInterval(interval);} if(fun){fun.call(this);}});
}
Array.prototype.includes=Array.prototype.includes?Array.prototype.includes:function(value) { for(var i=0;i<this.length;i++){if (this[i]===value) return true} return false }

export function GetLog(url,scroll,tbody,field) {
    var pageIndex = 1, allPage = 0;
    GetLogAjax()
    $(scroll).off('scroll').on('scroll', function (e) {
        if (e.target.scrollHeight - 10 < e.target.scrollTop + e.target.clientHeight) {
            GetLogAjax();
        }
    })
    function GetLogAjax() {
        sendAjax({ url: url, data: { pageIndex: pageIndex }, success: function (data) {
            if (data.d.SCode === 0) {
                allPage = data.d.Val.AllPage; pageIndex = data.d.Val.CrtPage;
                if (allPage <= pageIndex) { $(scroll).off('scroll'); }
                pageIndex++;
                var pageData = data.d.Val.PageData, str = '';
                for (var i = 0; i < pageData.length; i++) {
                    str += '<tr>';
                    for(var j=0;j<field.length;j++){
                        str+='<td>' + pageData[i][field[j]] + '</td>'
                    }
                    str+='</tr>';
                }
                $(tbody).append(str);
            }
        }
        });
    }
}
export function sendAjax(obj){
    var url=obj.url,data=obj.data,type=obj.type?obj.type:'post',success=obj.success?obj.success:function(){},error=obj.error?obj.error:function(){},refresh=obj.refresh?false:true,loading=obj.loading?true:false;
    var loadingManage={
        loadingDom:undefined,
        show:function(){
            if(this.loadingDom) return;
            this.loadingDom=$('<div class="loading"><div class="spinner spinner-ios"><svg viewBox="0 0 64 64"><g stroke-width="4" stroke-linecap="round"><line y1="17" y2="29" transform="translate(32,32) rotate(180)"><animate attributeName="stroke-opacity" dur="750ms" values="1;.85;.7;.65;.55;.45;.35;.25;.15;.1;0;1" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(210)"><animate attributeName="stroke-opacity" dur="750ms" values="0;1;.85;.7;.65;.55;.45;.35;.25;.15;.1;0" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(240)"><animate attributeName="stroke-opacity" dur="750ms" values=".1;0;1;.85;.7;.65;.55;.45;.35;.25;.15;.1" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(270)"><animate attributeName="stroke-opacity" dur="750ms" values=".15;.1;0;1;.85;.7;.65;.55;.45;.35;.25;.15" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(300)"><animate attributeName="stroke-opacity" dur="750ms" values=".25;.15;.1;0;1;.85;.7;.65;.55;.45;.35;.25" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(330)"><animate attributeName="stroke-opacity" dur="750ms" values=".35;.25;.15;.1;0;1;.85;.7;.65;.55;.45;.35" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(0)"><animate attributeName="stroke-opacity" dur="750ms" values=".45;.35;.25;.15;.1;0;1;.85;.7;.65;.55;.45" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(30)"><animate attributeName="stroke-opacity" dur="750ms" values=".55;.45;.35;.25;.15;.1;0;1;.85;.7;.65;.55" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(60)"><animate attributeName="stroke-opacity" dur="750ms" values=".65;.55;.45;.35;.25;.15;.1;0;1;.85;.7;.65" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(90)"><animate attributeName="stroke-opacity" dur="750ms" values=".7;.65;.55;.45;.35;.25;.15;.1;0;1;.85;.7" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(120)"><animate attributeName="stroke-opacity" dur="750ms" values=".85;.7;.65;.55;.45;.35;.25;.15;.1;0;1;.85" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(150)"><animate attributeName="stroke-opacity" dur="750ms" values="1;.85;.7;.65;.55;.45;.35;.25;.15;.1;0;1" repeatCount="indefinite"></animate></line></g></svg></div></div>');
            $('body').append(this.loadingDom);
        },
        hide:function(){
            if(this.loadingDom){this.loadingDom.remove();this.loadingDom=undefined;}
        }
    }
    if(!url) return;
    if(!window.sendingUrl){window.sendingUrl=[url]}else
    if(window.sendingUrl.includes(url)){return;}else{window.sendingUrl.push(url)}
    loading && loadingManage.show();
    $.ajax({
        url: '/wx/Common/BasePage.aspx/'+url,
        type:type,
        cache: false,
        dataType: 'json',
        contentType: "application/json; charset=utf-8",
        data: typeof data==='object'?JSON.stringify(data):data,
        error: function () {
            loadingManage.hide();
            if(refresh){showDialogTip('请求失败，请重试');}
            deleteArray(url);
            error.call(this,data);
        },
        success: function (data) {
            loadingManage.hide();
            deleteArray(url)
            if (data.d.SCode === 1) {
                if(refresh){showDialogTip(data.d.Msg);}
            }
            success.call(this,data);
        }
    });
    function deleteArray(item,arr){
        if(!arr){arr=window.sendingUrl}
        for(var i=0;i<arr.length;i++){
            if(arr[i]===item){
                arr.splice(i,1);break;
            }
        }
    }
}