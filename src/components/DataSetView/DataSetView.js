import React, {useState} from 'react';
import {Button, Divider, Space, Tabs, Tag} from 'antd';
import Avatar from "antd/es/avatar/avatar";

function DollarOutlined() {
    return null;
}

function PoweroffOutlined() {
    return null;
}

function UserOutlined() {
    return null;
}

function DataSetView({dataSet}) {
    const {TabPane} = Tabs;
    const [btnBuy, setBtnBuy] = useState(false);
    const [tags, setTags] = useState(['продажи','sales','SAP', 'отдел продаж'])
    const [colors, setColors] = useState(['magenta','volcano','cyan', 'blue'])
    const handlerBtnBuy = () => {
        setBtnBuy(true);
        setTags(prev => [...prev, 'куплено']);
        setColors(prev => [...prev, 'green'])
    };

    return (
        <div>
            <h1>{dataSet.title}</h1>
            <div> Descriptions</div>
            499 RUB
            <Space style={{width: '100%'}}>
                {btnBuy ? null : <Button
                    type="green"
                    icon={<PoweroffOutlined/>}
                    onClick={handlerBtnBuy}>
                    Купить
                </Button>}
            </Space>
            <div>
                Владелец
                <Avatar size={64} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>
Семен Игоревич
            </div>

            <Divider orientation="left">Теги</Divider>
            <div>
                {tags.map((tag,i) => <Tag key={tag} color={[colors[i]]}>{tag}</Tag>)}
            </div>
            <div>
                <Tabs defaultActiveKey="1" onChange={null}>
                    <TabPane tab="Схема" key="1">
                        <div>Название полей и тип данных</div>
                    </TabPane>
                    <TabPane tab="Связи" key="3">
                        <div>Список с какими датасетами этот датасет связан</div>
                    </TabPane>
                </Tabs>
            </div>
        </div>
    );
}

export default DataSetView;
