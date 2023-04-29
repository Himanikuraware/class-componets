import { Component } from "react";
import User from "./User";

import classes from "./Users.module.css";

class Users extends Component {
  // Intialising the state.
  constructor() {
    // In Class component your state is always an object unlike functional component.
    // Always use super() when you use constructor.
    super();
    this.state = {
      showUsers: true,
    };
  }
  toggleUsersHandler() {
    // this.setState({ showUsers: false });
    // Updateing state depending on previous state.
    this.setState((curState) => {
      return { showUsers: !curState.showUsers };
    });
  }

  //To use any method on event we have to use bind also.
  render() {
    // When you declare const using const inside the render method then you no need to add this keyword for accessing that like in usersList.
    const usersList = (
      <ul>
        {this.props.users.map((user) => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    );
    return (
      <div className={classes.users}>
        <button onClick={this.toggleUsersHandler.bind(this)}>
          {this.state.showUsers ? "Hide" : "Show"} Users
        </button>
        {this.state.showUsers && usersList}
      </div>
    );
  }
}

// const Users = () => {
//   const [showUsers, setShowUsers] = useState(true);

//   const toggleUsersHandler = () => {
//     setShowUsers((curState) => !curState);
//   };

//   const usersList = (
//     <ul>
//       {DUMMY_USERS.map((user) => (
//         <User key={user.id} name={user.name} />
//       ))}
//     </ul>
//   );

//   return (
//     <div className={classes.users}>
//       <button onClick={toggleUsersHandler}>
//         {showUsers ? "Hide" : "Show"} Users
//       </button>
//       {showUsers && usersList}
//     </div>
//   );
// };

export default Users;
