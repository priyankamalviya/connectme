import React from 'react';
import {mount} from 'react-mounter';
publicRoutes = FlowRouter.group({
    name: 'publicroutes'
});

privateRoutes = FlowRouter.group({
    name: 'privateroutes',
    triggersEnter: [function(context, redirect){
        if(!Meteor.userId()){
            return FlowRouter.go('/');
        }
    }]
});

publicRoutes.route('/',{
    name: 'Home',
    action: function(){
        mount(HomeLayout, {})
    }
});

privateRoutes.route('/dashboard',{
    name: 'Dashboard',
    action: function(){
        mount(Layout, {
            sidebar: <Sidebar />,
            content: <Main />
        });
    }
});
publicRoutes.route('/signout',{
   name: 'Signout',
    action: function(){
        Meteor.logout(function(){
            FlowRouter.go('/');
        });
    }
});
privateRoutes.route('/profile',{
    name:'Profile',
    action: function(){
        mount(Layout,{
            sidebar: <Sidebar/>,
            content: <Profile/>
        });
    }
});

