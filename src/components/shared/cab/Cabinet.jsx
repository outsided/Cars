import style from "./cab.module.css";
import { dataImage } from "./dataimg";
import side_menu from "../../../assets/in.svg";

const Cabinet = () => {
  return (
    <div>
      {dataImage.map((item) => (
        <img key={item.id} className={style.cabimg} src={item.img} alt="img" />
      ))}
      <img src={side_menu} className={style.sidein} alt="cab" />
    </div>
  );
};
export default Cabinet;
