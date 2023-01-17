import React from "react";
import useAppContext from "../Hooks/useAppContext";

const Button = () => {
  const { isLoading, nbPages, page, handlePage } = useAppContext();
  return (
    <div className="btn-container">
      <button disabled={isLoading} onClick={() => handlePage("dec")}>
        prev
      </button>
      <p>
        {page + 1} of {nbPages}
      </p>
      <button disabled={isLoading} onClick={() => handlePage("inc")}>
        next
      </button>
    </div>
  );
};

export default Button;
