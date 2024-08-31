import React from 'react';
import { Table } from 'antd';
import type { TableColumnsType } from 'antd';

export interface DepositTableInterface {
    key?: React.Key;
    year: number;
    yearlyDeposit: number;
    monthlyReturn: number;
    yearlyReturn: number;
    balance: number;
}

const columns: TableColumnsType<DepositTableInterface> = [
    {
        title: 'ปี (ค.ศ.)',
        dataIndex: 'year',
        width: 100
    },
    {
        title: 'เงินฝาก',
        dataIndex: 'yearlyDeposit',
        width: 200,
    },
    {
        title: 'ผลตอบแทนรายปี',
        dataIndex: 'yearlyReturn',
        width: 200,
    },
    {
        title: 'ผลตอบแทนคิดเป็นเดือน',
        dataIndex: 'monthlyReturn',
        width: 200,
    },
    {
        title: 'ยอดเงินสะสม',
        dataIndex: 'balance',
        width: 200,
    }
];


const TableDeposit: React.FunctionComponent<{ data?: DepositTableInterface[] }> = ({ data = [] }) => {
    return (
        <Table
            columns={columns}
            dataSource={data}
            pagination={false}
            scroll={{ y: 360 }}
            bordered
            style={{ height: 360 }}
            locale={{
                emptyText: (
                    <div className="text-center" style={{ height: 320 }}>
                        <p className="text-gray-500"></p>
                    </div>
                ),
            }}
        />
    );
};

export default TableDeposit;
