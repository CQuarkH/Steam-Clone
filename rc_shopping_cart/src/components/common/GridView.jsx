import React from "react";
import { MagicMotion } from "react-magic-motion";

function GridView({ elements, Element, idPropName = "id" }) {
  return (
    <MagicMotion>
      {elements.length === 0 ? (
        <div className="flex w-full justify-center">No elements found.</div>
      ) : (
        <div className="container-grid flex-1 p-2">
          {elements.map((element) => (
            <Element key={element[idPropName]} element={element} />
          ))}
        </div>
      )}
    </MagicMotion>
  );
}

export default GridView;
