import { ISinglePost} from '../../components/entities/posts'

export const GET_POST = 'GET_POST';

export interface IPhotoTypes{
    GET_POST:{
        postsList:ISinglePost[];
    }
}