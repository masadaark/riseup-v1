import React from 'react';
import {
    Button,
    DatePicker,
    Form,
    Input,
} from 'antd';
import dayjs from 'dayjs';

interface FormModel {
    annual_return: number;
    monthly_deposit: number;
    year_data: any
}

const FormDepositTable: React.FC = () => {
    const [form] = Form.useForm<FormModel>();

    const onFinish = (values: FormModel) => {
        console.log('Form values:', values);
    };

    return (
        <div style={{ width: 450 }}>
            <Form
                form={form}
                layout="vertical"
                onFinish={onFinish}
            >
                <Form.Item
                    label="เงินออมต่อเดือน"
                    name="monthly_deposit"
                    rules={[{ required: true, message: 'โปรดระบุ เงินออมต่อเดือน' }]}
                >
                    <Input
                        className='[&::-webkit-inner-spin-button]:appearance-none'
                        style={{ width: "60%", textAlign: "right" }}
                        type="number"
                        min={0}
                        inputMode="numeric"
                        step="any" />
                </Form.Item>
                <Form.Item
                    label="ผลตอบแทนต่อปี (%)"
                    name="annual_return"
                    rules={[{ required: true, message: 'โปรดระบุ ผลตอบแทนต่อปี (%)' }]}
                >
                    <Input
                        className='[&::-webkit-inner-spin-button]:appearance-none'
                        style={{ width: "60%", textAlign: "right" }}
                        type="number"
                        min={0} />
                </Form.Item>
                <Form.Item label="ปีที่เริ่มออม"
                    name="year_data">
                    <DatePicker picker="year" style={{ width: "26%" }} defaultValue={dayjs().add(1, 'year')} format={"YYYY"} />
                    <span style={{ margin: '0 10px' }}>ถึง</span>
                    <DatePicker picker="year" style={{ width: "26%" }} defaultValue={dayjs().add(2, 'year')} format={"YYYY"} />
                </Form.Item>
                <Form.Item>
                    <div className='flex justify-end' style={{ width: 280 }}>
                        <Button type="primary" htmlType="submit">
                            ยืนยัน
                        </Button>
                    </div>
                </Form.Item>
            </Form>
        </div>
    );
};

export default FormDepositTable;
