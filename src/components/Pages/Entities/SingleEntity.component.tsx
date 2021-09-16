import React, {FC, useState} from 'react';
import { EntityInfo, EntityPhoto, SingleEntityInner, SingleEntityText, SingleEntityTitle } from './EntitiesPage.styles'
import {View} from './EntitiesPage.component'


interface ISingleEntityProps {
    title: string,
    text: string,
    imgUrl:string,
}
export const SingleEntity: FC<ISingleEntityProps> = (props) =>{
    const {title, text, imgUrl} = props;
    const [view,setView]= useState<View>(View.List);
    return(
        <SingleEntityInner view = {view}>
            <EntityPhoto imgUrl={imgUrl}/>
            <EntityInfo>
                <SingleEntityTitle>{title}</SingleEntityTitle>
                <SingleEntityText>{text}</SingleEntityText>
            </EntityInfo>
        </SingleEntityInner>
        
    );
};