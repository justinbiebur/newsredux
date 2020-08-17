import {apiKey,apiUrl} from '../helpers/config';


export const showLoadingCircle=()=>{
    return {type:'SHOW_LOADING_CIRCLE'}
}
export const fetchNews=(params)=>{
    return function(dispatch){
        dispatch(showLoadingCircle());
        if(params.query){
            return dispatch(fetchWithQuery(params))
        }
        else{
            return dispatch(fetchWithoutQuery(params))
        }
    }
}

export const fetchWithQuery=(params)=>{
    
    return function (dispatch){
        dispatch(wait())
        fetch(`${apiUrl}?apiKey=${apiKey}&q=${params.query}`).then(res=>res.json()).then(
            (data)=>{
                dispatch(setNewsSuccess(data));
            }
        ).catch(err=>{
            dispatch(setNewsFailure(err))
        })
        
    }
}


export const fetchWithoutQuery=(params)=>{
    
    return function (dispatch){
        dispatch(wait())
        if(params.country){
            
            if(params.category)
                    fetch(`${apiUrl}?apiKey=${apiKey}&country=${params.country}&category=${params.category}`).then(res=>res.json()).then(
                        (data)=>{
                            
                            dispatch(setNewsSuccess(data));
                        }
                    ).catch(err=>{
                        dispatch(setNewsFailure(err))
                    })
            else{
                    fetch(`${apiUrl}?apiKey=${apiKey}&country=${params.country}`).then(res=>res.json()).then(
                        (data)=>{
                           
                            dispatch(setNewsSuccess(data));
                        }
                    ).catch(err=>{
                        dispatch(setNewsFailure(err))
                    })
            }
    }
    else{
        fetch(`${apiUrl}?apiKey=${apiKey}&sources=${params.sources}`).then(res=>res.json()).then(
            (data)=>{
                dispatch(setNewsSuccess(data));
            }
        ).catch(err=>{
            dispatch(setNewsFailure(err))
        })
    }
        
    }
}

export const setNewsSuccess=(data)=>{
    return{ type: 'FETCH_NEWS_SUCCESS',payload:data}
}
export const setNewsFailure=(error)=>{
    console.log("Fetch failed "+error);
    return {type:'FETCH_NEWS_FAILURE'}
}

export const wait=()=>{
    return {type:'WAIT'}
}