import React from 'react';

const UserList = (props) => {
  let users = props.users.map((user, i) => {
    let alt = user.username + '\'s profile photo';
    return (
      <tr key={i}>
        <td>{i + 1}</td>
        <td>
          <span><img src={user.img} alt={alt} className="profile-img"/></span>
          <span>{user.username}</span>
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