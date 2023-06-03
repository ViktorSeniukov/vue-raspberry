import { ref } from "vue";

const URL = 'https://jsonplaceholder.typicode.com/posts';

export function getData() {
    const data = ref(null);
    const  error = ref(null);

    fetch(URL)
        .then((res) => res.json())
        .then((json) => (data.value = json))
        .catch((err) => (error.value = err))

    return { data, error };
}