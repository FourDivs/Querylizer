# Contributing to Querylizer

We love your input!😇<br>
We want to make contributing to this project as easy and transparent as possible, whether it's:

- Reporting a bug 🐞
- Discussing the current state of the code 🧑‍💻
- Submitting a fix 🔧
- Proposing New Feature 🚀

For Contribution we strictly follow [GitHub Flow](https://guides.github.com/introduction/flow/)

## Contents

- [Setting Up the Project](#setting-up-the-project)
- [How To Start Contributing](#how-to-start-contributing)
- [Reporting a Bug](#reporting-a-bug)
- [Proposing New Feature](#proposing-new-feature)
- [Want to have some discussion with Us](#want-to-have-some-discussion-with-us)

### Setting Up the Project

This is important and first step for contributing to project 😊

- [Fork](https://docs.github.com/en/github/getting-started-with-github/fork-a-repo#fork-an-example-repository) the Repository
- Clone Your Forked copy -<br>
  Open up the GitBash/Command Line/Terminal and type in
  `git clone https://github.com/[YOUR-USERNAME]/Querylizer.git`

- Navigate to the directory of project -
  `cd Querylizer/`

- Create a new branch -
  `git checkout -b [branch_name]`
- ## Steps for setting up Frontend
- If you don't have virtualenv already installed -
  `pip install virtualenv`

- Create a new environment -
  `virtualenv querylizerenv`

- Activate the environment -

  - For Linux/Unix OS : `source querylizerenv/bin/activate`
  - For Windows OS: `querylizerenv\Scripts\activate`

- cd frontend/

- Install all dependencies -
  `npm install / yarn install`
- `npm start / yarn run start` - You're good to Go!!

- ## Steps for setting up Backend
- Note : Follow this steps only if you are contributing to Backend of Project if not then move on to [Steps for setting up Frontend](#user-content-steps-for-setting-up-frontend)
- If you don't have virtualenv already installed -
  `pip install virtualenv`

- Create a new environment -
  `virtualenv querylizerenv`

- Activate the environment -

  - For Linux/Unix OS : `source querylizerenv/bin/activate`
  - For Windows OS: `querylizerenv\Scripts\activate`

- cd backend/

- Install requirements -
  `pip install -r requirements.txt`

- Open `backend/settings.py`

- Set `SECRET_KEY = "RANDOM_KEY"`

- Set `ALLOWED_HOSTS = ['querylizer.herokuapp.com', '127.0.0.1', 'localhost']`

- Make Migrations -
  `python manage.py migrate`

- `python manage.py runserver` - You're good to Go!!

## How To Start Contributing

After [Setting Up Project](#user-content-setting-up-the-project) it's time to Contribute 🥰

- Please go through [Github Flow](https://guides.github.com/introduction/flow/), it will help you a lot if not already :)

- Take up an [Issue](https://github.com/kothariji/Querylizer/issues) or [Raise](https://github.com/kothariji/Querylizer/issues/new/choose) one.

- Discuss your proposed changes & Get assigned.

- If your changes are approved, do the changes in branch `[branch_name]`.

- Still in branch `[branch_name].`

- **Stage and Commit only the required files.**
  Stage : `git add file_name`
  Commit : `git commit -m "YOUR_MESSAGE"`
- `git push origin [branch_name] -u`

- Once you push the changes to your repo, Go to your forked repository, the **Compare & pull request** button will appear in GitHub Click on it A new screen will open up.

- Open a pull request by clicking the **Create Pull Request** button.

- From here maintainers review your work,they can merge it if it is good, or they may ask you for some changes.

- If your PR is accepted, it is automatically deployed once merged. :)

- That's it!

**Tip**: To keep your Fork Repo all branches updated with Upstream use [this](https://upriver.github.io/).

## Reporting A Bug

- Head over [here](https://github.com/kothariji/Querylizer/issues/new?assignees=&labels=type%3Abug&template=bug_report.md&title=)
- Give appropriate Title and Description for your issue.
- When you're finished, click Submit new issue.
- After creating the issue you have to wait until the project maintainer assigns the issue to you.

## Proposing New Feature

- Head over [here](https://github.com/kothariji/Querylizer/issues/new?assignees=&labels=&template=feature_request.md&title=)
- Give appropriate Title and Description for your issue.
- When you're finished, click Submit new issue.
- After creating the issue you have to wait until the project maintainer assigns the issue to you.

## Want to have some discussion with Us

Feel free to start a New Discussion [here](https://github.com/kothariji/Querylizer/discussions) 🤗
There to answer your all doubts :)
