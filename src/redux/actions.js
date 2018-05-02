export const btnArr = {ssc:'大小单双/1234总龙虎和 5678前中后连杂90.←豹顺对半查回上下分',pk10:'大小单双/1234庄闲和龙虎5678查回上下分90.←',pc28:'大,小,单,双,/,1,2,3,4,草,操,点,买,极大,5,6,7,8,前,中,后,连,极小,9,0,.,←,豹子,顺子,对子,,查,回,上,下,分'},
    quickWanFa = {ssc:['定位胆', '两面盘', '龙虎和', '和大小单双', '花样玩法'],pk10:['定位胆', '两面盘', '冠亚和', '冠亚庄闲', '龙虎'],pc28:['组合', '特码', '大小单双', '极大极小', '趣味玩法']},
    czList = { 'pk10': { pk10: '北京赛车PK10', xyft: '幸运飞艇', ffpk: '分分PK10', jssm: '极速赛马', dbft: '迪拜飞艇', amsg: '澳门赛狗' },
        'ssc': { cq: '重庆时时彩', xj: '新疆时时彩', wf: '河内五分彩', sf: '台湾三分彩', ff: '南下分分彩' },
        'pc28': { 'pcdd': 'PC蛋蛋', jnd: '加拿大蛋蛋', xjp: '新加坡蛋蛋' }
    };
export const czType={ssc:'ssc',pk10:'pk10',pc28:'pc28'}
export const czInfoState={czType:'',czId:'',keyBoardArr:'',quickWanFa:[],czName:'',isShowQuickBet:false}
export const CHANGECZINFo='getCZInfo'

export function GetCZCurrIifo(type,id){
    var obj={keyBoardArr:'',quickWanFa:[],czName:''}
    if(czList[type] && czList[type][id]){
        obj.keyBoardArr=btnArr[type];
        obj.quickWanFa=quickWanFa[type];
        obj.czName=czList[type][id];
    }
    return obj
}
export function GetCZInfo(params){
    return {type:CHANGECZINFo,params}
}
export function QuickBetHOS(isShow){
    return {type:'isShowQuickBet',isShow}
}
