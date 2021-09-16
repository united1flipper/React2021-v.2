import React, {ChangeEvent, FC, useState} from 'react';
import Icons from '../../../common/Icons';
import { WorkspacesWrapper, WorkspacesTitle } from '../../../HomePage/HomePageContent/WorkspacesSection/Workspaces.styles';
import { CommentsTitle, CommentsWrapper, SelectorContainer, StyledOption, StyledSelect, WorkspacesBtn } from '../../../HomePage/HomePageContent/CommentsSection/CommentsSection.styles';
import { SingleComment } from '../../../HomePage/HomePageContent/CommentsSection/SingleComment.component';
import { useSelector } from 'react-redux';
import { IState } from '../../../reducers';
import { IPhotoReducer } from '../../../reducers/photoReducers';
import { IPostsReducer } from '../../../reducers/postsReducers';
import { ICommentsReducer } from '../../../reducers/commentsReducers';
import { IUsersReducer } from '../../../reducers/usersReducers';
import Pagination from '../../../HomePage/HomePageContent/CommentsSection/Pagination.component';
import { Button, EntitiesHeader, EntitiesHeaderLeft, EntitiesHeaderRight, Form, Input } from '../../Entities/EntitiesPage.styles';



interface ICommentsUser {
  id:number

}

export const WorkspacesComments: FC<ICommentsUser>=props=>{
    const { photoList }= useSelector<IState, IPhotoReducer>(globalState => ({
        ...globalState.photos
      }))
    
     const { postsList }= useSelector<IState, IPostsReducer>(globalState => ({
        ...globalState.posts
      }))
    const { usersList }= useSelector<IState, IUsersReducer>(globalState => ({
        ...globalState.users
      }))

      const { commentsList }= useSelector<IState, ICommentsReducer>(globalState => ({
        ...globalState.comments
      }))
      const [followed, setFollowed] = useState<string>("All");
      const changeFollowed = (e : any) => { 
        const text = e.target.value;
        setFollowed(text);
    }
    let comments = commentsList
    if(followed == "Followed") {
      comments = comments.filter(e => { 
        return e.id == props.id
      })
    };

      const [page, setPage] = useState<number>(1);
      const [pageSize] = useState<number>(10);
      const [inputText, setInputText] = useState<string>('');
      const inputHandler = (e: ChangeEvent<HTMLInputElement>) =>{
      const text= e.target.value;
      setInputText(text);

      }
      const renderResumeWorks = () => {
        if (
          postsList.length > 0 &&
          usersList.length > 0 &&
          photoList.length > 0 &&
          commentsList.length > 0
        ) {
          return comments
            .filter((comment) =>
              comment.name.toLowerCase().includes(inputText.toLowerCase())
            )
            .filter(
              (c, index) =>
                index >= (page - 1) * pageSize && index < page * pageSize
            )
            .map((comment) => (
                <SingleComment
                title = {comment.name}
                text = {comment.body}
                companyName = {usersList?usersList[(comment.id - 1) % 10]?.company.name: ''}
                commentType = {comment.id % 3 === 0 ? "Client contract" : "Supplier contract"}
                userName = {usersList?usersList[(comment.id - 1) % 10]?.name : ''}
                logo = {`${Icons.networkIcon}`}
                smallIcon = {`${Icons.networkIcon}`}
                date = {Math.floor(Math.random() * 100)} />
            ));
        } else return "";
      };
    
      return (
        <WorkspacesWrapper>
            <EntitiesHeader>
              <CommentsTitle>
                Latest updates  
              </CommentsTitle>
            <EntitiesHeaderRight>
                <Form>
                <Input type="text" placeholder = "Search..." value={inputText} onChange={inputHandler}></Input>
                <Button type="submit"><img alt ="" src={Icons.searchIcon} /></Button>
                </Form>
                <SelectorContainer beforeImg= {Icons.followedIcon} afterImg = {Icons.arrowDownIcon}>
                  <StyledSelect onChange={changeFollowed} value={followed}>
                  <StyledOption  value="Followed">Followed</StyledOption>
                  <StyledOption  value="All">All</StyledOption>
                  </StyledSelect>
                </SelectorContainer>   
            </EntitiesHeaderRight>
            </EntitiesHeader>
            <EntitiesHeader>
              <WorkspacesBtn >All</WorkspacesBtn>
              <WorkspacesBtn beforeImg= {Icons.entitiesIcon} padding color= '#EAECF5' fcolor= '#364AA3'>SAS</WorkspacesBtn>
              <WorkspacesBtn  beforeImg= {Icons.entitiesIcon}padding color= '#CCE5CC'fcolor = '#66B266'>SARL</WorkspacesBtn>
              <WorkspacesBtn  beforeImg= {Icons.entitiesIcon}padding color= '#EDF6FA'fcolor = '#2F97C9'>Secondary buisness</WorkspacesBtn>
              <WorkspacesBtn  beforeImg= {Icons.structureIcon} padding color= '#F2E5C4'fcolor = '#D6A83D'>Communities</WorkspacesBtn>
              <WorkspacesBtn  beforeImg= {Icons.calendarIcon} padding color= '#CCCCCC'fcolor = '#384058'>POA</WorkspacesBtn>
              <WorkspacesBtn beforeImg= {Icons.yourPublicationsIcon}padding color= '#fff'fcolor = '#858A98'>Survey</WorkspacesBtn>
              <WorkspacesBtn color= '#fff' fcolor = '#384058'>...</WorkspacesBtn>
            </EntitiesHeader>
            <CommentsWrapper>{renderResumeWorks()}</CommentsWrapper>
            <Pagination
                currentPage={page}
                pageSize={pageSize}
                totalPage={comments.length}
                setPage={setPage}  
            />
          
        </WorkspacesWrapper>  
      );
};   
    





