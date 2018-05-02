import React from 'react';
import Bottom from './bottom'
import Top from './top'
import {Link} from 'react-router-dom'
import {showDialogTip} from '../common'
class DefaultClass extends React.Component{
    copyId(){
        console.log(this.copyInput)
        this.copyInput.select();
        document.execCommand("Copy");
        const val=this.copyInput.value;
        this.copyInput.value='';
        this.copyInput.value=val;
        showDialogTip('复制成功');
    }
    render(){
        return (
            <div className="container has-bottom">
                <div className="width80">
                    <div className="width80 cust-qq">
                        <p className="tip">点击复制微信客服号码</p>
                        <p className="tip">添加微信客服</p>
                        <div className="input-item">
                            <input className="text-input" name="userName" readOnly value="gdfgdfgg" ref={(el)=>this.copyInput=el}/>
                            <button className="btn btn-brown" onClick={()=>this.copyId()}>点击复制</button>
                        </div>
                        <img src={require('./img/jhy-wx.png')}/>
                    </div>
                </div>
                <Bottom/>
            </div>
        )
    }
}
export default DefaultClass