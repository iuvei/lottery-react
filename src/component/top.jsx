import React from 'react';
import closeImg from './img/icon-close.png'
class Top extends React.Component {
    render(){
        return (
        <div className="top">
            <div className="user width97">
                <img src={require('./img/user.jpg')} width="70"/>
                <div className="info">
                    <p className="name">昵称：飞逝<span className="right">ID：82261</span></p>
                    <p>剩余点数：0</p>
                    <p className="brown">返水点数：0<button className="btn btn-brown" id="btn-fs">兑换</button></p>
                    <p className="brown">佣金点数：0<button className="btn btn-brown" id="btn-yj">兑换</button></p>
                </div>
            </div>
            <div className="dialog" id="exchange-fs">
                <div className="content">
                    <div className="ctn-close">
                        <a href="javascript:;" id="btnClose-fs" className="close"><img src={closeImg} width="100%"/></a>
                    </div>
                    <h3>返水点数兑换</h3>
                    <div className="width80">
                        <input className="text-input" placeholder="请输入返水点数"/>
                        <p className="brown">当前可兑换返水点数为：0</p>
                        <p className="brown">兑换比例：1000:5</p>
                        <button className="btn btn-brown btn-block">确定</button>
                    </div>
                </div>
            </div>
            <div className="dialog" id="exchange-yj">
                <div className="content">
                    <div className="ctn-close">
                        <a href="javascript:;" id="btnClose-yj" className="close"><img src={closeImg} width="100%"/></a>
                    </div>
                    <h3>佣金点数兑换</h3>
                    <div className="width80">
                        <input className="text-input" placeholder="请输入佣金点数"/>
                        <p className="brown">当前可兑换佣金点数为：0</p>
                        <p className="brown">兑换比例：1000:5</p>
                        <button className="btn btn-brown btn-block">确定</button>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}
export default Top