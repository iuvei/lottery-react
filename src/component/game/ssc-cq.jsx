import React from 'react';
import Bottom from './bottom'
import Buttons from './buttons'
import Quickbet from './quick-bet'
import SSCTop from './sscTop'
import PK10Top from './pk10Top'
import PC28Top from './pc28Top'
import Rule from './rule'
import './img/style.css'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
class DefaultClass extends React.Component{
    constructor(props){
        super(props);
        this.refreshPage=this.refreshPage.bind(this)
        this.state={isShowQuickBet:false,isShowCZ:false,showClassName:'guess'}
        this.props.GetCZInfo(this.props.match.params)
    }
    showCZ(){this.setState(prevState=>({isShowCZ:!prevState.isShowCZ}));}
    showGameCtn(className){this.setState({showClassName:className})}
    showTrend(e){
        var self = e.target;
        if (self.innerText === '走势') {
            self.innerText='动画';
            document.querySelector('#gameTop>.trend').style.display='block';
            document.querySelector('#gameTop>.animation').style.display='none';
        } else {
            self.innerText='走势';
            document.querySelector('#gameTop>.trend').style.display='none';
            document.querySelector('#gameTop>.animation').style.display='block';
        }
    }
    quickBetToggle(isShow){this.setState(prevState=>({isShowQuickBet:isShow}));}
    refreshPage(){window.location.reload()}
    changeWindow(str){
        let gameCtnHeight = document.querySelector('#gameCtn').clientHeight, gameTopHeight = document.querySelector('#gameTop').clientHeight,num=70;
        if (str === '小窗') {
            document.querySelector('#gameTop').style.height=num + 'px';
            document.querySelector('#gameCtn').style.height=(gameCtnHeight + gameTopHeight - num) + 'px';
            if(document.querySelector('#quickBetRright')) document.querySelector('#quickBetRright').style.height=(gameCtnHeight + gameTopHeight - num) + 'px'
        } else {
            document.querySelector('#gameTop').style.height='';
            document.querySelector('#gameCtn').style.height=gameCtnHeight-170+'px';
            if(document.querySelector('#quickBetRright'))document.querySelector('#quickBetRright').style.height=gameCtnHeight-170 + 'px';
        }
    }
    initWindow(){
        //var gameCtn = $('#gameCtn'), gameTopHeight = $('#gameTop').height(), num = 115, winHeight = $(window).height();
        //var h=winHeight - num - gameTopHeight
        //gameCtn.css('height', h>0?h: '0' + 'px');
    }
    componentWillReceiveProps(nextProps){
        //if(nextProps.match!==this.props.match) this.props.GetCZInfo(this.props.match.params)
    }
    /*在完成首次渲染之前调用*/
    componentWillMount(){}
    /*真实的DOM被渲染出来后调用*/
    componentDidMount(){}
    componentDidUpdate(prevProps){
        if(prevProps.match.params.id!==this.props.match.params.id) {this.props.GetCZInfo(this.props.match.params);this.setState({isShowCZ:false})}
        //console.log(prevProps)
        //console.log(this.props)
        this.changeDomHeight()
        document.querySelector('title').innerText=this.props.czName || 'error';
    }
    /*组件被移除之前被调用*/
    componentWillUnmount(){document.querySelector('title').innerText='王者娱乐';this.props.GetCZInfo({})}
    changeDomHeight(){
        let gameCtnHeight = document.querySelector('#gameCtn').clientHeight, gameTopHeight = document.querySelector('#gameTop').clientHeight,num=110+5,winHeight=window.innerHeight;
        let h=winHeight-num-gameTopHeight
        document.querySelector('#gameCtn').style.height=(h>0?h: '1') + 'px'
        if(document.querySelector('#quickBetRright'))document.querySelector('#quickBetRright').style.height=(h>0?h: '1') + 'px'
    }
    render(){
        let Topcomponent=null,centerConponent=null;
        if(!this.props.czName) return (<p>彩种错误</p>);
        if(this.props.match.params.type==='ssc'){
            Topcomponent=<SSCTop/>;
        }else if(this.props.match.params.type==='pk10'){
            Topcomponent=<PK10Top/>;
        }else if(this.props.match.params.type==='pc28'){Topcomponent=<PC28Top/>}else{return null}
        switch(this.state.showClassName){
            case 'record':centerConponent=(<div className="record" style={{display:'block'}}>
                <ul className="first">
                    <li>会员：飞逝</li><li>代理：0</li><li>编号：543467</li>
                </ul>
                <div className="second clearfix">
                    <button className="btn on">今天</button>
                    <button className="btn">昨天</button>
                    <button className="btn">前天</button>
                    <button className="btn">历史</button>
                </div>
                <div className="third">
                    <table className="table">
                        <thead><tr><td><span>彩种</span></td><td><span>当日结算</span></td><td><span>总流水</span></td><td><span>总盈亏</span></td></tr></thead>
                        <tbody><tr><td><span>重庆时时彩</span></td><td><span>--</span></td><td><span>0</span></td><td><span>0</span></td></tr></tbody>
                    </table>
                    <table className="table">
                        <thead><tr><td><span>彩种</span></td><td><span>当日结算</span></td><td><span>总流水</span></td><td><span>总盈亏</span></td></tr></thead><tbody><tr>
                            <td><span>重庆时时彩重庆时时彩</span></td><td><span>--重庆时时彩重庆时时彩</span></td><td><span>-10000</span></td><td><span>-300000</span></td></tr>
                        </tbody></table>
                </div>
            </div>);break;
            case 'rule':centerConponent=(<div className="rule" style={{display:'block'}}><Rule/></div>);break;
            default:centerConponent=(<div className="guess" style={{display:'block'}}>
                <ul>
                    <li><div className="portrait"><img src={require('../img/user.jpg')} width="100%"/></div>
                        <div className="speak"><p className="user-name-time">欲哭无泪 17：23：01</p><p className="ctn">4/132/80</p></div>
                    </li>
                    <li><div className="portrait"><img src={require('../img/user.jpg')} width="100%"/></div>
                        <div className="speak"><p className="user-name-time">欲哭无泪 17：23：01</p><p className="ctn">4/132/80</p></div>
                    </li>
                    <li className="kefu">
                        <div className="portrait"><img src={require('./img/kefu.png')} width="100%"/></div>
                        <div className="speak">
                            <p className="user-name-time">欲哭无泪 17：23：01</p>
                            <p className="ctn bgyellow">132/804/132/80</p>
                        </div>
                    </li>
                    <li><div className="portrait"><img src={require('../img/user.jpg')} width="100%"/></div>
                        <div className="speak"><p className="user-name-time">欲哭无泪 17：23：01</p><p className="ctn">4/132/80</p></div>
                    </li>
                    <li className="kefu">
                        <div className="portrait"><img src={require('./img/kefu.png')} width="100%"/></div>
                        <div className="speak"><p className="user-name-time">欲哭无泪 17：23：01</p>
                            <p className="ctn bgred">4/132/804/132/804/132/804/132/804/132/804/132/804/132/804/132/804/132/804/132/804/132/804/132/804/132/804/132/804/132/804/132/804/132/804/132/804/132/80</p>
                        </div>
                    </li>
                    <li><div className="portrait"><img src={require('../img/user.jpg')} width="100%"/></div>
                        <div className="speak"><p className="user-name-time">欲哭无泪 17：23：01</p><p className="ctn">4/132/80</p></div>
                    </li>
                    <li><div className="portrait"><img src={require('../img/user.jpg')} width="100%"/></div>
                        <div className="speak"><p className="user-name-time">欲哭无泪 17：23：01</p><p className="ctn">4/132/80</p></div>
                    </li>
                </ul>
            </div>);
        }
        return (
            <div className="game bg-white">
                {Topcomponent}
                <div className="user-info">
                    <div className="user-pic"><img src={require('../img/user.jpg')} width="100%"/></div>
                    <div className="user-ctn">
                        <Buttons isShowCZ={this.state.isShowCZ} onSCSelectClose={()=>this.showCZ()} changeWindow={(num)=>this.changeWindow(num)}/>
                        <p><span>编号：</span><span>353455</span> <span>昵称：</span><span>飞逝</span> <span>余点：</span><span className="red">0</span> <span>在线：</span><span>1043</span></p>
                    </div>
                </div>
                <div className="game-ctn">
                    <div className="left">
                        <button className="btn btn-blue btn-block" onClick={()=>this.showCZ()}>彩种</button>
                        <button className="btn btn-yellow btn-block" onClick={()=>this.showGameCtn('guess')}>竞猜</button>
                        <button className="btn btn-green btn-block" onClick={()=>this.showGameCtn('record')}>记录</button>
                        <button className="btn btn-bluebiolet btn-block" onClick={(e)=>this.showTrend(e)}>走势</button>
                        <button className="btn btn-red btn-block" onClick={()=>this.showGameCtn('rule')}>规则</button><button className="btn btn-darkcyan btn-block" onClick={this.refreshPage}>刷新</button>
                    </div>
                    <div className="game-ctn-right" id="gameCtn">
                        {centerConponent}
                    </div>
                </div>
                <Bottom onQuickBtnClick={(isShow)=>this.quickBetToggle(isShow)}/>
                {this.props.isShow && <Quickbet isShowQuickBet={this.state.isShowQuickBet} onCloseBtnClick={(isShow)=>this.quickBetToggle(isShow)}/>}
            </div>
        )
    }
}
const mapStateToProps=(state,ownProps)=>{
    return {...state.GetCZInfo}
}
import {GetCZInfo} from '../../redux/actions'
const mapDispatchToProps=function(dispatch,props){
    return {GetCZInfo:params=>dispatch(GetCZInfo(params))}
}
export default connect(mapStateToProps,mapDispatchToProps)(DefaultClass)