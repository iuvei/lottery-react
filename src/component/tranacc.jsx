import React from 'react';
import Bottom from './bottom'
import Top from './top'
import {Link} from 'react-router-dom'
class DefaultClass extends React.Component{
    render(){
        return (
            <div className="container has-bottom">
                <Top />
                <div className="tranacc cash width80">
                    <p className="tip brown">转出</p>
                    <input className="text-input input-white" name="userName" placeholder="剩余点数：0"/>
                    <p className="tip brown">转入</p>
                    <input className="text-input input-white" name="userName" placeholder="剩余点数：0"/>
                    <input className="text-input" name="userName" placeholder="请输入转账金额"/>
                    <button className="btn btn-brown btn-block">确定</button>
                </div>
                <Bottom />
            </div>
        )
    }
}
export default DefaultClass