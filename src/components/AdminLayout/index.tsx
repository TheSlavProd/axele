import React, { PropsWithChildren } from "react";
import styles from "./AdminLayout.module.scss";
import classNames from 'classnames';

import { useDispatch } from "react-redux";
import {useLocation, useNavigate } from "react-router-dom";
import { logout } from "../../redux/slices/auth";

const MneuItems = [
  {
    title: "Profile",
    path: "profile",
  },
  {
    title: "Find Load",
    path: "findLoad",
  },
  {
    title: "Add Driver",
    path: "addDriver",
  },
  {
    title: "Drivers",
    path: "drivers",
  },
  {
    title: "Add Tractor",
    path: "addTractors",
  },
  {
    title: "Tractors",
    path: "tractors",
  },
  {
    title: "Add Trailer",
    path: "addTrailer",
  },
  {
    title: "Trailers",
    path: "trailers",
  },
  {
    title: "Add Address",
    path: "addAddress",
  },
  {
    title: "List",
    path: "list",
  },

];

export const AdminLayout: React.FC<PropsWithChildren> = ({children}) => {
  const navigate = useNavigate();
  const dispach = useDispatch()
  const {pathname} = useLocation()
  const handleClickMenu = (url: string) => {
    navigate(`/${url}`)
  }

  const handleClickLogout = () => {
    dispach(logout())
    navigate("/")
  }

  const activeClass = styles.activeMenuItem
  
  return (
    <div className={styles.content}>
      <div className={styles.sidebar}>
        <h3>Axele plan</h3>
        <div className={styles.sidebar__menu}>
          <ul>
            {MneuItems.map((item) => (
             
              <li key={item.title} onClick={() => { handleClickMenu(item.path) }}>
                <div
                  className={classNames(styles.sidebar__menu_item, `/${item.path}` === pathname ? activeClass : " ")}

                >
                  {item.title}
                </div>
              </li>
            ))}
          </ul>
        </div>
        <button className={styles.logout} onClick={handleClickLogout}>Log out</button>
      </div>
      <div className={styles.main}>
        {children}
      </div>
    </div>
  );
};
