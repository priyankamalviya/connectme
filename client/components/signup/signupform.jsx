Signupform = React.createClass({
    render(){
        return(
            <div className="row pull-right">
                <div className="signup">
                    <h1>Sign up</h1>
                    <p className="text-muted">
                        It'r free and always will be.
                    </p>
                </div>
                <form >
                    <div className="col-sm-9">
                        <div className="row">
                            <div className="col-sm-6 form-group">
                                <input name="first_name" placeholder="First Name" type="text" ref="first_name" className="form-control" />
                            </div>
                            <div className="col-sm-6 form-group">
                                <input name="last_name" placeholder="Last Name" type="text" ref="last_name" className="form-control" />
                            </div>
                            <div className="form-group">
                                <input name="email" placeholder="email or mobile number" type="text" ref="email" className="form-control" />
                            </div>
                            <div className="form-group">
                                <input name="password" placeholder="password" type="text" ref="password" className="form-control" />
                            </div>
                        </div>
                        <button className="btn btn-success btn-md">Sign Up</button>
                    </div>
                </form>
            </div>
        )
    }
});