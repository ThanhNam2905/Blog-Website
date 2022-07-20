import useSWR from "swr"

const response = (...args) => fetch(...args).then(res => res.json())

const baseURL = "http://localhost:3000/";

export default function fetcher(params) {
    const { data, error } = useSWR(`${baseURL}${params}`, response);

    return {
        data: data,
        isLoading: !error && !data,
        isError: error
    }
}