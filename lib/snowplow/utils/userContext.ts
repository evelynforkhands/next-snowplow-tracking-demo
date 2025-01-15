import tracker from "../tracker";

interface UserProperties {
    userAgent?: string;
}

export function setUserProperties(userProperties: UserProperties) {
    tracker.setUseragent(userProperties.userAgent ?? "");
}
