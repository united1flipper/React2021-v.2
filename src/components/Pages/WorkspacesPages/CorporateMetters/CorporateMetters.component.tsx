import React, {FC} from 'react';
import Icons from '../../../common/Icons';
import { CorporateMattersWrapper, HeaderText } from '../WorkspacesPages.styles';
import {WorkspaceItem} from './WorkspacesItem.component'
import { EntitiesHeader } from '../../Entities/EntitiesPage.styles';


export const CorporateMetters: FC= () =>{
    return(
        <CorporateMattersWrapper>
            <EntitiesHeader>
            <HeaderText>Start Working on corporate matters</HeaderText>
            <HeaderText>Hide</HeaderText>
            </EntitiesHeader>
            <EntitiesHeader>
                <WorkspaceItem 
                BgimgUrl ={`${Icons.entitiesIcon}`}
                title = 'Explore your'
                span = 'entities'
                text = 'Take a few minutes to look at the most important elements and specificities of your entities'/>
                <WorkspaceItem 
                BgimgUrl ={`${Icons.structureIcon}`}
                title = 'Structure the'
                span = 'ownership'
                text = 'Get a clear view of the ownership by looking at the relations between individuals and entities'/>
                <WorkspaceItem 
                BgimgUrl ={`${Icons.calendarIcon}`}
                title = 'Define the'
                span = 'calendar'
                text = 'Prepare future events by creating detailed plans around the life of your entity'/>
            </EntitiesHeader>

        </CorporateMattersWrapper>
    );
};