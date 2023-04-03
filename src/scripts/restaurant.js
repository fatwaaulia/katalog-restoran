const restaurant = () => {
    const urlAPI = 'https://restaurant-api.dicoding.dev';
   
    const getRestaurant = async() => {
        try {
            const response = await fetch(`${urlAPI}/list`);
            const responseJson = await response.json();
            if (responseJson.message == 'success') {
              renderAllgetRestaurant(responseJson.restaurants);
            //   console.log(responseJson.restaurants);
            } else {
                console.log(responseJson.message);
            }
        } catch (error) {
            // console.log(error);
            alert('Ups something error');
        }
    };
  
    const renderAllgetRestaurant = (data) => {
        const elementRestaurant = document.getElementById('elementRestaurant');
        elementRestaurant.innerHTML = '';

        data.forEach(element => {
            elementRestaurant.innerHTML += `
            <div class="card responsive">
                <img src="https://restaurant-api.dicoding.dev/images/medium/${element.pictureId}" alt="${element.name}">
                <div class="card-body">
                    <p style="display:flex;justify-content: space-between;">
                        <b>Rating ${element.rating}</b>
                        <b>${element.city}</b>
                    </p>
                    <h3>${element.name}</h3>
                    <p class="deskripsi">${element.description}</p>
                </div>
            </div>
            `;
        });
    };
    getRestaurant();
}
  
  export default restaurant;