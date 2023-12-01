import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import  Button  from 'react-bootstrap/Button';
import axios from 'axios';

// BookItem component displays individual book information
function BookItem(props) {

    return (
        <div>
             {/* Displaying book information using React Bootstrap Card */}
            <Card>
                <Card.Header>{props.myBook.title}</Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                        <img src={props.myBook.cover}></img>
                        <footer>
                            {props.myBook.author}
                        </footer>
                    </blockquote>
                </Card.Body>
                 {/* Link to the Edit page with the book's ID as a parameter */}
                <Link to={'/edit/' + props.myBook._id} className='btn btn-primary'>Edit</Link>
                 {/* Button to delete the book */}
                <Button variant='danger' onClick={
                    (e)=>{
                        e.preventDefault();
                        // Sending a DELETE request to the server to delete the book
                        axios.delete('http://localhost:4000/api/book/' + props.myBook._id)
                        .then((res)=>{
                             // Reload the book list after successful deletion
                            let reload =props.Reload();
                        })
                        .catch();
                    }
                }>Delete</Button>
            </Card>
            {/* <h3>{props.myBook.title}</h3>
            <img src={props.myBook.thumbnailUrl}></img>
            <p>{props.myBook.authors[0]}</p> */}
        </div>
    );

}

export default BookItem;