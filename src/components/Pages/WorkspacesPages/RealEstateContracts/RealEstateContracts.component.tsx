import React, {FC} from 'react';
import { WorkspacesComments} from '../Comments/WorkspacesComments.component'
import {MainWrapper} from '../WorkspacesPages.styles'
import { useSelector } from 'react-redux';
import { IState } from '../../../reducers';
import { IPhotoReducer } from '../../../reducers/photoReducers';
import Icons from '../../../common/Icons';
import {CorporateMetters} from '../CorporateMetters/CorporateMetters.component'
import {WorkspaceHeader} from '../Header/WorkspacesBigItem.component'
interface IWorkspace{
    user:{
        id:number
    }
}
export const RealEstateContracts: FC<IWorkspace> = props =>{
    const { photoList }= useSelector<IState, IPhotoReducer>(globalState => ({
        ...globalState.photos
      }))
    return(
        <MainWrapper>
            <WorkspaceHeader 
            BgimgUrl={photoList[12]?.url?photoList[12].url:''}
            icon = {Icons.contractIcon}
            title = 'Real Estate Contracts'
            text = 'Workspace purpose and a bit of context. This much needed description is here to remind people where they are, if they are new of have poor memory.'
            />
            <CorporateMetters/>
            < WorkspacesComments id = {props.user.id}></WorkspacesComments>
        </MainWrapper>
         
    );
};