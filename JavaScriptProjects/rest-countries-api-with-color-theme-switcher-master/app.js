const cardholder=document.querySelector(".cardholder");
const themechanger=document.querySelector(".theme-changer");
const filterbyregion=document.querySelector(".filter-by-region"); 
const searchInput=document.querySelector(".searchbar");


let allCountriesData;


fetch('data.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
 
    loadcountries(data);
    allCountriesData = data;
 });
  
  
 filterbyregion.addEventListener('change', (e) => {
  // console.log(e.target.value);
  fetch(`https://restcountries.com/v3.1/region/${filterbyregion.value}`)
    .then((res) => res.json())
    .then(data => {
       data.forEach(country =>{
         console.log(country.name)
      })
       loadcountries(data);
    })   
})


searchInput.addEventListener('input',  (e) => {
  // console.log("e.target.value:", e.target.value);
  // console.log("allCountriesData:", allCountriesData);
  // const filteredCountries = allCountriesData.filter((country) => country.name.common.toLowerCase().includes(e.target.value.toLowerCase()))
  const searchValue = e.target.value?.toLowerCase() || "";  

  const filteredCountries = allCountriesData.filter((country) => 
  country.name?.common?.toLowerCase().includes(searchValue)  
);
  loadcountries(filteredCountries)
})


  function loadcountries(data){
    cardholder.innerHTML = ''
    data.forEach(country => {
      const card=document.createElement('a');
      card.classList.add('card');
      card.href=`/country.html?name=${country.name}`
      const cardhtml=` <img src="${country.flags.svg}" alt="image">
                      <div class="cardinfo">
                          <h1 class="title">${country.name}</h1>
                          <p><b>Population</b>: ${country.population.toLocaleString("en-IN")}</p>
                          <p><b>Region</b>: ${country.region}</p>
                          <p><b>Capital</b>: ${country.capital}</p>
                      </div>`
      
      card.innerHTML=cardhtml;
      cardholder.append(card); 
     });
}

  themechanger.addEventListener('click', () => {
    document.body.classList.toggle('dark')
  })