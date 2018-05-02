import React from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
class DefaultClass extends React.Component{
    constructor(props){
        super(props)
        this.state={btnIndexOn:0}
        let self=this;
        this.initQuickBet={
            initTop(arr) {
                if (!arr) return '';
                var str = null, style_width = arr.length === 3 ? {width:'31%'} : {};
                str=arr.map(val=>(<button className="btn" style={style_width} key={val} onClick={e=>self.TopBtnsClicked(e)}>{val}</button>))
                return <div className="first clearfix">{str}</div>;
            },
            initCenter(arr) {
                if (!arr) return '';
                var str = '', arr1 = arr[0], arr2 = arr[1];
                if (!(arr1 instanceof Array)) {
                    if (typeof arr2 === 'string') {
                        for (var i = arr1.from; i < arr1.length; i++) {
                            str += <button className="btn" key={arr1[i]} onClick={e=>self.CenterBtnsClicked(e)}><span>{i}</span>×{arr2}</button>
                        }
                    } else {
                        str=arr2.map((v,i)=>(<button className="btn" key={i + arr1.from} onClick={e=>self.CenterBtnsClicked(e)}><span>{(i + arr1.from)}</span>×{v}</button>))
                    }
                } else {
                    if (typeof arr2 === 'string') {
                        str=arr1.map(v=>(<button className="btn" key={v} onClick={e=>self.CenterBtnsClicked(e)}><span>{v}</span>×{arr2}</button>))
                    } else {
                        str=arr1.map((v,i)=>(<button className="btn" key={v} onClick={e=>self.CenterBtnsClicked(e)}><span>{v}</span>×{arr2[i]}</button>))
                    }
                }
                return <div className="second clearfix">{str}</div>;
            },
            initBottom(arr) {
                if (!arr) return '';
                var str = '', className_only = arr.length === 1 ? ' only' : '';
                str=arr.map((v,i)=>(<button className={'btn' + className_only} key={v} onClick={e=>self.BottomBtnsClicked(e)}>{v}</button>))
                return <div className="third">{str}</div>;
            },
            initDWD: function (arr1, arr2, arr3) {
                var str = '';
                str += this.initTop(arr1)
                str += this.initCenter(arr2)
                str += this.initBottom(arr3)
                return <div>{this.initTop(arr1)}{this.initCenter(arr2)}{this.initBottom(arr3)}</div>;
            },
            initDWD2: function (arr) {
                var str = [];
                for (var i in arr) {
                    str.push(this.initObj(arr[i]))
                }
                return <div>{str[0]}{str[1]}{str[2]}</div>;
            },
            initObj: function (obj) {
                if (obj['top']) {
                    return this.initTop(obj.top)
                } else if (obj['center']) {
                    return this.initCenter(obj.center)
                } else if (obj['bottom']) {
                    return this.initBottom(obj.bottom)
                }
                return '';
            }
        }
    }
    hideQuickBet(){
        //this.props.onCloseBtnClick(false)
        this.props.dispatch({type:'isShowQuickBet',isShow:false});
    }
    changeWanFa(e,index){
        this.setState({btnIndexOn:index})
    }
    TopBtnsClicked(e){
        this.toggleClass(e.target)
        this.calcBetZhu()
    }
    CenterBtnsClicked(e){
        this.toggleClass(e.target)
        this.calcBetZhu()
    }
    BottomBtnsClicked(e){
        switch (e.target.innerText) {
            case '大':
                let btns=document.querySelectorAll('.second .btn')
                this.addClass(btns);
                let len = parseInt(btns.length / 2);
                for (var i = 0; i < len; i++) {
                    this.removeClass(btns[i])
                }
                break;
            case '小':
                this.removeClass(document.querySelectorAll('.second .btn.on'))
                var btns = document.querySelectorAll('.second .btn'), len = btns.length;
                for (var i = 0; i < parseInt(len / 2); i++) {
                    this.addClass(btns[i])
                }
                break;
            case '单':
                this.removeClass(document.querySelectorAll('.second .btn.on'))
                if (document.querySelectorAll('.second .btn span')[0].innerText === '0') {
                    this.addClass(document.querySelectorAll('.second .btn:nth-child(2n)'));
                } else { this.addClass(document.querySelectorAll('.second .btn:nth-child(2n+1)')); }
                break;
            case '双':
                this.removeClass(document.querySelectorAll('.second .btn.on'))
                if (document.querySelectorAll('.second .btn span')[0].innerText === '0') {
                    this.addClass(document.querySelectorAll('.second .btn:nth-child(2n+1)'));
                } else { this.addClass(document.querySelectorAll('.second .btn:nth-child(2n)')); }
                break;
            case '清':
                $('#quickBetRright .btn.on').removeClass('on')
                break;
        }
        this.calcBetZhu()
    }
    addClass(target){
        if(target.length){for(let i=0;i<target.length;i++){ target[i].className='btn on'}}else{target.className='btn on'}
    }
    toggleClass(target){
        if(target.className=='btn'){target.className='btn on'}else{target.className='btn'}
    }
    removeClass(target){
        if(target.length){for(let i=0;i<target.length;i++){ target[i].className='btn'}}else{target.className='btn'}
    }
    calcBetZhu(){

    }
    componentDidUpdate(prevProps,prevState){
        if(prevState.btnIndexOn!==this.state.btnIndexOn) this.removeClass(document.querySelectorAll('.qb-ctn-right .btn.on'))
        if(prevProps.czId!==this.props.czId ||prevProps.czType!==this.props.czType){this.setState({btnIndexOn:0});this.removeClass(document.querySelectorAll('.qb-ctn-right .btn.on'))}
    }
    componentDidMount(){
        //document.querySelector('#quickBetRright').style.height=document.querySelector('#gameCtn').clientHeight+'px'
    }
    render(){
        let Cwanfabtns=this.props.quickWanFa.map((val,index)=>(<button className={'btn bg-black b-r-b'+(this.state.btnIndexOn===index?' on':'')} key={index} onClick={(e)=>this.changeWanFa(e,index)}>{val==='和大小单双'?<span>{val}</span>:val}</button>));
        let Cwanfasubbtns=null,firstbtnctn=null,secondbtnctn=null,thirdbtnctn=null;
        switch(this.props.czType){
            case 'ssc':
                switch (this.state.btnIndexOn) {
                    case 0:
                        var oneArr = ['万', '千', '百', '十', '个'],
                            twoArr = [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9], '9.8'],
                            threeArr = ['大', '小', '单', '双', '清'];
                        Cwanfasubbtns=this.initQuickBet.initDWD(oneArr, twoArr, threeArr)
                        break;
                    case 1:
                        var oneArr = ['万', '千', '百', '十', '个'],
                            twoArr = [['大', '小', '单', '双', '大单', '小单', '大双', '小双'], ['1.96', '1.96', '1.96', '1.96', '3', '3.5', '3.5', '3']],
                            threeArr = ['清'];
                        Cwanfasubbtns=this.initQuickBet.initDWD(oneArr, twoArr, threeArr)
                        break;
                    case 2:
                        var oneArr = '',
                            twoArr = [['龙', '虎', '和'], ['1.96', '1.96', '10']],
                            threeArr = ['清'];
                        Cwanfasubbtns=this.initQuickBet.initDWD(oneArr, twoArr, threeArr)
                        break;
                    case 3:
                        var oneArr = '',
                            twoArr = [['大', '小', '单', '双'], '1.96'],
                            threeArr = ['清'];
                        Cwanfasubbtns=this.initQuickBet.initDWD(oneArr, twoArr, threeArr)
                        break;
                    case 4:
                        var oneArr = ['前', '中', '后'],
                            twoArr = [['豹', '顺', '对', '半', '杂'], [60, '14', 2.5, '1.96', 2.2]],
                            threeArr = ['清'];
                        Cwanfasubbtns=this.initQuickBet.initDWD(oneArr, twoArr, threeArr)
                        break;
                }
                break;
            case 'pk10':
                switch (this.state.btnIndexOn) {
                    case 0:
                        var oneArr = ['冠军', '亚军', '季军', '第四名', '第五名', '第六名', '第七名', '第八名', '第九名', '第十名'],
                            twoArr = [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10], '9.8'],
                            threeArr = ['大', '小', '单', '双', '清'];
                        Cwanfasubbtns=this.initQuickBet.initDWD(oneArr, twoArr, threeArr)
                        break;
                    case 1:
                        var oneArr = ['冠军', '亚军', '季军', '第四名', '第五名', '第六名', '第七名', '第八名', '第九名', '第十名'],
                            twoArr = [['大', '小', '单', '双', '大单', '小单', '大双', '小双'], ['1.96', '1.96', '1.96', '1.96', '3.5', '3', '3', '3.5']],
                            threeArr = ['清'];
                        Cwanfasubbtns=this.initQuickBet.initDWD(oneArr, twoArr, threeArr)
                        break;
                    case 2:
                        var oneArr = [['大', '小', '单', '双'], ['2', '1.5', '1.5', '2']],
                            twoArr = [{ from: 3 }, [41, 41, 19, 19, 11, 11, 9, 9, 7, 9, 9, 11, 11, 19, 19, 41, 41]],
                            threeArr = ['大', '小', '单', '双', '清'];
                        Cwanfasubbtns=this.initQuickBet.initDWD2([{ center: oneArr }, { center: twoArr }, { bottom: threeArr}])
                        //initQuickBet.initBtnEvent2()
                        break;
                    case 3:
                        var oneArr = '',
                            twoArr = [['庄', '闲'], ['1.96', '1.96']],
                            threeArr = ['清'];
                        Cwanfasubbtns=this.initQuickBet.initDWD(oneArr, twoArr, threeArr)
                        break;
                    case 4:
                        var oneArr = ['第一名', '第二名', '第三名', '第四名', '第五名'],
                            twoArr = [['龙', '虎'], ['1.96', '1.96']],
                            threeArr = ['清'];
                        Cwanfasubbtns=this.initQuickBet.initDWD(oneArr, twoArr, threeArr)
                        break;
                }
                break;
            case 'pc28':
                switch (this.state.btnIndexOn) {
                    case 0:
                        var oneArr = '',
                            twoArr = [['大单', '小单', '大双', '小双'], ['3.6', '3.8', '3.8', '3.6']],
                            threeArr = ['清'];
                        Cwanfasubbtns=this.initQuickBet.initDWD(oneArr, twoArr, threeArr)
                        break;
                    case 1:
                        var oneArr = '',
                            twoArr = [{ from: 0 }, [500, 100, 50, 40, 30, 20, 17, 16, 15, 15, 14, 14, 12, 12, 12, 12, 14, 14, 15, 15, 16, 17, 20, 30, 40, 50, 100, 500]],
                            threeArr = ['清'];
                        Cwanfasubbtns=this.initQuickBet.initDWD(oneArr, twoArr, threeArr)
                        break;
                    case 2:
                        var oneArr = '',
                            twoArr = [['大', '小', '单', '双'], '1.96'],
                            threeArr = ['清'];
                        Cwanfasubbtns=this.initQuickBet.initDWD(oneArr, twoArr, threeArr)
                        break;
                    case 3:
                        var oneArr = '',
                            twoArr = [['极大', '极小'], '19'],
                            threeArr = ['清'];
                        Cwanfasubbtns=this.initQuickBet.initDWD(oneArr, twoArr, threeArr)
                        break;
                    case 4:
                        var oneArr = '',
                            twoArr = [['对子', '豹子', '顺子'], [3, 15, 50]],
                            threeArr = ['清'];
                        Cwanfasubbtns=this.initQuickBet.initDWD(oneArr, twoArr, threeArr)
                        break;
                }
                break;
        }

        return (
            <div className="quick-bet" id="quickBet" style={{display:'block'}}>
                <div className="qb-ctn clearfix">
                    <div className="left" id="quickBetLeft">
                        <p className="bg-black b-r-b">玩法</p>
                        {Cwanfabtns}
                    </div>
                    <div className="qb-ctn-right" id="quickBetRright">
                        {Cwanfasubbtns}
                    </div>
                </div>
                <div className="qb-bottom">
                    <input placeholder="下注金额" className="text-input" id="quickBetJine"/>
                    <p className="bg-black b-l-b">共<span className="red" id="quickBetZhu">5</span>注</p>
                    <button className="btn bg-black b-r-b b-l-b" id="quickBetCfg">确认</button>
                    <button className="btn bg-black" onClick={()=>this.hideQuickBet()}>返回</button>
                </div>
            </div>
        )
    }
}
const mapStateToProps=(state,ownProps)=>{
    return {...state.GetCZInfo}
}
export default connect(mapStateToProps)(DefaultClass)