import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../../../plagins/firebase";
import { doc, getDoc} from "firebase/firestore";

export const START_UPDATE_AUTH_DATA = "START_UPDATE_AUTH_DATA";
export const ERROR_UPDATE_AUTH_DATA = "ERROR_UPDATE_AUTH_DATA";
export const SUCCESS_UPDATE_AUTH_DATA = "SUCCESS_UPDATE_AUTH_DATA";

export const updateAuthData = () => {
    return dispatch => {
        dispatch(startUpdateAuthData())
        onAuthStateChanged(auth, async (user)=>{
            if(user){
                const info = await getDoc(doc(db, "users", user.uid))
                if(info.exists()){
                    dispatch(successUpdateAuthData([user, info.data()]));
                }else{
                    dispatch(errorUpdateAuthData());
                }
            }else{
                dispatch(errorUpdateAuthData());
            }
        })
    }
};

export const startUpdateAuthData = () => {
    return {
        type: START_UPDATE_AUTH_DATA,
    }
}
export const errorUpdateAuthData = () => {
    return {
        type: ERROR_UPDATE_AUTH_DATA,
    }
}
export const successUpdateAuthData = (data) => {
    return {
        type: SUCCESS_UPDATE_AUTH_DATA,
        payload: data
    }
}
