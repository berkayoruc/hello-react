import PropTypes from "prop-types";

function User({ name, surname, isLoggedIn, age, friends, address }) {
  return (
    <>
      <h1>{isLoggedIn ? `${name} ${surname} ${age}` : "Giriş yapmadınız"}</h1>
      {address.title} {address.zipCode}
      {friends.map((friend) => (
        <div key={friend.id}>{friend.name}</div>
      ))}
    </>
  );
}

User.propTypes = {
  name: PropTypes.string.isRequired,
  surname: PropTypes.string,
  isLoggedIn: PropTypes.bool,
  age: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  friends: PropTypes.array,
  address: PropTypes.shape({
    title: PropTypes.string,
    zipCode: PropTypes.number,
  }),
};

User.defaultProps = {
  isLoggedIn: false,
};

export default User;
