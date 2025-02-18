// write product card here
import React from "react";
import ViewProductButton from "./button";

const Productcard = () => {
  const productImage = "https://imgs.search.brave.com/RVNJW15dLX-lsX3mBRZ70q7YwVLlnZsHcqYiM8RKLiQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQ1/ODIyMTgzOC9waG90/by9wYXJpcy1mcmFu/Y2UtYS1ndWVzdC13/ZWFycy1hLXBhbGUt/Z3JheS1ibGF6ZXIt/amFja2V0LW1hdGNo/aW5nLXBhbGUtZ3Jh/eS1zdWl0LXBhbnRz/LWEtbmF2eS5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9Y0Yw/TUVXaXI2enpVVXFh/TzZzSHhDY0lYVWZR/cFk2LXkxUmRXQVVZ/R1pEMD0";
  const productName = "Sample Product";
  const productPrice = "$99.99";

  return (
    <div className="border p-4 rounded shadow-lg max-w-sm text-center">
      <img src={productImage} alt={productName} className="w-full h-40 object-cover rounded" />
      <h2 className="text-lg font-semibold mt-2">{productName}</h2>
      <p className="text-gray-700">{productPrice}</p>
      <div className="mt-4">
        <ViewProductButton />
      </div>
    </div>
  );
};

export default Productcard;
