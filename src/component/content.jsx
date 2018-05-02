import React from 'react';
import {connect} from 'react-redux'
import {Switch,Route,Link,Router,HashRouter} from 'react-router-dom';
import Home from './home'
import Rule from './rule'
import Recharge from './recharge'
import Cash from './cash'
import BetLog from './betlog'
import bindBank from './bind-bank'
import bindZFB from './bind-zfb'
import bindWX from './bind-wx'
import cashLog from './cashlog'
import Center from './center'
import Customer from './customer'
import customerQQ from './customer-qq'
import customerWX from './customer-wx'
import rechargeLog from './rechargelog'
import tranAcc from './tranacc'
import agentIndex from './agent/index'
import agentFlow from './agent/flow'
import agentPlayer from './agent/player'
import gameSSC_CQ from './game/ssc-cq'


import './img/style.css'
class Content extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <HashRouter>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/rule" component={Rule}/>
                    <Route exact path="/recharge" component={Recharge}/>
                    <Route exact path="/cash" component={Cash}/>
                    <Route exact path="/betlog" component={BetLog}/>
                    <Route exact path="/bind-bank" component={bindBank}/>
                    <Route exact path="/bind-zfb" component={bindZFB}/>
                    <Route exact path="/bind-wx" component={bindWX}/>
                    <Route exact path="/cashlog" component={cashLog}/>
                    <Route exact path="/center" component={Center}/>
                    <Route exact path="/customer" component={Customer}/>
                    <Route exact path="/customer-qq" component={customerQQ}/>
                    <Route exact path="/customer-wx" component={customerWX}/>
                    <Route exact path="/rechargelog" component={rechargeLog}/>
                    <Route exact path="/tranacc" component={tranAcc}/>
                    <Route exact path="/agent" component={agentIndex}/>
                    <Route exact path="/agent/flow" component={agentFlow}/>
                    <Route exact path="/agent/player" component={agentPlayer}/>
                    <Route exact path="/game/:type/:id" component={gameSSC_CQ}></Route>
                </Switch>
            </HashRouter>
        )
    }
}
export default connect()(Content)