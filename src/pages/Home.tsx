import { Card, Row } from 'antd';
import React, { FC } from 'react';

const Home: FC = () => {
    return (
        <Row justify="center" align="middle">
            <Card>
                Вы авторизованы
            </Card>
        </Row>
    )
}

export default Home;
