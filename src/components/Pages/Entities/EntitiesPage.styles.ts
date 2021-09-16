import styled from 'styled-components';
import Colors from '../../common/Colors';
import Icons from '../../common/Icons';
import {View, IListOrMosaicProps} from './EntitiesPage.component'


export const EntitiesPageWrapper = styled('div')<{isFullsceen:boolean}>`
   max-width: ${(props) =>
   props.isFullsceen? '100%':'930px'};
   padding: 15px;
   margin: 0 auto;
   position: ${(props) =>
   props.isFullsceen? 'absolute':'static'};
   top: ${(props) =>
   props.isFullsceen? '0':'auto'};
   left: ${(props) =>
   props.isFullsceen? '0':'auto'};
   right: ${(props) =>
   props.isFullsceen? '0':'auto'};
   width: 100%;
   min-height: ${(props) =>
   props.isFullsceen? '100vh':''};
   z-index: ${(props) =>
   props.isFullsceen? '1000':'0'};
   background-color:${Colors.white};
   box-shadow: 0 8px 6px -6px ${Colors.boxShadow};
`;
export const EntitiesHeader = styled.div`
    display:flex;
    justify-content: space-between;
    padding:10px;
    position: relative;
`;
export const EntitiesHeaderItem = styled.div`
    font-size: 16px;
    position:relative;
    padding-right:60px;
    font-weight: 500;
    ::after{
        content: url('${Icons.settingsIcon}');
        position: absolute;
        left: 70px;
    }
`;
export const All = styled('a') <{beforeImg?: string, afterImg?:string ,active?: boolean , border?:boolean }>`
  width: 65px;
  height: 30px;
  position:relative;
  display: flex;
  align-items: flex-start;
  padding: 5px 45px 5px 35px;
  cursor: pointer;
  color: ${Colors.textBlue};
  font-weight: 500;
  background-color:${(props) =>
   props.active? '#E6F0F3':'transparent'};
  border:${(props) =>
   props.border? '1px solid #2a3f9d':'none'};
  border-radius:3px;
  box-shadow: 0 8px 6px -6px ${Colors.boxShadow};

  &::before{
    content: ${(props) =>
    `url('${process.env.PUBLIC_URL}${props.beforeImg}')`};
    position: absolute;
    left: 5px;
    width: 20px;
    height: 20px;
  }

  &::after{
    content: ${(props) =>
    `url('${process.env.PUBLIC_URL}${props.afterImg}')`};
    position: absolute;
    top:3px;
    right: 4px;
    cursor:pointer;

  }
`;
export const Followed = styled(All)`
    width: 120px;
`;
export const ListBtn = styled('button')<IListOrMosaicProps>`
    background-image: url('${Icons.listIcon}');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    width: 30px;
    height: 30px;
    outline: none;
    cursor: pointer;
    border: none;
    border-radius:3px;
    padding: 10px;
    background-color: ${({view}) =>
    view === View.List ? `${Colors.lightBlue}` : "transparent"};

`;
 export const Dots = styled('button')`
   background-image: url(${Icons.dotsIcon});
   background-position: center;
   background-repeat: no-repeat;
   background-size: cover;
   width: 30px;
   height: 30px;
   cursor: pointer;
   outline: none;
   border: none;
   background-color: transparent;
   padding: 10px;
   margin: 0 8px;
 `;
 export const Sort = styled('button')<{beforeImg?: string}>`
    height: 30px;
    width: 70px;
    background-color: transparent;
    cursor: pointer;
    outline: none;
    border: none;
    color: ${Colors.textLightGrey};
    position: relative;
    font-weight: 500;
    border-left: 1px solid ${Colors.textLightGrey};
    &::before{
    content: ${(props) =>
    `url('${process.env.PUBLIC_URL}${props.beforeImg}')`};
    position: absolute;
    left: 0px;
    top:2px;
    width: 20px;
    height: 20px;
    }
`;
export  const Filter = styled(Sort)`
    width: 80px;
    border-left:none;
    border-right: 1px solid ${Colors.textLightGrey};

`;
export const Full = styled(Dots)`
  background-image: url(${Icons.fullIcon});

`;
export const Share = styled(Sort)`
  width: 85px;
  &::before{
    left: 3px;
    top:5px;
    width: 17px;
    height: 17px;
  }
`;
export const Form = styled.form`
  width: 120px;
  position: relative;
  margin-right: 10px;

`;

