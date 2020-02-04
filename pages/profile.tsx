

function Profile({ user }: any) {
  return (
    <div>
      <p>This is what we know about you:</p>
      <ul>
        { Object.keys(user).map(key => (
          <li key={key}>{key}: {user[key].toString()}</li>
        ))}
      </ul>
    </div>
  );
}

export default Profile;