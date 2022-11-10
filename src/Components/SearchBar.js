import {Divider, Input} from 'antd'


function SearchBar({search, setSearch}){

    function handleChange(e){
        setSearch(e.target.value)
      }

    return (
        <div>
            <Divider>Search Bar</Divider>
            <label>Search</label>
            <Input type="text" value={search} onChange={handleChange}/>
        </div>
    )
}

export default SearchBar