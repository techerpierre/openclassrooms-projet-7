import { useEffect, useState } from "react";
import useLogements from "./useLogements";

export default function useLogement(id, notFoundCallback) {
    const { data, err, isLoading } = useLogements();
    const [logement, setLogement] = useState(null);

    useEffect(() => {
        if (!isLoading && data) {
            const logement = data.find((item) => item.id === id);
            if (!logement)
                notFoundCallback();
            else
                setLogement(logement);
        }
    }, [isLoading, data, id]);

    return { logement, err, isLoading };
}