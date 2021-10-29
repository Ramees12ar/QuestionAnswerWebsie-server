import http from 'k6/http';
import { sleep } from 'k6';
// export default function () {
//   const url = 'http://localhost:4000/insert';
//   const payload = JSON.stringify({
//     "question": "The 2014 football world cup is scheduled to be held in",
//     "firstopt": "china",
//     "secondopt": "india",
//     "thirdopt": "brazil"
//   });

//   const params = {
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   };
//   sleep(3);
//   http.post(url, payload, params);
// }
export default function () {
    const url = 'http://localhost:4000/questions';
  
    const params = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    sleep(3);
    http.get(url,params);
  }
  