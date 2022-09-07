// function calculateDaysBetweenDates(begin, end) {
//   var beginDate = new Date(begin);
//   var endDate = new Date(end);
//   var timeDiff = endDate.getTime() - beginDate.getTime();
//   var daysDiff = timeDiff / (1000 * 3600 * 24);
//   return daysDiff;
// }

// // find and select key from object

// function findKey(obj, value) {
//   return Object.keys(obj).find(key => obj[key] === value);
// }

// // find and select value from object

// function findValue(obj, key) {
//   return Object.values(obj).find(value => obj[key] === value);
// }


// // Express server on port 3000

// const express = require('express')
// const app = express()
// const port = 3000

// // start express server

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`)
// })

// // get request

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// // post request

// app.post('/', (req, res) => {
//   res.send('Got a POST request')
// })

// // put request  

// app.put('/user', (req, res) => {
//   res.send('Got a PUT request at /user')
// }   )

// // delete request 

// app.delete('/user', (req, res) => {
//   res.send('Got a DELETE request at /user')
// })  

// // get request with params  

// app.get('/user/:id', (req, res) => {
//   res.send(req.params.id)
// })

// // get request with query  

// app.get('/user', (req, res) => {    
//   res.send(req.query.id)
// })

// // get request with query and params

// app.get('/user/:id', (req, res) => {    
//   res.send(req.query.id)
// })

// // return json

// app.get('/user', (req, res) => {    
//   res.json({ name: 'John', age: 30 })
// })

// // return json with status  

// app.get('/user', (req, res) => {   
//   res.status(200).json({ name: 'John', age: 30 })
// })

// // return json with status and message

// app.get('/user', (req, res) => {    
//   res.status(200).json({ name: 'John', age: 30 })
// })

// // return the current time

// app.get('/time', (req, res) => {    
//   res.send(new Date().toLocaleTimeString())
// })

// // return the current date  

// app.get('/date', (req, res) => {    
//   res.send(new Date().toLocaleDateString())
// })

// // return the current date and time

// app.get('/datetime', (req, res) => {    
//   res.send(new Date().toLocaleString())
// })

// // return the current date and time in UTC

// app.get('/datetimeutc', (req, res) => {    
//   res.send(new Date().toUTCString())
// })

// // return the current date and time in ISO format

// app.get('/datetimeiso', (req, res) => {    
//   res.send(new Date().toISOString())
// })

// return countdown 

// function countdown(date) {
//   var now = new Date().getTime();
//   var countDownDate = new Date(date).getTime();
//   var distance = countDownDate - now;
//   var days = Math.floor(distance / (1000 * 60 * 60 * 24));
//   var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//   var seconds = Math.floor((distance % (1000 * 60)) / 1000);
//   return days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
// }

// return countdown in days

// function countdownDays(days) {
//   var now = new Date().getTime();
//   var countDownDate = new Date().getTime() + (days * 24 * 60 * 60 * 1000);
//   var distance = countDownDate - now;
//   var days = Math.floor(distance / (1000 * 60 * 60 * 24));
//   return days;
// }

// // countown in hours

// function countdownHours(hours) {
//   var now = new Date().getTime();
//   var countDownDate = new Date().getTime() + (hours * 60 * 60 * 1000);
//   var distance = countDownDate - now;
//   var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   return hours;
// }

// use coingecko api to get price of token

    function getprice() {
        fetch('https://api.coingecko.com/api/v3/simple/price?ids=btc&vs_currencies=usd')
        .then(response => response.json())
        .then(data => console.log(data.confam.usd));
    }

    // use 0x api to get price of token

    function getprice0x() {
        fetch('https://api.0x.org/swap/v1/price?sellToken=0x0000000000000000000000000000000000000000&buyToken=0x0000000000000000000000000000000000000000&sellAmount=1000000000000000000')
        .then(response => response.json())
        .then(data => console.log(data.price));
    }

    // use 0x api to swap token

    // function swap() {
    //     fetch('https://api.0x.org/swap/v1/quote?sellToken=0x0000000000000000000000000000000000000000&buyToken=0x0000000000000000000000000000000000000000&sellAmount=1000000000000000000')
    //     .then(response => response.json())
    //     .then(data => console.log(data.price));
    // }

    // import {useEffect, useState} from 'react';

    // const App = () => {
    //   const [data, setData] = useState({data: []});
    
    //   const [err, setErr] = useState('');
    
    //   useEffect(() => {
    //     // 👇️ this only runs once
    //     console.log('useEffect ran');
    
    //     // 👇️ fetch data from remote API
    //     async function getUsers() {
    //       try {
    //         const response = await fetch('https://reqres.in/api/users', {
    //           method: 'GET',
    //           headers: {
    //             Accept: 'application/json',
    //           },
    //         });
    
    //         if (!response.ok) {
    //           throw new Error(`Error! status: ${response.status}`);
    //         }
    
    //         const result = await response.json();
    
    //         console.log('result is: ', JSON.stringify(result, null, 4));
    
    //         setData(result);
    //       } catch (err) {
    //         setErr(err.message);
    //       }
    //     }
    
    //     getUsers();
    //   }, []); // 👈️ empty dependencies array
    
    //   console.log(data);
    
    //   return (
    //     <div>
    //       {err && <h2>{err}</h2>}
    
    //       {data.data.map(person => {
    //         return (
    //           <div key={person.id}>
    //             <h2>{person.email}</h2>
    //             <h2>{person.first_name}</h2>
    //             <h2>{person.last_name}</h2>
    //             <br />
    //           </div>
    //         );
    //       })}
    //     </div>
    //   );
    // };
    
    // export default App;
    



