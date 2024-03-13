import React, {useEffect, useState} from "react";
import {Layout, List, Spin, Statistic, Typography} from "antd";
import {Card, Space} from 'antd';
import {ArrowDownOutlined, ArrowUpOutlined} from '@ant-design/icons';
// import 'antd/dist/antd.css'
import "antd/dist/reset.css"
import {api, CryptoDataSingleResultType} from "../api";
import {CryptoBalanceType} from "../Data";


const siderStyle: React.CSSProperties = {
    padding: "1rem",
};

export const AppSider: React.FC = () => {

    const [loading, setLoading] = useState<boolean>(false)
    const [crypto, setCrypto] = useState<CryptoDataSingleResultType[]>([])
    const [balance, setBalance] = useState<CryptoBalanceType>([])

    useEffect(() => {
        (async  ()=> {
            setLoading(true)
            const crypto = await api.fakeFetchCrypto()
            const balance = await api.fakeFetchCryptoBalance()
            setCrypto(crypto.data.result)
            setBalance(balance)
            setLoading(false)
        })()
    }, []);

    const gridStyle: React.CSSProperties = {
        width: '25%',
        textAlign: 'center',
    };

    const data = [
        'Racing car sprays burning fuel into crowd.',
        'Japanese princess to wed commoner.',
        'Australian walks 100km after outback crash.',
        'Man charged over missing wedding girl.',
        'Los Angeles battles huge wildfires.',
    ];

    console.log(crypto)
    console.log(balance)

    if(loading){
        return <Spin size={"large"} fullscreen/>
    }

    return (
        <Layout.Sider width="25%" style={siderStyle}>
            <Card style={{marginBottom: "1rem"}}>
                <Statistic
                    title="Active"
                    value={11.28}
                    precision={2}
                    valueStyle={{color: '#3f8600'}}
                    prefix={<ArrowUpOutlined/>}
                    suffix="%"
                />

                <List
                    size={"small"}
                    header={<div>Header</div>}
                    footer={<div>Footer</div>}
                    // bordered
                    dataSource={data}
                    renderItem={(item) => (
                        <List.Item>
                            <Typography.Text mark>[ITEM]</Typography.Text> {item}
                        </List.Item>
                    )}
                />
            </Card>
            <Card bordered={false}>
                <Statistic
                    title="Idle"
                    value={9.3}
                    precision={2}
                    valueStyle={{color: '#cf1322'}}
                    prefix={<ArrowDownOutlined/>}
                    suffix="%"
                />
            </Card>


        </Layout.Sider>
    )
}