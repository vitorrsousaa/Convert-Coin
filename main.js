const coin= {
    text:null,
    optionA: null,
    optionB:null,
    getOption: function(id) {
        return document.getElementById(`${id}`).value
    },
    setOptionA: function(id1) {
        if (this.getOption(id1) != '')
        {this.optionA = this.getOption(id1)}    
    },
    setOptionB: function(id1) {
        if (this.getOption(id1) != '')
        {this.optionB = this.getOption(id1)}   
    },
    addEventText: function() {
        document.getElementById('box_text').addEventListener('keyup', function(){
            if (this.text != document.getElementById('box_text').value){
                this.text = document.getElementById('box_text').value
            }
        })
    },
    url: function(url) {
        return `https://www.mercadobitcoin.net/api/${url}/ticker`
    },
    request: async function(ticker) {
        return await (await fetch(this.url(ticker))).json().then(response => response.ticker.last).then(data => parseFloat(data))
    },
    
    convert: function() {
        let criptoA = null
        let criptoB = null
        let result = null

        setInterval(() => {
            
            if (document.getElementById('box_text').value != ''){
                this.text = parseFloat(document.getElementById('box_text').value)
            }

            if(this.optionA != null) {
                this.request(this.optionA).then(data => criptoA = data)
            }
            if(this.optionB != null) {
                this.request(this.optionB).then(data => criptoB = data)
            }

            if(criptoA != null && criptoB != null) {
                result = ((1/criptoB) * this.text) / ( 1/criptoA)
            } 

            if(this.text == null) {
                this.text = 1
            } else {
                if(result != null){
                    this.printResult(result.toFixed(4))
                }
            }            
        }, 600);
    },
    printResult: function(param){
        (document.getElementById('result').innerHTML = (`<p> ${this.text} <b>${this.optionA}</b> = ${param} <b>${this.optionB}</b> </p>`))
    } 
}