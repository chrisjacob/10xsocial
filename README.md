# 10X 💎 The Social Network for Startups

This is a fork of the [Bluesky Social app](https://github.com/bluesky-social/social-app).

This fork is hosted on GitHub Pages with a Custom Domain: [10x.social](https://10x.social)

Want your own **FREE** hosted fork? *(it's fun! ...no developer environment required)*

...create your fork and help us build **Social for Startups!** *(All Tech, No Politics)*

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

This is the codebase for the 10X Social app.

Get the app itself:

- **Web: [10x.social](https://10x.social)**
- **iOS:** ~~App Store~~ (soon)
- **Android:** ~~Play Store~~ (soon)

## Features Today
- Progressive Web App (PWA) only, with static file hosting on GitHub Pages (`build-and-deploy-gh-pages.yml`)
- README steps for anyone to Fork & Free Host (lowers the barrier to experimenting & contributing)
- Some GitHub Workflows (Actions) skipped until they can be supported (e.g. iOS/Android Builds & Language Translation)

### In Progress
- Re-branding from Bluesky to 10X

### Backlog
- MVP:
  - "10X" in main navigation (left and footer)
  - Tab Navigation
  - Welcome page
  - iframes for: Focus, Openfund, NFTz, Vibehut, HeroSwap, Explorer
  - iframes for: Awesome embedable PWAs/Games/Web3
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
- AI Tokens:
  - Launch AI Tokens (Tokenomics, Owner instructions, Believer instructions)
  - AI Reward Agent (Collect token holdings, issue rewards, post proof)
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
- By default, 10x.social should very similar to the official client (until 10X builder community matures)
  - color and branding are different to distinguish from Bsky social-app
  - analytics are not present (to avoid confusing Bsky)
- Opinionated features behind toggles
- Focus on high impact, low diff size patches
  - Specifically patches that won't require large conflicts to be resolved
- Focus on power users (but all users are welome!)
- Focus on Startups (Founders, Builders, VCs)
- Focus on Tech (Ai, Web3, XR, APIs, Games, etc)
- Focus on experiments & innovation 

## Development Resources
This is a [React Native](https://reactnative.dev/) application, written in the TypeScript programming language. It builds on the `atproto` TypeScript packages (like [`@atproto/api`](https://www.npmjs.com/package/@atproto/api)), code for which is also open source, but in [a different git repository](https://github.com/bluesky-social/atproto). It is regularly rebased on top of new releases of [social-app](https://github.com/bluesky-social/social-app).

There is a small amount of Go language source code (in `./bskyweb/`), for a web service that returns the React Native Web application.

The [Build Instructions](./docs/build.md) are a good place to get started with the app itself.

The Authenticated Transfer Protocol ("AT Protocol" or "atproto") is a decentralized social media protocol. You don't *need* to understand AT Protocol to work with this application, but it can help. Learn more at:

- [Overview and Guides](https://atproto.com/guides/overview)
- [Github Discussions](https://github.com/bluesky-social/atproto/discussions) 👈 Great place to ask questions
- [Protocol Specifications](https://atproto.com/specs/atp)
- [Blogpost on self-authenticating data structures](https://bsky.social/about/blog/3-6-2022-a-self-authenticating-social-protocol)

The Bluesky Social application encompasses a set of schemas and APIs built in the overall AT Protocol framework. The namespace for these "Lexicons" is `app.bsky.*`.

## Contributions

> While we do accept contributions, we prioritize high quality issues and pull requests. Adhering to the below guidelines will ensure a more timely review.

**Rules:**

- We may not respond to your issue or PR.
- We may close an issue or PR without much feedback.
- We may lock discussions or contributions if our attention is getting DDOSed.
- We're not going to provide support for build issues.

**Guidelines:**

- Check for existing issues before filing a new one please.
- Open an issue and give some time for discussion before submitting a PR.
- Stay away from PRs like...
  - Changing "Post" to "Skeet."
  - Refactoring the codebase, e.g., to replace React Query with Redux Toolkit or something.
  - Adding entirely new features without prior discussion. 

Remember, we serve a wide community of users. Our day-to-day involves us constantly asking "which top priority is our top priority." If you submit well-written PRs that solve problems concisely, that's an awesome contribution. Otherwise, as much as we'd love to accept your ideas and contributions, we really don't have the bandwidth. That's what forking is for!

## Forking guidelines

You have our blessing 🪄✨ to fork this application! However, it's very important to be clear to users when you're giving them a fork.

Please be sure to:

- Change all branding in the repository and UI to clearly differentiate from Bluesky.
- Change any support links (feedback, email, terms of service, etc) to your own systems.
- Replace any analytics or error-collection systems with your own so we don't get super confused.

## Security disclosures

If you discover any security issues, please send an email to security@bsky.app. The email is automatically CCed to the entire team and we'll respond promptly.

## Are you a developer interested in building on atproto?

Bluesky is an open social network built on the AT Protocol, a flexible technology that will never lock developers out of the ecosystems that they help build. With atproto, third-party integration can be as seamless as first-party through custom feeds, federated services, clients, and more.

## License (MIT)

See [./LICENSE](./LICENSE) for the full license.

## P.S.

We ❤️ you and all of the ways you support us. Thank you for making Bluesky a great place!

# Have more questions?

DeepWiki (powered by Devin AI) provides up-to-date documentation you can talk to for this repo, click the button below to try it out.

[![Ask DeepWiki](https://deepwiki.com/badge.svg)](https://deepwiki.com/chrisjacob/10xsocial)
