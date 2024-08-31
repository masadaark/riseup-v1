import { DepositTableInterface } from "../components/table/DepositTable.component";

const round2DecimalPlace = (num:number):number=>{
    return Math.round(num * 100)/100
}

// write code hear
export class DepositLogic {
    public static GenerateDepositTableLogic(
        monthlyDeposit: number,
        increateDepositPercent: number,
        annualReturnPercent: number,
        startYear: number,
        endYear: number
    ) {
        const data: DepositTableInterface[] = [];
        
        return data
    }
}