import { combineReducers } from 'redux';

import users, { IUsersReducer } from './usersReducers';
import photos, {IPhotoReducer} from './photoReducers';
import posts, {IPostsReducer} from './postsReducers';
import comments, {ICommentsReducer} from './commentsReducers'

export default combineReducers({
    users,
    photos,
    posts,
    comments

});

export interface IState {
    commentsList: ICommentsReducer & IUsersReducer;
    users: IUsersReducer;
    photos: IPhotoReducer;
    posts: IPostsReducer;
    comments:ICommentsReducer;
}