# 10X Social App

This is a fork of the [Bluesky Social app](https://github.com/bluesky-social/social-app).

This fork is hosted on GitHub Pages with a Custom Domain: [https://10x.social](https://10x.social)

Want your own **FREE** hosted fork? *(it's fun! ...no developer environment required)*

## 10 Steps to Fork & Host for FREE

1. Create an account on GitHub, login and then create a new Organization (for FREE) via [https://github.com/account/organizations/new?plan=free](https://github.com/account/organizations/new?plan=free). Note: your "Organization Name" will be used in your URL e.g. "10X Example Name" will be https://10x-example-name.github.io
2. Go to [https://github.com/chrisjacob/10xsocial](https://github.com/chrisjacob/10xsocial), click the "Fork" button, then on the "Create a fork" page: **Owner** = select your "Organisation Name" e.g. "10X-Example-Name", then **Repository Name** = your "Organization Name".github.io e.g. "10x-example-name.github.io" (must be lower case, and any spaces are replaced with hyphens), then click "Create fork".
3. Now on your forked repo page (e.g. [https://github.com/10X-Example-Name/10x-example-name.github.io](https://github.com/10X-Example-Name/10x-example-name.github.io)) click the "Actions" tab
4. Click "I understand my workflows, go ahead and enable them" (FYI, the workflows are safe)
5. Click on the "Code" tab, scroll down to the "README" and click on the "Pencil" (Edit file) button 
6. Make a minor edit to the README file (e.g. add a space character), then click the "Commit changes..." button, then "Commit changes" (the default values are fine)
7. Click on the "Actions" tab, you should see some skipped workflows (Grey icon), and some workflows "In progress" (Yellow icon)
8. Wait about 7 minutes for the "Build and Deploy GitHub Pages" workflow to complete successfully (Green icon)
9. Click on the "Settings" tab, then the "Pages" sub-menu. Update fields to: **Source** = "Deploy from a branch", **Branch** = "gh-pages", **Folder** = "/ (root)", then click the "Save" button
10. Wait a minute then refresh the page... you should see "Your site is live at e.g. [https://10x-example-name.github.io/](https://10x-example-name.github.io/)"

Congratulations you did it! Go visit your site!

p.s. If your site shows the "README" file content, then wait another minute and refresh the page. If that fails, repeat steps 5 to 10. 

## (Optional) Setup a Custom Domain

1. Register a domain name e.g. "my-awesome-app.com" via a domain registrar e.g. [https://www.namecheap.com](https://www.namecheap.com)
2. In GitHub, click on the "Settings" tab, then the "Pages" sub-menu. 
3. Under the "Custom domain" section enter your domain e.g. "my-awesome-app.com" and click "Save"
4. Setup your DNS: [Configure an apex domain](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site) and [Configure the www subdomain variant](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)
5. Then [Verifying your custom domain for GitHub Pages](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/verifying-your-custom-domain-for-github-pages)

p.s. if you get stuck, please [read the docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site), Google it, ask ChatGPT, or reach out to me and I'll try to help you out.

---

# TODO ...I need to update the rest of the README file.

# Bluesky Social App

Welcome friends! This is the codebase for the Bluesky Social app.

Get the app itself:

- **Web: [bsky.app](https://bsky.app)**
- **iOS: [App Store](https://apps.apple.com/us/app/bluesky-social/id6444370199)**
- **Android: [Play Store](https://play.google.com/store/apps/details?id=xyz.blueskyweb.app)**

## Development Resources

This is a [React Native](https://reactnative.dev/) application, written in the TypeScript programming language. It builds on the `atproto` TypeScript packages (like [`@atproto/api`](https://www.npmjs.com/package/@atproto/api)), code for which is also open source, but in [a different git repository](https://github.com/bluesky-social/atproto).

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
