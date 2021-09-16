import React, {FC} from 'react';
import styled from 'styled-components';
import { isPropertySignature } from 'typescript';
import { Comments } from './HomePageContent/CommentsSection/CommentsSection.component';
import { LatestPublications } from './HomePageContent/LatestPublicationsSection/LatestPublications.component';
import { Workspaces } from './HomePageContent/WorkspacesSection/Workspaces.component';
const HomePageWrapper= styled.div`
  max-width: 930px;
  padding: 0px 15px;
  margin: 0 auto;
`;
interface IHomePage{
    user:{
        id:number
    }
}

export const HomePage: FC<IHomePage>=props =>{
    return(
        <HomePageWrapper>
            <LatestPublications  id = {props.user.id}/>
            <Workspaces />
            <Comments id = {props.user.id}/>
        </HomePageWrapper>
    );
};