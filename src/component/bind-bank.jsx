import React from 'react';
import Bottom from './bottom'
import Top from './top'
import {Link} from 'react-router-dom'
class DefaultClass extends React.Component{
    render(){
        return (
            <div className="container has-bottom">
                <Top/>
                <div className="width80 bind">
                    <h2 className="brown">绑定银行卡</h2>
                    <input className="text-input" v-model="bank.bankName" placeholder="银行名称"/>
                    <input className="text-input" v-model="bank.cardholder" placeholder="持卡人姓名"/>
                    <input className="text-input" v-model="bank.bankNo" placeholder="银行卡号"/>
                    <input className="text-input" v-model="bank.bankNo2" placeholder="确认银行卡号"/>
                    <button className="btn btn-brown btn-block" click="PostBankInfo">绑定</button>
                </div>
                <Bottom/>
            </div>
        )
    }
}
export default DefaultClass