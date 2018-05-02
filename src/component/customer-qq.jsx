import React from 'react';
import Bottom from './bottom'
import {showDialogInfo,showDialogTip} from '../common'
import Top from './top'
import {Link} from 'react-router-dom'
class DefaultClass extends React.Component{
    copyId(){
        this.copyInput.select();
        document.execCommand("Copy");
        const val=this.copyInput.value;
        this.copyInput.value='';
        this.copyInput.value=val;
        showDialogInfo('复制成功');
    }
    render(){
        return (
            <div className="container has-bottom">
                <div className="width80">
                    <div className="width80 cust-qq">
                        <p className="tip">点击复制QQ客服号码</p>
                        <p className="tip">添加QQ客服</p>
                        <div className="input-item">
                            <input className="text-input" name="userName" value="254354" readOnly id="copyValue" ref={(el)=>this.copyInput=el}/>
                            <button className="btn btn-brown" onClick={()=>this.copyId()}>点击复制</button>
                        </div>
                        <img src={require('./img/jhy-qq.png')}/>
                    </div>
                </div>
                <Bottom/>
            </div>
        )
    }
}
export default DefaultClass