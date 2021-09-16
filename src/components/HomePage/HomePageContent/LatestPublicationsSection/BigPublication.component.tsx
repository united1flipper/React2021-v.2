import React, {FC} from 'react';
import { BigPublicationText, BigPublicationWrapper, BigPublicationInfo } from './LatestPublications.styles';

interface IBigPublicationProps {
    imgUrl?: string,
    text?: string,
    name?: string,
};
export const BigPublication: FC<IBigPublicationProps> = (props) =>{
    const {imgUrl, text, name} = props;
    return(
        <BigPublicationWrapper style = {{backgroundImage: `url(${imgUrl})`}}>
            
            <BigPublicationInfo>
                <BigPublicationText>{text}</BigPublicationText>
               <span>07 Jan 2020</span> {name}
            </BigPublicationInfo>
            
        </BigPublicationWrapper>

    );
};