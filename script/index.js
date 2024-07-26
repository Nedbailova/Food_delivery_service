const modalFunc = () => {
    const modal = document.querySelector('.cart-modal_overlay')
    const cartBtn = document.querySelector('#cart-button')
    const closeBtn = document.querySelector('.cart-modal_header--close') 



    const openModal = () => {
        modal.classList.add('open')
    }

    const closeModal = () => {
        modal.classList.remove('open')
    }

    cartBtn.addEventListener('click', () => {    
        openModal()
    })

    modal.addEventListener('click', (event) => {    
        if(
            event.target.classList.contains('cart-modal_overlay') || 
            event.target.closest('.cart-modal_header--close')
        ){
            closeModal()
        }
    })
}

const restFunc = () => {
    const container = document.querySelector('#rests-container')
    const restArray = [
        {
            id: 0,
            title: 'Пицца плюс',
            time: 50,
            rating: 4.5,
            price: 900,
            type: 'Пицца',
            image: '1.jpg'
        },
        {
            id: 1,
            title: 'Тануки',
            time: 50,
            rating: 4.5,
            price: 900,
            type: 'Пицца',
            image: '2.jpg'
        },
        {
            id: 2,
            title: 'FoodBand',
            time: 50,
            rating: 4.5,
            price: 900,
            type: 'Пицца',
            image: '3.jpg'
        },
        {
            id: 3,
            title: 'Жадина-пицца',
            time: 50,
            rating: 4.5,
            price: 900,
            type: 'Пицца',
            image: '4.jpg'
        },
        {
            id: 4,
            title: 'Точка еды',
            time: 50,
            rating: 4.5,
            price: 900,
            type: 'Пицца',
            image: '5.jpg'
        },
        {
            id: 5,
            title: 'PizzaBurger',
            time: 50,
            rating: 4.5,
            price: 900,
            type: 'Пицца',
            image: '6.jpg'
        }
    ]

    const loading = () => {
        container.innerHTML = '<p style="width:100%; text-align:center;">Загрузка</p>'
    }

    const randerRests = (array) => {
        container.innerHTML = ''
        array.forEach((card) => {
            container.insertAdjacentHTML('beforeend', `
                <a href="./goods.html?id=${card.id}" class="products-card">
                                <div class="products-cars_image">
                                    <img src="images/restaurants/${card.image}" alt="rest-${card.image}">
                                </div>
                                <div class="products-cars_description">
                                    <div class="products-cars_description-row">
                                        <h4 class="products-cars_description--title">${card.title}</h4>
                                        <div class="products-cars_description--badge">${card.time} мин</div>
                                    </div>
                                    <div class="products-cars_description-row">
                                        <div class="products-cars_description-info">
                                            <div class="products-cars_description-info--raiting">
                                                <img src="images/icons/star.svg" alt="star">
                                                ${card.rating}
                                            </div>
                                            <div class="products-cars_description-info--price">
                                                От ${card.price} ₽
                                            </div>
                                            <div class="products-cars_description-info--group">
                                                ${card.type}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                            `)
        });
    }
    
   if(container){
    loading()
    setTimeout(() => {
        randerRests(restArray)
    }, 1000)
   }
    
}

const goodsFunc = () => {
    const container = document.querySelector('#goods-container')
    const restArray = [
        {
            id: 0,
            title: 'Ролл угорь стандарт',
            price: 250,
            text: 'Рис, угорь, соус унаги, кунжут, водоросли нори.',
            image: '1.jpg'
        },
        {
            id: 1,
            title: 'Калифорния лосось стандарт',
            price: 395,
            text: 'Рис, лосось, авокадо, огурец, майонез, икра масаго, водоросли нори.',
            image: '2.jpg'
        },
        {
            id: 2,
            title: 'Окинава стандарт',
            price: 250,
            text: 'Рис, креветка отварная, сыр сливочный, лосось, огурец свежий...',
            image: '3.jpg'
        },
        {
            id: 3,
            title: 'Цезарь маки хl',
            price: 250,
            text: 'Рис, куриная грудка копченая, икра масаго, томат, айсберг, соус цезарь...',
            image: '4.jpg'
        },
        {
            id: 4,
            title: 'Ясай маки стандарт 185 г',
            price: 250,
            text: 'Рис, помидор свежий, перец болгарский, авокадо, огурец, айсберг.',
            image: '5.jpg'
        },
        {
            id: 5,
            title: 'Ролл с креветкой стандарт',
            price: 250,
            text: 'Рис, водоросли нори, креветки отварные, сыр сливочный, огурцы.',
            image: '6.jpg'
        },
    ]

    const loading = () => {
        container.innerHTML = '<p style="width:100%; text-align:center;">Загрузка</p>'
    }

    const randerRests = (array) => {
        container.innerHTML = ''
        array.forEach((card) => {
            container.insertAdjacentHTML('beforeend', `
                <div class="products-card">
                                <div class="products-cars_image">
                                    <img src="images/goods/${card.image}" alt="good-${card.image}">
                                </div>
                                <div class="products-cars_description">
                                    <div class="products-cars_description-row">
                                        <h5 class="products-cars_description--name">${card.title}</h5>
                                    </div>
                                    <div class="products-cars_description-row">
                                        <p class="products-cars_description--text">
                                            ${card.text}
                                        </p>
                                    </div>
                                    <div class="products-cars_description-row">
                                        <div class="products-cars_description-controls">
                                            <button class="btn btn-primary">
                                                В корзину
                                                <img src="./images/icons/shop-card.svg" alt="shop-card"> 
                                            </button>
                                            <span class="products-cars_description-controls--price">${card.price} ₽</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            `)
        });
    }
    
   if(container){
    loading()
    setTimeout(() => {
        randerRests(restArray)
    }, 1000)
   }
    
}

modalFunc()
restFunc()
goodsFunc()