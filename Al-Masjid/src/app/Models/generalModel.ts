export interface IConfirmationDialog {
    message: string;
    showDialog: boolean;
    data?: any
}

export interface IReceipt {
    amount: number;
    created_on: Date;
    updated_on: Date;
    payment_mode: number;
    received_by: number;
    masjid: number;
}