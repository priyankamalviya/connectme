HomeLayout = React.createClass({
    render(){
        return(
            <div>
                <Header/>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6 ">
                            <Featurelist/>
                        </div>
                        <div className="col-md-5 col-md-offset-1 ">
                            <Signupform />
                        </div>
                        </div>
                    </div>
                </div>
        )
    }
});