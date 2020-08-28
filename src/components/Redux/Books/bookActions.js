import { AddbookRequest, AddbookSuccess, AddbookFailure} from '../Books/bookType';
import axios from 'axios'

export const ADDBOOKREQUEST = () =>{
 return{
     type:AddbookRequest
    
 }}
export const ADDBOOKSUCCESS = (response) =>{
 return{
     type:AddbookSuccess,
     payload:response
 }}
export const ADDBOOKFAILURE = (error) =>{
 return{
        type:AddbookFailure,
        payload:error
 }}
export const ADDBOOK = () =>{
 return (dispatch) => {
           dispatch(ADDBOOKREQUEST)
           axios.get('https://jsonplaceholder.typicode.com/posts')
                .then(response =>{
                    const books = response.data
                    dispatch(ADDBOOKSUCCESS(books))
                    })
                .catch(error =>{
                    const Error = error.message
                    dispatch(ADDBOOKFAILURE(Error))
                    })
       }
   }