# Google Apps Script Template

## Why use this anyway?
- Apps Script supports event-based triggers (i.e. on Google Form submission, on GSheet edit)
or time-based triggers (i.e. every minute, hour, etc).
- Working with local files in your own editor will always be better and faster than using
the web-based Apps Script editor.
- Especially useful for individuals or organizations that use GSuite products (drive, sheets, docs) extensively.

## Initial setup
1. Enable the Google Apps Script API [here](https://script.google.com/home/usersettings).

2. Run the ff. commands:
```bash
# install dependencies - npm, updated node, clasp
sudo apt install npm
npm i -g n
sudo n stable
npm i -g @google/clasp

# log in to the CLI
clasp login
```

3. Create your own Google OAuth credentials.
    1. Create a Google Cloud Platform project, if not already.
    2. Go to the [APIs & Services > Credentials page](https://console.cloud.google.com/apis/credentials).
    3. Create your own OAuth client ID.
    4. Download the credentials to a `creds.json` file. You will need this in the next section.


## Create a project

1. Initialize the project directory.
> You may also use this template to [create your own GitHub repo](https://github.com/ledesmablt/google-apps-script-template/generate).
```bash
# clone this repository
git clone https://github.com/ledesmablt/google-apps-script-template myproject
cd myproject

# create a new project linked to an existing sheet
clasp create --parentId [sheetId] --title [projectTitle]

# or if a project already exists...
clasp clone [scriptId]

# or if you just wanna try it out
clasp create

# log in using the creds file you created
clasp login --creds creds.json
```

2. Ensure the `appsscript.json` file matches the one from this repo (you can change this as needed).
This has the ff. edits:
    - changes timezone to Asia/Manila
    - adds oauthScopes for "clasp run" command and other common scopes
        - you may add more scopes as needed - File > Project properties > Scopes
        - the first 2 scopes in the file are for pushing and running locally; the rest are for drive, sheets, mail, and `UrlFetchApp` calls
    - sets the executionApi access to `ANYONE` (can be `DOMAIN` or just removed)

3. (optional) Set the apps script project as a Cloud Platform project to enable running locally.
Note that this will not work in [some conditions](https://stackoverflow.com/questions/57692530/google-apps-script-cannot-convert-from-gas-managed-to-specific-cloud-project/61741136#61741136) - you may still push local changes but
`clasp run [functionName]` will not work.
    1. Go to your project's [GCP console settings](https://console.cloud.google.com/iam-admin/settings) to view the project ID and project number.
    2. Run `clasp setting projectId [gcloud project ID]`
    3. Run `clasp open` to open the project in your browser.
    4. Go to Resources > Cloud platform project
    5. Set the cloud project ID to your project number to `[gcloud project number]`


## Development

1. Write your functions in `.js` files. These will get translated to `.gs` files in Apps Script. See the examples in this repo.

2. Push your code to Apps Script with `clasp push -f`.

3. Test run your function/s with `clasp run [functionName]`.
    - Your code must be pushed before running this command, otherwise your local changes will not be captured.
    - You may view the logs by running `clasp logs --watch` or `clasp logs --open`

4. Sync any changes by running `clasp pull`.

5. Triggers (i.e. On form submit) must be added manually in the browser.
    - Run `clasp open` to open the project in your browser.
    - Click the clock icon next to the play button to open project triggers.
    - On the bottom right, click "Add a trigger" and provide the appropriate settings.
    - Click "Save". Your trigger is now live!

## Enabling Typescript ❤️

> Note: Once you use TypeScript, you cannot develop on script.google.com. Visit [this page](https://github.com/google/clasp/blob/master/docs/typescript.md) for more details.

1. Ensure that the `tsconfig.json` and `package.json` files are in the project
directory for proper support & config for Apps Script functions.

2. Install dependencies with `npm install`.

3. Rename all `.js` file extensions to `.ts`

4. Typescript should now be enabled for your project!
