import { useState } from "react";
import FormDepositTable, { DepositFormModel } from "../components/form/DepositTableForm.component"
import TableDeposit from "../components/table/DepositTable.component"
import { DepositLogic } from "../logic/DepositLogic";

const DepositTableWebPage = () => {

    const [depositFormValue, setDepositFormValue] = useState<DepositFormModel>()
    const submitForm = (values: DepositFormModel): void => {
        setDepositFormValue(values);
    };

    return (
        <>
            <div className="flex flex-row">
                <div className="flex flex-col space-y-4">
                    <span className="font-bold">ข้อมูลการออม</span>
                    <FormDepositTable onFinish={submitForm}>
                    </FormDepositTable>
                </div>
                <div >
                    <TableDeposit data={DepositLogic.GenerateDepositTableLogic(Number(depositFormValue?.monthly_deposit ?? 0)
                        , Number(depositFormValue?.increase_deposit_percent ?? 0), Number(depositFormValue?.annual_return_percent ?? 0),
                        Number(depositFormValue?.year_data.start_date.format("YYYY"))
                        , Number(depositFormValue?.year_data.end_date.format("YYYY")))}></TableDeposit>
                </div>
            </div>
        </>
    )
}

export default DepositTableWebPage
