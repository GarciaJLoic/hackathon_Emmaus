import PropTypes from "prop-types";

function Antutu({ antutuMin, antutuMax, valeura }) {
  return (
    <>
      {/* <h1>Antutu benchmark</h1> */}
      <div className="ligneAntutu">
        <p className="pAntutu">{antutuMin}</p>
        <p className="pAntutu">{antutuMax} </p>
        {/* <p>{valeur_a}</p> */}
        <input type="text" value={valeura} />
      </div>
    </>
  );
}

Antutu.propTypes = {
  antutuMin: PropTypes.number,
  antutuMax: PropTypes.number,
  valeura: PropTypes.number,
};
Antutu.defaultProps = {
  antutuMax: 0,
  antutuMin: 0,
  valeura: 0,
};

export default Antutu;
