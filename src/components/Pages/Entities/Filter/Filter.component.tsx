import { Component } from 'react';
import Icons from '../../../common/Icons';
import {FilterInput, FiltersRow, FilterWrapper, TextWithPlus, TextWithX} from '../EntitiesPage.styles'

export class FilterComp extends Component{
    render(){
        return(
        <FilterWrapper>
            <FiltersRow>Rows are filtered by the following conditions starting from the top.</FiltersRow>
            <FiltersRow>
                <TextWithX beforeImg = {Icons.closeIcon}>Where</TextWithX>
                <TextWithX afterImg = {Icons.arrowDownIcon}>Company</TextWithX>
                <TextWithX afterImg = {Icons.arrowDownIcon}>Contains</TextWithX>
                <FilterInput type="text" placeholder = "Type..." ></FilterInput>
            </FiltersRow>
            <FiltersRow>
                <TextWithX beforeImg = {Icons.closeIcon}>Where</TextWithX>
                <TextWithX afterImg = {Icons.arrowDownIcon}>Status</TextWithX>
                <TextWithX afterImg = {Icons.arrowDownIcon}>Is</TextWithX>
                <FilterInput type="text" placeholder = "Type..." ></FilterInput>
                <TextWithX afterImg = {Icons.arrowDownIcon}>In</TextWithX>
                <FilterInput type="text" placeholder = "Entity..." ></FilterInput>
            </FiltersRow>
            <FiltersRow>
                <TextWithX beforeImg = {Icons.closeIcon}>And</TextWithX>
                <TextWithX afterImg = {Icons.arrowDownIcon}>Status</TextWithX>
                <TextWithX afterImg = {Icons.arrowDownIcon}>Ends before</TextWithX>
                <FilterInput type="text" placeholder = "Date" ></FilterInput>
                <TextWithX afterImg = {Icons.arrowDownIcon}>In</TextWithX>
                <FilterInput type="text" placeholder = "Entity..." ></FilterInput>

            </FiltersRow>
            <FiltersRow>
                <TextWithPlus beforeImg = {Icons.plusIcon}>Add filter</TextWithPlus>
                <TextWithPlus afterImg = {Icons.arrowDownIcon}>choose property</TextWithPlus>
            </FiltersRow>
        </FilterWrapper>
        );
    }

}

export default FilterComp;