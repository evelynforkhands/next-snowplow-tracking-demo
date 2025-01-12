import tracker from "./tracker";
import { buildPageView } from "@snowplow/node-tracker";
import PageView from "./types/pageView";

export default function trackPageView(pageView: PageView) {
  tracker.track(buildPageView(pageView));
}