import { useState, useEffect } from "react";
import { nanoid } from "nanoid";

const useLogic = (url) => {
  const [theme, setTheme] = useState(() => false);
  const [data, setData] = useState(() => []);
  const [searchQuery, setSearchQuery] = useState(() => ({
    search: "",
    region: "",
  }));

  const toggleTheme = () => {
    setTheme((prev) => !prev);
  };

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const countriesArray = data.map((datum) => ({
          id: nanoid(),
          ...datum,
        }));

        setData((prev) => countriesArray);
      });
  }, [url]);

  const handleSearch = (e) => {
    const { value, name } = e.target;
    setSearchQuery((prev) => ({
      ...prev,
      [name]: value,
    }));
    console.log(value);
    setData((prev) => {
      return data.filter((datum) =>
        datum.name.common.toLowerCase().includes(value.toLowerCase())
      );
    });

    setData(prev => data.filter(datum => datum.region.toLowerCase() === value))
  };
  //  console.log(searchQuery);

  return { data, theme, toggleTheme, searchQuery, handleSearch };
};

export default useLogic;

// const search = data.filter((datum) => {
//   const { value } = e.target;
//   if (datum.name.common.toLowerCase().includes(value)) {
//     return datum;
//   } else if (value === "") {
//     return data;
//   }
// });

// setData((prev) => search);
