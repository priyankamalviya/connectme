Sidebar = React.createClass({
    links:[
        {id: 1, href:'/profile', icon:'fa fa-user fa-2x', text:'Profile'},
        {id: 2, href:'/dashboard', icon:'fa fa-rss fa-2x', text:'News Feed'},
        {id: 3, href:'/messages', icon:'fa fa-comments fa-2x', text:'Messages'},
        {id: 4, href:'/friends', icon:'fa fa-users fa-2x', text:'Friends'},
    ],
    render(){
        var rows=this.links.map(function(link){
        return(<li key={link.id}>
            <a href={link.href}>
                <i className={link.icon}></i>
                {link.text}</a>
        </li>)

        });
        return(
            <div className="column col-sm-2 col-xs-1 sidebar-offcanvas">
                <ul className="nav">
                    <li>
                        <a href="#" className="visible-xs text-center">
                            <i className="fa fa-list-alt">

                            </i>
                        </a>
                    </li>
                </ul>
                <ul className="nav hidden-xs" id="lg-menu">
                    {rows}
                </ul>
            </div>
        )
    }
});