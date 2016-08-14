HomeLayout = React.createClass({
    render(){
        return(
            <div>
                Header
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            Features
                            <div className="col-md-5 col-md-offset-1 pull-right">
                                <Signupform />
                             </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
});