import React, {ChangeEvent, FC, useState} from 'react';
import { useSelector } from 'react-redux';
import Icons from '../../common/Icons';
import { IState } from '../../reducers';
import { IPhotoReducer } from '../../reducers/photoReducers';
import {  EntitiesHeaderLeft, EntitiesHeaderRight, EntitiesHeader, EntitiesPageWrapper, EntitesWrapper, EntitiesHeaderItem, MosaicBtn, ListBtn, All, Dots, Sort, Filter, Full, Share, Followed, Form, Input, Button} from './EntitiesPage.styles';
import {SingleEntity} from './SingleEntity.component'
import useDropdown from 'react-dropdown-hook';
import {FilterComp} from './Filter/Filter.component'
import { DropdownWrapper } from '../../TopNav/styles';

interface IEntities {
    id:number,
    title: string,
    text: string,
}

const entitiesContent: IEntities[] = [
    {
        id:1,
        title: 'ABC generic company',
        text: 'caracas 1050, Distrito capital',
    },
    {
        id:2,
        title: 'ABC generic company',
        text: 'caracas 1050, Distrito capital',
    },
    {
        id:3,
        title: 'ABC generic company',
        text: 'caracas 1050, Distrito capital',
    },
    {
        id:4,
        title: 'ABC generic company',
        text: 'caracas 1050, Distrito capital',
    },
    {
        id:5,
        title: 'ABC generic company',
        text: 'caracas 1050, Distrito capital',
    },
    {
        id:6,
        title: 'ABC generic company',
        text: 'caracas 1050, Distrito capital',
    },
    {
        id:7,
        title: 'ABC generic company',
        text: 'caracas 1050, Distrito capital',
    },
    {
        id:8,
        title: 'World Company SAS',
        text: 'caracas 1050, Distrito capital',
    },
    {
        id:9,
        title: 'World Company SAS',
        text: 'caracas 1050, Distrito capital',
    },
    {
        id:10,
        title: 'World Company SAS',
        text: 'caracas 1050, Distrito capital',
    },
    {
        id:11,
        title: 'World Company SAS',
        text: 'caracas 1050, Distrito capital',
    },
    {
        id:12,
        title: 'World Company SAS',
        text: 'caracas 1050, Distrito capital',
    },
    {
        id:13,
        title: 'Subsid Corp Ltd',
        text: 'caracas 1050, Distrito capital',
    },
    {
        id:14,
        title: 'Subsid Corp Ltd',
        text: 'caracas 1050, Distrito capital',
    },
    {
        id:15,
        title: 'Subsid Corp Ltd',
        text: 'caracas 1050, Distrito capital',
    },
    {
        id:16,
        title: 'Subsid Corp Ltd',
        text: 'caracas 1050, Distrito capital',
    },
    {
        id:17,
        title: 'Subsid Corp Ltd',
        text: 'caracas 1050, Distrito capital',
    },
    {
        id:18,
        title: 'Subsid Corp Ltd',
        text: 'caracas 1050, Distrito capital',
    },
    {
        id:19,
        title: 'World Company SAS',
        text: 'caracas 1050, Distrito capital',
    },
    {
        id:20,
        title: 'World Company SAS',
        text: 'caracas 1050, Distrito capital',
    },
    {
        id:21,
        title: 'World Company SAS',
        text: 'caracas 1050, Distrito capital',
    },
    {
        id:22,
        title: 'World Company SAS',
        text: 'caracas 1050, Distrito capital',
    },
    {
        id:23,
        title: 'Subsid Corp Ltd',
        text: 'caracas 1050, Distrito capital',
    },
    {
        id:24,
        title: 'Subsid Corp Ltd',
        text: 'caracas 1050, Distrito capital',
    },
    
];
export enum View {
	Mosaic = 'mosaic',
	List = 'list',
}

export interface IListOrMosaicProps {
	view: View;
}
export const EntitiesPage: FC = () =>{
    const { photoList }= useSelector<IState, IPhotoReducer>(globalState => ({
        ...globalState.photos
      }))
      const [wrapperRef, dropdownOpen, toggleDropdown, closeDropdown] = useDropdown();
    const [isFullscreen,setToggleFullscreen]= useState(false);
    const [active,setActive]= useState(false);
    const [view,setView]= useState<View>(View.Mosaic);
    const [inputText, setInputText] = useState<string>('');
    const inputHandler = (e: ChangeEvent<HTMLInputElement>) =>{
        const text= e.target.value;
        setInputText(text);
    };
    const toggleMosaic = () => {
		setView(View.Mosaic);
	};
    const toggleList = () => {
		setView(View.List);
	};
    const entitiesList = entitiesContent
        .filter((entity) =>
              entity.title.toLowerCase().includes(inputText.toLowerCase()))
        .map((entity,id) => (
                <SingleEntity
                key={id}
                title={entity.title}
                text = {entity.text}
                imgUrl = {photoList[id]?photoList[id].url:''}/>
            ));

    return(
        <EntitiesPageWrapper isFullsceen = {isFullscreen}>
            <EntitiesHeader>
                <EntitiesHeaderItem>Entities</EntitiesHeaderItem>
                <EntitiesHeaderRight>
                    <MosaicBtn view = {view} onClick ={toggleMosaic}><span>Mosaic</span></MosaicBtn>
                    <ListBtn view = {view} onClick ={toggleList}/>
                </EntitiesHeaderRight>
            </EntitiesHeader>
            <EntitiesHeader>
                <EntitiesHeaderLeft >
                    <All beforeImg = {Icons.allIcon} afterImg = {Icons.arrowDownIcon} active = {active} onClick = {() => setActive((prevToggle => !prevToggle))}>All</All>
                    <Dots/>
                    <Sort beforeImg = {Icons.sortIcon}>Sort</Sort>
                    <DropdownWrapper ref={wrapperRef}>
                        <Filter beforeImg = {Icons.filterIcon} onClick={toggleDropdown}>Filter</Filter>
                        {dropdownOpen && <FilterComp/>}
                    </DropdownWrapper>
                    
                    <Full onClick = {() => setToggleFullscreen((prevToggle => !prevToggle))}/>
                    <Share beforeImg = {Icons.shareIcon} onClick={() => {
                        navigator.clipboard.writeText(window.location.href);
                         alert("Link copied to the clipboard!");}}>Share</Share>
                </EntitiesHeaderLeft>
                <EntitiesHeaderRight>
                <Form>
                <Input type="text" placeholder = "Search..." value={inputText} onChange={inputHandler}></Input>
                <Button type="submit"><img alt ="" src={Icons.searchIcon} /></Button>
                </Form>
                <Followed beforeImg = {Icons.followedIcon} afterImg = {Icons.arrowDownIcon} border>Followed</Followed>
                </EntitiesHeaderRight>
            </EntitiesHeader>
            <EntitesWrapper view = {view} >{entitiesList}</EntitesWrapper>
        </EntitiesPageWrapper>
    );
};
