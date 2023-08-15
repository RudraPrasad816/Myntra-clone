import { useContext, useState } from "react";
import { BiSearch } from 'react-icons/bi';
import { DataContext } from '../App';

function SearchBar() {

    const data = useContext(DataContext);

    const [search, setSearch] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    let id = 0;


    const keySearch = (e) => {
        setSearch(e.target.value);
        
        if (search === '') {
            setSuggestions([]);
        } else {
            let newSuggestions = data.newData.filter((element) => {
                let newEle = element.name.toLowerCase().includes(e.target.value.toLowerCase()) 
                             || element.description.toLowerCase().includes(e.target.value.toLowerCase())
                             || `${element.name} + ${element.description}`.toLowerCase().includes(e.target.value.toLowerCase())
                return newEle;
            })

            setSuggestions(newSuggestions);
        }

        if (e.keyCode === 13) {
            searchTheElement(e.target.value);
        }

        console.log(search)
    }

    function searchTheElement(element) {
        let searcharray = data.newData.filter((item) => {
            let newarray = element.toLowerCase().includes(item.name.toLowerCase())
                || element.toLowerCase().includes(item.description.toLowerCase());

            return newarray;
        })

        data.setNewData(searcharray);
    }

    function searchedData(e) {
        document.getElementById('searchInput').value = e.target.innerText;
        setSuggestions([]);
        searchTheElement(e.target.innerText);
    }

    return (
        <>
            <div className="searchbar">
                <BiSearch />
                <input
                    id="searchInput"
                    type="text"
                    onKeyUp={keySearch}
                    autoComplete="off"
                    placeholder="Search for Products and Brands"
                />
                <div className="suggestions">

                    {
                        suggestions.length !== 0 &&

                        suggestions.map((key) => {
                            return <div key={id++} className="suggestion"
                                onClick={searchedData}
                            >
                                {
                                    key.name.toLowerCase()
                                    + " " +
                                    key.description.toLowerCase()
                                }
                            </div>
                        })
                    }
                </div>
            </div>

        </>
    )
}

export default SearchBar;