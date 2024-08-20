import { OperatingPhysician } from "../../../models/request.model";
import { formatObject } from "../../../utils/global";

export function generate2310B(orderingProvider: OperatingPhysician) {
    const data: any = [
        {
            "Segment": "NM1",
            "EntityIdentifierCode": "72",
            "EntityTypeQualifier": "1",
            "LastName": orderingProvider?.lastName,
            "FirstName": orderingProvider?.firstName,
            "IdentificationCodeQualifier": "XX",
            "IdentificationCode": orderingProvider?.npi ?? ''
        },
    ]

    // Format each object and join with '~'
    const formattedString = data.map(formatObject).join('~') + '~';
    return formattedString;
}