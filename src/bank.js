/*Tänk dig att någon har skrivit ett betalningssystem för en bank. Dessvärre tänkte inte första utvecklaren på att använda TDD, så det finns inga testfall. Din uppgift är att skriva testfall för alla tre funktionerna i koden nedan. Observera att första utvecklaren var en total noob, så det kan finnas buggar i koden. På VG-nivå ska du dessutom skriva klart funktionerna och rätta felen.

Allmänt gäller att om funktionerna anropas med tillåtna värden på sina parametrar så ska de åstadkomma side effects på parametrarna. Funktionerna ska inte returnera något.
Men om man försöker ta ut eller överföra mer pengar än det finns på kontot, då ska funktionen kasta ett Error.

let kalle = { name: 'Kalle', balance: 150 };
let greta = { name: 'Greta', balance: 1200 };
// exempel på användning:
deposit(kalle, 200);
withdraw(kalle, 150);
transfer(kalle, greta, 400);

function deposit(account, amount) {
	account.balance += amount;
}
function withdraw(account, amount) {
	if( amount <= 0 )
		throw new Error('Amount must be a positive number!');
	account.balance -= amount;
}
function transfer(accountSender, accountReceiver, amount) {
	if( (typeof accountReceiver.balance) !== 'number'
 			|| accountReceiver.balance
	throw new Error('');
accountSender.balance -= amount;
}
*/
let kalle = { name: 'Kalle', balance: 150 };
let greta = { name: 'Greta', balance: 1200 };

function deposit(account, amount){
  if(account.balance === undefined || account.name === undefined){
    throw Error("Invalid account")
  }else if(Number(amount) <= 0 || isNaN(amount)){
    throw Error("Amount must be a number higher than 0.")
  }else{
    account.balance += Number(amount)
  }
}

function withdraw(account, amount){
  if(account.balance === undefined || account.name === undefined){
    throw Error("Invalid account")
  }else if(Number(amount) <= 0 || isNaN(amount)){
    throw Error("Amount must be a number higher than 0.")
  }else if(account.balance < amount){
    throw Error("Insufficient funds")
  }else{
    account.balance -= Number(amount)
  }
}

function transfer(accountSender, accountReciever, amount){
  if(accountSender.balance === undefined || accountSender.name === undefined){
    throw Error("Invalid sender account")
  }else if(accountReciever.balance === undefined || accountReciever.name === undefined){
    throw Error("Invalid reciever account")
  }else if(Number(amount) <= 0 || isNaN(amount)){
    throw Error("Amount must be a number higher than 0.")
  }else if(accountSender.balance < amount){
    throw Error("Insufficient funds")
  }else{
    accountSender.balance -= Number(amount);
    accountReciever.balance += Number(amount);
  }
}

export {deposit, withdraw, transfer, kalle, greta }
