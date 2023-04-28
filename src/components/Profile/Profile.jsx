import { Profile,Description,Avatar,Name,Tag,Location,Stats,List,Label,Quantity } from "./Profile.module";
import PropTypes from 'prop-types';


export const ProfileCard = ({username,tag,location,avatar,stats})=> {
    
const{followers,views,likes}=stats

    return(
        <Profile>
            <Description>
                <Avatar src={avatar} alt="User avatar" />
                <Name>{username}</Name>
                <Tag>{tag}</Tag>
                <Location>{location}</Location>
                <Stats>
                    <List>
                        <Label>followers</Label>
                        <Quantity>{followers}</Quantity>
                    </List>
                    <List>
                        <Label>views</Label>
                        <Quantity>{views}</Quantity>
                    </List>
                    <List>
                        <Label>likes</Label>
                        <Quantity>{likes}</Quantity>
                    </List>
                </Stats>

            </Description>
        
        </Profile >
    )
}


ProfileCard.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    followers: PropTypes.number,
    views: PropTypes.number,
    likes:PropTypes.number
}