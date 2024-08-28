import FormDepositTable from "../components/form/DepositTableForm.component"

const DepositTableWebPage = () => {
    return (
        <>
            <div className="flex flex-col space-y-4">
                <span className="font-bold">ข้อมูลการออม</span>
                <FormDepositTable>
                </FormDepositTable>
            </div>
            <div>
            </div>
        </>
    )
}

export default DepositTableWebPage
