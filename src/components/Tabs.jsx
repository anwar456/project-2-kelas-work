import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";

export default function Tabs({ tab, setTab }) {
  return (
    <Nav pills className="mb-4 mt-4">
      <NavItem className="mx-2 mb-2">
        <NavLink
          className="tab-pointer"
          active={tab === 0 ? true : false}
          onClick={() => setTab(0)}
        >
          All
        </NavLink>
      </NavItem>
      <NavItem className="mx-1 mb-2">
        <NavLink
          className="tab-pointer"
          active={tab === 1 ? true : false}
          onClick={() => setTab(1)}
        >
          Men's Clothing
        </NavLink>
      </NavItem>
      <NavItem className="mx-1 mb-2">
        <NavLink
          className="tab-pointer"
          active={tab === 2 ? true : false}
          onClick={() => setTab(2)}
        >
          Jewelery
        </NavLink>
      </NavItem>
      <NavItem className="mx-1 mb-2">
        <NavLink
          className="tab-pointer"
          active={tab === 3 ? true : false}
          onClick={() => setTab(3)}
        >
          electronics
        </NavLink>
      </NavItem>
      <NavItem className="mx-1 mb-2">
        <NavLink
          className="tab-pointer"
          active={tab === 4 ? true : false}
          onClick={() => setTab(4)}
        >
          women's clothing
        </NavLink>
      </NavItem>
    </Nav>
  );
}
