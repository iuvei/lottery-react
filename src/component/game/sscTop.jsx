import React from 'react';
import {Link} from 'react-router-dom'
import ssc_cq from './img/ssc-cq.png'
import ssc_xj from './img/ssc-xj.png'
import ssc_wf from './img/ssc-wf.png'
import ssc_sf from './img/ssc-sf.png'
import ssc_ff from './img/ssc-ff.png'
import {connect} from 'react-redux'
class DefaultClass extends React.Component {
    constructor(props){
        super(props);
        this.state={logoImgs:{cq:ssc_cq,xj:ssc_xj,wf:ssc_wf,sf:ssc_sf,ff:ssc_ff}}
    }
    render() {
        let LogoImg=this.state.logoImgs[this.props.czId]
        return (
            <div className="game-top" id="gameTop">
                <div className="animation">
                    <div className="first clearfix">
                        <div><img src={LogoImg} height="90px"/></div>
                        <div className="center">
                            <p className="time">05:33</p>
                            <div className="lottery">
                                <div><img src={require('./img/pic-he.png')}/></div>
                                <div style={{margin:'0 4%'}}><img src={require('./img/pic-da.png')}/></div>
                                <div><img src={require('./img/pic-shuang.png')}/></div>
                            </div>
                        </div>
                        <div>
                            <p className="info-qihao">期号 <span>43235434544</span></p>
                            <p className="info-time">开奖时间 <span>09:50</span></p>
                        </div>
                    </div>
                    <div className="second">
                        <div className="haoma"><span>1</span><div className="wei">万</div></div><div className="sign"><img src={require('./img/icon-jia.png')}/></div>
                        <div className="haoma"><span>3</span><div className="wei">千</div></div><div className="sign"><img src={require('./img/icon-jia.png')}/></div>
                        <div className="haoma"><span>5</span><div className="wei">百</div></div><div className="sign"><img src={require('./img/icon-jia.png')}/></div>
                        <div className="haoma"><span>6</span><div className="wei">十</div></div><div className="sign"><img src={require('./img/icon-jia.png')}/></div>
                        <div className="haoma"><span>7</span><div className="wei">个</div></div><div className="sign"><img src={require('./img/icon-dengyu.png')}/></div>
                        <div className="haoma">21</div>
                    </div>
                </div>
                <div className="trend">
                    <table className="table">
                        <thead>
                        <tr><td>期号</td><td>开奖号码</td><td colSpan="3">总和</td><td>龙虎</td></tr>
                        </thead>
                        <tbody>
                        <tr><td>0321066</td><td className="lightblue">9 0 6 8 9</td><td className="lightred">32</td><td className="lightred">大</td><td className="lightred">双</td><td className="aqua">和</td></tr>
                        <tr><td>0321066</td><td className="lightblue">0 3 4 2 8</td><td className="lightred">17</td><td className="aqua">小</td><td className="aqua">单</td><td className="lightred">虎</td></tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
const mapStateToProps=(state,ownProps)=>{
    return {...state.GetCZInfo}
}
export default connect(mapStateToProps)(DefaultClass)