import { buildSelfDescribingEvent } from "@snowplow/node-tracker";
import tracker from "./tracker";
import LinkClick from "./types/linkClick";
import UriRedirect from "./types/uriRedirect";

export default function trackSelfDescribingEvent(
    event: LinkClick | UriRedirect
) {
    tracker.track(
        buildSelfDescribingEvent({
            event,
        })
    );
}
