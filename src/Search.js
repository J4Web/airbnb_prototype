import React, {useState} from 'react';
import './Search.css';
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DefinedRange} from "react-date-range";
import { DateRange} from "react-date-range";
import { Button } from "@material-ui/core";
import PeopleIcon from '@mui/icons-material/People';
import { useHistory } from "react-router-dom";
import SortIcon from '@mui/icons-material/Sort';

function DatePicker() {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
  
    const selectionRange = [
      {
        startDate: startDate,
        endDate: endDate,
        key: 'selection',
      },
    ];
  
    const handleChange = (ranges) => {
      setStartDate(ranges.selection.startDate);
      setEndDate(ranges.selection.endDate);
    };
  
    return (
      <div className='search__date'>
        <DefinedRange ranges={selectionRange} onChange={handleChange} />
        <DateRange ranges={selectionRange} onChange={handleChange} />
      </div>
    );
  }

// DATE PICKER COMPONENT
function Search() {
    const history = useHistory();
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [filter,setFilter]=useState(false);

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: "selection",
      };

    function handleSelect(ranges) {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    }

    return (
        <div className='search'>
            <div className="search__date">
            {/* <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} /> */}
            <DatePicker/>
            </div>
            
            <h3>
                Number of guests 
                <input min={0}  type="number"  placeholder="Enter the Guests"/>
                <SortIcon className="search__filter"/>
            </h3>
        
            

            <Button onClick={() => history.push('/search')}>Search Airbnb</Button>
        </div>
    )
}

export default Search
