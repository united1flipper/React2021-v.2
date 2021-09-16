import React, {FC} from 'react';
import { UserInfo, PublicationInfo, SmallPublicationsInner, SmallPublicationText, SmallPublImg, PublDate } from './LatestPublications.styles';

interface SmallPublicationProps {
    imgUrl: string,
    text: string | undefined,
    userName: string,
}
export const SmallPublication: FC<SmallPublicationProps> = (props) =>{
    const {imgUrl, text, userName} = props;
    return(
        <SmallPublicationsInner>
            <SmallPublImg style = {{backgroundImage: `url(${imgUrl})`}}></SmallPublImg>
            <PublicationInfo>
                <SmallPublicationText>{text}</SmallPublicationText>
                <UserInfo><PublDate>07 Jan 2020</PublDate>{userName}</UserInfo>
            </PublicationInfo>
        </SmallPublicationsInner>
    );
};