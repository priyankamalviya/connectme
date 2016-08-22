Header = React.createClass({
    mixins: [ReactMeteorData],
    getMeteorData(){
        let data = {};
        data.currentUser = Meteor.user();
        return data;
    },
    getInitialState(){
        return {
            message:'',
            messageClass:'hidden'
        }
    },
    displayError(message){
        this.setState({message: message, messageClass:'alert alert-danger message '});
    },
    handleSubmit(e){
        e.preventDefault();
        this.setState({message: message, messageClass: 'hidden'});
        var that = this;
        var email = ReactDOM.findDOMNode(this.refs.email).value.trim();
        var password = ReactDOM.findDOMNode(this.refs.password).value.trim();
        Meteor.loginWithPassword(email, password, function(e){
            if(e){
                that.displayError(e.reason);
            }else{
                FlowRouter.go('/dashboard');
            }

        });
    },
    render(){
        return (
            <div>
                <span className="navbar-react">
                    Connectme
                </span>
                <div className="collapse navbar-collapse" id="navbar">
                    <form role="form" id="signin" className="navbar-form navbar-right">
                        <div className="input-group">
                            <span className="input-group-addon">
                                <i className="fa fa-user"></i>
                            </span>
                            <input type="text" placeholder="email address" ref="email" id="email" className="form-control"/>
                        </div>
                        <div className="input-group">
                            <span className="input-group-addon">
                                <i className="fa fa-lock"></i>
                            </span>
                            <input placeholder="password" type="password" ref="password"className="form-control"/>
                        </div>
                        <button className="btn btn-primary" type="submit">
                            Login
                        </button>
                    </form>
                </div>
            </div>
        )
    }
});