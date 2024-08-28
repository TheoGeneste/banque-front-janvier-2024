import axios from "axios";
import {URL} from "./config";

class CompteService{

    static getAllComptes(){
        return axios.get(URL+"/comptes");
    }

    static getCompteById(id){
        return axios.get(URL+"/comptes/"+id)
    }

    static addCompte(compte){
        return axios.post("http://127.0.0.1:3000/comptes", compte)
    }
    
    static updateCompte(id, compte){
        return axios.patch("http://127.0.0.1:3000/comptes/"+id, compte)
    }

    static deleteCompte(id){
        return axios.delete("http://127.0.0.1:3000/comptes/"+id)
    }
}

export default CompteService;