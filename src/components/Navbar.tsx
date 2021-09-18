import { Layout, Menu, Row } from 'antd';
import React, { FC } from 'react';
import { useHistory } from 'react-router';
import { RouteNames } from '../routes';

const Navbar: FC = () => {
    const router = useHistory();
    const auth = true;

    return (
        <Layout.Header>
            <Row justify="end">
                {
                    auth
                        ?
                        <>
                        <div style={{color: 'white'}}>
                                Artem
                            </div>
                        <Menu theme="dark" mode="horizontal" selectable={false}>
                            
                            <Menu.Item
                                onClick={() => console.log('Выйти')}
                                key={1}
                            >
                                Выйти
                            </Menu.Item>
                        </Menu>
                        </>
                        :
                        <Menu theme="dark" mode="horizontal" selectable={false}>
                            <Menu.Item
                                onClick={() => router.push(RouteNames.LOGIN)}
                                key={1}
                            >
                                Логин
                            </Menu.Item>
                        </Menu>
                }

            </Row>
        </Layout.Header>
    )
}

export default Navbar;