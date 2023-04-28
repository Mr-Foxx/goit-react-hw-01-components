import { ListFriend, Item, Status, Avatar, Name } from "./FriendList.module";
import PropTypes from 'prop-types';

export const FriendList = ({ friends }) => {
  return (
    <ListFriend>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <Item key={id}>
          <Status>{isOnline}</Status>
          <Avatar src={avatar} alt="User avatar" width="48" />
          <Name>{name}</Name>
        </Item>
      ))}
    </ListFriend>
  );
};


FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
    name:PropTypes.string.isRequired,
    isOnline:PropTypes.bool.isRequired,
    id:PropTypes.number.isRequired
    })
    )
   
}


//  {frinends.map(({avatar, name, isOnline, id}) =>(
//             <Item 
//                 key={id}
//                 avatar={avatar}
//                 name={name}
//                 isOnline={isOnline}
//                 />    
//         ))}
