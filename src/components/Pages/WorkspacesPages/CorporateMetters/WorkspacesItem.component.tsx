import React, {ChangeEvent, FC, useState} from 'react';
import { ItemContent, WorkspaceitemWrapper, ItemImage , ItemTitle, ItemText} from '../WorkspacesPages.styles';

interface IWorkspaceItemProps {
    BgimgUrl?: string,
    title?:string,
    text?: string,
    span?:string,
}
export const WorkspaceItem: FC<IWorkspaceItemProps> = (props) =>{
    const {BgimgUrl,title, text, span} = props;
    return(
        <WorkspaceitemWrapper bgImg = {BgimgUrl}>
            <ItemContent>
                <ItemImage bgImg = {BgimgUrl}/>
                <ItemTitle>
                {title}  <span>{span}</span>
                </ItemTitle>
                <ItemText>
                    {text}
                </ItemText>
            </ItemContent>
        </WorkspaceitemWrapper>
    );
};