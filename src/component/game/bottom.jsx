import React from 'react';
import {Link,matchPath} from 'react-router-dom'
import {connect} from 'react-redux'
class DefaultClass extends React.Component{
    constructor(props){
        super(props);
        this.keyboardClicked=this.keyboardClicked.bind(this);
        this.showKeyboardBtn=this.showKeyboardBtn.bind(this);
        this.state={isKeyboardShow:false,inputVal:''}

    }
    quickBet(){
        //this.props.onQuickBtnClick(true)
        this.props.dispatch({type:'isShowQuickBet',isShow:true});console.log(this)
    }
    keyboardClicked(e){
        if(e.target.tagName.toLowerCase()!='button') return;
        const val=e.target.innerText;let betInput=this.state.inputVal;
        switch (val) {
            case '清':
                betInput='';
                break;
            case '关闭':
                this.showKeyboardBtn()
                break;
            case '发送':

                break;
            case ' ':
                break;
            case '←':
                betInput=betInput.val().slice(0, -1);
                break;
            default:
                betInput=betInput + val;
        }
        this.setState({inputVal:betInput});
    }
    //组件更新props或state完成render后
    componentDidUpdate(){
        document.getElementById('keyboard').innerHTML=this.gentBtnKeyBoard(this.props.keyBoardArr)
    }
    showKeyboardBtn(){this.setState(prevState=>({isKeyboardShow:!prevState.isKeyboardShow}))}
    sendBet(){}
    render(){
        return (
            <div>
                <div className="game-bottom">
                    <button className={'keyboard-btn '+(this.state.isKeyboardShow?'on':'')} id="keyboardBtn" onClick={this.showKeyboardBtn}></button>
                    <div className="operation clearfix">
                        <input placeholder="玩法/号码/金额" id="betInput" value={this.state.inputVal}/>
                        <button className="btn" id="sendBet" onClick={e=>this.sendBet()}>发送</button><button className="btn" id="quickBetBtn" onClick={e=>this.quickBet(e)}>极速投注</button>
                    </div>
                </div>
                <div className="keyboard" id="keyboard" onClick={this.keyboardClicked} style={{display:this.state.isKeyboardShow?'block':'none'}}>

                </div>
                <div className="dialog dialog-bet">
                    <div className="content">
                        <p className="tip">期数:32049359号码:中顺金额:2</p>
                        <div className="operation">
                            <button className="btn">取消</button><button className="btn">立即投注</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    gentBtnKeyBoard(arr){
        arr = arr.indexOf(',') < 0 ? arr.split('') : arr.split(',');
        var str = '<ul><li>';
        for (var i = 0; i < arr.length; i++) {
            str += '<button class="btn" text="' + arr[i] + '">' + arr[i] + '</button>';
            if ((i + 1) % 9 === 0 && i !== arr.length - 1) {
                str += '</li><li>';
            }
        }
        str += '</li><li><button class="btn" text="清">清</button><button class="btn" text="关闭">关闭</button><button class="btn" text="发送">发送</button></li></ul>';
        return str;
    }
}
const mapStateToProps=(state,ownProps)=>{
    return {...state.GetCZInfo}
}
export default connect(mapStateToProps)(DefaultClass)