import React from 'react';
import Bottom from './bottom'
import Top from './top'
import {Link} from 'react-router-dom'
class DefaultClass extends React.Component{
    render(){
        return (
            <div className="container has-bottom">
                <Top />
                <div className="personal">
                    <div className="btns">
                        <Link to="/tranacc"><img src={require('./img/icon-tc.png')}/>转账</Link>
                        <Link to="/recharge"><img src={require('./img/icon-recharge.png')}/>充值</Link>
                        <Link to="/cash"><img src={require('./img/icon-cash.png')}/>提现</Link>
                    </div>
                    <div className="btns2 clearfix">
                        <Link to="/betlog"><img src={require('./img/icon-betlog.png')}/><p>投注记录</p></Link>
                        <Link to="/customer"><img src={require('./img/icon-customer.png')}/><p>在线客服</p></Link>
                        <a href="javascript:;"><img src={require('./img/icon-download.png')}/><p>APP下载</p></a>
                        <Link to="/cashlog"><img src={require('./img/icon-reglog.png')}/><p>提现记录</p></Link>
                        <Link to="/rechargelog"><img src={require('./img/icon-cashlog.png')}/><p>充值记录</p></Link>
                        <Link to="/agent"><img src={require('./img/icon-agent.png')}/><p>代理中心</p></Link>
                    </div>
                </div>
                <Bottom />
            </div>
        )
    }
}
export default DefaultClass