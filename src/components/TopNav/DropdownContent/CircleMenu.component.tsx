import React, {ChangeEvent, ChangeEventHandler, FC, useState} from 'react';
import { Link } from 'react-router-dom';
import { CircleUl,CircleLi, Filter, Wrapper, Title, ScrollWrapper, LogOut, SeeProfile, UserBox, UserName, UserInfo, UserImage } from './CircleMenu.styles';

import Icons from '../../common/Icons'


interface ICircleMenu{
    name: string,
    imgUrl: string;
}


export const CircleMenu: FC <ICircleMenu>=props=>{


    const [inputText, setInputText] = useState<string>('');
    const inputHandler = (e: ChangeEvent<HTMLInputElement>) =>{
    const text= e.target.value;
    setInputText(text);
    }


    return(
    <Wrapper>
            <Filter type="text" placeholder = "filter..."  value={inputText} onChange={inputHandler}></Filter>
        <ScrollWrapper>
           <Title>Platform</Title>
           <CircleUl>
                     {'Home'.toLowerCase().includes(inputText.toLowerCase())&& <CircleLi beforeImgUrl ={Icons.blackHouseIcon}  padding = '0px' ><Link to = "/">Home</Link></CircleLi>}
                     {'Publications'.toLowerCase().includes(inputText.toLowerCase())&& <CircleLi beforeImgUrl ={Icons.yourPublicationsIcon} padding = '0px'><Link to  = "/PublicationsPage">Publications</Link></CircleLi>}
                     {'People'.toLowerCase().includes(inputText.toLowerCase())&& <CircleLi beforeImgUrl ={Icons.peopleIcon} padding = '0px'><Link to  = "/PeoplePage">People</Link></CircleLi>}
                     {'Entities'.toLowerCase().includes(inputText.toLowerCase())&& <CircleLi beforeImgUrl ={Icons.entities2Icon} padding = '0px'><Link to  = "/EntitiesPage">Entities</Link></CircleLi>}
                     {'Administartions'.toLowerCase().includes(inputText.toLowerCase())&& <CircleLi beforeImgUrl ={Icons.adminIcon} padding = '0px'><Link to  = "/AdminPage">Administration</Link></CircleLi>}
            </CircleUl>
            <Title>Workspaces</Title>
             <CircleUl>
                    {'Client Contract'.toLowerCase().includes(inputText.toLowerCase())&&<CircleLi beforeImgUrl={Icons.contractIcon}  padding = '0px' ><Link to = "/ClientContract">Client contract</Link></CircleLi>}
                    {'Supplier contract'.toLowerCase().includes(inputText.toLowerCase())&&<CircleLi beforeImgUrl ={Icons.contractIcon} padding = '0px'><Link to = "/SupplierContract">Supplier contract</Link></CircleLi>}
                    {'Corporate'.toLowerCase().includes(inputText.toLowerCase())&&<CircleLi beforeImgUrl ={Icons.entitiesIcon} padding = '0px'><Link to = "/Corporate">Corporate</Link></CircleLi>}
                    {'Group Norms'.toLowerCase().includes(inputText.toLowerCase())&&<CircleLi beforeImgUrl ={Icons.bookIcon} padding = '0px'><Link to = "/GroupNorms">Group Norms</Link></CircleLi>}
                    {'Real estate contracts'.toLowerCase().includes(inputText.toLowerCase())&&<CircleLi beforeImgUrl ={Icons.contractIcon} padding = '0px'><Link to = "/RealEstateContracts">Real estate contracts</Link></CircleLi>}
            </CircleUl>
            <Title>Workspaces</Title>
              <CircleUl>
                    {'Client Contract'.toLowerCase().includes(inputText.toLowerCase())&&<CircleLi beforeImgUrl={Icons.contractIcon}  padding = '0px' ><Link to = "/ClientContractPage">Client contract</Link></CircleLi>}
                    {'Supplier contract'.toLowerCase().includes(inputText.toLowerCase())&&<CircleLi beforeImgUrl ={Icons.contractIcon} padding = '0px'><Link to = "/ClientContractPage">Supplier contract</Link></CircleLi>}
                    {'Corporate'.toLowerCase().includes(inputText.toLowerCase())&&<CircleLi beforeImgUrl ={Icons.entitiesIcon} padding = '0px'><Link to = "/ClientContractPage">Corporate</Link></CircleLi>}
                    {'Group Norms'.toLowerCase().includes(inputText.toLowerCase())&&<CircleLi beforeImgUrl ={Icons.bookIcon} padding = '0px'><Link to = "/ClientContractPage">Group Norms</Link></CircleLi>}
                    {'Real estate contracts'.toLowerCase().includes(inputText.toLowerCase())&&<CircleLi beforeImgUrl ={Icons.contractIcon} padding = '0px'><Link to = "/ClientContractPage">Real estate contracts</Link></CircleLi>}
            </CircleUl>
        </ScrollWrapper>
            <Title>Account</Title>
             <CircleUl>
                    <UserBox>
                        <UserImage imgUrl = {props.imgUrl}></UserImage>
                        <UserInfo>
                            <UserName>{props.name}</UserName>
                            <SeeProfile to = '/ProfilePage'>See profile</SeeProfile>
                        </UserInfo>
                    </UserBox>
                    <CircleLi beforeImgUrl ={Icons.privacyIcon}  padding = '0px' ><a href="#">Privacy</a></CircleLi>
                    <CircleLi beforeImgUrl ={Icons.settingsIcon} padding = '0px'><a href="#">Settings</a></CircleLi>
            </CircleUl>
            <LogOut>Logout</LogOut>
        </Wrapper>
       
    );

};