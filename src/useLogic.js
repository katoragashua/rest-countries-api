import {useState, useEffect} from "react";
import {nanoid} from "nanoid";

const useLogic = (url) => {
    const [theme, setTheme] = useState(() => (false));
    const [data, setData] = useState(() => ([]));

    const toggleTheme = () => {
        setTheme(prev => !prev)
    };

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
               const countriesArray = data.map((datum) => ({ id: nanoid(), ...datum }));
                setData(prev => countriesArray);
            });
    }, [url]);
    
    return {data, theme, toggleTheme};
}

export default useLogic;