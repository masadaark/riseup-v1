import React from 'react';
import {
    Button,
    DatePicker,
    Form,
    Input,
} from 'antd';
import dayjs, { Dayjs } from 'dayjs';

export interface DepositFormModel {
    annual_return: number;
    monthly_deposit: number;
    increase_deposit_ratio: number;
    year_data: {
        start_date: Dayjs;
        end_date: Dayjs;
    }
}

const FormDepositTable: React.FunctionComponent<{onFinish?:(a:DepositFormModel)=>void}> = ({onFinish}) => {
    const [form] = Form.useForm<DepositFormModel>();
    const defaultStartDate = dayjs().add(1, 'year');
    const defaultEndDate = dayjs().add(2, 'year');
    const logFinish = (values: DepositFormModel) => {
        console.log(values);
        console.log(values.year_data.start_date.format("YYYY"))
        console.log(values.year_data.end_date.format("YYYY"))
    };

    return (
        <div style={{ width: 450 }}>
            <Form
                form={form}
                layout="vertical"
                onFinish={onFinish ?? logFinish}
                initialValues={{
                    year_data: {
                        start_date: defaultStartDate,
                        end_date: defaultEndDate
                    }
                }}
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
                    label="อัตราการเพิ่มเงินออมรายปี (%)"
                    name="increase_deposit_ratio"
                >
                    <Input
                        className='[&::-webkit-inner-spin-button]:appearance-none'
                        style={{ width: "60%", textAlign: "right" }}
                        type="number"
                        min={0} />
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
                <Form.Item
                    label="ปีที่เริ่มออม"
                    name="year_data"
                >
                    <Input.Group compact>
                        <Form.Item
                            name={['year_data', 'start_date']}
                            noStyle
                        >
                            <DatePicker picker="year" style={{ width: "26%" }} format={"YYYY"} defaultValue={defaultStartDate} />
                        </Form.Item>
                        <span style={{ margin: '0 10px' }}>ถึง</span>
                        <Form.Item
                            name={['year_data', 'end_date']}
                            noStyle
                        >
                            <DatePicker picker="year" style={{ width: "26%" }} format={"YYYY"} defaultValue={defaultEndDate} />
                        </Form.Item>
                    </Input.Group>
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
