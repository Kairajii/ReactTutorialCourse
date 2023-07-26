// import React,{useState,useEffect} from 'react'
// import './CountryDetail.css'
// import {useParams} from 'react-router-dom'
// import { getCountryDetail } from '../services/api';


// const CountryDetail:React.FC = () => {
//     const {countryCode} = useParams();
//     const [detail, setDetail] = useState({} as any)

//     useEffect(() => {
//         getCountryDetail(countryCode).then((result)=>{
//             console.log("result data: ",result.data)
//             setDetail(result.data)
//         })
//     }, [countryCode])

// // console.log("detail",detail)
//   return (
//     <div className='country__detail__wrapper'>
//         <div className='image__wraper'>
//            <img src={detail.flags?.png} alt={detail.name} />
//         </div>
//         <div className='detail__wrapper'>
//             <h3> {detail.name} </h3> <span> {detail.nativeName} </span>
//             <h5> Capital : {detail.capital} </h5>
//             <h5> Population : {detail.population} </h5>
//         </div>
//     </div>
//   )
// }

// export default CountryDetail;