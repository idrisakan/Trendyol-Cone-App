import { Client } from "./instance";

export async function getRequest(URL,params) {
    const renponse= Client.get(URL,{params:params});
    return renponse
}
export async function postRequest(URL,params) {
    const renponse= Client.post(URL,params);
    return renponse
}