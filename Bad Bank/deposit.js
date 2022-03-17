function Deposit(){
    const [show, setShow]         = React.useState(true);
    const [status, setStatus]     = React.useState('');
    const [deposit, setAmount]         = React.useState('');
    const ctx = React.useContext(UserContext);  

    let users = ctx.users;
    let balance = users[0].balance;
    

    function currentBalance(){
      let current = 100;
        return current + +deposit; 
    }
    
    function validateNumber(num){
      if (isNaN(parseFloat(num))) {
        setStatus('Error: Please enter a number');
        setTimeout(() => setStatus(''),3000);
        return false;
      }
      return true;
  }  
    function validate(deposit, label){
        if (!deposit) {
          setStatus('Error: ' + "Please complete form");
          setTimeout(() => setStatus(''),3000);
          return false;
        } else  if (deposit < 0) {
          setStatus('Error: ' + "Please enter a number greater than 0 for deposit");
          setTimeout(() => setStatus(''),3000);
          return false;
        } 
        return true;
    }

  
    function handleCreate(){
      console.log(balance, deposit);
      //if (!validate(balance,    'balance'))    return;
      if (!validate(deposit,     'deposit'))     return;
      if (!validateNumber(deposit,  'depoist'))  return;
      //if (!validate(validateNum,     'depositAmount'))     return;
      users[0].deposits.push(parseFloat(deposit));
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
        header="Deposit"
        status={status}
        body={show ? (  
                <>
                Your current balance: ${balance}
                <h4>{}</h4>
                <input type="input" className="form-control" id="deposit-amount" placeholder="Deposit Amount" value={deposit} onChange={e => setAmount(e.currentTarget.value)} /><br/>
                <button type="submit" className="btn btn-light" onClick={handleCreate}>Deposit</button>
                </>
              ):(
                <>
                <h5>Success! </h5>
                <h4>Current balance is ${currentBalance()}</h4>
                <button type="submit" className="btn btn-light" onClick={clearForm}>Make another deposit</button>
                </>
              )}
      />
    )
  }