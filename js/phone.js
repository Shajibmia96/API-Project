const phoneLoad = async(searchText ,) =>{
    const response = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await response.json();
    const phones = data.data
    // console.log(phones)
    DisplayPhones(phones)
};

 const DisplayPhones =(phones) =>{
  const phoneContainer = document.getElementById("phone-container");

  //  Display first ten
   const showAll =document.getElementById("showAll")
  console.log(phones.length);
   if(phones.length > 9){
       showAll.classList.remove("hidden")
   }else{
    showAll.classList.add("hidden")
   }
        phones = phones.slice(0 , 9);

   
  phoneContainer.textContent = ''
   phones.forEach(phone =>{
     console.log(phone)
  
       const phoneCard =document.createElement('div');
       
       phoneCard.classList = "card p-4 bg-gray-300 shadow-xl";
       phoneCard.innerHTML = `
       <figure><img src="${phone.image}" alt="Shoes" /></figure>
       <div class="card-body">
         <h2 class="card-title">${phone.phone_name}</h2>
         <p>If a dog chews shoes whose shoes does he choose?</p>
         <div class="card-actions justify-end">
           <button class="btn btn-primary">Buy Now</button>
         </div>
       </div>   
       `;
       phoneContainer.appendChild(phoneCard);
       
   });
  //  hided loading spinner
  setASpinner(false)
 }
// phoneLoad();

// handles search button

  const handlesSearch =()=>{
       setASpinner(true)
        const searchInput= document.getElementById("search-input");
        const searchText = searchInput.value;
        console.log(searchText);
        phoneLoad(searchText );
        
  };

  const setASpinner =(isLoading) =>{
         const toggleLoading = document.getElementById("loading-spinner");
         if(isLoading){
          toggleLoading.classList.remove("hidden")
         }else{
          toggleLoading.classList.add("hidden")
         }
  }