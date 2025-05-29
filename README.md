# 10X 💎 The Social Network for Startups

This is a fork of the [Bluesky Social app](https://github.com/bluesky-social/social-app).

The fork is hosted on GitHub Pages with a Custom Domain: [10x.social](https://10x.social)

Do you want your own **FREE** hosted fork? *(it's fun! ...no developer environment required)*

Create a fork and help us build **Social for Startups!** *(All Tech, No Politics)*

## 10 Minutes to Fork & Host for FREE

1. Create an account on GitHub, login and then create a new Organization (for FREE) via [https://github.com/account/organizations/new?plan=free](https://github.com/account/organizations/new?plan=free). Note: your "Organization Name" will be used in your URL e.g. `10X Example Name` will be `https://10x-example-name.github.io`
2. Go to [https://github.com/chrisjacob/10xsocial](https://github.com/chrisjacob/10xsocial), click the "Fork" button
3. On the "Create a fork" page: **Owner** = select your "Organisation Name" e.g. `10X-Example-Name`, then **Repository Name** = your "Organization Name".github.io e.g. `10x-example-name.github.io` (must be lower case, and any spaces replaced with hyphens), then click "Create fork"
4. Now on *your forked repository* (e.g. `https://github.com/10X-Example-Name/10x-example-name.github.io`) click the "Actions" tab, then click "I understand my workflows, go ahead and enable them" (FYI, the workflows are safe)
5. Click on the "Code" tab, scroll down to the "README" and click on the "Pencil" (Edit file) button 
6. Make a minor edit to the README file (e.g. add a space character), then click the "Commit changes..." button, then "Commit changes" (the default values are fine)
7. Click on the "Actions" tab, you should see some skipped workflows (Grey icon), and some workflows "In progress" (Yellow icon)
8. Wait about 7 minutes for the "Build and Deploy GitHub Pages" workflow to complete successfully (Green icon)
9. Click on the "Settings" tab, then the "Pages" sub-menu. Under "Build and deployment" update fields to: **Source** = "Deploy from a branch", **Branch** = "gh-pages", **Folder** = "/ (root)", then click the "Save" button
10. Wait a minute then refresh the page... you should see "Your site is live at e.g. `https://10x-example-name.github.io/`"

Congratulations you did it! Go visit your site!

p.s. If your site shows the "README" file content don't worry, wait another minute and refresh the page. If that fails, repeat steps 5 to 10. 

## (Optional) Setup a Custom Domain

1. Register a domain name e.g. `10x-example-name.com` via a domain registrar e.g. [https://www.namecheap.com](https://www.namecheap.com)
2. In GitHub, click on the "Settings" tab, then the "Pages" sub-menu. 
3. Under the "Custom domain" section enter your domain e.g. `10x-example-name.com` and click "Save"
4. Setup your DNS: [Configure an apex domain](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site) and [Configure the www subdomain variant](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)
5. Then [Verifying your custom domain for GitHub Pages](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/verifying-your-custom-domain-for-github-pages)

p.s. if you get stuck, please [read the docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site), Google it, ask ChatGPT, or reach out to me and I'll try to help you out.

---

# Welcome friends!

This is the codebase for the 10X app.

Get the app itself:

- **Web: [10x.social](https://10x.social)**
- **iOS:** ~~App Store~~ (soon)
- **Android:** ~~Play Store~~ (soon)

## Features Today
- Progressive Web App (PWA) only, with static file hosting on GitHub Pages (`build-and-deploy-gh-pages.yml`)
- README steps for anyone to Fork & Host for free (lowers the barrier to experimenting & contributing)
- Some GitHub Workflows (Actions) skipped until they can be supported (e.g. iOS/Android App Builds & Language Translation)
- Settings Page
  - Redirects: Outbound links redirect through go.bsky.app (enable/disable Bluesky's go links)

## In Progress
- Re-branding from Bluesky to 10X
  - Logos
  - Colours
  - Brand name
- Disabling Bluesky analytics (until we can run our own)
- Settings Page
  - Geolocation: configurable geolocation (default: US. Informs labelers & currency behaviour)
  - Tweaks: On non-bsky.social handles, show a link to that URL (on users Profile page)
  - Gates: explore_show_suggested_feeds (on the Explore page show "Discover Feeds" section)

## Backlog
- MVP:
  - "10X" in main navigation (left and footer)
  - Tab Navigation & Welcome page
  - Crypto iframes for Decentralised Social: Focus, Openfund, NFTz, Vibehut, HeroSwap, Explorer
- Onboarding:
  - OAuth Signup (`username.10x.social`)
  - Signup Email capture
  - Record Direct Referral
  - Record Network Referral (10 levels)
  - Refer to Focus (for DeSo Wallet + Twitter connection)
  - Refer to Believe (for Solana Wallet)
  - Connect DeSo Wallet
  - Connect Solana Wallet
- Content:
  - Twitter RSS Feeds: Startup, Build, VC, Tech, Ai
  - Bluesky Feeds
  - Focus Feeds
  - Twitter Starter packs (lists)
  - Bluesky Starter Packs (lists)
  - Focus Starter Packs (lists)
  - Apps iframes for Awesome: embedable PWAs/Games/Web3
- AI Tokens:
  - Launch AI Tokens (Tokenomics, Owner instructions, Believer instructions)
  - AI Reward Agent (Collect token holdings, Collect engagement, issue rewards, post proof)
- Amazon Web Services:
  - bskyogcard: OpenGraph Cards to generate preview images for sharing posts and profiles (`build-and-push-ogcard-aws.yaml`)
  - bskyembed: Embed Service for embeding 10X posts on other platforms (`build-and-push-embedr-aws.yaml`)
  - bskylink: Link Handling, URL management and redirection, with CORS support for cross-origin requests (`build-and-push-link-aws.yaml`)
  - bskyweb: Server-side rendering and static file serving for SEO (`build-and-push-bskyweb-aws.yaml`)
- App Builds:
  - EAS (Expo Application Services) for iOS and Android (Re-enable GitHub Workflow: `bundle-deploy-esa-update.yml`)
  - iOS App build (`build-submit-ios.yml`)
  - Android app build (`build-submit-android.yml`)
  - Setup Sentry.io for application monitoring (`app.config.js`)
- Other:
  - Language Translation via Crowdin API (Re-enable GitHub Workflow: `nightly-update-source-languages.yaml`)
  - Analytics for 10X

## Philosophy
- By default, 10x.social is a "soft fork" and should be very similar to the official Bluesky social-app client (so we can easily stay in sync)
- After the 10X builder community matures we can "hard fork" to add more core changes and handle more complex merges
- Colour and branding are different to distinguish from Bsky social-app
- Analytics are not present (to avoid confusing Bsky)
- Opinionated features will be introduced behind toggles (feature flags)
- Focus on high impact, low diff size patches (specifically patches that won't require large conflicts to be resolved)
- Focus on Power Users (but all users are welome!)
- Focus on Startups (Founders, Builders, VCs)
- Focus on Tech (Ai, Web3, XR, APIs, Games, etc)
- Focus on Innovation! 

## Development Resources
This is a [React Native](https://reactnative.dev/) application, written in the TypeScript programming language. It builds on the `atproto` TypeScript packages (like [`@atproto/api`](https://www.npmjs.com/package/@atproto/api)), code for which is also open source, but in [a different git repository](https://github.com/bluesky-social/atproto). It is regularly rebased on top of new releases of [social-app](https://github.com/bluesky-social/social-app).

There is a small amount of Go language source code (in `./bskyweb/`), for a web service that returns the React Native Web application in the social app deployment. However, it is not used in the current 10x.social deployments. For 10X, the intended deployment is with a webserver that can serve static files , and reroute to `index.html` as needed. Today [10X.social](https://10x.social) is hosted on [GitHub Pages](https://pages.github.com/), and is updated every time we push `main` branch to GitHub. Note: you could also host for free on [Cloudflare Pages](https://pages.cloudflare.com/) or your own static file server.

The [Build Instructions](./docs/build.md) will be a good place to get started with the app once we get iOS and Android app builds working. For now, for the the Web App build you can use the `10 Minutes to Fork & Host for FREE` instructions above, or, if you want to run the build on your local development environment the instructions are simple:

### Running Web App
1. `yarn`
2. `yarn web`

You're all set!

## AT Protocol
The Authenticated Transfer Protocol ("AT Protocol" or "atproto") is a decentralized social media protocol. You don't *need* to understand AT Protocol to work with this application, but it can help. 

You may wish to reference [offical resources linked in social-app](https://github.com/bluesky-social/social-app#development-resources). However, please don't harass the Bluesky team with issues or questions pertaining to 10X.social

10X is a fork of the official client, social-app. It encompasses a set of schemas and APIs built in the overall AT Protocol framework. The namespace for these "Lexicons" is `app.bsky.*`.

## Contributions

> 10X is a community fork, and we'd love to merge your PR!

As a rule of thumb, the best features for 10X.social are ones that have a disproportionately positive impact on the user experience compared to the matinance overhead.

Unlike some open source projects, since 10X.social is a soft fork, any features (patches) we add on top of upstream social-app need to be maintained. For example, a change to the way posts are composed may be very invasive, touching lots of code across the codebase. If upstream refactors this component, we will need to rewrite this feature to be compatible or drop it from the client.

For this reason, try to focus on features that change a relatively small amount of code that is present upstream.

Without an overriding motivation, opinionated features should exist behind a toggle that is not enabled by default. This allows 10X.social to cater to as many users as possible.

**Guidelines:**

- Check for existing issues before filing a new one please.

- Open an issue and give some time for discussion before submitting a PR.

  - This isn't strictly necessary, but I'd love to give my thoughts and scope out your willingness to maintain the feature before you write it.

- Stay away from PRs like...

  - Changing "Post" to "Skeet"

  - Refactoring the codebase, e.g., to replace MobX with Redux or something.

## Forking guidelines

Just like social-app, you have our blessing 🪄✨ to fork this application! However, it's very important to be clear to users when you're giving them a fork.

Please be sure to:

- Change all branding in the repository and UI to clearly differentiate from 10X.
- Change any support links (feedback, email, terms of service, issue tracker, etc) to your own systems.

## Self hosting & personal builds

Self hosting is great! It is our intention that 10X is easy to self host and build on your own. If you host your own instance of 10X.social, or make your own builds, please make some level of effort to clarify that it is not an "official" build or instance. This can be in the form of a different domain or branding, but can also be as simple as not advertising your hosted instance or builds as "official" releases.

## Security disclosures

If you discover any security issues, please send an email to chris@10xnetworkstate.com 

If the issue pertains to infastructure, code, or systems outside the scope of 10X.social, please refer to the [disclosure guidelines on social-app](https://github.com/bluesky-social/social-app#security-disclosures) if it is hosted by Bluesky PBC. Otherwise, reference the security policy of that system as applicable.

## License (MIT)

See [./LICENSE](./LICENSE) for the full license.

## P.S.

We ❤️ you and all of the ways you support us. Thank you for making 10X a great place!

# Have more questions?

DeepWiki (powered by Devin AI) provides up-to-date documentation you can talk to for this repo, click the button below to try it out.

[![Ask DeepWiki](https://deepwiki.com/badge.svg)](https://deepwiki.com/chrisjacob/10xsocial)