export const Input = styled.input`
  text-align: center;
  height: 30px;
  display: block;
  width: 100%;
  border-radius: 4px;
  border: 1px solid ${Colors.textLightGrey};
  font-size: 14px;
  font-weight: 100;
  outline: none;
  cursor:pointer;
  
  &::placeholder {
        color: ${Colors.textLightGrey};
    }
`;
export const Button = styled.button`
  position: absolute;
  border: none;
  background-color: transparent;
  right: 0px;
  top: 5px;
  cursor:pointer;
  img{
    width: 15px;
    height: 15px;
  }

`;

export const EntitesWrapper= styled('div')<IListOrMosaicProps>`
  display: grid;
  width: 100%;
  grid-template-columns: ${({view}) =>
    view === View.Mosaic ? "repeat(auto-fit, minmax(250px, 1fr))" : "1fr"};
  grid-gap: 10px;
  margin-top: 15px;
`;
export const MosaicBtn = styled('button')<IListOrMosaicProps>`
    font-size: 15px;
    position:relative;
    padding: 5px 25px;
    padding-left: 20px;
    font-weight: 500;
    height: 30px;
    outline: none;
    cursor: pointer;
    border: none;
    color: #2a3f9d;
    font-weight: 600;
    border-radius:3px;
    background-color: ${({view}) =>
    view === View.Mosaic ? `${Colors.lightBlue}` : "transparent"};
    ::before{
        content: url('${Icons.mosaicIcon}');
        position: absolute;
        top:50%;
        left:  14px;
        transform: translate(-50% , -50%);
        padding: 0 5px;   
    }
    span{
        padding-left:15px;
    }
`;


export const EntitiesHeaderRight = styled.div`
    display: flex;
    justify-content: space-between;
`;
export const EntitiesHeaderLeft = styled(EntitiesHeaderRight)`
`;
export const SingleEntityInner = styled('div')<IListOrMosaicProps>`
    display:flex;
    justify-content: ${({view}) =>
    view === View.List ? "" : "space-between"};
    max-width:${({view}) =>
    view === View.List ? "100%" : "250px"};
    box-shadow: 0 8px 6px -6px ${Colors.boxShadow};
    padding:5px;
    text-align: start;

`;

export const EntityPhoto = styled('div')<{imgUrl?:string}>`
    background-image:  ${(props) =>
    `url('${process.env.PUBLIC_URL}${props.imgUrl}')`};
    width:60px;
    height: 60px;
    margin: 0 10px;
`;
export const EntityInfo = styled.div``;
export const SingleEntityTitle = styled.div`
    color:${Colors.textBlue};
    font-size: 14px;
`;
export const SingleEntityText = styled.div`
    font-size: 12px;
    color:${Colors.textLightGrey};
    padding:5px 0;
`;
export const FilterWrapper = styled.div`
  width: 100%;
  max-width: 930px;
  background-color: ${Colors.white};
  box-shadow: 0 8px 6px -6px ${Colors.boxShadow};
  position: absolute;
  top: auto;
  left: 0px;
  overflow: hidden;
  z-index: 100;
  padding: 25px; 
`;

export const FiltersRow = styled.div`
 display: flex;
 justify-content: start;
 width: 100%;
 color: ${Colors.textLightGrey};
 font-size:16;
 align-items: flex-start;
`;
export const TextWithX = styled('div')<{beforeImg?:string, afterImg?: string}>`
  height: 40px;
  position:relative;
  display: flex;
  padding: 8px;
  padding-left: 50px;
  padding-right: 20px;
  cursor: pointer;
  color: #000;
  font-weight: 500;
  cursor:pointer;
  margin-right: 10px;

  &::before{
    content: ${(props) =>
    `url('${process.env.PUBLIC_URL}${props.beforeImg}')`};
    position: absolute;
    left: 10px;
  }
  &::after{
    content:  ${(props) =>
    `url('${process.env.PUBLIC_URL}${props.afterImg}')`};
    position: absolute;
    top:50%;
    right: 0px;
    transform: translate(-50%, -50%);

  }
`;
export const TextWithPlus = styled(TextWithX)`
  color: ${Colors.textBlue};
`;
export const FilterInput = styled(Input)`
  margin: 5px;
  width:120px;
  background-color: ${Colors.filterGrey};
  color: #DADADA;
  border: none;
  border-radius: 5px;
  text-align:start;
  padding: 5px;

`;



