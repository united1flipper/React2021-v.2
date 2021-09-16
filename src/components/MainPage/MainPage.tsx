import React, {FC, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import styled from 'styled-components';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import { Aside } from '../Aside/Aside.component';
import { TopNav } from '../TopNav/TopNav.component';
import { PublicationsPage} from '../Pages/PublicationsPage.component';
import { EntitiesPage} from '../Pages/Entities/EntitiesPage.component';
import { EcosystemPage} from '../Pages/EcosystemPage.component';
import { PeoplePage} from '../Pages/PeoplePage.component';
import { AdminPage} from '../Pages/AdminPage.component';
import { HomePage } from '../HomePage/HomePage.component';
import {ProfilePage} from '../Pages/ProfilePage/Profile.component';
import {ClientContract} from '../Pages/WorkspacesPages/ClientContract/ClientContract.component';
import {Corporate} from '../Pages/WorkspacesPages/Corporate/Corporate.component';
import {GroupNorms} from '../Pages/WorkspacesPages/GroupNorms/GroupNorms.component';
import {RealEstateContracts} from '../Pages/WorkspacesPages/RealEstateContracts/RealEstateContracts.component';
import {SupplierContract} from '../Pages/WorkspacesPages/SupplierContract/SupplierContract.component';

import {getUsers} from '../../actions/usersActions';
import {getPhotos} from '../../actions/photoActions';
import {getPosts} from '../../actions/postsActions';
import {getComments} from '../../actions/commentsActions';
import {useSelector} from 'react-redux';
import {IState} from '../reducers';
import {IUsersReducer} from '../reducers/usersReducers';
import {IPhotoReducer} from '../reducers/photoReducers';
import {ISingleUser} from '../entities/users';
import { Icons } from '../common/Icons';
import Colors from '../common/Colors';

type GetUsers = ReturnType<typeof getUsers>
type GetPhotos = ReturnType<typeof getPhotos>;
type GetPosts = ReturnType<typeof getPosts>;
type GetComments = ReturnType<typeof getComments>;

const Wrapper = styled.div`
 background-color: ${Colors.bgGrey};
 height: 100vh;
 
`;
const Content = styled.div`
 max-width: 900;
 display: flex;
 padding: 18px;
 background-color: ${Colors.bgGrey};

`;

const MainPage: FC = () =>{
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch<GetUsers>(getUsers());
    dispatch<GetPhotos>(getPhotos());
    dispatch<GetPosts>(getPosts());
    dispatch<GetComments>(getComments());
  }, []);
  const{ usersList } = useSelector<IState, IUsersReducer>(globalState => ({
    ...globalState.users
 }));
 const{ photoList } = useSelector<IState, IPhotoReducer>(globalState => ({
    ...globalState.photos
 }));

 const UsersList = usersList[Math.floor(Math.random() * 9)]
 
 function userPhoto(user : ISingleUser)  {
  for (let i = 0; i < photoList.length; i++) {
    const j = photoList[i];
    if(j.id===user.id){
       return j.url
    }
  }
  return "";
 }
 const User = {
   id: UsersList? UsersList.id: 0,
   name: UsersList? UsersList.name : "NoName",
   jobTitle:UsersList? UsersList.company.catchPhrase : 'NoJobTitle',
   companyName: UsersList? UsersList.company.name : 'NoJobCompany',
   imgUrl:UsersList? userPhoto(UsersList) : `${Icons.userIcon}`,
   email: UsersList? UsersList.email : "",
   phone: UsersList? UsersList.phone : "",
   city: UsersList? UsersList.address.city : "",
 }


  return(
    <Router>
      <Wrapper>
        <TopNav user = {User}></TopNav>
       <Content>
           <Aside user = {User}/>
           
           <Switch>
              <Route path="/PublicationsPage">
                <PublicationsPage/>
              </Route>
              <Route path="/AdminPage">
                <AdminPage/>
              </Route>
              <Route path="/PeoplePage">
                <PeoplePage/>
              </Route>
              <Route path="/EntitiesPage">
                <EntitiesPage/>
              </Route>
              <Route path="/EcosystemPage">
                <EcosystemPage/>
              </Route>
              <Route path="/ClientContract">
                <ClientContract user = {User}/>
              </Route>
              <Route path="/Corporate">
                <Corporate user = {User}/>
              </Route>
              <Route path="/GroupNorms">
                <GroupNorms user = {User}/>
              </Route>
              <Route path="/RealEstateContracts">
                <RealEstateContracts user = {User}/>
              </Route>
              <Route path="/SupplierContract">
                <SupplierContract user = {User}/>
              </Route>
              
              <Route path="/ProfilePage">
                <ProfilePage user = {User}/>
              </Route>
              <Route path="/">
                <HomePage user = {User}/>
              </Route>
            </Switch>
             
        </Content>
      </Wrapper>

    </Router>
  );
};
export default MainPage;
