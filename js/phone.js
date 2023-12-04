const phoneLoad = async(searchText =13 ,isShowAll) =>{
    const response = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await response.json();
    const phones = data.data
    // console.log(phones)
    DisplayPhones(phones,isShowAll)
};

 const DisplayPhones =(phones ,isShowAll) =>{
  const phoneContainer = document.getElementById("phone-container");

  //  Display first ten
   const showAll =document.getElementById("showAll")
  // console.log(phones.length);
   if(phones.length >12 && !isShowAll){
       showAll.classList.remove("hidden")
   }else{
    showAll.classList.add("hidden")
   };
     console.log("This is a showAll", isShowAll);
       if(!isShowAll){
        phones = phones.slice(0 , 9);
       }
       
  phoneContainer.textContent = ''
   phones.forEach(phone =>{
    //  console.log(phone)
  
       const phoneCard =document.createElement('div');
       
       phoneCard.classList = "card p-4 bg-gray-300 shadow-xl";
       phoneCard.innerHTML = `
       <figure><img src="${phone.image}" alt="Shoes" /></figure>
       <div class="card-body">
         <h2 class="card-title">${phone.phone_name}</h2>
         <p>If a dog chews shoes whose shoes does he choose?</p>
         <div class="card-actions justify-center mt-4">
           <button onclick = "showDetails('${phone.slug}')" class="btn btn-primary">Show Details</button>
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

  const handlesSearch =(isShowAll)=>{
       setASpinner(true)
        const searchInput= document.getElementById("search-input");
        const searchText = searchInput.value;
        console.log(searchText);
        phoneLoad(searchText , isShowAll);
        
  };

  const setASpinner =(isLoading) =>{
         const toggleLoading = document.getElementById("loading-spinner");
         if(isLoading){
          toggleLoading.classList.remove("hidden")
         }else{
          toggleLoading.classList.add("hidden")
         };
  };

  const handlesShowAll = () =>{
      // console.log("This a ShowAll button")
      handlesSearch(true)
  };

  // Show Details
  const showDetails = async(id) =>{
    // console.log("Details was Clicked" , id);
       const res = await fetch (`https://openapi.programming-hero.com/api/phone/${id}`);
       const data = await res.json();
       const singleData = data.data
      //  console.log(singleData)
       singlesData (singleData)
  };

  const singlesData = (singleData) =>{
        // console.log(singleData)  
        
        // Show details data 
        Show_All_modal.showModal()
  }

  phoneLoad();