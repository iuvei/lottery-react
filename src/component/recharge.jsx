import React from 'react';
import Bottom from './bottom'
import Top from './top'
import img_wx from './img/cash-wx.jpg'
import img_zfb from './img/cash-zfb.jpg'
import img_bank from './img/cash-bank.jpg'
class Home extends React.Component {
    constructor(props){
        super(props)
        this.state={currSrc:img_wx}
    }
    rechargeTypeChange(src){
        this.setState({currSrc:src})
    }
    render(){
        return (
            <div className="container has-bottom">
                <Top />
                <div className="cash width80" id="cash">
                    <input className="text-input" name="userName" placeholder="请输入充值昵称"/>
                    <input className="text-input" name="jine" placeholder="请输入充值金额"/>
                    <p className="range">充值范围为<span id="range">50~500</span></p>
                    <div className="modes">
                        <ul className="">
                            <li className={this.state.currSrc==img_wx ?'active':''} range="50~500" data-img={img_wx} onClick={()=>this.rechargeTypeChange(img_wx)}><span></span>50~500充值</li>
                            <li className={this.state.currSrc==img_zfb ?'active':''} range="50~5000" data-img={img_zfb} style={{margin:'0 1%'}} onClick={()=>this.rechargeTypeChange(img_zfb)}><span></span>50~5000充值</li>
                            <li className={this.state.currSrc==img_bank ?'active':''} range="5000~100000" data-img={img_bank} onClick={()=>this.rechargeTypeChange(img_bank)}><span></span>网银充值</li>
                        </ul>
                        <img src={this.state.currSrc} width="60%"/>
                        <button className="btn btn-brown btn-block">确定</button>
                    </div>
                </div>
                <Bottom />
            </div>
        )
    }
}
export default Home