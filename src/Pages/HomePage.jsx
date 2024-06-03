import React, { useEffect, useState } from "react";
import ClientService from "../Services/ClientService";

const HomePage = () => {
    // Variables
    const [clients, setClients] = useState([]);

    //Comportements
    const fetchClients = async () => {
        try {
            const response = await ClientService.getAllClients();
            setClients(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchClients();
    }, [])

    //Affichage
    return <>
        Home Page
        {clients.map(client => {
            // Appeler un Component
            return <h2>{client.CL_Nom} {client.CL_Prenom}</h2>
        })}
    </>

}

export default HomePage;