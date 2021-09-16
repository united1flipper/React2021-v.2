import React, {FC} from 'react';
import { Link } from 'react-router-dom';
import Icons from '../common/Icons';
import Colors from '../common/Colors';



import { AsideItem, AsideItemB,AsideWrapper, Bookmarks, User, UserBookmarks,Li, UserImg, UserJobTitle, UserName} from './aside.style';

interface IAsideUser {
    user: {
        name:string,
        imgUrl:string,
        jobTitle: string,
        companyName: string
    }

}
export const Aside: FC<IAsideUser>= props =>{



    return(
        <AsideWrapper>

            <AsideItem bgColor = {Colors.white}>
                <User>
                    <UserImg imgUrl = {props.user.imgUrl}></UserImg>
                    <UserName>{props.user.name}</UserName>
                    <UserJobTitle> {props.user.jobTitle} - {props.user.companyName}</UserJobTitle>
                </User>
                <UserBookmarks>
                    <Li beforeImgUrl ={Icons.userPlusIcon} afterImgUrl = {Icons.userPlusIcon} padding = '10px' border><Link to="/EntitiesPage">Your Network</Link></Li>
                    <Li beforeImgUrl ={Icons.yourPublicationsIcon} afterImgUrl = {Icons.plusIcon} padding = '10px' border><Link to="/PublicationsPage">Your Publications</Link></Li>
                </UserBookmarks>
            </AsideItem>
            <AsideItemB>
                <Bookmarks>
                    <Li beforeImgUrl ={Icons.yourPublicationsIcon} padding = '10px 0px'><Link to="/PublicationsPage">Publications</Link></Li>
                    <Li beforeImgUrl ={Icons.ecosystemIcon} padding = '10px 0px'><Link to="/EcosystemPage">Ecosystem</Link></Li>
                    <Li beforeImgUrl ={Icons.entitiesIcon} padding = '10px 0px'><Link to="/EntitiesPage">Entities</Link></Li>
                </Bookmarks>
            </AsideItemB>
            
          
        </AsideWrapper>
    );
};