import { useEffect, useState } from "react"

export default function useFetch(path) {
    
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    
    const exec = async() => {
        try {
            const response = await fetch(path);
            setData(await response.json());
            setIsLoading(false);
        } catch (err) {
            setError(err);
            setIsLoading(false);
        }
    }
    useEffect(() => {
        exec();
    }, []);

    return { data, error, isLoading };
}