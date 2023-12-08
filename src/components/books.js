// Import the BookItem component from the specified path
import BookItem from "./bookItem";

// Define a functional component named Books that takes props as its parameter
function Books(props){

    // Render the list of books using the map function on the myBooks prop
    return props.myBooks.map(
        // For each book in the array, create a BookItem component with specific props
        (book)=>{
            // Render a BookItem component with the following props:
            // - myBook: the current book in the iteration
            // - key: a unique identifier for React to efficiently update the components
            // - Reload: a function passed as a prop, which is a callback to reload data
            return <BookItem myBook={book} key={book._id} Reload={()=>(props.ReloadData())}></BookItem>
        }
    );}

// Export the Books component as the default export of this module
export default Books;
