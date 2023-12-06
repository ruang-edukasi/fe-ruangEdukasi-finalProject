import PropTypes from "prop-types";
const GoogleLogin = ({ buttonText }) => {
  return (
    <button className="flex items-center gap-1 text-gray-700 ">
      <img src="/google.svg" width={26} />
      {buttonText}
    </button>
  );
};

GoogleLogin.propTypes = {
  buttonText: PropTypes.string,
};

export default GoogleLogin;
