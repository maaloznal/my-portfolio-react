import { FC, useEffect, useState } from "react";
import s from "./data.module.css";
import imageData from "../../../public/icondata.svg";

interface SteckData {
  id: number;
  name: string;
}

const Data: FC = () => {
  const [steck, setSteck] = useState<SteckData[]>([]);
  const [error, setError] = useState<string | null>(null);

  const fetchSteck = async (): Promise<void> => {
    try {
      const response = await fetch("https://d4772ef67e99161c.mokky.dev/steck");
      if (!response.ok) {
        setError("Ошибка при запросе данных");
      }
      const data: SteckData[] = await response.json();
      setSteck(data);
    } catch (error) {
      setError("Произошла ошибка при загрузке данных");
      console.log("Ошибка", error);
    }
  };

  useEffect(() => {
    fetchSteck();
  }, []);

  return (
    <div className={s.dataDiv}>
      {error && <p>{error}</p>}
      <ul className={s.dataUl}>
        {steck.map((item) => (
          <li className={s.dataLi} key={item.id}>
            <img src={imageData} alt="icon" />
            {item.name}
          </li>
        ))}
      </ul>
      <ul className={s.dataUl}>
        {steck.map((item) => (
          <li className={s.dataLi} key={item.id}>
            <img src={imageData} alt="icon" />
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Data;
