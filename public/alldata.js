// All User data tabulated here.

function AllData(){
  const [data, setData] = React.useState([]);    

    React.useEffect(() => {       
    // fetch all accounts from API
        fetch('/account/all')
            .then(response => response.json())
            .then(data => {
                setData(data);
                console.log(data);
            });
    }, []); 
  
    return (
      <>
      <br/>
          <center><h3>ALL DATA IN STORE</h3></center>
      <br/>
      <br/>             
        <table className="table table-striped table-info">
            <thead className="thead-light">
                <tr>          
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Password</th>
                <th scope="col">Balance</th>
                </tr>
            </thead>
            <tbody>   
                {data !== '' && data.map(
                    (item,index) => {      
                      return <tr>      
                        <td key={index}>{item.name}</td>
                        <td key={index}>{item.email}</td>
                        <td key={index}>{item.password}</td>
                        <td key={index}>{item.balance}</td>
                      </tr>
                    }
                )}                       
            </tbody>     
        </table>  
      </>
    );
}
   
  //const ctx = React.useContext(UserContext);    
  /*
  return (
    <>
      <br/>
          <center><h3>ALL DATA IN STORE</h3></center>
      <br/>
      <br/>
      <table className="table table-striped Hover">
          <thead>
          <tr>
              <th scope="col">Index</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Password</th>   
          </tr>
          </thead>
          <tbody >
            {ctx.users.map((user, key) => {
              return (
              <tr key={key}>
                  <th scope="row">{key + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.password}</td>
              </tr>
              )
            })}
          </tbody>
      </table>
    </>   
  );
}
*/
