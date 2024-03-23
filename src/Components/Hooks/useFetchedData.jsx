import { useEffect, useState } from 'react';
import { useQuery } from "@tanstack/react-query";

const useFetchedData = (path) => { // Accept path as a parameter
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState();

    // UseQuery hook to fetch data
    const { data: fetchedData } = useQuery({
        queryFn: () => {
            return fetch(`http://localhost:5000/${path}`)
                .then((res) => res.json());
        },
    });

    useEffect(() => {
        if (fetchedData) {
            setData(fetchedData);
            setIsLoading(false);
        }
    }, [fetchedData]);

    return { data, isLoading };
};

export default useFetchedData;
