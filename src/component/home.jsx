import React from 'react';
import Bottom from './bottom'
import {Link} from 'react-router-dom'
import img_pk10Pk10 from './img/pk10-pk10.gif'
class Home extends React.Component {
    constructor(props){
        super(props)
    }
    componentWillMount() {
    }
    render(){
        return (
            <div className="home has-bottom">
                <div className="notice width97">
                    <marquee style={{lineHeight:'20px'}} direction="left" scrollamount="2" scrolldelay="1">公告，公告，公告，公告，公告，公告，公告，公告，公告，公告，公告，公告，</marquee>
                </div>
                <div className="user width97">
                    <img src={require('./img/user.jpg')} width="70"/>
                    <div className="info">
                        <p className="name">昵称：飞逝</p>
                        <p>编号：82261</p>
                        <p>点数：0</p>
                    </div>
                </div>
                <div className="cz">
                    <div className="cz-list">
                        <div className="name"><img src={require('./img/home-pk10.png')}/></div>
                        <ul className="clearfix">
                            <li><Link to="/game/pk10/pk10"><img src={require('./img/pk10-pk10.gif')}/></Link></li>
                            <li><Link to="/game/pk10/xyft"><img src={require('./img/pk10-xyft.png')}/></Link></li>
                            <li><Link to="/game/pk10/ffpk"><img src={require('./img/pk10-ff.gif')}/></Link></li>
                            <li><Link to="/game/pk10/jssm"><img src={require('./img/pk10-jssm.gif')}/></Link></li>
                            <li><Link to="/game/pk10/dbft"><img src={require('./img/pk10-dbft.gif')}/></Link></li>
                            <li><Link to="/game/pk10/amsg"><img src={require('./img/pk10-sg.gif')}/></Link></li>
                        </ul>
                    </div>
                    <div className="cz-list">
                        <div className="name"><img src={require('./img/home-ssc.png')}/></div>
                        <ul className="clearfix">
                            <li><Link to="/game/ssc/cq"><img src={require('./img/ssc-cq.gif')}/></Link></li>
                            <li><Link to="/game/ssc/xj"><img src={require('./img/ssc-xj.gif')}/></Link></li>
                            <li><Link to="/game/ssc/wf"><img src={require('./img/ssc-wf.gif')}/></Link></li>
                            <li><Link to="/game/ssc/sf"><img src={require('./img/ssc-sf.png')}/></Link></li>
                            <li><Link to="/game/ssc/ff"><img src={require('./img/ssc-ff.gif')}/></Link></li>
                        </ul>
                    </div>
                    <div className="cz-list">
                        <div className="name"><img src={require('./img/home-pc28.png')}/></div>
                        <ul className="clearfix">
                            <li><Link to="/game/pc28/pcdd"><img src={require('./img/pc28-pcdd.gif')}/></Link></li>
                            <li><Link to="/game/pc28/jnd"><img src={require('./img/pc28-jnd.png')}/></Link></li>
                            <li><Link to="/game/pc28/xjp"><img src={require('./img/pc28-xjp.gif')}/></Link></li>
                        </ul>
                    </div>
                </div>
                <Bottom/>
            </div>
        )
    }
}
export default Home