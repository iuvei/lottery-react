import React from 'react';
import {Link} from 'react-router-dom'
class Bottom extends React.Component{
    render(){
        return (
            <div className="bottom">
                <ul>
                    <li><Link to="/recharge"><img src={require('./img/icon-recharge.png')}/><p>充值</p></Link></li>
                    <li><Link to="/cash"><img src={require('./img/icon-cash.png')}/><p>提现</p></Link></li>
                    <li><Link to="/" className="hall"><img src={require('./img/icon-home.png')}/><p>大厅</p></Link></li>
                    <li><Link to="/rule"><img src={require('./img/icon-wx.png')}/><p>规则</p></Link></li>
                    <li><Link to="/center"><img src={require('./img/icon-personal.png')}/><p>个人中心</p></Link></li>
                </ul>
            </div>
        )
    }
}
export default Bottom