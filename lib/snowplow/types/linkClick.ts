export const LINK_CLICK_SCHEMA =
    "iglu:com.snowplowanalytics.snowplow/link_click/jsonschema/1-0-1";

export interface LinkClick {
    schema: typeof LINK_CLICK_SCHEMA;
    data: {
        targetUrl: string;
        elementClasses?: string[];
        elementId?: string;
        elementTarget?: string;
        elementContent?: string;
    };
}

export default LinkClick;
