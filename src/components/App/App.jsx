import { Container } from "../Container/Container";
import  user  from "../../data/user.json";
import { ProfileCard } from "../Profile/Profile";
import data from '../../data/data.json'
import { Statistics } from "../Statistics/Statistics";
import  friends  from "../../data/friends.json";
import { FriendList } from "../FriendList/FriendList";
import transactions from "../../data/transactions.json";
import { TransactionHistory } from "../TransactionHistory/TransactionHistory";
// console.log(friends);

const {username,tag,location,avatar,stats}=user

export const App = () => {
  return (
    <Container>
      <ProfileCard
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
      />
      
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />

  </Container>
  );
};
