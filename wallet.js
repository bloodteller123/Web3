const Web3 = require('web3');

console.log(Web3);
// const web3 = new Web3(Web3.givenProvider);
let eth = web3.eth;

const fun = async () => {
    while(true){
        try {
            let account = eth.accounts.create();
            const data = await eth.getBalance(account.address);
            if(data!="0"){
                console.log("%s,%s", account, data);
            }
        } catch (error) {
            console.log(error.message);
        }
    }
}

fun()


