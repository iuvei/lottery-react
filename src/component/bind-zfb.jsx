import React from 'react';
import Bottom from './bottom'
import Top from './top'
import {Link} from 'react-router-dom'
class DefaultClass extends React.Component{
    render(){
        return (
            <div className="container has-bottom">
                <Top/>
                <div className="width80 bind">
                    <h2 className="brown">绑定支付宝</h2>
                    <input className="text-input" name="bankName" placeholder="支付宝昵称"/>
                    <input className="text-input" name="cardholder" placeholder="支付宝账号"/>
                    <div className="pr file"><input className="text-input" name="fileName" disabled placeholder="未选择任何文件"/><input id="file" type="file" name="file"/></div>
                    <p className="tip">请上传支付宝二维码收款图片</p>
                    <button className="btn btn-brown btn-block" id="bindZFB">绑定</button>
                </div>
                <Bottom/>
            </div>
        )
    }
}
export default DefaultClass