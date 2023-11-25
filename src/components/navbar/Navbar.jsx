import styled from "./Navbar.module.css";

function Navbar(props) {
  const title = "علی بلاگ";
  return (
    <div className={styled.headerWrapper}>
      <div className="container">
        <div className={styled.header}>
          <h3>{props.title}</h3>
          <ul>
            <li>لیست مقالات</li>
            <li>ساخت مقاله</li>
            <li>درباره</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
