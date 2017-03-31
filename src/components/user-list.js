import React from 'react';

const UserList = (props) => {
  if(!props.users){
    return 'Grabbing User Data...';
  }

  let users = props.users.map((user, i) => {
    let alt = user.username + '\'s profile photo';

    return (
      <tr key={i} className="users">
        <td>{i + 1}</td>
        <td>
          <span><img src={user.img} alt={alt} className="profile-img"/></span>
          <span><a href={`https://www.freecodecamp.com/${user.username}`}>{user.username}</a></span>
        </td>
        <td>{user.recent}</td>
        <td>{user.alltime}</td>
      </tr>
    );
  });

  return (
    <tbody>
      {users}
    </tbody>    
  );
};

export default UserList;