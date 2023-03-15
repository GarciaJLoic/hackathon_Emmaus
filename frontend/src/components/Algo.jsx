import React from "react";

function Algo() {
  const inputAntutu = 9000;
  const inputRam = 1;
  const inputStockage = 16;
  const valeurA = [
    { antutuMin: 0, antutuMax: 50000, val_a: 40 },
    { antutuMin: 50001, antutuMax: 100000, val_a: 44 },
    { antutuMin: 100001, antutuMax: 150000, val_a: 49 },
  ];
  const valeurM = [
    { mem: 1, val_m: 30 },
    { mem: 2, val_m: 40 },
    { mem: 3, val_m: 54 },
  ];
  const valeurS = [
    { stockage: 16, val_s: 31 },
    { stockage: 32, val_s: 45 },
    { stockage: 64, val_s: 66 },
  ];
  const ponderation = -50;
  const categorisation = [
    { valTotaleMin: 0, valTotaleMax: 89, nomCategorie: "1-HC" },
    { valTotaleMin: 90, valTotaleMax: 164, nomCategorie: "2-C" },
    { valTotaleMin: 164, valTotaleMax: 254, nomCategorie: "3-B" },
    { valTotaleMin: 255, valTotaleMax: 374, nomCategorie: "4-A" },
    { valTotaleMin: 375, valTotaleMax: 1000, val_a: "5-Prenium" },
  ];
  const sum = (antutu, memoire, stockage, ponde) => {
    const [valA] = valeurA.filter(
      (e) => antutu >= e.antutuMin && antutu <= e.antutuMax
    );
    const [valM] = valeurM.filter((e) => memoire === e.mem);
    const [valS] = valeurS.filter((e) => stockage === e.stockage);
    const total = valA.val_a + valM.val_m + valS.val_s;
    const totalPondere = total + (ponde / 100) * total;
    const [result] = categorisation.filter(
      (e) => totalPondere >= e.valTotaleMin && totalPondere <= e.valTotaleMax
    );
    return result.nomCategorie;
  };
  return (
    <div>
      {console.info(sum(inputAntutu, inputRam, inputStockage, ponderation))}
    </div>
  );
}

export default Algo;
