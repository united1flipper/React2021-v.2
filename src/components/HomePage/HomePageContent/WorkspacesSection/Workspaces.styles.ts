import styled from 'styled-components';
import {Icons} from '../../../common/Icons'
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import Colors from '../../../common/Colors';

export const WorkspacesTitle = styled.div`
    padding: 25px 0px 15px 40px;
    font-weight: 700;
    font-size: 22px;
    color: ${Colors.titleDarkGrey};
`;

export const WorkspacesWrapper = styled.div`
    
`;
export const WorkspaceItemWrapper = styled.div`

`;
export const SliderWrapper = styled(Slider)`
    
    .slick-slide {
    background-color: ${Colors.white};
    outline: none;
    margin-right: 15px;
    box-shadow: 0 8px 6px -6px ${Colors.boxShadow};
    
    }
    .slick-list {
    max-height: 220px;
    }

   
`;
export const BgIcon = styled.div`
  height: 90px;
  background-position:center;
  background-repeat: no-repeat;
  background-size: cover;
`;
export const Content = styled.div`
   position: relative;
   color: ${Colors.black};
   padding: 10px;
   padding-right: 3px;
`;
export const SmallIcon = styled.div`
    width: 80px;
    height: 80px;
    align-items: center;
    text-align: center;
    background-color: ${Colors.white};
    position:absolute;
    top: -50px;
    box-shadow: 0 8px 6px -6px ${Colors.boxShadow};
    img{
        display: inline-block;
        width:50px;
        height: 50px;
        margin-top: 16px;
    }

`;
export const WorkspacesText = styled(Link)`
    padding: 0px 0px 20px 85px;
    font-weight: 500;
    outline: none;
    color: ${Colors.textBlue};
`;
export const SmallContentInner = styled.div`
    display: flex;
    font-size: 14px;
    margin-bottom:5px;
`;
export const MiniIcon = styled.div`
    width: 22px;
    height: 22px;
    background-position:center;
    background-repeat: no-repeat;
    margin-right: 5px;
`;
export const SmallText = styled.div`
    margin-right: 15px;
    position: relative;
    &::after{
        content: " - ";
        position: absolute;
        font-size: 12px;
        font-weight: 500;
        right: -8px;
    }
`;
export const Users = styled.div`
    position: relative;
    padding-left: 30px;
    &::before{
        content: url('${Icons.peopleIcon}');
        position: absolute;
        left: 0;
        bottom: 0;
        width: 22px;
        height: 22px;
    }
`;
export const Update = styled.div`
    font-size: 12px;
    /* padding: 2px 50px 0px 0px; */
`;

