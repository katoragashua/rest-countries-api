import { useState, useEffect } from "react";
import { nanoid } from "nanoid";

const useLogic = (url) => {
  const [theme, setTheme] = useState(() => false);
  const [localData, setLocalData] = useState(() => []);
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

        setLocalData((prev) => countriesArray);
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

    setData((prev) =>
      localData.filter((datum) => {
        if (name) {
          return datum.name.common.toLowerCase().includes(value);
        }else {
          return datum
        }
      })
    );
  };

  const handleFilter = (e) => {
    const { value, name } = e.target;
    setSearchQuery((prev) => ({
      ...prev,
      [name]: value,
    }));

    if(value){
      setData((prev) =>
        localData.filter((datum) => {
          return datum.region.toLowerCase() === value;
        })
      );
    }else (
      setData((prev) => localData)
    )
    
  }

  //  console.log(!searchQuery.search || !searchQuery.region);

  return { data, theme, toggleTheme, searchQuery, handleSearch, handleFilter };
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
