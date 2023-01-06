import axios from "axios";

const url = "https://luggscheb-vigilant-succotash-64rr54w7jgg25rvv-5000.preview.app.github.dev/"

export async function api_search(q){
    const response = await axios.get( url + 'cat-search/' + q ,{});
    return response.data;
}
export async function api_id_search(q){
    const response = await axios.get( url + 'cat-item/' + q , {});
    return response.data;
}
export async function api_id_patch(q,des){
    const response = await axios.patch( url + 'cat-item/' + q , {'params':{'description':des}});
    return response.data;
}
export async function api_id_history(q){
    const response = await axios.get( url + 'cat-item-history/' + q , {});
    return response.data;
}