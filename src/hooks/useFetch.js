import {useState, useEffect} from "react";


export function useFetch(url){
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);

    useEffect(() => {
        async function fetchData() {
            if (!url) {
                setLoading(false);
                setError(null);
                setData(null);
                return;
            }

            try {
                setLoading(true);
                const response = await fetch(url);
                const data = await response.json();

                setData(data);
                setError(null);
                setLoading(false);

            } catch (err) {
                console.log(err.message);
                setError(err.message);
                setData(null);
                setLoading(false);
            }
        }

        fetchData();
    }, [url]);



    return {loading, error, data};

}