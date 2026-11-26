export const UserDetails = ({
  name,
  isOnline,
  hideOffline,
  isPremium,
  isNew,
}) => {
  if (hideOffline && !isOnline) {
    return null;
  }

  //rendering using && operator
  return (
    <div>
      <h2>
        {name}
        {isPremium && "👑"}
        {isNew && "✪"}
      </h2>
      <p>{isOnline ? "Online ✅" : "Offline ❌"}</p>
      {isOnline ? (
        <button id="btn-id">Send a message</button>
      ) : (
        <small>Try again later</small>
      )}
    </div>
  );
};
