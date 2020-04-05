import React, { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";

import { useFlashes } from "../context/flash";
import { UserLoggedIn } from "./user-logged-in";
import { UserLoggedOut } from "./user-logged-out";

import { Logo } from "../components/icons/logo";
import { Store } from "../components/icons/store";
import { Flash } from "../components/flash";
import { Tag } from "../components/icons/tag";
import { Top } from "../components/icons/top";
import { Add } from "../components/icons/add";
import { Map } from "../components/icons/map";

const menu = [
  { slug: "/stores", title: "Stores", icon: Store },
  { slug: "/tags", title: "Tags", icon: Tag },
  { slug: "/top", title: "Top", icon: Top },
  { slug: "/add", title: "Add", icon: Add },
  { slug: "/map", title: "Map", icon: Map },
];

interface Props {
  children: ReactNode;
  user?: any;
}

export const Layout = ({ children, user = false }: Props) => {
  const location = useLocation();
  const currentPage = location.pathname;
  const [flashes] = useFlashes();

  return (
    <>
      <header className="top">
        <nav className="nav">
          <div className="nav__section nav__section--pages">
            <li className="nav__item">
              <Link to="/" className="nav__link nav__link--logo">
                <Logo />
              </Link>
            </li>
            {menu.map((option, index) => {
              const { icon: Icon } = option;
              return (
                <li className="nav__item" key={index}>
                  <Link
                    to={option.slug}
                    className={`nav__link ${
                      currentPage === option.slug ? "nav__link--active" : ""
                    }`}
                  >
                    <Icon></Icon>
                    <span>{option.title}</span>
                  </Link>
                </li>
              );
            })}
          </div>
          <div className="nav__section nav__section--search">
            <input
              type="text"
              placeholder="Coffee, beer.."
              className="search__input"
              name="search"
            />
            <div className="search__results"></div>
          </div>
          <div className="nav__section nav__section--user">
            {user ? <UserLoggedIn /> : <UserLoggedOut />}
          </div>
        </nav>
      </header>
      {Boolean(flashes.length) && (
        <div className="inner">
          <div className="flash-messages">
            {flashes.map((flash, index) => (
              <Flash flash={flash} key={index} index={index} />
            ))}
          </div>
        </div>
      )}
      <div className="content">{children}</div>
    </>
  );
};
