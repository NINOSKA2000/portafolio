import React from "react";

import { Link } from "react-scroll";

import { FormattedMessage } from "react-intl";
import { opcionesMenu } from "./data";

const Nav = (props) => {
  return (
    <>
      <nav>
        <ul className={`header-menu_links`}>
          {opcionesMenu.map((opcion) => (
            <Link
              key={opcion.id}
              activeClass="activeLink"
              to={opcion.to}
              smooth={true}
              duration={1000}
              spy={true}
              onSetActive={props.event}
            >
              <FormattedMessage
                id={opcion.int}
                defaultMessage={opcion.default}
              />
            </Link>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Nav;
