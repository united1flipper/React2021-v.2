import styled from 'styled-components';
import { Li, UserBookmarks, UserImg } from '../../Aside/aside.style';
import { Input } from '../styles';
import Icons from '../../common/Icons'; 
import { Link } from 'react-router-dom';
import Colors from '../../common/Colors';

export const Wrapper = styled.div`
    width: 260px;
    position: absolute;
    top: auto;
    left: 0px;
    overflow: hidden;
    border-top:none;
    transition: all 0.7s;
    z-index: 1;
    background-color: ${Colors.white};
    align-items: center;
    box-shadow: 0 8px 6px -6px 	${Colors.boxShadow};

`;
export const ScrollWrapper = styled.div`
   overflow-y: scroll;
   max-height: 400px;
`;

export const CircleItem = styled.div`
  background-color: ${Colors.white};
  transition: all 0.3s;
  border: 0px solid #e0e0e0;
  border-left-width: 1px;
  border-right-width: 1px;
  padding: 0px 23px;
  display: flex;
  align-items: center;
`;

export const CircleUl = styled(UserBookmarks)`
  padding: 5px 20px;
  overflow: hidden;
`;

export const Filter = styled(Input)`
    height: 25px;
    width: 240px;
    margin: 10px auto;
    font-size: 14px;

`;

export const Title = styled.p`
    display: block;
    padding: 10px 10px 0px 10px;
    margin: 0px;
    font-size: 14px;
    color: #878b91;
`;
export const CircleLi = styled(Li)`
   height: 25px;
   padding-left: 40px;
   a{
        font-size: 16px;
        color:#232c47;
    }
`;
export const UserBox = styled.div`
    display: flex;

`;
export const UserImage = styled(UserImg)`
  width: 40px;
  height: 40px;
  margin: 2px;
  position: absolute;
  left: 0px

`;

export const UserInfo = styled.div`
 margin-left: 40px;
 
`;

export const UserName = styled.div`
    padding:2px;
`;
export const SeeProfile = styled(Link)`
    color:${Colors.textBlue};
    padding:2px;
`;
export const LogOut = styled.div`
    height: 45px;
    display: flex;
    align-items: center;
    background-color: #fff;
    border-bottom: 1px solid ${Colors.filterGrey};
    border-top: 1px solid ${Colors.filterGrey};
    text-align: center;
    justify-content: center;
    color: #878b91;
    font-size: 16px;
    position:relative;
    &::before{
      content: url('${Icons.logoutIcon}');
      position: absolute;
      left: 70px;

    }


`;

