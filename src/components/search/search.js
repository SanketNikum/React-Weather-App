import { useState } from "react"
import { AsyncPaginate } from "react-select-async-paginate"
import axios from "axios"
import { GEO_API_URL, geoApiOptions } from "../../api"

const Search = ({ onSearchChange }) => {
    // Variables
    const [search, setSearch] = useState(null)


    const loadOptionRes = async (inputValue) => {
        try {
            let URL = `${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`
            const response = await axios.request(URL, geoApiOptions);
            const options = response.data.data.map((city) => {
                return {
                    value: `${city.latitude} ${city.longitude}`,
                    label: `${city.name} ${city.countryCode}`,
                }
            })
            return { options }
        } catch (error) {
            console.error(error);
        }
    }

    const handleOnChange = (searchData) => {
        setSearch(searchData);
        onSearchChange(searchData)
    }
    return (
        <AsyncPaginate
            placeholder='Seach for city'
            debounceTimeout={600}
            value={search}
            onChange={handleOnChange}
            loadOptions={loadOptionRes}
        />
    )
}

export default Search