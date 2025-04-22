import style from "./content.module.css";
import { dataContent } from "./dataContent";
export default function Content() {
  return (
    <main>
        <h1 className={style.h1}>Новости и анонсы</h1>
      <div className={style.content}>
        {dataContent.map((item) => (
          <div key={item.id} className={style.card}>
            <img src={item.img} alt="qwe"></img>
            <div className={style.titleDisc}>
              <h3 className={style.title}>{item.title}</h3>
              <p className={style.disc}>{item.description}</p>
            </div>

            <div className={style.lowcard}>
              <p>{item.name}</p>
              <p>{item.data}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
