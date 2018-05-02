import React from 'react';
import Bottom from './bottom'
import Top from './top'
import {Link} from 'react-router-dom'
class DefaultClass extends React.Component{
    render(){
        return (
            <div className="width97" style={{height:'100%',paddingTop:'6px',width:'calc(100% - 12px)'}}>
                <div className="log">
                    <table className="width97 table">
                        <thead className="bold">
                        <tr><td>ID</td><td>时间</td><td>金额</td><td>状态</td></tr>
                        </thead>
                    </table>
                </div>
                <Bottom />
            </div>
        )
    }
}
export default DefaultClass