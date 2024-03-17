import React, {useEffect, useState} from "react";
import {Card, Layout, List, Spin, Statistic, Typography} from "antd";
import {ArrowUpOutlined, ArrowDownOutlined} from '@ant-design/icons';
// import 'antd/dist/antd.css'
import "antd/dist/reset.css"
import {api, CryptoType} from "../api/api";
import {AssetsType} from "../Data";
import {AssetViewType} from "../types/types";
import {growthPercent} from "../utils/utils";


const siderStyle: React.CSSProperties = {
    padding: "1rem",
};

export const AppSider: React.FC = () => {

    const [loading, setLoading] = useState<boolean>(false)
    const [cryptos, setCryptos] = useState<CryptoType[]>([])

    const [assetsView, setAssetsView] = useState<AssetViewType[]>([])

    useEffect(() => {
        (async () => {
            setLoading(true)
            const cryptos = await api.fakeFetchCrypto()
            const assets: AssetsType = await api.fakeFetchAssets()

            setCryptos(cryptos)

            setAssetsView(assets.map(asset => {
                    const crypto = cryptos.find(crypto => crypto.id === asset.id)
                    return {
                        ...asset,
                        grow: crypto && asset.price < crypto.price,
                        growthPercent: crypto && growthPercent(asset.price, crypto.price),
                        totalAmount: crypto && asset.amount * crypto.price,
                        totalProfit: crypto && asset.amount * (crypto.price - asset.price)
                    } as AssetViewType
                }
            ))
            setLoading(false)
        })()
    }, []);

    const gridStyle: React.CSSProperties = {
        width: '25%',
        textAlign: 'center',
    };

    // const data = [
    //     'Racing car sprays burning fuel into crowd.',
    //     'Japanese princess to wed commoner.',
    //     'Australian walks 100km after outback crash.',
    //     'Man charged over missing wedding girl.',
    //     'Los Angeles battles huge wildfires.',
    // ];

    // console.log(cryptos)
    // console.log(assetsView)

    if (loading) {
        return <Spin size={"large"} fullscreen/>
    }

    return (
        <Layout.Sider width="25%" style={siderStyle}>
            {assetsView.map(assetView =>
                <Card key={assetView.id} style={{marginBottom: "1rem"}}>
                    <Statistic
                        title={assetView.id}
                        value={assetView.totalAmount}
                        precision={1}
                        valueStyle={{color: assetView.grow ? " green" : "red"}}
                        prefix={assetView.grow ? <ArrowUpOutlined/> : <ArrowDownOutlined/>}
                        suffix="$"
                    />

                    <List
                        size={"small"}
                        header={<div>Header</div>}
                        footer={<div>Footer</div>}
                        dataSource={[
                            {title: "Total Profit", value: assetView.totalProfit},
                            {title: "Asset Amount", value: assetView.amount},
                            {title: "Difference", value: assetView.growthPercent},

                        ]}
                        renderItem={(item) =>
                            <List.Item>
                                <span>
                                    {item.title}
                                </span>
                                <span>
                                    {item.value}
                                </span>
                            </List.Item>
                        }
                    />
                </Card>
            )}


        </Layout.Sider>
    )
}