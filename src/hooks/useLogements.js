import useFetch from "./useFetch";

export default function useLogements() {
    return useFetch("/logements.json");
}