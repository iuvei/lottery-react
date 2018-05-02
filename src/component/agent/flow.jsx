import React from 'react';
import {Link} from 'react-router-dom'
class DefaultClass extends React.Component{
    render(){
        return (
            <div className="agent-page">
                <div className="head">
                    <a href="javascript:history.go(-1);">&lt;&nbsp;返回</a>查看流水
                </div>
                <div className="width80">
                    <div className="input-time"><input className="text-input" placeholder="选择日期" id="start"/>&nbsp;&nbsp;到&nbsp;&nbsp;<input className="text-input" placeholder="选择日期" id="end"/><button className="btn btn-blue">查询</button></div>

                    <table className="table">
                        <thead>
                        <tr><td>彩种</td><td>期数</td><td>金额</td><td>时间</td></tr>
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