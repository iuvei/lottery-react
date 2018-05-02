import React ,{PropTypes} from 'react';
import { Provider,connect} from 'react-redux'
class ListItem extends React.Component {
    constructor(props){
        super(props)
    }
    componentWillMount(){}
    render() {
        const text = this.props.name;
        return (
            <li onClick={() => this.props.onDelete(text.id)}>
                <span>{text.text}</span>
            </li>
        )
    }
}
class List extends React.Component {

    constructor(props) {
        super(props);
        this.props.dispatch({type:'getCZInfo',params:{type:'ssc',id:'ff'}})
        console.log(this)
        this.state = {
            items: [],id:0
        }
    }
    handleclick() {
        const value = this.refs.addlist.value;
        if(value==='') return;
        const str = {
            id: this.state.id,
            text: value
        }
        let id=++this.state.id;
        let items = this.state.items;
        items = [...items, str];//合并数值
        this.setState({
            items,id
        });
        this.refs.addlist.value='';
    }
    //删除其中的
    deleteItem(id) {
        this.setState({
            items: this.state.items.filter(
                result => result.id !== id
            ),
        });
    }
    render() {
        const ListIt = this.state.items.map(item => {
            return (
                <ListItem key={item.id} name={item} onDelete={this.deleteItem.bind(this)} />
            );
        });
        return (
            <div className="list">
                <input type="text" placeholder="请输入" ref="addlist" />
                <button className="addbutton" onClick={this.handleclick.bind(this)}>添加值</button>
                <ul>
                    {ListIt}
                </ul>
            </div>
        );
    }
}
const mapStateToProps=(state,ownProps)=>{
    return state
}
const Connectlist=connect(mapStateToProps)(List)
import { createStore, combineReducers } from 'redux'
import reducers from '../redux/reducers'
const store = createStore(
    combineReducers(reducers)
)
class app extends React.Component{
    render(){
        return(
            <Provider store={store}><Connectlist /></Provider>
        )
    }
}
export default app;