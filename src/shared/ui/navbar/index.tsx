// import React from "react";
// import Button from "../button";
// import classNames from "classnames";
// import styles from "./index.module.scss";

// type Theme = "light" | "dark";

// interface NavMenuProps {
//   toggleMenu: () => void;
//   theme: Theme;
// }

// const NavMenu: React.FC<NavMenuProps> = ({ toggleMenu, theme }) => {
//   const buttonTheme = theme === "light" ? "white" : "black";

//   return (
//     <nav
//       className={classNames(styles.header_nav, {
//         [styles.header_nav_dark]: theme === "dark",
//       })}
//     >
//       <div className={styles.header_nav_menu_button}>
//         <Button type="menu" onClick={toggleMenu} />
//       </div>

//       <div className={styles.header_nav_links}>
//         <div
//           className={classNames(styles.header_nav_links_centered, {
//             [styles.vertical_layout]: theme === "dark",
//           })}
//         >
//           <Button type="ghost" theme={buttonTheme} title="Главная" onClick={toggleMenu} />
//           <Button type="ghost" theme={buttonTheme} title="Кейсы" onClick={toggleMenu} />
//           <Button type="ghost" theme={buttonTheme} title="Услуги" onClick={toggleMenu} />
//           <Button type="ghost" theme={buttonTheme} title="Контакты" onClick={toggleMenu} />
//           <Button type="ghost" theme={buttonTheme} title="Вакансии" onClick={toggleMenu} />
//           <Button type="ghost" theme={buttonTheme} title="Новости" onClick={toggleMenu} />
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default NavMenu;
