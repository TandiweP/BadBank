
function Withdraw(){
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  const [withdrawal, setAmount]         = React.useState('');
  const ctx = React.useContext(UserContext);  

  let users = ctx.users;
  let balance = users[0].balance;
  

  function currentBalance(){
    let current = 100;
      return current - +withdrawal; 
  }
  


  function overdraft(num) {
    if (withdrawal > balance) {
      setStatus('Error: Your withdrawal amount is greater than your current balance');
      setTimeout(() => setStatus(''),3000);
      return false;
    }
    return true;
    
  }

  function validateNumber(num){
    if (isNaN(parseFloat(num))) {
      setStatus('Error: Please enter a number');
      setTimeout(() => setStatus(''),3000);
      return false;
    }
    return true;
}  
  function validate(withdrawal, label){
      if (!withdrawal) {
        setStatus('Error: ' + "Please complete form");
        setTimeout(() => setStatus(''),3000);
        return false;
      } else  if (withdrawal < 0) {
        setStatus('Error: ' + "Please enter a number greater than 0 for withdrawal");
        setTimeout(() => setStatus(''),3000);
        return false;
      } 
      return true;
  }


  function handleCreate(){
    console.log(balance, withdrawal);
    //if (!validate(balance,    'balance'))    return;
    if (!validate(withdrawal,     'withdrawal'))     return;
    if (!validateNumber(withdrawal,  'withdrawal'))  return;
    if (!overdraft(withdrawal,  'withdrawal'))  return;
    //if (!validate(validateNum,     'withdrawalAmount'))     return;
    users[0].withdrawals.push(parseFloat(withdrawal));
    users[0].balance = balance;
    setShow(false);
  }    

  function clearForm(){
    setAmount('');
    setShow(true);
  }

  return (
    <Card 
      id = "CardGroup"
      bgcolor="light"
      header="Withdraw"
      status={status}
      body={show ? (  
              <>
              Your current balance: ${balance}
              <h4>{}</h4>
              <input type="input" className="form-control" id="withdrawal-amount" placeholder="Withdrawal amount" value={withdrawal} onChange={e => setAmount(e.currentTarget.value)} /><br/>
              <button type="submit" className="btn btn-light" onClick={handleCreate}>Withdraw</button>
              </>
            ):(
              <>
              <h5>Success! </h5>
              <h4>Current balance is ${currentBalance()}</h4>
              <button type="submit" className="btn btn-light" onClick={clearForm}>Make another withdrawal</button>
              </>
            )}
    />
  )
}

