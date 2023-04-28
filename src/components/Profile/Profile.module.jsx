import styled from '@emotion/styled'


export const Profile = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #fff;
    border-radius: 10px;
   
    box-shadow: 0px 16px 50px -3px rgba(0,0,0,0.6);
`;

export const Description = styled.div`
  display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
`;

export const Avatar = styled.img`
 widows: 50px;
    height: 100px;
`;

export const Name = styled.p`
 margin-top: 10px;
    margin-bottom: 0;
    font-size: 24px;
`;

export const Tag = styled.p`
    margin-top: 10px;
    margin-bottom: 0;
    color: rgb(194, 193, 193);
`;

export const Location = styled.p`
    margin-top: 10px;
    margin-bottom: 0;
    color: rgb(194, 193, 193);
`;

export const Stats = styled.ul`
   border-top: 1px solid rgb(216, 214, 214);
    display: flex;
    padding: 0;
    margin: 50px 0 0 0 ;
`;

export const List = styled.li`
   display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    list-style: none;
    width: 100px;
    height: 100px;
    background-color: rgb(240, 242, 242);
    border-right: 1px solid rgb(216, 214, 214);
`;

export const Label = styled.span`
 color:rgb(201, 199, 199) ;
    font-size: 12px;
    margin-bottom: 10px;
`;

export const Quantity = styled.span`
 font-size: 20px;
`;


