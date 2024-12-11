import { FC, useEffect, useState } from "react";

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
    <div>
      {error && <p>{error}</p>}
      <ul>
        {steck.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Data;
