import { StyledUserContainer } from "./UserContainerStyles";
import UserItem from "../user-item/UserItem";

const UserContainer = (props) => {
  return (
    <StyledUserContainer>
      <ul>
        {props.users.map((user, index) => (
          <UserItem user={user} key={index} />
        ))}
      </ul>
    </StyledUserContainer>
  );
};

export default UserContainer;
