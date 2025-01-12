# A starter Next.JS app from portfolio-starter-kit to demo tracking with Snowplow
## ✅ Preprequisites

- Node.js
- pnpm

## ✅ Setup template 

### 1. Clone and enter the project

```bash
git clone -b 1-setup-template git@github.com:evelynforkhands/next-snowplow-tracking-demo.git
```

### 2. Install dependencies

```bash
pnpm install
```

### 3. Run the development server

```bash
pnpm dev
```

Now you have a blog with some example posts! You can view the blog at `http://localhost:3000`.

## 🟡 Setup Snowplow node tracker & prepare types (you are here!)

### 1. Install Snowplow tracker

```bash
pnpm add @snowplow/node-tracker
```

### 2. Initialize Snowplow tracker

Let's create a new file `lib/snowplow.ts` where we will initialize the Snowplow tracker.

```ts
import { newTracker } from '@snowplow/node-tracker';

const tracker = newTracker({
    namespace: "blog-tracker", 
    appId: "blog",
    encodeBase64: false, 
  }, {
    endpoint: "http://localhost", 
    port: 9090, // for local dev - to talk to Snowplow Micro
    eventMethod: "post", 
    bufferSize: 1, // only send events once n are buffered
  });


export default tracker;
```

### 3. Prepare types
First, we're going to track some pageViews, let's set up a type for that at `lib/snowplow/types/pageView.ts` to follow the format of the Snowplow pageView event https://docs.snowplow.io/docs/sources/trackers/javascript-trackers/node-js-tracker/node-js-tracker-v4/tracking-events/#track-pageviews-withbuildpageview 

```ts
interface PageView {
    pageUrl: string;
    pageTitle?: string;
    referrer?: string;
}

export default PageView;
```

Now let's create a method to track pageViews in `lib/snowplow/trackPageView.ts`

```ts
import tracker from "./tracker";
import { buildPageView } from "@snowplow/node-tracker";
import PageView from "./types/pageView";

export default function trackPageView(pageView: PageView) {
  tracker.track(buildPageView(pageView));
}
```
