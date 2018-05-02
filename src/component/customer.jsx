import React from 'react';
import Bottom from './bottom'
import Top from './top'
import {Link} from 'react-router-dom'
class DefaultClass extends React.Component{
    render(){
        return (
            <div className="has-bottom">
                <div className="width80">
                    <div className="customer">
                        <a href="javascript:;" className="btn btn-yellow btn-block"><img src={require('./img/customer.png')}/>在线客服</a>
                        <Link to="/customer-wx" className="btn btn-green btn-block"><img src={require('./img/customer-wx.png')}/>微信客服</Link>
                        <Link to="/customer-qq" className="btn btn-blue btn-block"><img src={require('./img/customer-qq.png')}/>QQ客服</Link>
                    </div>
                </div>
                <Bottom/>
            </div>
        )
    }
}
export default DefaultClass