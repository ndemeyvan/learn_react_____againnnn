import { useEffect, useState } from "react";



const useGetFecth = (url) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        // Fetch Data from json server
        // Endpoint : "http://localhost:8000/blogs"
        fetch(url)
            .then((res) => {
                if (!res.ok) {
                    throw Error('Request Failed , please try again ...')
                }
                return res.json();
            })
            .then((data) => {
                console.log("This is data response : " + data);
                setData(data);
                setIsLoading(false);
                setError(null);
            }).catch((e) => {
                console.log('This is request error ', e.message);
                setError(e.message);
                setIsLoading(false);
            });
        console.log("Use effect run");
    }, []);

    return {
        isLoading,
        data,
        error
    }
}

export default useGetFecth;