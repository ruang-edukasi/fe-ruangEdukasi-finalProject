import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerWithGoogle } from "../../redux/action/authAction";


function GoogleLogin ({ buttonText }) {

    const dispatch = useDispatch();
    const navigate = useNavigate();

     const handleRegisGoogle = async (event) => {
       event.preventDefault();
       dispatch(registerWithGoogle(navigate));
     };


  return (
    <button
      className="flex items-center gap-1 text-gray-700 "
      onClick={handleRegisGoogle}
    >
      <img src="/google.svg" width={26} />
      {buttonText}
    </button>
  );
}

GoogleLogin.propTypes = {
  buttonText: PropTypes.string,
};

export default GoogleLogin;
