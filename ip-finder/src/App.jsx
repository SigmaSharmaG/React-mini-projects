import { use, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Map from './components/Map';
import axios from 'axios';

function App() {
  const [ipDetails,setIpDetails] = useState([]);
  const [lat,setLat] = useState();
  const [lon,setLon] = useState();
  const dummyData = {
  "ip": "59.145.191.138",
  "network": "59.145.184.0/21",
  "version": "IPv4",
  "city": "Meerut",
  "region": "Uttar Pradesh",
  "region_code": "UP",
  "country": "IN",
  "country_name": "India",
  "country_code": "IN",
  "country_code_iso3": "IND",
  "country_capital": "New Delhi",
  "country_tld": ".in",
  "continent_code": "AS",
  "in_eu": false,
  "postal": "250002",
  "latitude": 28.67736,
  "longitude": 77.52252,
  "timezone": "Asia/Kolkata",
  "utc_offset": "+0530",
  "country_calling_code": "+91",
  "currency": "INR",
  "currency_name": "Rupee",
  "languages": "en-IN,hi,bn,te,mr,ta,ur,gu,kn,ml,or,pa,as,bh,sat,ks,ne,sd,kok,doi,mni,sit,sa,fr,lus,inc",
  "country_area": 3287590,
  "country_population": 1352617328,
  "asn": "AS9498",
  "org": "BHARTI Airtel Ltd."
}
  useEffect(()=>{
    axios.get('https://ipapi.co/json/')
    .then((res)=>{
      setIpDetails(res.data);
      setLat(res.data.latitude);
      setLon(res.data.longitude);

    })
    .catch((error)=>{
      setIpDetails(dummyData);
      setLat(dummyData['latitude']);
      setLon(dummyData['longitude']);

    })

  },[])

  return (
    <>
      <div>
        <h1>IP Address Finder</h1>
        <div>
          <div className='container'>
            <div className='ip-details'>
              <p>IP Address :</p>
              <p>{ipDetails.ip}</p>

              <p>Approximate Location :</p>
              <p>{ipDetails.city}, {ipDetails.region}</p>
              <h4>Internet Service Provider(ISP) :</h4>
              <p>{ipDetails.org}</p>
            </div>
            <Map lat={lat} lon={lon}></Map>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
