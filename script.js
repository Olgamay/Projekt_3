
class Converter {
    constructor() {
        this.url = 'http://api.exchangeratesapi.io/v1/latest'
        this.apiKey = '4b18d84adf059da4b42d650752aa3a76'
        this.data = '';
    }   

    /**
     * Добавляет обработчики событий на кнопки
     */
    setEventListeneresForButtons() {
        // 1. Ищем все элементы Button
        this.buttonSale = document.querySelectorAll('.currency-sale')
        this.buttonBuy = document.querySelectorAll('.currency-buy')
        // this.nameInputSale = document.querySelector('#sale-input')        
        // this.nameInputBuy = document.querySelector('#buy-input')
        
        console.log(this.buttonSale)
        console.log(this.buttonBuy)
        // console.log(this.nameInputSale.value)
        // console.log(this.nameInputBuy.value)

        // 2. Добавляем обработчик события на click каждому элементу
        
        this.buttonSale.forEach((element) => {
            console.log(element)
            element.addEventListener(click, (event)=> {
                let saleElement = element.classList.contains('.sale-active')
                saleElement.classList.remove('.sale-active')
                element.classList.add('.sale-active')
                console.log(event.target)
                
            // console.log(this.nameInputSale.value)
            })
        })
        
        buyCurrency.forEach((element) => {
            this.buttonBuy.addEventListener(click, ()=> {
            console.log(this.nameInputBuy.value)

        })
        })

        
        

        // 3. При клике выполняем следующие действия: 
        //     -Добавляем класс active к выбранному элементу и убираем
        //         класс active у предидущего элементы
        //     -Получить значения выбранных элементов
        //     -Делаем запрос к серверу
    }   

    /**
     * Получаем текущие валюты из полей выбора валют
     */
    getCurrencyNames () {
        let blockSale = document.querySelector('#sale');
        let blockBuy = document.querySelector('#buy');

        let saleActiveElement = blockSale.querySelector('.active');
        this.saleName = saleActiveElement.getAttribute('data-name').toUpperCase();

        let buyActiveElement = blockBuy.querySelector('.active');
        this.buyName = buyActiveElement.getAttribute('data-name').toUpperCase();
    }

    /**
     * Делаем запрос к серверу для полчения котировок
     */
    getDataFromHost() {

        fetch(`${this.url}?access_key=${this.apiKey}&base=${this.saleName}&symbols=${this.buyName}`)
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                this.data = data;
                console.log(this.data);
                this.render()
            })
            .catch((error) => {
                console.log(error)
            })
    }

    render() {
        let saleIinput = document.querySelector('#sale-input');
        let buyIinput = document.querySelector('#buy-input');
        console.log(saleIinput.value)
        buyIinput.value = saleIinput.value * this.data.rates[this.buyName]
        console.log(this.buyName)
        console.log(this.data.rates[this.buyName] )
    }

    init() {
        this.setEventListeneresForButtons();
        this.getCurrencyNames();
        this.getDataFromHost();
    }
         
}

let converter = new Converter()
converter.init()

//     getCurrencyName () {
//         let currencySale = document.querySelector('.currency-sale');
//         let currencyBye = document.querySelector('.currency-buy');
//         this.base = currencySale.innerHTML
//         this.symbol = currencyBye.innerHTML

        
//     }

    

// })
// }

    
// 
//     .then((response) => {
//         return response.json();
//     })
//     .then((data) => {
//         console.log(data.response.result);

//     })
// }

// class Converter {
//     constructor() {
//         this.url = 'http://api.exchangeratesapi.io/v1/latest'
//         this.apiKey = '4a2de58c27332400f85f9ac1e73c91e1'
//         this.data = ''
//     }

//     getCurrencyNames() {
//         let currencySale = document.querySelectorAll('.currency-sale');
//         let currencyBye = document.querySelector('.currency-buy');
        
//     }
