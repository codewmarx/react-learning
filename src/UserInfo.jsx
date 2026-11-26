export const UserInfo = ({ name, age, email, address }) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>Age: {age}</p>
      <p>Email: {email}</p>
      <p>Address: {address}</p>
      <br />
    </div>
  );
};
