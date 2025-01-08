import React from "react";
import { Link, useParams } from "react-router-dom";
import classnames from "classnames";

function NavbarElement({ label, children, id }) {
  const { type } = useParams();

  return (
    <Link
      to={`/${id}`}
      className={classnames(
        "relative mx-4 px-2 py-1 flex flex-row items-center space-x-2 group",
        "hover:text-blue-500 text-base"
      )}
    >
      {children}
      <h1 className="hidden sm:block">{label}</h1>
      <span
        className={classnames(
          "absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 transform scale-x-0 group-hover:scale-x-100",
          {
            "scale-x-100": type === id,
          }
        )}
      ></span>
    </Link>
  );
}

export default NavbarElement;
