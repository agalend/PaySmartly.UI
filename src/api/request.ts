import Identity from "./identity"

export interface Request {
    employee: Identity;
    annualSalary: number;
    superRate: number;
    payPeriodFrom: Date;
    payPeriodTo: Date;
    roundTo: number;
    months: number;
    requester: Identity;
}