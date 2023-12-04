// const phoneLoad =async(brandName ,isShowAll) =>{
//     const res = await fetch (`https://openapi.programming-hero.com/api/phones?search=${brandName}`);
//     const data = await res.json();
//     const phones = data.data;
//     // console.log(phone)
//     displayPhone (phones ,isShowAll);
// };

// const displayPhone = (phones ,isShowAll) =>{
//       const phoneContainer =document.getElementById("phone-container");
       
//       phoneContainer.textContent = '';
//         if(phones .length > 12){
            
//         }
//        phones.forEach(phone => {
//         //   console.log(phone)

//           const phoneCard = document.createElement('div');
//           phoneCard.classList ="card bg-gray-300  p-4 shadow-xl"
//           phoneCard.innerHTML =`
//           <figure><img src=${phone.image} alt="Shoes" /></figure>
//           <div class="card-body">
//             <h2 class="card-title">Shoes!</h2>
//             <p>If a dog chews shoes whose shoes does he choose?</p>
//             <div class="card-actions justify-end">
//               <button class="btn btn-primary">Buy Now</button>
//             </div>
//           </div>
//           `;
//           phoneContainer.appendChild(phoneCard)
//        });
      
//        toggleLoading(false)
// };

// // Search data

//   const handlesSearch =(isShowAll)=>{
//       toggleLoading(true)
//       const searchInput = document.getElementById('search-input');
//       const searchText = searchInput.value;
//     //   console.log(searchText)
//       phoneLoad(searchText , isShowAll);
      
//   };


// //   loading-spinner

//  const  toggleLoading =(isLoading)=>{
//     const loadingSpinner = document.getElementById("loading-spinner");
//       if(isLoading){
//          loadingSpinner.classList.remove("hidden")
//       }else{
//         loadingSpinner.classList.add("hidden")
//       }
//  };

// //  handlesShowAll

// const handlesShowAll =()=>{
//     handlesSearch(true)

// }

// phoneLoad()