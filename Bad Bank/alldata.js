//const { Card } = require("react-bootstrap");


function AllData() {
    
    const ctx = React.useContext(UserContext);
    return (
        <div className="card text-white bg-light mb-3" style={{margin: "5% 30% 30% 30%"}}>
            <h5 className="card-header" >All Data Record:</h5>
            <div className="card-body" style={{fontSize: "1.5em"}}>
            
            <pre>{JSON.stringify(ctx, null, 2)}</pre>
            </div>
        
</div>
        
    
    );
}
