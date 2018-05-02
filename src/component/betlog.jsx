import React from 'react';
import Bottom from './bottom'
import Top from './top'
import {Link} from 'react-router-dom'
class DefaultClass extends React.Component{
    render(){
        return (
                <div className="width97" style={{height:'100%',paddingTop:'6px',width:'calc(100% - 12px)'}}>
                    <div className="log">
                        <div className="btns width97">
                            <button className="btn active">今日</button><button className="btn right">昨日</button>
                        </div>
                        <div className="btns width97 btns-3">
                            <button className="btn active">今日投注</button><button className="btn" style={{margin:'0 2%'}}>今日账变</button><button className="btn">今日福利</button>
                        </div>
                        <table className="width97 table">
                            <thead>
                            <tr><td>投注</td><td>中奖</td><td>盈利</td><td>充值</td><td>提现</td></tr>
                            </thead>
                            <tbody>
                            <tr><td>0元</td><td>0元</td><td>0元</td><td>0元</td><td>0元</td></tr>
                            </tbody>
                        </table>
                        <div className="width97">
                            <select><option>全部彩种</option><option>彩种1</option><option>彩种2</option><option>彩种3</option></select>
                        </div>
                        <table className="width97 table">
                            <thead>
                            <tr><td>彩种</td><td>期号</td><td>玩法</td><td>号码</td><td>金额</td><td>状态</td></tr>
                            </thead>
                        </table>
                    </div>
                    <Bottom />
                </div>
        )
    }
}
export default DefaultClass