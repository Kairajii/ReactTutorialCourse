import axios from "axios";
const COUNTRY_API_ENDPOINT = 'https://restcountries.com/v2/';

export function getAllCountries(){
    // call Api & get the result
    return axios.get(`${COUNTRY_API_ENDPOINT}/all`)
    
}


export function getCountryDetail(countryCode:any){
    //call Api & get the detail of country
    return axios.get(`${COUNTRY_API_ENDPOINT}/alpha/${countryCode}`)
}