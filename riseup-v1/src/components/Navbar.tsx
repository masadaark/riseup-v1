import React, { useState } from 'react';
import { GoogleOutlined, TableOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
    {
        label: 'ตารางเงินฝาก',
        key: 'mail',
        icon: <TableOutlined />,
    },
    {
        label: (
            <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
                Google
            </a>
        ),
        key: 'google',
        icon: <GoogleOutlined />,
    }
];

const Navbar: React.FC = () => {
    const [current, setCurrent] = useState('mail');

    const onClick: MenuProps['onClick'] = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };

    return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items}
        theme='dark' />;
};

export default Navbar;