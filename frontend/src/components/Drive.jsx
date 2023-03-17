import PropTypes from "prop-types";

function Drive({ stockage, valeurs }) {
  return (
    <div className="ligneAntutu">
      <input value={stockage} />
      <input value={valeurs} />
    </div>
  );
}

Drive.propTypes = {
  stockage: PropTypes.number,
  valeurs: PropTypes.number,
};

Drive.defaultProps = {
  stockage: 0,
  valeurs: 0,
};

export default Drive;
