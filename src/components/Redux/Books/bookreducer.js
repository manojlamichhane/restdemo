import {AddbookRequest,AddbookSuccess,AddbookFailure} from './bookType'
 
export const initialState = {
    books:[],   
    error:""
}

const bookreducer = (state=initialState,action) =>{
        switch(action.type){
        case AddbookRequest:{
            return{
                ...state,
            }}
        case AddbookSuccess:{
            return{
                books:action.payload,
                error:""
            }}
        case AddbookFailure:{
            return{
                books:[],
                error:action.payload
            }}     
        default:{
            return{
                ...state
            }}
        }}

export default bookreducer;