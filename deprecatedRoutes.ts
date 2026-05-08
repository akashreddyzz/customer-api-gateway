export const deprecatedRoutes = [
    "/api/v1/customers",
    "/api/v1/payments",
    "/api/v1/orders"
];

export function legacyApiV1() {
    console.warn("Deprecated API v1 route detected");
}
