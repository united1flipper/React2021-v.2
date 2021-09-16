import React, {FC} from 'react';
import { BigPublication } from './BigPublication.component';
import { SmallPublication } from './SmallPublication.component';
import { PublicationsWrapper, SmallPublicationsWrapper} from './LatestPublications.styles'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { IState } from '../../../reducers';
import { IPhotoReducer } from '../../../reducers/photoReducers';
import { IPostsReducer } from '../../../reducers/postsReducers';
import { IUsersReducer } from '../../../reducers/usersReducers';
import { ISingleUser } from '../../../entities/users';
import Icons from '../../../common/Icons';



interface IPublication{
  id: number,

}
export const LatestPublications: FC <IPublication>= props =>{
    const { photoList }= useSelector<IState, IPhotoReducer>(globalState => ({
        ...globalState.photos
      }))
    
     const { postsList }= useSelector<IState, IPostsReducer>(globalState => ({
        ...globalState.posts
      }))
    const { usersList }= useSelector<IState, IUsersReducer>(globalState => ({
        ...globalState.users
      }))

    function userPhoto(user : ISingleUser)  {
        for (let i = 0; i < photoList.length; i++) {
          const j = photoList[i];
          if(j.id===user.id){
            return j.url
          }
        }
        return `${Icons.userIcon}`;
    }
    function postPhoto(user : ISingleUser)  {
      if(user !== undefined){
        for (let i = 0; i < photoList.length; i++) {
          const j = photoList[i];
          if(j.id===user.id){
             return j.url
          }
        }
      }
        return 'https://picsum.photos/id/258/200';
    }
    function postBody(user : ISingleUser)  {
      if(user !== undefined){      
        for (let i = 0; i < postsList.length; i++) {
          const post = postsList[i];
          if(post.userId===user.id){
            return post.body.slice(0,65);
          }
        } 
      }

      
    }


    const PostAuthor1 = usersList[2];
    const PostAuthor2 = usersList[7];
    const PostAuthor3 = usersList[2];
    const PostAuthor4 = usersList[1];
    return(
        <PublicationsWrapper>
            <BigPublication
                imgUrl = {photoList? postPhoto(PostAuthor1):'https://picsum.photos/id/258/200'}
                text = {postsList? postBody(PostAuthor1):"Lorem ipsum dolor sit amet, consectetur adipisicing elit."}
                name = {PostAuthor1? PostAuthor1.name :""}
            />
            <SmallPublicationsWrapper>
                <p>Latest publications</p>
                <SmallPublication 
                imgUrl = {photoList? postPhoto(PostAuthor2):'https://picsum.photos/id/258/200'}
                text = {postsList?postBody(PostAuthor2):"Lorem ipsum dolor sit amet, consectetur adipisicing elit."}
                userName = {PostAuthor2? PostAuthor2.name :""}
                />
                <SmallPublication 
                imgUrl = {photoList?postPhoto(PostAuthor3):'https://picsum.photos/id/258/200'}
                text = {postsList?postBody(PostAuthor3):"Lorem ipsum dolor sit amet, consectetur adipisicing elit."}
                userName = {PostAuthor3? PostAuthor3.name :""}
                />
                <SmallPublication 
                imgUrl = {photoList?postPhoto(PostAuthor4) :'https://picsum.photos/id/258/200'}
                text = {postsList?postBody(PostAuthor4):"Lorem ipsum dolor sit amet, consectetur adipisicing elit."}
                userName = {PostAuthor4? PostAuthor4.name :""}
                />
                <Link to ='/PublicationsPage'>See more publications</Link>
            </SmallPublicationsWrapper>
        </PublicationsWrapper>
    );
};