import PropTypes from "prop-types";

function Button(props) {
  const { bgColor, text, type, onClick } = props;

  const className = `${
    bgColor === undefined ? "bg-slate-100" : bgColor
  } inline-flex items-center justify-center w-40 h-10 gap-2 px-3 mr-4 text-sm font-bold tracking-wide text-black transition duration-300 rounded-xl shadow-md whitespace-nowrap hover:bg-primary hover:text-white carousel-item`;

  return (
    <button
      // eslint-disable-next-line react/no-unknown-property
      bgColor={bgColor}
      onClick={onClick}
      type={type}
      className={className}
    >
      {text}
    </button>
  );
}

export default Button;

Button.propTypes = {
  bgColor: PropTypes.string,
  text: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
};
