import React from 'react';
import {Layout} from "antd";
import {AppHeader} from "./components/AppHeader";
import {AppSider} from "./components/AppSider";
import {AppContent} from "./components/AppContent";



function App() {
    // https://www.youtube.com/watch?v=S4HOy6yTclU&t=1322s
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
