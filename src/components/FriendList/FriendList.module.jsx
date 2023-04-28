import styled from '@emotion/styled'


export const ListFriend = styled.ul`
    padding:0px;
    margin:0px;
`
export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 100px;
  margin-bottom: 16px;
  background-color: #fff;
  box-shadow: 0px 16px 50px -3px rgba(0,0,0,0.6);
  list-style: none;

`

export const Status = styled.span`
  margin-right: 8px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${p => p.children ? 'green' : 'red'};
`;

export const Avatar = styled.img`

`
export const Name = styled.p`
    font-size: 32px;
    margin-left:16px
`
// =



