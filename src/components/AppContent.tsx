import React from "react";
import {Layout} from "antd";
import axios from "axios";
import {api} from "../api";

const contentStyle: React.CSSProperties = {
    textAlign: 'center',
    minHeight: "90vh",  //////////// later to be calc(100hv-60px)
    color: '#fff',
    backgroundColor: '#001529',
    padding: "1rem"
};

export const AppContent: React.FC = () => {


    // // api.fetchCrypto()
    // api.fakeFetchCrypto()
    //     .then(res => console.log(res.data))
    //     .catch(err => console.error(err));
    // api.fakeFetchCryptoBalance()
    //     .then(res => console.log(res))
    //     .catch(err => console.error(err));

    return (
        <Layout.Content style={contentStyle}>Content</Layout.Content>
    )
}