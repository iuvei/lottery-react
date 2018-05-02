
import {GetCZCurrIifo,czInfoState,CHANGECZINFo} from './actions'
function GetCZInfo(state=czInfoState,action){
    switch(action.type){
        case CHANGECZINFo:
            let params=action.params;
            return Object.assign({},state,GetCZCurrIifo(params.type,params.id),{czType:params.type,czId:params.id});
        case 'isShowQuickBet':
            return Object.assign({},state,{isShow:action.isShow});
        default:
            return state;
    }
}
export default {GetCZInfo:GetCZInfo}