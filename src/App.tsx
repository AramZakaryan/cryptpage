import React from 'react';
import {Layout} from "antd";
import {AppHeader} from "./components/AppHeader";
import {AppSider} from "./components/AppSider";
import {AppContent} from "./components/AppContent";



function App() {
    return (
        <div>
            <Layout >
                <AppHeader/>
                <Layout>
                   <AppSider/>
                    <AppContent/>
                </Layout>
            </Layout>
        </div>
    );
}

export default App;
