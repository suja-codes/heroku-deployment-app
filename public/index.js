//Spa is the Parent component
//Wrapping components in UserContext.Provider provides access to the value.
function Spa() {
  return (
    <HashRouter>
      <div>
        <NavBar/>
        <UserContext.Provider value={{users:[]}}>
          <div className="container" style={{padding: "15px 0px 15px 0px"}}>
            <Route path="/"         exact component={Home} />
            <Route path="/CreateAccount/" component={CreateAccount} />
            <Route path="/login/"         component={Login} />
            <Route path="/deposit/"       component={Deposit} />
            <Route path="/withdraw/"      component={Withdraw} />
            <Route path="/balance/"       component={Balance} />
            <Route path="/alldata/"       component={AllData} />
          </div>
        </UserContext.Provider>
      </div>      
    </HashRouter>
  );
}

ReactDOM.render(
  <Spa/>,
  document.getElementById('root')
);