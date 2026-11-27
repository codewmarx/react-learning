export const UserDetails = ({
  name,
  isOnline,
  hideOffline,
  isPremium,
  isNew,
  role,
}) => {
  if (hideOffline && !isOnline) {
    return null;
  }

  //using variables for complex logic
  let roleBadge = null;
  if (role === "admin") {
    roleBadge = <span>♛ Admin</span>;
  } else if ((role = "vip")) {
    roleBadge = <span>💎 VIP</span>;
  }
  //rendering using && operator
  return (
    <div>
      <h2>
        {name}
        {isPremium && "👑"}
        {isNew && "✪"}
        {roleBadge}
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
