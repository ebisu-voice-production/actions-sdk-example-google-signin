# Account Linking (Google Sign-in) Example
You need `gactions cli` to set up your project. If you do not have the environment to use gactions, you can install [here](https://developers.google.com/actions/tools/gactions-cli).
## Set up
- Run `$ npm run firebase -- login`
- Run `$ npm run firebase -- use --add [YOUR_PROJECT]` (If you already set a project, just run `$ npm run firebase -- use [YOUR_PROJECT]`)
- Set client id `$ CLIENT_ID=[client id] npm run set-client-id`
  - Windows: `$ npm run firebase functions:config:set client.id=[client id]`
  - See detail [here](https://developers.google.com/actions/identity/google-sign-in#configure_the_project) about client id
- Run `$ npm run deploy`
- Create `action.json` based on `action.template.json` (Replace LOCALE and YOUR_ENDPOINT_URL with yours)
- Run `deploy-action` script
  - Mac OS, Linux
    - `$ PROJECT=[YOUR_PROJECT] npm run deploy-action`
  - Windows
    - `$ gactions update --action_package action.json --project [YOUR_PROJECT]`

- You can remove linking from [here](https://myaccount.google.com/permissions)
