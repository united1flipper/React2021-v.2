import styled from 'styled-components';
import Colors from '../common/Colors'

export const AsideWrapper = styled.aside`
  margin-left: 30px;
`;
export const AsideItem = styled('div') <{bgColor?:string}>`
   width: 250px;
   background-color: ${(props) => `${props.bgColor}`};
   margin: 0px 22px;
   padding: 20px 20px;
   box-shadow: 0 8px 6px -6px #cdd0d7;
`;
export const AsideItemB= styled(AsideItem)`
   box-shadow:none;
   height: 150px;
`;

export const User = styled.div`
    align-items: center;
    text-align: center;
    
`;
export const UserImg =styled('a')<{imgUrl?:string}>`
 width: 70px;
 height: 70px;
 margin-right: 15px;
 background-position: center;
 background-repeat: no-repeat;
 background-size: cover;
 background-image:${(props) =>
    `url('${process.env.PUBLIC_URL}${props.imgUrl}')`};
 border-radius: 50%;
`;
export const UserName = styled.div`
 padding: 2px;
 margin: 5px;
 text-align: center;
 color: ${Colors.textBlue};
 font-size: 20px;
`;
export const UserJobTitle = styled.div`
 padding: 2px;
 margin: 5px;
 text-align: center; 
 color:${Colors.textLightGrey};
`;
export const UserBookmarks = styled.ul`
   border-top: ${Colors.borderColor} 1px solid;
   
`;

export const Li = styled('li')<{beforeImgUrl?:string, afterImgUrl?:string, padding?:string , border?:boolean}>`
        padding-top: ${(props) => `${props.padding}`};
        display: flex;
        justify-content: space-between;
        position: relative;
        padding-left: 30px;
        height: 40px;
        margin-top: 5px;
        &::before {
            content: ${(props) =>
    `url('${process.env.PUBLIC_URL}${props.beforeImgUrl}')`};
            position: absolute;
            left: -15px;
            width: 20px;
            height: 20px;
            margin: 0px 5px;
            cursor:pointer;
        }
        &::after{
            content: ${(props) =>
    `url('${process.env.PUBLIC_URL}${props.afterImgUrl}')`};
            position: absolute;
            right: -12px;
            top:5px;
            width: 35px;
            height:28px;
            margin: 0px 5px;
            border: ${(props) =>
            props.border ? "0.5px solid #000" : "none"};
            padding:5px;
            border-radius: 7px;
            text-align: center;
            cursor:pointer;

        }
        
        a{
            color: ${Colors.black};
            font-size: 18px;
            outline: none;
        }
        

`;


export const Bookmarks = styled(UserBookmarks)`
    border-top:none;

`;



    
