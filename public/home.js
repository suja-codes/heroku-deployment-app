function Home(){
  return (
    <Card 
      bgcolor=""   
      txtcolor="black"
      header="WELCOME TO YOUR BANK"
      text="Trust us with your money, not your data"
      body={(<center><img 
                  src="./YourBank-1.png"                  
                  width="500px"
                  height="400px"
                  className="img-fluid" 
                  alt="Responsive image"/></center>)}
              />    
  );  
}
