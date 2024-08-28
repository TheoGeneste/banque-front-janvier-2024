import React, { useEffect, useState } from "react";
import ClientService from "../Services/ClientService";

const HomePage = () => {
    // Variables
    const [clients, setClients] = useState([]);
    const [client, setClient] = useState({})

    //Comportements
    const getClients = async () => {
        try {
            const response = await ClientService.getAllClients();
            setClients(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    const addClient = async (e) => {
        e.preventDefault();
        try {
            const response = await ClientService.addClient(client);
            setClient();
            getClients();
        } catch (error) {
            console.log(error);   
        }
    }

    const handleChange = (e) => {
        const {name, value} = e.currentTarget;
        setClient({...client, [name] : value})
    }

    useEffect(() => {
        getClients();
    }, [])

    //Affichage
    console.log(client);
    
    return <>
        Home Page
        {clients.map(client => {
            // Appeler un Component
            return <h2>{client.CL_Nom} {client.CL_Prenom}</h2>
        })}

        <form onSubmit={addClient} method="POST">
            <label htmlFor="CL_Nom">Nom</label>
            <input type="text" name="CL_Nom" value={client.CL_Nom ? client.CL_Nom : ""} onChange={handleChange} />
            <label htmlFor="CL_Prenom">Prenom</label>
            <input type="text" name="CL_Prenom" value={client.CL_Prenom ?client.CL_Prenom :"" } onChange={handleChange} />
            <label htmlFor="CL_Telephone">Téléphone</label>
            <input type="text" name="CL_Telephone" value={client.CL_Telephone ? client.CL_Telephone : ""} onChange={handleChange} />
            <label htmlFor="CL_Email">Email</label>
            <input type="mail" name="CL_Email" value={client.CL_Email} onChange={handleChange} />
            <label htmlFor="CL_Adresse">Adresse</label>
            <input type="text" name="CL_Adresse" value={client.CL_Adresse} onChange={handleChange} />
            <label htmlFor="CL_Ville">Ville</label>
            <input type="text" name="CL_Ville" value={client.CL_Ville} onChange={handleChange} />         
            <label htmlFor="CL_CodePostal">Code Postal</label>
            <input type="text" name="CL_CodePostal" value={client.CL_CodePostal} onChange={handleChange} />         
            <label htmlFor="CL_Password">Password</label>
            <input type="password" name="CL_Password" value={client.CL_Password} onChange={handleChange} />    
            <input type="submit" value={"Envoyer"}/>     
        </form>
    </>

}

export default HomePage;