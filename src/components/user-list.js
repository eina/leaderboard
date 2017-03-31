import React from 'react';

const UserList = (props) => {
  let users = props.users.map((user, i) => {
    let alt = user.username + '\'s profile photo';
    let profile_url = 'https://www.freecodecamp.com/' + user.username;

    return (
      <tr key={i}>
        <td>{i + 1}</td>
        <td>
          <span><img src={user.img} alt={alt} className="profile-img"/></span>
          <span><a href={profile_url}>{user.username}</a></span>
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