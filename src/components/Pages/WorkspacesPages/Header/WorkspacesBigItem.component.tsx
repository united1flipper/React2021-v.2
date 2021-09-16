import React, {FC} from 'react';
import Icons from '../../../common/Icons';
import { ItemTitle, ItemText, Banner, HeaderImage, HeaderInfo, HeaderInfoInner, HeaderWrapper, Settings, HeaderInfoInner2} from '../WorkspacesPages.styles';


interface IWorkspaceHeaderProps {
    BgimgUrl?: string,
    title?:string,
    text?: string,
    icon?: string,
}
export const WorkspaceHeader: FC<IWorkspaceHeaderProps> = (props) =>{
    const {BgimgUrl,title, text, icon} = props;
    return(
        <HeaderWrapper>
            <Banner bgImg = {BgimgUrl}/>
            <HeaderInfo>
                <HeaderImage bgImg = {icon}/>
                <HeaderInfoInner>
                    <HeaderInfoInner2>
                    <ItemTitle>{title}</ItemTitle>
                    <Settings bgImg = {Icons.settingsIcon}/>
                    </HeaderInfoInner2>
                    <ItemText>{text}</ItemText>
                </HeaderInfoInner>
            </HeaderInfo>
        </HeaderWrapper>
    );
};