
class Converter {
    constructor() {
        this.url = 'http://api.exchangeratesapi.io/v1/latest'
        this.apiKey = '4b18d84adf059da4b42d650752aa3a76'
        this.data = '';
    }   

    /**
     * Получаем текущие валюты из полей выбора валют
     */
    getCurrencyNames () {
        let blockSale = document.querySelector('#sale');
        let blockBuy = document.querySelector('#buy');

        let saleActiveElement = blockSale.querySelector('.active');
        this.saleName = saleActiveElement.getAttribute('data-name');
    }

    /**
     * Делаем запрос к серверу для полчения котировок
     */
    getDataFromHost() {

        fetch(`${url}?api-key=${apiKey}&base=${this.saleName}`)
            .then((response) => {
                response.json()
                console.log(response)
            })
            .then((data) => {
                console.log(data)
                this.render()
            })
            .catch((error) => {
                console.log(error)
            })
    }

    render() {
        
    }

    init() {
        this.getCurrencyNames()
        this.getDataFromHost()
    }
         
}

let Converter = new Converter()
Converter.init()

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
