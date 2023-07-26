// import React, { useState, useEffect } from "react";

// import "./Home.css";
// import CountryCaard from "../components/CountryCaard";
// import { getAllCountries } from "../services/api";
// import { Link } from "react-router-dom";
// import TextField from "@mui/material/TextField";
// import InputLabel from "@mui/material/InputLabel";
// import MenuItem from "@mui/material/MenuItem";
// import FormControl from "@mui/material/FormControl";
// import Select, { SelectChangeEvent } from "@mui/material/Select";

// function Home() {
//   const [countriesList, setCountriesList] = useState([] as any[]);
//   const [age, setAge] = useState<string>("");

//   const handleChange = (event: SelectChangeEvent) => {
//     setAge(event.target.value as string);
//   };

//   useEffect(() => {
//     getAllCountries().then((result) => {
//       const countries = result.data;
//       setCountriesList(countries);
//       console.log("countries", countries);
//     });
//   }, []);

//   return (
//     <div className="App">
//       <div className="header">
//         <TextField style={{marginLeft:'10px',width:'450px'}} id="filled-basic" label="Filled" variant="filled" />

//         <FormControl fullWidth style={{marginLeft:'10px'}}>
//           <InputLabel id="demo-simple-select-label">Age</InputLabel>
//           <Select
//             labelId="demo-simple-select-label"
//             id="demo-simple-select"
//             value={age}
//             label="Age"
//             onChange={handleChange}
//           >
//             <MenuItem value={10}>Asia</MenuItem>
//             <MenuItem value={20}>Africa</MenuItem>
//             <MenuItem value={30}></MenuItem>
//           </Select>
//         </FormControl>
//       </div>

//       <div className="country__card">
//         {countriesList?.map((country) => (
//           <Link className="link__card" to={`/countries/${country.alpha3Code}`}>
//             <CountryCaard
//               name={country.name}
//               capital={country.capital}
//               population={country.population}
//               flags={country.flags.png}
//               key={country.alpha3Code}
//             />
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Home;
