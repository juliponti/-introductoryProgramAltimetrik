## What is GIT?

Git is the most popular version control software and its purpose is to keep a record, control, and organize changes on files in a project as well as coordinate work between multiple developers.

Git and Github go side by side. Github is a development software to locate projects on the cloud using the git version control. This way you can have a project locally (on your computer) and remotely (on Github). These two repositories must be synchronized to avoid conflict when you are working with other developers.
To synchronize these repositories we use a few commands that I will explain later on.

Once you install git, it gives you access to a git terminal and that is the one we are going to use to apply the commands.

# Basic commands

> git version

it tells you which version of git do you have

> git help

It gives you information about commands

> git init

Initialize a new repository on your computer and creates a hidden folder named .git

> git add remote link-to-repository

once we create a repository in GitHub this command will paste it into our local one

> git push -u origin master

this command will push the changes to the remote repository

> git clone link-to-clone

if we have already created a repository with files on Github we can clone it in our local folder using this command

### When we are working in our code editor and we want to save the changes of our files not only locally (ctrl + s) but also remotely these are the commands we should use:

> git status

this way we check which files were modified and not committed (they will be in red)

> git add nameofthefile

with this command, we add one file specifying its name to a place that is will work as a "box" that will be prepared to go to our remote repository when we push it

> git add .

this command is the same as before but using the "." will add ALL the files to the "box"

> git commit -m "first commit"

this command will work as a "label" to the box in which we should describe briefly what changes we made. When it's the first commit it usually the commit says that, if it's not we can use different keywords to begin such as:

- Add
- Create
- Refactor
- Fix
- Release
- Document
- Modify
- Update
- Remove
- Delete

etc...

> git push origin nameOftheBranch

this command will push the "labeled box" to the remote repository and place it into the branch we specify.
When we first create a repository it has one main branch that is called Master. When we work with other people there will be several branches. We have to make sure in which one we want the changes to be saved.

> git pull

we use this command to download the changes we made remotely to have it locally. This can occur when we made changes directly on GitHub or if we want to keep up with changes made by other developers that push theirs to the shared repository

> git fetch
> this command compares the local and remote files and if it were a discrepancy it will ask you to do a git pull to match your local repository with the remote one

> git stash

this command saves temporarily the changes that you have made in the code that you're working on so that you can work on something else and come back later to apply them.

> git stash pop

with this command, the changes that you saved temporarily with git stash will appear again on your code

### To move through different commits we use these commands:

> git reset --mixed f52f3da

with this command will go to a specific commit. Each commit has a unique large code of numbers but if we specify the first seven ones it will recognize it anyway.

> git reset --hard f52f3da

with this command, we go to a specific commit and we erase future changes

> git reflog

show changes even if we delete commits

> git reset --hard f52f3da

we go to a specific commit and we can restore the files

> git reset --hard

we use this command when we want to erase all the changes before doing a commit

# Git branches

> git branch nombreRama
> git checkout -b nuevaRama

we use the first command to create a new branch and the second is a shortcut to create a branch and move to it

> git checkout nombreRama

with this command, we go and move throw branches

> git merge nombreRama
> git merge resourses-integration

if we want to merge a branch we don't have to be in it, for example, if we have the branch master and the branch resources-integration and we want to merge resources-integration to master we have to be in the master to throw this command

> git branch -d nombreRama
> we use this command to delete a branch

# Tags

With tags, we can create versions of our project

> git tag versionAlpha -m "versión alpha"

it creates a new tag

> git tag

enlist all the existing tags

> git tag -d nombreTags

delete a specific tag

> git tag -a nombreTag f52f3da -m "version alpha"

does a new tag based on the previous commit. In this case for example uses the "f52f3da" commit. It could be other

> git show nombreTag

it shows information about the tag

## Git hooks

Gits hooks are scripts, a sequence of instructions that is interpreted by another program rather than by the computer processor, that git executes before or after events such as **commit** and **push**. They are a built-in feature which means that there is no need to download anything, they are run locally.
Every Git repository has a .git/hooks folder with a script for each hook you can attach to. You're free to change or update these scripts as necessary, and Git will execute them when those events occur.
Some of these hooks are:

- **pre-commit**: check the commit message for spelling errors
- **pre-recieve**: enforce project coding standards
- **post-commit**: email/SMS team members of a new commit
- **posr-recieve**: push the code to production.
