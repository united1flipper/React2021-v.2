import styled from 'styled-components';
import Colors from '../common/Colors';



export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 65px;
  padding: 12px 15px;
  box-shadow: 0 8px 6px -6px 	${Colors.filterGrey};
  background-color: ${Colors.white};
  margin-bottom: 5px;

`;
export const Logo = styled('div') <{imgUrl?:string}>`
 margin-right: 15px;
 width: 35px;
 height: 35px;
 background-image:  ${(props) =>
    `url('${process.env.PUBLIC_URL}${props.imgUrl}')`};
 background-position: center;
 background-size: cover;
 background-repeat: no-repeat;
`;

export const Home = styled.div`
  width: 250px;
  height: 40px;
  font-size: 20px;
  padding:5px;
  
`;

export const RightIcons = styled.div`
  display:flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;

`;



export const A = styled('a') <{imgUrl: string, bgColor?:string}>`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background-color: ${(props) => `${props.bgColor}`};
  margin-right: 15px;
  position: relative;
  align-items: center;
  text-align: center;
  
  &::before {
    content: ${(props) =>
    `url('${process.env.PUBLIC_URL}${props.imgUrl}')`};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 20px;
    height: 20px;
    cursor:pointer;
  }
  span {
    background-color:  #0381be;
    position: absolute;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    text-align: center;
    line-height: 16px;
    font-size:13px;
    right: -6px;
    top: -6px;
    color: #fff;
    cursor:pointer;
  }
`;

export const DropdownA = styled('a') <{beforeImg: string, afterImg?:string}>`
  width: 260px;
  height: 40px;
  position:relative;
  display: flex;
  align-items: flex-start;
  padding: 8px;
  padding-left: 50px;
  cursor: pointer;
  &::before{
    content: ${(props) =>
    `url('${process.env.PUBLIC_URL}${props.beforeImg}')`};
    position: absolute;
    left: 10px;
    width: 20px;
    height:20px;
  }

  &::after{
    content: ${(props) =>
    `url('${process.env.PUBLIC_URL}${props.afterImg}')`};
    position: absolute;
    top:5px;
    right: 10px;
    margin: 0px 5px;
    cursor:pointer;

  }
`;

export const Form = styled.form`
  margin: 0 auto;
  width: 535px;
  position: relative;
`;

export const Input = styled.input`
  text-align: center;
  height: 40px;
  display: block;
  width: 100%;
  border-radius: 4px;
  border: 1px solid ${Colors.borderColor};
  font-size: 20px;
  font-weight: 100;
  outline: none;
  cursor:pointer;
  
  &::placeholder {
        color: #c3c5c8;
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
    width: 28px;
    height: 28px;
  }

`;
export const DropdownComp = styled.div`
  margin-left:50px;
  width: 260px;
  height: 40px;
  position: relative;
  box-shadow: 0 8px 6px -6px 	${Colors.filterGrey};
`;
export const DropdownWrapper = styled.div`

`;
