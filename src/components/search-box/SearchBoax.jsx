

const SearchBox = ({Classs, Placeholder, OnChangeHandler})=> {
        return(
            <input
            className={Classs}
            type="search"
            placeholder={Placeholder}
            onChange={OnChangeHandler}
          />
        )
    
}
export default SearchBox;