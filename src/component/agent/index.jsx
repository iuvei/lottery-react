import React from 'react';
import Bottom from '../bottom'
import {Link} from 'react-router-dom'
class DefaultClass extends React.Component{
    render(){
        return (
            <div className="agent container has-bottom">
                <div className="nav">
                    <Link to="/agent/player" className="btn">下级玩家</Link><Link to="/agent/flow" className="btn">查看流水</Link>
                </div>
                <p className="tip brown">长按图片保存您的代理图片</p>
                <img src={require('../img/agent-home.png')} width="100%"/>
                <Bottom/>
            </div>
        )
    }
}
export default DefaultClass