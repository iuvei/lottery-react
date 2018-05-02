import React from 'react';
import {Link} from 'react-router-dom'
import iconHome from './img/icon-home.png'
class DefaultClass extends React.Component{
    constructor(props){
        super(props)
    }
    dialogClicked(){this.props.onSCSelectClose()}
    dialogCtnClicked(e){e.stopPropagation()}
    changeWindow(e){
        this.props.changeWindow(e.target.innerText)
        e.target.innerText=e.target.innerText==='小窗'?'大窗':'小窗'
    }
    render(){
        return (
            <div>
                <div className="hall-btns">
                    <Link to="/" className="red"><img src={iconHome} width="10px"/>返回大厅</Link>
                    <Link to="/recharge">充值</Link><Link to="/cash">提现</Link><a href="javascript:;" onClick={(e)=>this.changeWindow(e)}>小窗</a><a href="javascript:;">在线客服</a>
                </div>
                <div className="dialog" style={{display:this.props.isShowCZ?'block':'none'}} onClick={(e)=>this.dialogClicked(e)}>
                    <div className="content" onClick={(e)=>{this.dialogCtnClicked(e)}}>
                        <div className="ctn-close">
                            <a className="close" onClick={(e)=>this.dialogClicked(e)}><img src={require('../img/icon-close.png')} width="100%"/></a>
                        </div>
                        <div className="select-cz clearfix">
                            <Link to="/game/pk10/pk10"><img src={require('../img/pk10-pk10.gif')}/></Link>
                            <Link to="/game/pk10/xyft"><img src={require('../img/pk10-xyft.png')}/></Link>
                            <Link to="/game/pk10/ffpk"><img src={require('../img/pk10-ff.gif')}/></Link>
                            <Link to="/game/pk10/jssm"><img src={require('../img/pk10-jssm.gif')}/></Link>
                            <Link to="/game/pk10/dbft"><img src={require('../img/pk10-dbft.gif')}/></Link>
                            <Link to="/game/pk10/amsg"><img src={require('../img/pk10-sg.gif')}/></Link>
                            <Link to="/game/ssc/cq"><img src={require('../img/ssc-cq.gif')}/></Link>
                            <Link to="/game/ssc/xj"><img src={require('../img/ssc-xj.gif')}/></Link>
                            <Link to="/game/ssc/wf"><img src={require('../img/ssc-wf.gif')}/></Link>
                            <Link to="/game/ssc/sf"><img src={require('../img/ssc-sf.png')}/></Link>
                            <Link to="/game/ssc/ff"><img src={require('../img/ssc-ff.gif')}/></Link>
                            <Link to="/game/pc28/pcdd"><img src={require('../img/pc28-pcdd.gif')}/></Link>
                            <Link to="/game/pc28/jnd"><img src={require('../img/pc28-jnd.png')}/></Link>
                            <Link to="/game/pc28/xjp"><img src={require('../img/pc28-xjp.gif')}/></Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default DefaultClass