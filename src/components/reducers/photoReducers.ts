
import {ISinglePhoto} from '../entities/photo';
import * as actionTypes from '../../actions/actionsTypes/photoTypes';

export interface IPhotoReducer{
    photoList: ISinglePhoto[];
}

const defaultState = (): IPhotoReducer => ({
    photoList: []
});


export default (state = defaultState(), action: any) =>{
    switch (action.type) {
        case actionTypes.GET_PHOTO: {
             const data: actionTypes.IPhotoTypes['GET_PHOTO']= action;
             return{
                 ...state,
                 photoList: data.photoList
             }
        }

        default:{
            return state
        }
            
    }
}