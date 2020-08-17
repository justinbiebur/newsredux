function setNews(state={news:{},isLoading:true,isSuccess:true,page:0},action){
    switch(action.type){
        case 'FETCH_NEWS_SUCCESS':
            return Object.assign({},state,{isLoading:false,isSuccess:true,news:action.payload,page:state.page+1})
        case 'FETCH_NEWS_FAILURE':
            return Object.assign({},state,{isLoading:false,isSuccess:false,news:{}})
        case 'SHOW_LOADING_CIRCLE':
            return Object.assign({},state,{isLoading:true});
        default:
            
            return state;
    }
}
export default setNews;