const loadPhone = async (searchText, datalimit) => {
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
    // const url = `https://restcountries.com/v3.1/all`
    const res = await fetch(url);
    const data = await res.json();
    displayphone(data, datalimit);
}

const displayphone = (phones, datalimit) => {

    const divContainer = document.getElementById('phoness-container')
    divContainer.textContent = '';

    // display 10 phones only
    // phones.data = phones.data.slice(0, 4);

    // show all
    const showAll = document.getElementById('show-all')
    if (datalimit && phones.data.length > 10) {
        phones.data = phones.data.slice(0, 10);
        showAll.classList.remove('d-none')
    }
    else {
        showAll.classList.add('d-none')
    }

    //display no phone found
    const noPhone = document.getElementById('not-found')
    if (phones.data.length === 0) {
        noPhone.classList.remove('d-none');
    }
    else {
        noPhone.classList.add('d-none')
    }
    //display all phone

    // console.log(phones);
    phones.data.forEach(phone => {

        // console.log(phone);

        const phnDiv = document.createElement('div')
        phnDiv.classList.add('col')
        phnDiv.innerHTML = `
        <div class="card image-fluid">
                  <img src="${phone.image}" class="card-img-top " alt="...">
                     <div class="card-body">
                      <h5 class="card-title">${phone.phone_name}</h5>
                            <p class="card-text">${phone.slug} </p>
                            <button onclick="loadPhoneDetails('${phone.slug}')" href="#"
                             class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#phoneDetailsModal">
                             Show Details</button>
                            
                            </div>
     </div>
    `


        divContainer.appendChild(phnDiv)

    });

    // stop spring loader
    toggleSpiner(false)

    //

}

const processSearch = (datalimit) => {
    toggleSpiner(true)
    const searchField = document.getElementById('Search-field')
    const searchText = searchField.value
    loadPhone(searchText, datalimit)
}

// handle search button click
const btnClick = document.getElementById('search-btn').addEventListener('click', function () {
    // start spring loader
    processSearch(10)
})

// search input field enter key handler
document.getElementById('Search-field').addEventListener('keypress', function (e) {
    // console.log(e.key);
    if (e.key === 'Enter') {
        // code for enter
        processSearch(10)
    }
});

const toggleSpiner = isloading => {
    const loaderSection = document.getElementById('loader')
    if (isloading) {
        loaderSection.classList.remove('d-none')
    }
    else {
        loaderSection.classList.add('d-none')
    }
}

// not the best way to show all
document.getElementById('btn-show-all').addEventListener('click', function () {
    processSearch();
})


const loadPhoneDetails = async id => {
    const url = `https://openapi.programming-hero.com/api/phone/${id}`;
    const res = await fetch(url)
    const data = await res.json();
    displayphoneDetails(data.data);
}

const displayphoneDetails = phone => {
    console.log(phone);
    const modalTitle = document.getElementById('phoneDetailsModalLebel')
    modalTitle.innerText = phone.name

    const phoneDetails = document.getElementById('phone-details')
    phoneDetails.innerHTML = `
    <img class="image-fluid mb-3" src="${phone.image}">
    <p>Release Date : ${phone.releaseDate ? phone.releaseDate : 'No release Date Found'}</p>
    <p>Storage : ${phone.mainFeatures.storage ? phone.mainFeatures.storage : 'No storage Found'}</p>
    <p>ChipSet : ${phone.mainFeatures.chipSet ? phone.mainFeatures.chipSet : 'No chipSet Found'}</p>

    `
}



loadPhone('apple')