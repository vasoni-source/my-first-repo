import { use, useEffect,useState } from "react";

interface FetchState<T> {
    data: T | null;
    loading: boolean;
    error: string | null;
}

export function useFetch<T>(url: string): FetchState<T> {
   const [state,setState]=useState<FetchState<T>>({
    data:null,
    loading:true,
    error:null
   });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`Error: ${response.statusText}`);
                }
                const result: T = await response.json();
                setState({ data: result, loading: false, error: null });
            } catch (err: any) {
                setState({ data: null, loading: false, error: err.message });
            }
        };

        fetchData();
    }, [url]);

    return state;
}