import axios from 'axios';
import { FETCH_USER } from './types';

export const fetchUser = () => 
    async dispatch =>  {
        let res = await axios.get('/api/current_user')
        dispatch({type: FETCH_USER, payload: res.data})
    }

export const changeName = (name) => {
    return {
        type: "CHANGE_NAME",
        payload: name
    }
}