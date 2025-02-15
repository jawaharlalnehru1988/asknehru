import { JsModel } from "../javascript/javascript/jstopics";

export class GitContent{
    gitContent = [
        {
            title: "Git Config", topics: [
            "Set User Name",
            "Set User Email",
            "Set Global Config",
            "Set Local Config"
            ]
        },
        {
            title: "git Setup", topics: [
            "git init",
            "git clone",
            "git remote add",
            "git fetch",
            "git merge",
            "git rebase"
        ]                                                      
        },
        {
            title: "git Branch", topics: [
            "git branch",
            "git checkout",
            "git merge",
            "git rebase",
            "git push",
            "git pull",
            "git fetch",
            "git merge",
            "git rebase",
            "git push",                                     
            ]
        },
        {
            title: "git remote", topics: [
            "git remote add",
            "git remote remove",
            "git remote update",
            "git remote rename",
            "git remote set-url",
            "git remote get-url",
            "git remote set-default",
            "git remote get-default",
            "git remote show",
            "git remote prune",
            "git remote prune origin",
            "git remote prune origin --dry-run",
            "git remote prune origin --dry-run --verbose",
            "git remote prune origin --dry-run --verbose --progress",
            ]
        },
        {
            title: "git Staging", topics: [
            "git add",
            "git add --all",
            "git add --interactive",
            "git add --patch",
            "git add --update",
            "git add --verbose",
            "git add --dry-run",
            "git add --dry-run --verbose",
            "git add --dry-run --verbose --patch",
            "git add --dry-run --verbose --patch --interactive",
            ]
        },
        {
            title: "git Commit", topics: [
            "git commit",
            "git commit --verbose",
            "git commit --dry-run",
            "git commit --dry-run --verbose",
            "git commit --all",
            "git commit --all --verbose",
            "git commit --all --dry-run",
            "git commit --all --dry-run --verbose",
            "git commit --verbose --allow-empty",
            "git commit --verbose --allow-empty --dry-run",
            "git commit --verbose --allow-empty --dry-run --verbose",
            "git commit --allow-empty",
            "git commit --allow-empty --dry-run",
            "git commit --allow-empty --dry-run --verbose",
            "git commit --allow-empty --verbose",
            ]
        },
        {
            title: "git Reset", topics: [
            "git reset",
            "git reset --soft",
            "git reset --hard",
            "git reset --mixed",
            "git reset --soft HEAD^",
            "git reset --hard HEAD^",
            "git reset --mixed HEAD^",
            "git reset --soft HEAD~",
            "git reset --hard HEAD~",
            "git reset --mixed HEAD~",
            "git reset --soft HEAD~2",
            "git reset --hard HEAD~2",
            "git reset --mixed HEAD~2",
            "git reset --soft HEAD~3",
            "git reset --hard HEAD~3",]
        },
        {
            title: "git Revert", topics: [
            "git revert",
            "git revert --no-commit",
            "git revert --no-commit --no-edit",
            "git revert --no-commit --no-edit --source",
            "git revert --no-commit --no-edit --source HEAD^",
            "git revert --no-commit --no-edit --source HEAD~",
            "git revert --no-commit --no-edit --source HEAD~2",
            "git revert --no-commit --no-edit --source HEAD~3",
            "git revert --no-commit --no-edit --source HEAD~4",
            "git revert --no-commit --no-edit --source HEAD~5",
            ]
        },
        {
            title: "git Stash", topics: [
            "git stash",
            "git stash save",
            "git stash apply",
            "git stash pop",
            "git stash clear",
            "git stash list",
            "git stash show",
            "git stash branch",
            "git stash drop",
            "git stash branch",
            ]
        },
        {
            title: "git Merge", topics: [
            "git merge",
            "git merge --no-ff",
            "git merge --abort",
            "git merge --continue",
            "git merge --abort",
            "git merge --continue",
            "git merge --abort",
            "git merge --continue",
            ]
        },
        {
            title: "git Rebase", topics: [
            "git rebase",
            "git rebase --abort",
            "git rebase --continue",
            "git rebase --skip",
            "git rebase --edit-todo",
            ]
        },
        {
            title: "git ignore", topics: [
            "git ignore",
            "git ignore add",
            "git ignore remove",
            "git ignore list",
            "git ignore add --global",
            "git ignore remove --global",
            "git ignore list --global",
            "git ignore add --local",
            "git ignore remove --local",
            "git ignore list --local",
            ]
        },
        {
            title: "git log", topics: [
            "git log",
            "git log --oneline",
            "git log --oneline --graph",
            "git log --oneline --graph --all",
            "git log --oneline --graph --all --decorate",
            "git log --oneline --graph --all --decorate --simplify-by-decoration",
            "git log --oneline --graph --all --decorate --simplify-by-decoration --oneline",
            "git log --oneline --graph --all --decorate --simplify-by-decoration --oneline --abbrev-commit",
            ]
        },
        {
            title: "git diff", topics: [
            "git diff",
            "git diff --staged",
            "git diff --cached",
            "git diff --cached --staged",
            "git diff --name-only",
            "git diff --name-only --staged",
            "git diff --name-only --cached",
            "git diff --name-only --cached --staged",
            "git diff --name-status",
            "git diff --name-status --staged",
            "git diff --name-status --cached",
            "git diff --name-status --cached --staged",
            ]
        },
        {
            title: "git show", topics: [
            "git show",
            "git show HEAD",
            "git show HEAD^",
            "git show HEAD~",
            "git show HEAD~2",
            ]
        },
        {
            title: "git tag", topics: [
            "git tag",
            "git tag -a",
            "git tag -d",
            "git tag -s",
            "git tag -v",
            "git tag -l",
            "git tag -n",
            "git tag -n1",
            "git tag -n5",
            ]
        },
        {
            title: "git blame", topics: [
            "git blame",
            "git blame --line-porcelain",
            "git blame --porcelain",
            "git blame --porcelain --line-porcelain",
            ]
        },
        {
            title: "git grep", topics: [
            "git grep",
            "git grep --line-number",
            "git grep --line-number --fixed-strings",
            "git grep --line-number --fixed-strings --ignore-case",
            "git grep --line-number --fixed-strings --ignore-case --color=always",
            ]
        },
        {
            title: "git archive", topics: [
            "git archive",
            "git archive --format=tar",
            "git archive --format=tar.gz",
            "git archive --format=tar.gz --remote",
            "git archive --format=zip",
            "git archive --format=zip --remote",
            ]
        },
        {
            title: "git clean", topics: [
            "git clean",
            "git clean -f",
            "git clean -f -d",
            "git clean -f -d -x",
            "git clean -f -d -x --exclude='*.log'",
            "git clean -f -d -x --exclude='*.log' --exclude='*.txt'",
            "git clean -f -d -x --exclude='*.log' --exclude='*.txt' --exclude='*.jpg'",
            "git clean -f -d -x --exclude='*.log' --exclude='*.txt' --exclude='*.jpg' --exclude='*.png'",
            ]
        },
        {
            title: "git restore", topics: [
            "git restore",
            "git restore --staged",
            ]
        },

    ]                                                      
}