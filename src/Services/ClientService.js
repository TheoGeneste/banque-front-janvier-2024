import axios from "axios";
import {URL} from "./config";

class ClientService{

    static getAllClients(){
        return axios.get(URL+"/clients");
        // return fetch(URL+"/clients")
    }

    static getClientById(id){
        return axios.get(URL+"/clients/"+id)
    }

    static addClient(client){
        return axios.post("http://127.0.0.1:3000/clients", client)
    }
    
    static updateClient(id, client){
        return axios.patch("http://127.0.0.1:3000/clients/"+id, client)
    }

    static deleteClient(id){
        return axios.delete("http://127.0.0.1:3000/clients/"+id)
    }
}

export default ClientService;