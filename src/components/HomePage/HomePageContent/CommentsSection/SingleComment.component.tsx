import React, {FC} from 'react';
import { SmallText, Update} from '../WorkspacesSection/Workspaces.styles'
import { SingleCommentInner, SingleCommentTitle, SingleCommentText, CommentInfo, ComIcon } from './CommentsSection.styles';

interface ISingleCommentProps {
    title: string,
    text: string,
    companyName: string,
    commentType: string,
    smallIcon: string,
    logo:string,
    date: number,
    userName:string,
}
export const SingleComment: FC<ISingleCommentProps> = (props) =>{
    const {title, text, companyName, commentType,smallIcon,logo,date,userName} = props;
    return(
        <SingleCommentInner>
           <SingleCommentTitle>{title}</SingleCommentTitle>
           <SingleCommentText>{text}</SingleCommentText>
            <CommentInfo>
                <ComIcon style = {{backgroundImage: `url(${logo})`}}></ComIcon>
                <SmallText>{companyName}</SmallText>
                <ComIcon style = {{backgroundImage: `url(${smallIcon})`}}></ComIcon>
                <SmallText>{commentType}</SmallText>
                <Update style={{fontSize: "14px"}}>Last update {date} days ago by {userName}</Update>
            </CommentInfo>
        </SingleCommentInner>
        
    );
};