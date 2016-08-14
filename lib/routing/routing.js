import React from 'react';
import {mount} from 'react-mounter';
publicRoutes = FlowRouter.group({
    name: 'publicroutes'
});

privateRoutes = FlowRouter.group({
    name: 'privateroutes'
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
            sidebar: <div>Sidebar</div>,
            content: <div>Content</div>
        });
    }
});

