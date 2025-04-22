import style from "./footer.module.css";
import { footerNavigate } from "./foote.js";
export default function Footer() {
  return (
    <footer className={style.footer}>
      <ul className={style.ul}>
        {footerNavigate.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </footer>
  );
}
