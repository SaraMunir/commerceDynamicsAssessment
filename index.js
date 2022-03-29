const cars =[
    {
        id: 1,
        name: 'Volkswagen Golf 2.5l',
        date: '07-2015', 
        miles: '30,000',
        power: '130 kw (175 hp)',
        images: 'https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&fit=crop',
        sold: true,
        price: '22,000'
    },
    {
        id: 2,
        name: 'Subaru WRX',
        date: '01-2016', 
        miles: '10,000',
        power: '250 kw (335 hp)',
        images: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2023-alfa-romeo-tonale-veloce-104-1644251810.jpg?crop=0.622xw:0.596xh;0.117xw,0.301xh&resize=980:*',
        sold: false,
        price: '28,500'
    },
    {
        id: 3,
        name: 'Infinity  Q50',
        date: '05-2016', 
        miles: '0',
        power: '190 kw (255 hp)',
        images: 'https://cdn.motor1.com/images/mgl/nYgqx/s3/maserati-mc20-exterior.webp',
        sold: true,
        price: '35,000'
    },
    {
        id: 4,
        name: 'Mercedes Benz ML (All Wheel Drive)',
        date: '09-2014', 
        miles: '75,000',
        power: '210 kw (282 hp)',
        images: 'https://hips.hearstapps.com/amv-prod-gp.s3.amazonaws.com/gearpatrol/wp-content/uploads/2019/10/Buy-a-Kia-Telluride-Instead-gear-patrol-slide-1.jpg?crop=0.620xw:0.919xh;0.293xw,0.0813xh&resize=640:*',
        sold: false,
        price: '36,000'
    },
    {
        id: 5,
        name: 'Volvo V40 Cross Country',
        date: '05-2016', 
        miles: 0,
        power: '110 kw (150 hp)',
        images: 'https://cars.usnews.com/pics/size/640x420/images/article/201810/127762/Large-2018-Audi-Q5-278.jpg',
        sold: false,
        price: '42,000'
    },
    {
        id: 6,
        name: 'Audi TT RS',
        date: '03-2016', 
        miles: '10,000',
        power: '185 kw (248 hp)',
        images: 'https://cdn.vox-cdn.com/thumbor/aSrLm5M0v7oqmqTqdGGXjqwQ7VY=/0x0:2870x2116/1400x1050/filters:focal(1203x969:1661x1427):format(jpeg)/cdn.vox-cdn.com/uploads/chorus_image/image/50272225/150028_car.0.jpg',
        sold: false,
        price: '45,000'
    },
    {
        id: 7,
        name: 'MAZDA MAZDA6',
        date: '07-2021', 
        miles: '20,000',
        power: '130 kw (175 hp)',
        images: 'https://crdms.images.consumerreports.org/c_lfill,w_470,q_auto,f_auto/prod/cars/chrome/white/2021MAC140031_1280_01',
        sold: true,
        price: '22,000'
    },
    {
        id: 8,
        name: 'Nissan Altima',
        date: '01-2020', 
        miles: '10,000',
        power: '250 kw (335 hp)',
        images: 'https://media.ed.edmunds-media.com/nissan/altima/2020/oem/2020_nissan_altima_sedan_25-platinum_fq_oem_1_1600.jpg',
        sold: true,
        price: '35,500'
    },
    {
        id: 9,
        name: 'Toyota Camry AWD',
        date: '05-2016', 
        miles: 0,
        power: '180 kw (255 hp)',
        images: 'https://www.autotrader.com/wp-content/uploads/2022/02/2021-toyota-camry-trd.jpg',
        sold: false,
        price: '25,000'
    },
    {
        id: 10,
        name: 'Chevrolet Camaro',
        date: '09-2014', 
        miles: '75,000',
        power: '210 kw (282 hp)',
        images: 'https://www.chevrolet.com/content/dam/chevrolet/na/us/english/index/vehicles/2022/performance/camaro/02-images/mov/2022-camaro-masthead-01.jpg?imwidth=960',
        sold: false,
        price: '35,000'
    },
    {
        id: 11,
        name: 'Ford Mustang',
        date: '05-2021', 
        miles: 0,
        power: '110 kw (150 hp)',
        images: 'https://www.motortrend.com/uploads/2021/10/2022-Ford-Mustang-GT-California-Special_02-1.jpg',
        sold: false,
        price: '42,000'
    },
    {
        id: 12,
        name: 'Kia Seltos',
        date: '03-2016', 
        miles: '10,000',
        power: '185 kw (248 hp)',
        images: 'https://cdn.motor1.com/images/mgl/AM0Nx/s1/kia-seltos.webp',
        sold: false,
        price: '39,000'
    }
]
let carCopy = [...cars]
$(document).ready(function(e){
    $('#cardResults').html('')
    renderCars(carCopy, 'firstSix')
})
const sortby =()=>{
    let type = document.querySelector('#priceRange').value
    // console.log(bbx)
    if(type==="low-high"){
            carCopy = cars.sort((a,b)=>{ return a.price > b.price ? 1:-1 })
            $('#cardResults').html('')
            renderCars(carCopy, 'firstSix')
            
        }else{
            $('#cardResults').html('')
            carCopy =cars.sort((a,b)=>{ return b.price > a.price? 1:-1 })
            renderCars(carCopy, 'firstSix')
    }
}
const showNext=(arg)=>{
    renderCars(carCopy, arg)
}
const renderCars =(arr, arg)=>{
    $('#cardResults').html('')

    if(arg==='firstSix'){
        arr.slice(0,6).forEach(car=>{
            // console.log(car.name)
            if(car.sold===false){
                $('#cardResults').append(`
                <div class="card">
                <div class="cardImgCntr">
                
                    <img class="cardImg" src=${car.images} alt="${car.name}">
                    <div class="flexRow imgBtnRow jstfyContSpcBtn alignItmCntr">
                        <p>$${car.price}</p>
                        <div class="flexRow jstfyContSpcBtn">
                            <button class="sqrBtn"><img src="./assets/plus.png" alt="star"></button>
                            <button class="sqrBtn"><img src="./assets/star.png" alt="star"></button>
                        </div>
                    </div>
                </div>
                <div class="cardText">
                    <h3>${car.name}</h3>
                    <ul>
                        <li class="flexRow">
                            <img src="./assets/calendar.png" alt="calendar icon">
                            <div class="flexCol jstfyContCentr">
                                <p>${car.date}</p>
                            </div>
                        </li>
                        <li class="flexRow">
                            <img src="./assets/gauge.png" alt="gauge icon">
                            <div class="flexCol jstfyContCentr">
                                <p>${car.miles} miles</p>
                            </div>
                        </li>
                        <li class="flexRow">
                            <img src="./assets/heart-beat.png" alt="gauge icon">
                            <div class="flexCol jstfyContCentr">
                                <p>${car.power}</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            `)
        }else{
                $('#cardResults').append(`
                <div class="card">
                <div class="cardImgCntr">
                    <div class="banner"><p>Sold</p></div>
                    <img class="cardImg" src=${car.images} alt="${car.name}">
                    <div class="flexRow imgBtnRow jstfyContSpcBtn alignItmCntr">
                        <p>$${car.price}</p>
                        <div class="flexRow jstfyContSpcBtn">
                            <button class="sqrBtn"><img src="./assets/plus.png" alt="star"></button>
                            <button class="sqrBtn"><img src="./assets/star.png" alt="star"></button>
                        </div>
                    </div>
                </div>
                <div class="cardText">
                    <h3>${car.name}</h3>
                    <ul>
                        <li class="flexRow">
                            <img src="./assets/calendar.png" alt="calendar icon">
                            <div class="flexCol jstfyContCentr">
                                <p>${car.date}</p>
                            </div>
                        </li>
                        <li class="flexRow">
                            <img src="./assets/gauge.png" alt="gauge icon">
                            <div class="flexCol jstfyContCentr">
                                <p>${car.miles} miles</p>
                            </div>
                        </li>
                        <li class="flexRow">
                            <img src="./assets/heart-beat.png" alt="gauge icon">
                            <div class="flexCol jstfyContCentr">
                                <p>${car.power}</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            `)
            }
    
        })
    }else{
        arr.slice(6).forEach(car=>{
            // console.log(car.name)
            if(car.sold===false){
                $('#cardResults').append(`
                <div class="card">
                <div class="cardImgCntr">
                
                    <img class="cardImg" src=${car.images} alt="${car.name}">
                    <div class="flexRow imgBtnRow jstfyContSpcBtn alignItmCntr">
                        <p>$${car.price}</p>
                        <div class="flexRow jstfyContSpcBtn">
                            <button class="sqrBtn"><img src="./assets/plus.png" alt="star"></button>
                            <button class="sqrBtn"><img src="./assets/star.png" alt="star"></button>
                        </div>
                    </div>
                </div>
                <div class="cardText">
                    <h3>${car.name}</h3>
                    <ul>
                        <li class="flexRow">
                            <img src="./assets/calendar.png" alt="calendar icon">
                            <div class="flexCol jstfyContCentr">
                                <p>${car.date}</p>
                            </div>
                        </li>
                        <li class="flexRow">
                            <img src="./assets/gauge.png" alt="gauge icon">
                            <div class="flexCol jstfyContCentr">
                                <p>${car.miles} miles</p>
                            </div>
                        </li>
                        <li class="flexRow">
                            <img src="./assets/heart-beat.png" alt="gauge icon">
                            <div class="flexCol jstfyContCentr">
                                <p>${car.power}</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            `)
        }else{
                $('#cardResults').append(`
                <div class="card">
                <div class="cardImgCntr">
                    <div class="banner"><p>Sold</p></div>
                    <img class="cardImg" src=${car.images} alt="${car.name}">
                    <div class="flexRow imgBtnRow jstfyContSpcBtn alignItmCntr">
                        <p>$${car.price}</p>
                        <div class="flexRow jstfyContSpcBtn">
                            <button class="sqrBtn"><img src="./assets/plus.png" alt="star"></button>
                            <button class="sqrBtn"><img src="./assets/star.png" alt="star"></button>
                        </div>
                    </div>
                </div>
                <div class="cardText">
                    <h3>${car.name}</h3>
                    <ul>
                        <li class="flexRow">
                            <img src="./assets/calendar.png" alt="calendar icon">
                            <div class="flexCol jstfyContCentr">
                                <p>${car.date}</p>
                            </div>
                        </li>
                        <li class="flexRow">
                            <img src="./assets/gauge.png" alt="gauge icon">
                            <div class="flexCol jstfyContCentr">
                                <p>${car.miles} miles</p>
                            </div>
                        </li>
                        <li class="flexRow">
                            <img src="./assets/heart-beat.png" alt="gauge icon">
                            <div class="flexCol jstfyContCentr">
                                <p>${car.power}</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            `)
            }
    
        })

    }
}
const showSearchInput=()=>{
    console.log('some')
    $('#searchInput').toggleClass('searchInputActive')
    $('#searchParnt').toggleClass('searchParntActive')
    // $('#searchInput').removeClass('searchInput')
}
const showMenu = ()=>{
    $('#menu').toggleClass('hiddenMenu')
}