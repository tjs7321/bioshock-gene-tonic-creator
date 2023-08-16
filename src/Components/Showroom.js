import React from "react";
import Plasmid from "./Plasmid";
import { plasmids } from "../data";

function Showroom({ rapture }) {
  // Divide the plasmids into two arrays for the top and bottom rows
  const topRowPlasmids = plasmids.slice(0, 5);
  const bottomRowPlasmids = plasmids.slice(5, 8);

  return (
    <div className="container">
      <h2 className="mt-4 mb-2">Plasmids</h2>
      <table className="table table-bordered">
        <tbody>
          <tr>
            {topRowPlasmids.map((plasmid) => (
              <td key={plasmid.id} className="text-center">
                <Plasmid rapture={rapture} {...plasmid} />
              </td>
            ))}
          </tr>
          <tr>
            <td></td> {/* Empty cell */}
            <td className="text-center">
              <Plasmid rapture={rapture} {...bottomRowPlasmids[0]} />
            </td>
            <td className="text-center">
              <Plasmid rapture={rapture} {...bottomRowPlasmids[1]} />
            </td>
            <td className="text-center">
              <Plasmid rapture={rapture} {...bottomRowPlasmids[2]} />
            </td>
            <td></td> {/* Empty cell */}
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Showroom;
