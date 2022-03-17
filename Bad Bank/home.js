function Home() {
    return (
        <Card
            id = "card-home"
            bgcolor="light"
            txtcolor="white"
            header="BadBank"
            title="Welcome to the Bank"
            text="Disregard the lack of security"
            body={(<img src="moneyjar.jpg" className="img-fluid" alt="Responsive image"/>)}
        />
    );
}