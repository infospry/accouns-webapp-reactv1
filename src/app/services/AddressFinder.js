import ApiEndPoints from "./ApiEndPoints";
import { asyncGet } from "./HttpServices";

export const AddressFinder = async (postCode) => {
    const resp = await asyncGet(ApiEndPoints.addressFinder + '?postcode=' + postCode);
    return resp;
}