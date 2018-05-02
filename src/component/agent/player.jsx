import React from 'react';
import {Link} from 'react-router-dom'
class DefaultClass extends React.Component{
    render(){
        return (
            <div className="agent-page">
                <div className="head">
                    <a href="javascript:history.go(-1);">&lt;&nbsp;返回</a>下级玩家
                </div>
                <div className="width97">
                    <p className="title" style={{marginBottom:0}}>下级玩家</p>
                    <table className="table" style={{marginTop:0}}>
                        <thead className="bold">
                        <tr><td>ID</td><td>昵称</td><td>注册时间</td><td>贡献流水</td></tr>
                        </thead>
                        <tbody>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
export default DefaultClass