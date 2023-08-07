import { Link } from "react-router-dom";
import { menu } from "../../data/menuData";
import "./menu.scss";

const Menu = () => {
  // Map data
  const menuData = menu.map((menu) => {
    return (
      <div className="menu-item" key={menu.id}>
        <span className="title">{menu?.title}</span>
        {menu?.listItems.map((item) => (
          <Link className="list-item" to={item.url} key={item.id}>
            <img src={item?.icon} alt="" />
            <span className="menu-item-title">{item.title}</span>
          </Link>
        ))}
      </div>
    );
  });
  return <div className="menu">{menuData}</div>;
};

export default Menu;
