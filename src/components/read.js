// Importing necessary React hooks and external libraries
import { useEffect, useState } from "react";
import axios from "axios";
import Books from "./books";

// Functional component named Read
function Read() {
    // State variable to store data fetched from the server
    const [data, setData] = useState([]);

    // useEffect hook is used for handling side effects in functional components
    useEffect(() => {
        // Axios is used to make HTTP requests
        axios.get('http://localhost:4000/api/books')
            .then(
                // If the request is successful, update the state with the fetched data
                (response) => {
                    setData(response.data)
                }
            )
            .catch(
                // If there is an error, log it to the console
                (error) => {
                    console.log(error);
                }
            )

    }, []); // The empty dependency array ensures that this effect runs once after the initial render

    const Reload = (e)=>{
        axios.get('http://localhost:4000/api/books')
            .then(
                // If the request is successful, update the state with the fetched data
                (response) => {
                    setData(response.data)
                }
            )
            .catch(
                // If there is an error, log it to the console
                (error) => {
                    console.log(error);
                }
            )

    }

    // JSX to render the component
    return (
        <div>
            <h2>Hello from Read Component!</h2>
            {/* Rendering the Books component and passing the fetched data as a prop */}
            <Books myBooks={data} ReloadData={Reload}></Books>
        </div>
    );
}

// Exporting the Read component to make it available for other components
export default Read;
