import React, { useState } from 'react';
import { GoogleOutlined, TableOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
    {
        label: <a href="/deposit-table" >
            ตารางเงินฝาก
        </a>,
        key: '1',
        icon: <TableOutlined />,
    },
    {
        label: (
            <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
                Google
            </a>
        ),
        key: '2',
        icon: <GoogleOutlined />,
    }
];

const Navbar: React.FC = () => {
    const [current, setCurrent] = useState('mail');

    const onClick: MenuProps['onClick'] = (e) => {
        setCurrent(e.key);

    };

    return <Menu onClick={onClick}
        selectedKeys={[current]} mode="horizontal"
        defaultSelectedKeys={['1']}
        items={items} style={{ flex: 1, minWidth: 0 }}
        theme='dark' />;
};

export default Navbar;