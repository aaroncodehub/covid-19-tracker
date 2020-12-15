import React from "react";
import "./Table.scss";
import numeral from 'numeral'

const Table = ({ countries }) => {
  return (
    <div className="table">
      

          {countries.map(({ country, cases }) => (
            <div key={country} className="table__tr">
              <div className='table__td'>{country}</div>
              <div className='table__td'>
                <strong>{numeral(cases).format("0,0")}</strong>
              </div>
            </div>
          ))}
      


    </div>
  );
};

export default Table;
