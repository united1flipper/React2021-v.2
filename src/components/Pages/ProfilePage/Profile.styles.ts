import styled from 'styled-components';
import { Field, Form } from "formik";
import Icons from '../../common/Icons';
import { UserImg } from '../../Aside/aside.style';
import Colors from '../../common/Colors';

export const ProfileWrapper = styled.div`
  max-width: 930px;
  width: 100%;
  padding: 0px 15px;
  margin: 0 auto;
  background-color: ${Colors.white};
  margin-bottom:20px;
`;
export const ProfileHeader = styled.div`
  display:flex;
  justify-content: flex-end;
  margin: 10px 5px;
  margin-bottom:0;

`;
export const HeaderItem = styled('div') <{beforeImg: string}>`
  width: 170px;
  height: 40px;
  position:relative;
  padding: 8px;
  padding-left: 40px;
  cursor: pointer;
  &::before{
    content: ${(props) =>
    `url('${process.env.PUBLIC_URL}${props.beforeImg}')`};
    position: absolute;
    left: 10px;
  }

`;
export const Close = styled.button`
  display: block;
  width: 33px;
  height: 33px;
  margin: 5px 0;
  background-image: url(${Icons.closeIcon});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border: none;
  background-color: transparent;
`;
export const UserWrapper = styled.div`
  display:flex;
  justify-content: space-between;
  padding:10px 5px;

`;
export const User = styled.div`
  margin: 20px 35px;
`;
export const UserPhoto = styled(UserImg)`
  width: 100px;
  height: 100px;
  padding: 3px;

`;

export const SeeProfile = styled.div`
  color:  ${Colors.textBlue};
  font-size: 24px;
  font-weight: 400;
  margin:5px 0;

`;
export const UserInfoWrapper = styled.div`
  display:flex;
  justify-content: space-between;
`;
export const ProfileForm = styled(Form)`
  display:flex;
  max-width: 930px;
  width:100%;

`;
export const UserInfo = styled.div`
  margin-top: 30px;
  display:flex;
  width:100%;
`;
export const LeftSide = styled.div`
  margin-right: auto;
  display: flex;
  flex-direction: column;
`;
export const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items:flex-end;
`;
export const TextField = styled(Field)<{bold?:boolean}>`
  height: fit-content;
  width:fit-content;
  color: black;
  border-radius: 0.5rem;
  border: none;
  padding: 5px 0;
  background-color:transparent;
  display: block;
  font-weight:${({ bold }) =>
    bold ? '700' : '400'};
  font-size: 20px;
`;
export const Edit = styled.button`
  width: 33px;
  height: 33px;
  margin-bottom:30px;
  background-image: url(${Icons.editIcon});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border: none;
  background-color: transparent;

`;

