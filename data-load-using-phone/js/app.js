// const loadPhone = async () => {
//     const url = `https://openapi.programming-hero.com/api/phones?search=iphone`
//     // const url = `https://restcountries.com/v3.1/all`
//     const res = await fetch(url);
//     const data = await res.json();
//     displayphone(data);
// }

// // const loadPhone = () => {
// //     // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
// //     fetch('https://restcountries.com/v3.1/all')
// //         .then(res => res.json())
// //         .then(data => displayphone(data))
// // }

// const displayphone = phones => {

//     const phoneContainer = document.getElementById('phoness-container')
//     // console.log(phones);

//     for (const phone of phones.data) {
//         console.log(phone);
//         const phnDiv = document.createElement('col')
//         phnDiv.classList.add('col')
//         phnDiv.innerHTML = `
//         <div class="card">
//                             <img src="..." class="card-img-top" alt="...">
//                             <div class="card-body">
//                                 <h5 class="card-title">Card title</h5>
//                                 <p class="card-text">This is a longer card with supporting text below as a natural
//                                      .</p>
//                             </div>
//                          </div>
//          `
//         phoneContainer.appendChild(phnDiv)
//     }





//     // console.log(phones);
//     // phones.data.forEach(phones => {

//     //     const phoneDiv = document.createElement('div')
//     //     phoneDiv.classList.add('col');
//     //     phoneDiv.innerHTML = `
//     // <div class="card">
//     //                     <img src="..." class="card-img-top" alt="...">
//     //                     <div class="card-body">
//     //                         <h5 class="card-title">Card title</h5>
//     //                         <p class="card-text">This is a longer card with supporting text below as a natural
//     //                             .</p>
//     //                     </div>
//     //                 </div>
//     // `;

//     //     phoneContainer.appendChild(phoneDiv)

//     // });

// }


// loadPhone()