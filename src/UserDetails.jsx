export const UserDetails = ({ name, isOnline, hideOffline }) => {
  if (hideOffline && !isOnline) {
    return null;
  }

  //rendering using ternary ? operator
  return (
    <div>
      <h2>{name}</h2>
      <p>{isOnline ? "Online ✅" : "Offline ❌"}</p>
      {isOnline ? (
        <button id="btn-id">Send a message</button>
      ) : (
        <small>Try again later</small>
      )}
    </div>
  );
};
