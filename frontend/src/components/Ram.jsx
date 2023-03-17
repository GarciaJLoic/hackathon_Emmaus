import PropTypes from "prop-types";

function Ram({ mem, valeurm }) {
  return (
    <div className="ligneAntutu">
      <input value={mem} />
      <input value={valeurm} />
    </div>
  );
}

Ram.propTypes = {
  mem: PropTypes.number,
  valeurm: PropTypes.number,
};

Ram.defaultProps = {
  mem: 0,
  valeurm: 0,
};

export default Ram;
