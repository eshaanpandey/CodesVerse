import React from "react";
import { Link, useParams } from "react-router-dom";
import classnames from "classnames";

function NavbarElement({ label, children, id }) {
  const { type } = useParams();

  return (
    <Link
      to={`/${id}`}
      className={classnames(
        "cursor-pointer mx-16 p-2 flex flex-row justify-center items-center hover:border-b-2",
        {
          "border-b-2": type === id,
        }
      )}
    >
      {children}
      <h1 className="text-xl hidden sm:block">{label}</h1>
    </Link>
  );
}

export default NavbarElement;
