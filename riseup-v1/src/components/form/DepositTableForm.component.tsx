import React from 'react';
import {
    DatePicker,
    Form,
    Input,
    Select,
} from 'antd';
import dayjs from 'dayjs';

const FormDepositTable: React.FC = () => {

    return (
        <Form
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 14 }}
            layout="horizontal"
            style={{ maxWidth: 600 }}
        >
            <Form.Item label="Input">
                <Input />
            </Form.Item>
            <Form.Item label="Select">
                <Select>
                    <Select.Option value="demo">Demo</Select.Option>
                </Select>
            </Form.Item>
            <Form.Item label="เริ่มปี" className='justify-between'>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <DatePicker picker="year" defaultValue={dayjs().add(1,'year')} format={"YYYY"} minDate={dayjs().add(1,'year')}/>
                    <span style={{ margin: '0 10px' }}>ถึง</span>
                    <DatePicker picker="year" defaultValue={dayjs().add(2,'year')} format={"YYYY"} minDate={dayjs().add(2,'year')} />
                </div>
            </Form.Item>
        </Form>
    );
};

export default FormDepositTable;