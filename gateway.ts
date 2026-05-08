import axios from "axios";

export async function getCustomerProfile(customerId: string) {
    return axios.get(
        `https://gateway.internal/api/v1/customers/${customerId}`
    );
}

export async function getPaymentHistory(customerId: string) {
    return axios.get(
        `https://gateway.internal/api/v1/payments/${customerId}`
    );
}
