import React from 'react';
import Bottom from './bottom'
import Top from './top'
import {Link} from 'react-router-dom'
class Home extends React.Component {
    render(){
        return (
            <div className="container has-bottom">
                <Top />
                <div className="recharge" id="recharge">
                    <div className="width80">
                        <div className="input-item">
                            <input className="text-input" name="userName" placeholder="请输入取款金额"/>
                            <button className="btn btn-brown">确定(剩余5次)</button>
                        </div>
                        <p className="tip brown">大额清绑定银行卡</p>
                        <ul className="bind-link width97">
                            <li><Link to="/bind-bank"><img src={require('./img/bind-bank.png')}/><p>绑定银行卡</p></Link></li>
                            <li style={{margin:'0 2%'}}><Link to="/bind-zfb"><img src={require('./img/bind-zfb.png')}/><p>绑定支付宝</p></Link></li>
                            <li><Link to="/bind-wx"><img src={require('./img/bind-wx.png')}/><p>绑定微信</p></Link></li>
                        </ul>
                    </div>
                    <div className="width97 customers">
                        <a href="javascript:;" className="btn btn-yellow"><img src={require('./img/customer.png')}/>在线客服</a>
                        <Link to="/customer-wx" style={{margin:'0 2%'}} className="btn btn-green"><img src={require('./img/customer-wx.png')}/>微信客服</Link>
                        <Link to="/customer-qq" className="btn btn-blue"><img src={require('./img/customer-qq.png')}/>QQ客服</Link>
                    </div>
                </div>
                <Bottom />
            </div>
        )
    }
}
export default Home