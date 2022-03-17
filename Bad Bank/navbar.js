function NavBar () {

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">BadBank</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        
                        <a id="nav-link" className="nav-link" title="Register as a new user" href="#/CreateAccount/">Create Account</a>
                        {/* <a className="nav-link" href="#/login/">Login</a> */}
                        <a id="nav-link"className="nav-link" title="Make a deposit to your account"href="#/deposit/">Deposit</a>
                        <a id="nav-link"className="nav-link" title="Withdraw funds from your account"href="#/withdraw/">Withdraw</a>
                        {/* <a className="nav-link" href="#/balance/">Balance</a> */}
                        <a id="nav-link"className="nav-link" title="View User Data"href="#/alldata/">AllData</a>
                    </div>
                </div>
            </div>
            </nav>

        </>

    );
}