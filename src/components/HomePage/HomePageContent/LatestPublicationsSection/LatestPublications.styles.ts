import styled from 'styled-components';
import Colors from '../../../common/Colors';

export const PublicationsWrapper = styled.div`
    height: 300px;
    display: flex;
    box-shadow: 0 8px 6px -6px ${Colors.boxShadow};
`;
export const BigPublicationWrapper = styled.div`
    width: 350px;
    height: 300px;
    background-repeat: no-repeat;
    background-size:cover;
    background-position: center;
    color: #fff;
    position:relative;

`;
export const SmallPublicationsWrapper = styled.div`
    height: 300px;
    padding: 11px 20px;
    background-color:${Colors.white};
    p{
        margin:0;
        display: block;
        font-size: 23px;
        font-weight: 500;
    }
    a{
        color: ${Colors.textBlue};
        font-weight: 500;
    }
`;
export const PublicationInfo = styled('div')``;
export const BigPublicationInfo = styled('div')`
    position:absolute;
    bottom: 10px;
    margin: 15px;
    padding: 7px;
    font-weight: 300;
    span{
        padding-right: 10px;
    }
`;


export const BigPublicationText = styled.div`
    font-weight: 500;
    font-size: 16px;
`;
export const SmallPublicationText = styled.div`
    color: ${Colors.black};
    font-weight: 500;
`;
export const SmallPublImg = styled.div`
    width: 75px;
    height: 65px;
    background-repeat: no-repeat;
    background-size:cover;
    background-position: center;
    margin-right: 7px;
`;



export const SmallPublicationsInner = styled.div`
    display: flex;
    align-items:center;
    margin: 5px;
    margin-left: 0px;

`;
export const PublDate = styled.span`
    color: ${Colors.textLightGrey};
    margin-right: 5px;
`;
export const UserInfo = styled.div`
    color: #192136;
`;

export const PublAuthor = styled.div``;




