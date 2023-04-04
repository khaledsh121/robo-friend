import './searchField.css'

const SearchField = (props) =>{

    const changeHandler = (event) =>{
        const textInput = event.target.value;

        props.onChangeSearch(textInput)
    }

    return(
        <div className="container" >
            <h1>Welcome to monsters list</h1>
            <input type='text' className="search-input" placeholder="search monster" onChange={changeHandler} />
        </div>
    )

};


export default SearchField