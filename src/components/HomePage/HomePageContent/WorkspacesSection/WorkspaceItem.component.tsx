import React, {FC} from 'react';
import { BgIcon, Content, MiniIcon, SmallContentInner, SmallIcon, SmallText,WorkspacesText, Update, Users, WorkspaceItemWrapper } from './Workspaces.styles'
interface IWorkspaceItemProps {
    BgimgUrl: string,
    IconUrl: string,
    text: string,
    smallText: string,
    usersNum: number,
    apdateDay: number,
    link: string;
}
export const WorkspaceItem: FC<IWorkspaceItemProps> = (props) =>{
    const {BgimgUrl,IconUrl, text,smallText,usersNum,apdateDay, link} = props;
    return(
        <WorkspaceItemWrapper>
            <BgIcon style = {{backgroundImage: `url(${BgimgUrl})`}}/>
            <Content>
               
                <SmallIcon><img src = {IconUrl}/></SmallIcon>
                <WorkspacesText to = {link}>{text}</WorkspacesText>
                <SmallContentInner>
                    <MiniIcon style = {{backgroundImage: `url(${IconUrl})`}}/>
                    <SmallText>{smallText}</SmallText>
                    <Users>{usersNum} users</Users>
                </SmallContentInner>
                <Update>Last update {apdateDay} days ago</Update>
            </Content>
        </WorkspaceItemWrapper>
    );
};