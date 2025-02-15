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
        {
            title: "git checkout", topics: [
            "git checkout",
            "git checkout -b",
            "git checkout --",
            "git checkout -- <file>",
            "git checkout <file>",
            "git checkout <branch>",
            "git checkout <commit>",
            ]
        },
        {
            title: "git push", topics: [
            "git push",
            "git push --dry-run",
            "git push --force",
            "git push --force-with-lease",
            "git push --set-upstream",
            ]
        },
        {
            title: "git pull", topics: [
            "git pull",
            "git pull --rebase",
            "git pull --rebase --autostash",
            "git pull --rebase --autostash --no-edit",
            "git pull --rebase --autostash --no-edit --no-ff",
            "git pull --rebase --autostash --no-edit --no-ff --allow-unrelated-histories",
            ]
        }
    ];
    
    topicExplained = [
        {
            topic: "Git Config", explain: `<div style="font-family: 'Arial', sans-serif; margin: auto; padding: 20px; background: linear-gradient(135deg, #fdfbfb, #f1f8e9); border-radius: 12px; box-shadow: 0px 4px 10px rgba(0,0,0,0.1);">
    <h1 style="color: #ffffff; text-align: center; background: #2c3e50; padding: 15px; border-radius: 8px; text-shadow: 2px 2px 4px rgba(0,0,0,0.2);">
        ⚙️ Git Config - Setting Up Your Git Environment
    </h1>

    <p style="font-size: 17px; line-height: 1.8; color: #333; padding: 10px; background: #ffffff; border-left: 5px solid #2c3e50; border-radius: 6px;">
        The <strong>git config</strong> command is used to configure Git settings at different levels. It helps in setting up user details, aliases, default behaviors, and other preferences for a seamless Git experience.
    </p>

    <h2 style="color: #e74c3c; background: #f8d7da; padding: 10px; border-radius: 6px;">🔹 Config Levels in Git</h2>
    <ul style="padding-left: 20px;">
        <li><strong>System-Level:</strong> Applies to all users on the system (<code>/etc/gitconfig</code>).</li>
        <li><strong>Global-Level:</strong> Applies to a specific user (~/.gitconfig or ~/.config/git/config).</li>
        <li><strong>Local-Level:</strong> Specific to a repository (<code>.git/config</code> inside a repo).</li>
    </ul>

    <h2 style="color: #3498db; background: #d6eaf8; padding: 10px; border-radius: 6px;">🔹 Setting Up User Information</h2>
    <p>Configure your name and email for commits:</p>
    <pre style="background: #272822; color: #f8f8f2; padding: 10px; border-radius: 6px;">
    <code class="language-bash" codeHighlight>
    git config --global user.name "Your Name"
    git config --global user.email "your.email@example.com"
    </code>
    </pre>

    <h2 style="color: #27ae60; background: #d4edda; padding: 10px; border-radius: 6px;">🔹 Checking Git Configuration</h2>
    <p>To check all configured values:</p>
    <pre style="background: #272822; color: #f8f8f2; padding: 10px; border-radius: 6px;">
    <code class="language-bash" codeHighlight>
    git config --list
    </code>
    </pre>

    <h2 style="color: #f39c12; background: #fff3cd; padding: 10px; border-radius: 6px;">🔹 Configuring Default Branch Name</h2>
    <p>Set a default branch name instead of 'master':</p>
    <pre style="background: #272822; color: #f8f8f2; padding: 10px; border-radius: 6px;">
    <code class="language-bash" codeHighlight>
    git config --global init.defaultBranch main
    </code>
    </pre>

    <h2 style="color: #8e44ad; background: #f5e6ff; padding: 10px; border-radius: 6px;">🔹 Configuring an Alias</h2>
    <p>Set up a shortcut for frequently used commands:</p>
    <pre style="background: #272822; color: #f8f8f2; padding: 10px; border-radius: 6px;">
    <code class="language-bash" codeHighlight>
    git config --global alias.st status
    git config --global alias.cm "commit -m"
    </code>
    </pre>

    <h2 style="color: #e67e22; background: #fae5d3; padding: 10px; border-radius: 6px;">🔹 Configuring Credential Caching</h2>
    <p>To avoid entering your credentials repeatedly:</p>
    <pre style="background: #272822; color: #f8f8f2; padding: 10px; border-radius: 6px;">
    <code class="language-bash" codeHighlight>
    git config --global credential.helper cache
    </code>
    </pre>

    <h2 style="color: #2c3e50; background: #d6eaf8; padding: 10px; border-radius: 6px;">🔹 Editing Git Configuration</h2>
    <p>Edit the global Git config file using:</p>
    <pre style="background: #272822; color: #f8f8f2; padding: 10px; border-radius: 6px;">
    <code class="language-bash" codeHighlight>
    git config --global --edit
    </code>
    </pre>

    <p style="margin-top: 20px; font-weight: bold; color: #2c3e50; background: #f1f1f1; padding: 15px; border-radius: 6px;">
        🎯 Setting up Git properly is crucial for a smooth workflow. Master these configurations to enhance your development experience!
    </p>
</div>`
        },
        {
            topic: "git Setup",
            explain: `<div style="font-family: 'Arial', sans-serif; margin: auto; padding: 20px; background: linear-gradient(135deg, #f9f9f9, #e3f2fd); border-radius: 12px; box-shadow: 0px 4px 10px rgba(0,0,0,0.1);">
    <h1 style="color: #2c3e50; text-align: center; background: #3498db; padding: 15px; border-radius: 8px; color: white; text-shadow: 2px 2px 4px rgba(0,0,0,0.2);">
        🚀 Git Setup Related Commands
    </h1>

    <p style="font-size: 17px; line-height: 1.8; color: #444; padding: 10px; background: #ffffff; border-left: 5px solid #3498db; border-radius: 6px;">
        Setting up Git properly is crucial before starting a project. Git provides a set of essential commands to configure user details, initialize repositories, and establish remote connections. Let's explore the key setup commands! 
    </p>

    <h2 style="color: #e74c3c; background: #f8d7da; padding: 10px; border-radius: 6px;">🔹 Configuring Git User Details</h2>
    <p>Before committing code, configure your identity to ensure proper attribution.</p>
    <pre style="background: #272822; color: #f8f8f2; padding: 10px; border-radius: 6px;">
    <code class="language-bash" codeHighlight>
    # Set user name globally
    git config --global user.name "Your Name"

    # Set user email globally
    git config --global user.email "your@email.com"
    </code>
    </pre>

    <h2 style="color: #27ae60; background: #d4edda; padding: 10px; border-radius: 6px;">🔹 Initializing a New Git Repository</h2>
    <p>To start version control in a project, initialize a Git repository:</p>
    <pre style="background: #272822; color: #f8f8f2; padding: 10px; border-radius: 6px;">
    <code class="language-bash" codeHighlight>
    # Initialize a Git repository in the current directory
    git init
    </code>
    </pre>

    <h2 style="color: #f39c12; background: #fff3cd; padding: 10px; border-radius: 6px;">🔹 Cloning an Existing Repository</h2>
    <p>If a project already exists on a remote server (like GitHub), clone it locally:</p>
    <pre style="background: #272822; color: #f8f8f2; padding: 10px; border-radius: 6px;">
    <code class="language-bash" codeHighlight>
    # Clone a repository from GitHub
    git clone https://github.com/user/repository.git
    </code>
    </pre>

    <h2 style="color: #8e44ad; background: #f5e6ff; padding: 10px; border-radius: 6px;">🔹 Checking Git Configuration</h2>
    <p>Verify current Git configurations using:</p>
    <pre style="background: #272822; color: #f8f8f2; padding: 10px; border-radius: 6px;">
    <code class="language-bash" codeHighlight>
    git config --list
    </code>
    </pre>

    <h2 style="color: #2c3e50; background: #d6eaf8; padding: 10px; border-radius: 6px;">🔹 Connecting to a Remote Repository</h2>
    <p>To link a local repository to a remote origin:</p>
    <pre style="background: #272822; color: #f8f8f2; padding: 10px; border-radius: 6px;">
    <code class="language-bash" codeHighlight>
    git remote add origin https://github.com/user/repository.git
    </code>
    </pre>

    <h2 style="color: #d35400; background: #fdebd0; padding: 10px; border-radius: 6px;">🔹 Checking Remote Repository Details</h2>
    <p>View all linked remote repositories:</p>
    <pre style="background: #272822; color: #f8f8f2; padding: 10px; border-radius: 6px;">
    <code class="language-bash" codeHighlight>
    git remote -v
    </code>
    </pre>

    <p style="margin-top: 20px; font-weight: bold; color: #2c3e50; background: #f1f1f1; padding: 15px; border-radius: 6px;">
        🎯 Setting up Git correctly is the foundation of smooth version control. Whether you’re working alone or collaborating with a team, understanding these commands will streamline your workflow!
    </p>
</div>
`
        },
        {
            topic: "git Branch",
            explain: `<div style="font-family: 'Arial', sans-serif; margin: auto; padding: 20px; background: linear-gradient(135deg, #fdfbfb, #e3f2fd); border-radius: 12px; box-shadow: 0px 4px 10px rgba(0,0,0,0.1);">
    <h1 style="color: #ffffff; text-align: center; background: #8e44ad; padding: 15px; border-radius: 8px; text-shadow: 2px 2px 4px rgba(0,0,0,0.2);">
        🌿 Git Branch and Its Use Cases
    </h1>

    <p style="font-size: 17px; line-height: 1.8; color: #333; padding: 10px; background: #ffffff; border-left: 5px solid #8e44ad; border-radius: 6px;">
        A <strong>branch</strong> in Git is like a separate line of development. It allows developers to work on different features or fixes simultaneously without affecting the main codebase.
    </p>

    <h2 style="color: #3498db; background: #d6eaf8; padding: 10px; border-radius: 6px;">🔹 What is a Git Branch?</h2>
    <p>
        In Git, a branch represents an independent line of development. It helps developers manage new features, bug fixes, and experimental changes in an organized way.
    </p>

    <h2 style="color: #27ae60; background: #d4edda; padding: 10px; border-radius: 6px;">🔹 Creating and Switching Branches</h2>
    <p>Create a new branch and switch to it:</p>
    <pre style="background: #272822; color: #f8f8f2; padding: 10px; border-radius: 6px;">
    <code class="language-bash" codeHighlight>
    # Create a new branch
    git branch feature-branch

    # Switch to the new branch
    git checkout feature-branch

    # OR (Recommended)
    git switch feature-branch
    </code>
    </pre>

    <h2 style="color: #f39c12; background: #fff3cd; padding: 10px; border-radius: 6px;">🔹 Viewing All Branches</h2>
    <p>To list all branches in a repository:</p>
    <pre style="background: #272822; color: #f8f8f2; padding: 10px; border-radius: 6px;">
    <code class="language-bash" codeHighlight>
    git branch   # Lists all local branches

    git branch -r   # Lists all remote branches

    git branch -a   # Lists both local and remote branches
    </code>
    </pre>

    <h2 style="color: #e74c3c; background: #f8d7da; padding: 10px; border-radius: 6px;">🔹 Merging Branches</h2>
    <p>To combine changes from one branch into another:</p>
    <pre style="background: #272822; color: #f8f8f2; padding: 10px; border-radius: 6px;">
    <code class="language-bash" codeHighlight>
    # Switch to the branch where you want to merge changes
    git checkout main

    # Merge the feature branch into main
    git merge feature-branch
    </code>
    </pre>

    <h2 style="color: #8e44ad; background: #f5e6ff; padding: 10px; border-radius: 6px;">🔹 Deleting Branches</h2>
    <p>Once a branch is no longer needed, delete it:</p>
    <pre style="background: #272822; color: #f8f8f2; padding: 10px; border-radius: 6px;">
    <code class="language-bash" codeHighlight>
    # Delete a local branch
    git branch -d feature-branch

    # Force delete a branch (if it has unmerged changes)
    git branch -D feature-branch

    # Delete a remote branch
    git push origin --delete feature-branch
    </code>
    </pre>

    <h2 style="color: #2c3e50; background: #d6eaf8; padding: 10px; border-radius: 6px;">🔹 Use Cases of Git Branching</h2>
    <ul style="padding-left: 20px;">
        <li><strong>Feature Development:</strong> Work on new features without affecting the main branch.</li>
        <li><strong>Bug Fixing:</strong> Quickly create a branch to fix bugs without disrupting ongoing work.</li>
        <li><strong>Code Reviews:</strong> Developers can create branches for review before merging.</li>
        <li><strong>Experimentation:</strong> Try out new ideas without worrying about breaking the main code.</li>
        <li><strong>Team Collaboration:</strong> Multiple developers can work on different branches simultaneously.</li>
    </ul>

    <p style="margin-top: 20px; font-weight: bold; color: #2c3e50; background: #f1f1f1; padding: 15px; border-radius: 6px;">
        🎯 Branching is a powerful Git feature that enhances team collaboration, parallel development, and code stability. Mastering it will help you manage projects efficiently!
    </p>
</div>
`
        },
        {
            topic: "git remote",
            explain: `<div style="font-family: 'Arial', sans-serif; margin: auto; padding: 20px; background: linear-gradient(135deg, #fdfbfb, #f1f8e9); border-radius: 12px; box-shadow: 0px 4px 10px rgba(0,0,0,0.1);">
    <h1 style="color: #ffffff; text-align: center; background: #2c3e50; padding: 15px; border-radius: 8px; text-shadow: 2px 2px 4px rgba(0,0,0,0.2);">
        🌍 Git Remote - Connecting to Remote Repositories
    </h1>

    <p style="font-size: 17px; line-height: 1.8; color: #333; padding: 10px; background: #ffffff; border-left: 5px solid #2c3e50; border-radius: 6px;">
        A <strong>Git remote</strong> is a reference to a remote repository where your code is stored. It allows you to collaborate with others by pushing and pulling code from a shared repository.
    </p>

    <h2 style="color: #e74c3c; background: #f8d7da; padding: 10px; border-radius: 6px;">🔹 Viewing Existing Remote Repositories</h2>
    <p>To list all remote repositories linked to your local repo:</p>
    <pre style="background: #272822; color: #f8f8f2; padding: 10px; border-radius: 6px;">
    <code class="language-bash" codeHighlight>
    git remote -v
    </code>
    </pre>

    <h2 style="color: #3498db; background: #d6eaf8; padding: 10px; border-radius: 6px;">🔹 Adding a Remote Repository</h2>
    <p>To link your local repository to a remote one (e.g., GitHub, GitLab, Bitbucket):</p>
    <pre style="background: #272822; color: #f8f8f2; padding: 10px; border-radius: 6px;">
    <code class="language-bash" codeHighlight>
    git remote add origin https://github.com/username/repository.git
    </code>
    </pre>

    <h2 style="color: #27ae60; background: #d4edda; padding: 10px; border-radius: 6px;">🔹 Renaming a Remote</h2>
    <p>To rename an existing remote:</p>
    <pre style="background: #272822; color: #f8f8f2; padding: 10px; border-radius: 6px;">
    <code class="language-bash" codeHighlight>
    git remote rename oldname newname
    </code>
    </pre>

    <h2 style="color: #f39c12; background: #fff3cd; padding: 10px; border-radius: 6px;">🔹 Removing a Remote</h2>
    <p>To remove a remote connection:</p>
    <pre style="background: #272822; color: #f8f8f2; padding: 10px; border-radius: 6px;">
    <code class="language-bash" codeHighlight>
    git remote remove origin
    </code>
    </pre>

    <h2 style="color: #8e44ad; background: #f5e6ff; padding: 10px; border-radius: 6px;">🔹 Fetching Changes from a Remote</h2>
    <p>To fetch the latest changes from a remote repository:</p>
    <pre style="background: #272822; color: #f8f8f2; padding: 10px; border-radius: 6px;">
    <code class="language-bash" codeHighlight>
    git fetch origin
    </code>
    </pre>

    <h2 style="color: #e67e22; background: #fae5d3; padding: 10px; border-radius: 6px;">🔹 Pushing Local Changes to a Remote</h2>
    <p>To push your changes to a remote repository:</p>
    <pre style="background: #272822; color: #f8f8f2; padding: 10px; border-radius: 6px;">
    <code class="language-bash" codeHighlight>
    git push origin main
    </code>
    </pre>

    <h2 style="color: #2c3e50; background: #d6eaf8; padding: 10px; border-radius: 6px;">🔹 Pulling Changes from a Remote</h2>
    <p>To pull the latest changes from a remote repository:</p>
    <pre style="background: #272822; color: #f8f8f2; padding: 10px; border-radius: 6px;">
    <code class="language-bash" codeHighlight>
    git pull origin main
    </code>
    </pre>

    <p style="margin-top: 20px; font-weight: bold; color: #2c3e50; background: #f1f1f1; padding: 15px; border-radius: 6px;">
        🚀 Managing Git remotes effectively allows seamless collaboration and synchronization with repositories. Master these commands to work with Git more efficiently!
    </p>
</div>
`
        },
        {
            topic: "git Staging",
            explain: `<div style="font-family: 'Arial', sans-serif; margin: auto; padding: 20px; background: linear-gradient(135deg, #fdfbfb, #e3f2fd); border-radius: 12px; box-shadow: 0px 4px 10px rgba(0,0,0,0.1);">
    <h1 style="color: #ffffff; text-align: center; background: #2c3e50; padding: 15px; border-radius: 8px; text-shadow: 2px 2px 4px rgba(0,0,0,0.2);">
        🚀 Git Staging - Managing Your Changes Efficiently
    </h1>

    <p style="font-size: 17px; line-height: 1.8; color: #333; padding: 10px; background: #ffffff; border-left: 5px solid #2c3e50; border-radius: 6px;">
        The <strong>Git Staging Area</strong> acts as a middle ground between your working directory and the repository. It lets you prepare changes before committing, helping maintain clean and controlled commits.
    </p>

    <h2 style="color: #e74c3c; background: #f8d7da; padding: 10px; border-radius: 6px;">🔹 Checking the Status of Changes</h2>
    <p>To see which files have been modified or staged:</p>
    <pre style="background: #272822; color: #f8f8f2; padding: 10px; border-radius: 6px;">
    <code class="language-bash" codeHighlight>
    git status
    </code>
    </pre>

    <h2 style="color: #3498db; background: #d6eaf8; padding: 10px; border-radius: 6px;">🔹 Adding Files to the Staging Area</h2>
    <p>To stage a specific file:</p>
    <pre style="background: #272822; color: #f8f8f2; padding: 10px; border-radius: 6px;">
    <code class="language-bash" codeHighlight>
    git add filename.txt
    </code>
    </pre>

    <p>To stage all modified files:</p>
    <pre style="background: #272822; color: #f8f8f2; padding: 10px; border-radius: 6px;">
    <code class="language-bash" codeHighlight>
    git add .
    </code>
    </pre>

    <h2 style="color: #27ae60; background: #d4edda; padding: 10px; border-radius: 6px;">🔹 Viewing Staged Files</h2>
    <p>To see which files are currently staged for commit:</p>
    <pre style="background: #272822; color: #f8f8f2; padding: 10px; border-radius: 6px;">
    <code class="language-bash" codeHighlight>
    git diff --staged
    </code>
    </pre>

    <h2 style="color: #f39c12; background: #fff3cd; padding: 10px; border-radius: 6px;">🔹 Removing Files from Staging</h2>
    <p>To unstage a file but keep the changes in your working directory:</p>
    <pre style="background: #272822; color: #f8f8f2; padding: 10px; border-radius: 6px;">
    <code class="language-bash" codeHighlight>
    git reset filename.txt
    </code>
    </pre>

    <p>To unstage all files:</p>
    <pre style="background: #272822; color: #f8f8f2; padding: 10px; border-radius: 6px;">
    <code class="language-bash" codeHighlight>
    git reset
    </code>
    </pre>

    <h2 style="color: #8e44ad; background: #f5e6ff; padding: 10px; border-radius: 6px;">🔹 Committing Staged Changes</h2>
    <p>Once you're satisfied with your changes, commit them:</p>
    <pre style="background: #272822; color: #f8f8f2; padding: 10px; border-radius: 6px;">
    <code class="language-bash" codeHighlight>
    git commit -m "Your meaningful commit message"
    </code>
    </pre>

    <h2 style="color: #2c3e50; background: #d6eaf8; padding: 10px; border-radius: 6px;">🔹 Skipping the Staging Area</h2>
    <p>You can commit changes directly without adding them to the staging area:</p>
    <pre style="background: #272822; color: #f8f8f2; padding: 10px; border-radius: 6px;">
    <code class="language-bash" codeHighlight>
    git commit -a -m "Commit message"
    </code>
    </pre>

    <p style="margin-top: 20px; font-weight: bold; color: #2c3e50; background: #f1f1f1; padding: 15px; border-radius: 6px;">
        🎯 Understanding Git Staging helps you structure your commits and keep your repository clean. Master these commands to improve your Git workflow!
    </p>
</div>
`
        },
        {
            topic: "git Commit",
            explain: `<div style="font-family: 'Arial', sans-serif; padding: 20px; background: linear-gradient(135deg, #fffaf0, #f0f8ff); border-radius: 12px; box-shadow: 0px 4px 10px rgba(0,0,0,0.1);">
    <h1 style="color: #ffffff; text-align: center; background: #2c3e50; padding: 15px; border-radius: 8px; text-shadow: 2px 2px 4px rgba(0,0,0,0.2);">
        📌 Git Commit - Saving Your Changes
    </h1>

    <p style="font-size: 17px; line-height: 1.8; color: #333; padding: 10px; background: #ffffff; border-left: 5px solid #2c3e50; border-radius: 6px;">
        A <strong>Git commit</strong> is a snapshot of your changes in the Git history. It acts like a checkpoint, allowing you to track modifications and revert to previous versions when needed.
    </p>

    <h2 style="color: #e74c3c; background: #f8d7da; padding: 10px; border-radius: 6px;">🔹 Creating a Commit</h2>
    <p>After adding changes to the staging area, use the following command to commit:</p>
    <pre style="background: #272822; color: #f8f8f2; padding: 10px; border-radius: 6px;">
    <code class="language-bash" codeHighlight>
    git commit -m "Your commit message"
    </code>
    </pre>

    <h2 style="color: #3498db; background: #d6eaf8; padding: 10px; border-radius: 6px;">🔹 Viewing Commit History</h2>
    <p>To see a list of past commits:</p>
    <pre style="background: #272822; color: #f8f8f2; padding: 10px; border-radius: 6px;">
    <code class="language-bash" codeHighlight>
    git log
    </code>
    </pre>

    <p>For a one-line summary of each commit:</p>
    <pre style="background: #272822; color: #f8f8f2; padding: 10px; border-radius: 6px;">
    <code class="language-bash" codeHighlight>
    git log --oneline
    </code>
    </pre>

    <h2 style="color: #27ae60; background: #d4edda; padding: 10px; border-radius: 6px;">🔹 Amending the Last Commit</h2>
    <p>To modify the last commit message or add more changes:</p>
    <pre style="background: #272822; color: #f8f8f2; padding: 10px; border-radius: 6px;">
    <code class="language-bash" codeHighlight>
    git commit --amend -m "Updated commit message"
    </code>
    </pre>

    <h2 style="color: #f39c12; background: #fff3cd; padding: 10px; border-radius: 6px;">🔹 Undoing a Commit</h2>
    <p>To undo the last commit while keeping the changes:</p>
    <pre style="background: #272822; color: #f8f8f2; padding: 10px; border-radius: 6px;">
    <code class="language-bash" codeHighlight>
    git reset --soft HEAD~1
    </code>
    </pre>

    <p>To undo the last commit and discard changes:</p>
    <pre style="background: #272822; color: #f8f8f2; padding: 10px; border-radius: 6px;">
    <code class="language-bash" codeHighlight>
    git reset --hard HEAD~1
    </code>
    </pre>

    <h2 style="color: #8e44ad; background: #f5e6ff; padding: 10px; border-radius: 6px;">🔹 Skipping the Staging Area</h2>
    <p>To commit all modified files directly without staging:</p>
    <pre style="background: #272822; color: #f8f8f2; padding: 10px; border-radius: 6px;">
    <code class="language-bash" codeHighlight>
    git commit -a -m "Commit message"
    </code>
    </pre>

    <h2 style="color: #2c3e50; background: #d6eaf8; padding: 10px; border-radius: 6px;">🔹 Signing Commits</h2>
    <p>To sign a commit with a GPG key for verification:</p>
    <pre style="background: #272822; color: #f8f8f2; padding: 10px; border-radius: 6px;">
    <code class="language-bash" codeHighlight>
    git commit -S -m "Signed commit message"
    </code>
    </pre>

    <p style="margin-top: 20px; font-weight: bold; color: #2c3e50; background: #f1f1f1; padding: 15px; border-radius: 6px;">
        🎯 Using Git commits efficiently keeps your project history clean and organized. Make sure to write meaningful commit messages! 🚀
    </p>
</div>
`
        },
        {
            topic: "git Reset",
            explain: `<div style="font-family: 'Arial', sans-serif; padding: 20px; background: linear-gradient(135deg, #fdfbfb, #ebedee); border-radius: 12px; box-shadow: 0px 4px 10px rgba(0,0,0,0.1);">
    <h1 style="color: #ffffff; text-align: center; background: #34495e; padding: 15px; border-radius: 8px; text-shadow: 2px 2px 4px rgba(0,0,0,0.2);">
        🔄 Git Reset - Undoing Changes
    </h1>

    <p style="font-size: 17px; line-height: 1.8; color: #333; padding: 10px; background: #ffffff; border-left: 5px solid #34495e; border-radius: 6px;">
        <strong>Git Reset</strong> is a powerful command used to **undo commits, remove files from the staging area, or even discard changes completely**. It helps developers correct mistakes and refine commit history.
    </p>

    <h2 style="color: #e74c3c; background: #f8d7da; padding: 10px; border-radius: 6px;">🔹 Resetting the Last Commit (Soft Reset)</h2>
    <p>This keeps your changes but removes the last commit from history:</p>
    <pre style="background: #272822; color: #f8f8f2; padding: 10px; border-radius: 6px;">
    <code class="language-bash" codeHighlight>
    git reset --soft HEAD~1
    </code>
    </pre>
    <p><strong>Effect:</strong> The commit is undone, but your changes remain staged.</p>

    <h2 style="color: #f39c12; background: #fff3cd; padding: 10px; border-radius: 6px;">🔹 Resetting and Unstaging Changes (Mixed Reset - Default)</h2>
    <p>Removes the last commit and unstages the changes:</p>
    <pre style="background: #272822; color: #f8f8f2; padding: 10px; border-radius: 6px;">
    <code class="language-bash" codeHighlight>
    git reset --mixed HEAD~1
    </code>
    </pre>
    <p><strong>Effect:</strong> The commit is undone, and changes move back to the working directory.</p>

    <h2 style="color: #27ae60; background: #d4edda; padding: 10px; border-radius: 6px;">🔹 Hard Reset - Discarding Changes Permanently</h2>
    <p>This command **removes the commit and all changes**, restoring the project to its previous state:</p>
    <pre style="background: #272822; color: #f8f8f2; padding: 10px; border-radius: 6px;">
    <code class="language-bash" codeHighlight>
    git reset --hard HEAD~1
    </code>
    </pre>
    <p><strong>Effect:</strong> The last commit and changes are permanently deleted! 🚨 Use with caution.</p>

    <h2 style="color: #3498db; background: #d6eaf8; padding: 10px; border-radius: 6px;">🔹 Resetting to a Specific Commit</h2>
    <p>To reset to a specific commit in history:</p>
    <pre style="background: #272822; color: #f8f8f2; padding: 10px; border-radius: 6px;">
    <code class="language-bash" codeHighlight>
    git reset --hard <commit-hash>
    </code>
    </pre>
    <p><strong>Effect:</strong> Everything after that commit is erased.</p>

    <h2 style="color: #8e44ad; background: #f5e6ff; padding: 10px; border-radius: 6px;">🔹 Undoing a Reset</h2>
    <p>If you mistakenly reset, use this to find the old commit:</p>
    <pre style="background: #272822; color: #f8f8f2; padding: 10px; border-radius: 6px;">
    <code class="language-bash" codeHighlight>
    git reflog
    </code>
    </pre>
    <p>Then, restore it using:</p>
    <pre style="background: #272822; color: #f8f8f2; padding: 10px; border-radius: 6px;">
    <code class="language-bash" codeHighlight>
    git reset --hard <commit-hash>
    </code>
    </pre>

    <h2 style="color: #2c3e50; background: #d6eaf8; padding: 10px; border-radius: 6px;">🔹 Difference Between Reset & Revert</h2>
    <p><strong>Git Reset:</strong> Completely removes commits from history.</p>
    <p><strong>Git Revert:</strong> Creates a new commit that undoes the previous one.</p>

    <h2 style="color: #16a085; background: #e8f8f5; padding: 10px; border-radius: 6px;">📝 Summary</h2>
    <ul>
        <li><strong>Soft Reset:</strong> Keeps changes staged.</li>
        <li><strong>Mixed Reset:</strong> Unstages changes.</li>
        <li><strong>Hard Reset:</strong> Deletes commits and changes permanently.</li>
    </ul>

    <p style="margin-top: 20px; font-weight: bold; color: #2c3e50; background: #f1f1f1; padding: 15px; border-radius: 6px;">
        🎯 Git Reset is a powerful tool—**use it wisely** to manage your commits effectively! 🚀
    </p>
</div>
`
        },
        {
            topic: "git Revert",
            explain: `<div style="font-family: 'Arial', sans-serif; padding: 20px; background: linear-gradient(135deg, #eef2f3, #dfe6e9); border-radius: 12px; box-shadow: 0px 4px 10px rgba(0,0,0,0.1);">
    <h1 style="color: #ffffff; text-align: center; background: #2c3e50; padding: 15px; border-radius: 8px; text-shadow: 2px 2px 4px rgba(0,0,0,0.2);">
        🔄 Git Revert - Undo Changes Without Losing History
    </h1>

    <p style="font-size: 17px; line-height: 1.8; color: #333; padding: 10px; background: #ffffff; border-left: 5px solid #2c3e50; border-radius: 6px;">
        <strong>Git Revert</strong> is a **safe way to undo changes** in Git by creating a new commit that cancels out a previous one, without deleting history. It is ideal for collaborative projects.
    </p>

    <h2 style="color: #e74c3c; background: #f8d7da; padding: 10px; border-radius: 6px;">🔹 Reverting the Last Commit</h2>
    <p>This undoes the last commit while keeping the commit history intact:</p>
    <pre style="background: #272822; color: #f8f8f2; padding: 10px; border-radius: 6px;">
    <code class="language-bash" codeHighlight>
    git revert HEAD
    </code>
    </pre>
    <p><strong>Effect:</strong> A new commit is created that negates the last commit.</p>

    <h2 style="color: #f39c12; background: #fff3cd; padding: 10px; border-radius: 6px;">🔹 Reverting a Specific Commit</h2>
    <p>To revert a commit from history, use its commit hash:</p>
    <pre style="background: #272822; color: #f8f8f2; padding: 10px; border-radius: 6px;">
    <code class="language-bash" codeHighlight>
    git revert <commit-hash>
    </code>
    </pre>
    <p><strong>Effect:</strong> The specified commit is undone, and a new commit is created to reflect this change.</p>

    <h2 style="color: #27ae60; background: #d4edda; padding: 10px; border-radius: 6px;">🔹 Reverting Multiple Commits</h2>
    <p>To revert multiple commits at once:</p>
    <pre style="background: #272822; color: #f8f8f2; padding: 10px; border-radius: 6px;">
    <code class="language-bash" codeHighlight>
    git revert HEAD~3..HEAD
    </code>
    </pre>
    <p><strong>Effect:</strong> The last 3 commits are reverted in order.</p>

    <h2 style="color: #3498db; background: #d6eaf8; padding: 10px; border-radius: 6px;">🔹 Revert Without Opening the Editor</h2>
    <p>By default, Git opens a text editor to confirm the revert message. To avoid this:</p>
    <pre style="background: #272822; color: #f8f8f2; padding: 10px; border-radius: 6px;">
    <code class="language-bash" codeHighlight>
    git revert --no-edit HEAD
    </code>
    </pre>
    <p><strong>Effect:</strong> The commit is reverted without prompting for a message.</p>

    <h2 style="color: #8e44ad; background: #f5e6ff; padding: 10px; border-radius: 6px;">🔹 Undoing a Revert</h2>
    <p>If you mistakenly reverted a commit, use:</p>
    <pre style="background: #272822; color: #f8f8f2; padding: 10px; border-radius: 6px;">
    <code class="language-bash" codeHighlight>
    git log --oneline
    git revert <revert-commit-hash>
    </code>
    </pre>
    <p><strong>Effect:</strong> This reverts the revert! 🔄</p>

    <h2 style="color: #2c3e50; background: #d6eaf8; padding: 10px; border-radius: 6px;">🔹 Difference Between Git Reset & Git Revert</h2>
    <p><strong>Git Reset:</strong> Removes commits and changes from history.</p>
    <p><strong>Git Revert:</strong> Creates a new commit that undoes previous changes, keeping history intact.</p>

    <h2 style="color: #16a085; background: #e8f8f5; padding: 10px; border-radius: 6px;">📝 Summary</h2>
    <ul>
        <li><strong>Revert is safe for collaboration.</strong></li>
        <li><strong>Keeps commit history clean.</strong></li>
        <li><strong>Useful when you need to undo changes without removing commits.</strong></li>
    </ul>

    <p style="margin-top: 20px; font-weight: bold; color: #2c3e50; background: #f1f1f1; padding: 15px; border-radius: 6px;">
        🎯 Git Revert is your best friend when working in teams! Use it to **undo mistakes while keeping project history intact.** 🚀
    </p>
</div>
`
        },
        {
            topic: "git Stash",
            explain: `<div style="font-family: 'Arial', sans-serif; padding: 20px; background: linear-gradient(135deg, #eef2f3, #dfe6e9); border-radius: 12px; box-shadow: 0px 4px 10px rgba(0,0,0,0.1);">
    <h1 style="color: #ffffff; text-align: center; background: #34495e; padding: 15px; border-radius: 8px; text-shadow: 2px 2px 4px rgba(0,0,0,0.2);">
        📦 Git Stash - Save Your Work Without Committing
    </h1>

    <p style="font-size: 17px; line-height: 1.8; color: #333; padding: 10px; background: #ffffff; border-left: 5px solid #34495e; border-radius: 6px;">
        <strong>Git Stash</strong> allows you to temporarily save your uncommitted changes and switch to another task without losing work. Later, you can restore these changes when needed.
    </p>

    <h2 style="color: #e74c3c; background: #f8d7da; padding: 10px; border-radius: 6px;">🔹 Stashing Your Work</h2>
    <p>Use the following command to save your uncommitted changes:</p>
    <pre style="background: #272822; color: #f8f8f2; padding: 10px; border-radius: 6px;">
    <code class="language-bash" codeHighlight>
    git stash
    </code>
    </pre>
    <p><strong>Effect:</strong> Your working directory is now clean, but the changes are safely stored.</p>

    <h2 style="color: #f39c12; background: #fff3cd; padding: 10px; border-radius: 6px;">🔹 Listing Stashes</h2>
    <p>View all stored stashes with:</p>
    <pre style="background: #272822; color: #f8f8f2; padding: 10px; border-radius: 6px;">
    <code class="language-bash" codeHighlight>
    git stash list
    </code>
    </pre>
    <p><strong>Effect:</strong> Displays a list of stashes with unique identifiers.</p>

    <h2 style="color: #27ae60; background: #d4edda; padding: 10px; border-radius: 6px;">🔹 Applying a Stash</h2>
    <p>To restore your last saved changes:</p>
    <pre style="background: #272822; color: #f8f8f2; padding: 10px; border-radius: 6px;">
    <code class="language-bash" codeHighlight>
    git stash apply
    </code>
    </pre>
    <p><strong>Effect:</strong> Your latest stash is reapplied, but it remains in the stash list.</p>

    <h2 style="color: #9b59b6; background: #f5e6ff; padding: 10px; border-radius: 6px;">🔹 Applying a Specific Stash</h2>
    <p>Use the stash index to restore a specific stash:</p>
    <pre style="background: #272822; color: #f8f8f2; padding: 10px; border-radius: 6px;">
    <code class="language-bash" codeHighlight>
    git stash apply stash@{1}
    </code>
    </pre>
    <p><strong>Effect:</strong> The second stash in the list is applied.</p>

    <h2 style="color: #3498db; background: #d6eaf8; padding: 10px; border-radius: 6px;">🔹 Popping a Stash (Apply & Remove)</h2>
    <p>To apply the last stash and remove it from the list:</p>
    <pre style="background: #272822; color: #f8f8f2; padding: 10px; border-radius: 6px;">
    <code class="language-bash" codeHighlight>
    git stash pop
    </code>
    </pre>
    <p><strong>Effect:</strong> The latest stash is restored and removed from the stash list.</p>

    <h2 style="color: #c0392b; background: #fadbd8; padding: 10px; border-radius: 6px;">🔹 Deleting a Stash</h2>
    <p>To remove a specific stash:</p>
    <pre style="background: #272822; color: #f8f8f2; padding: 10px; border-radius: 6px;">
    <code class="language-bash" codeHighlight>
    git stash drop stash@{1}
    </code>
    </pre>
    <p><strong>Effect:</strong> The selected stash is deleted.</p>

    <h2 style="color: #e74c3c; background: #f8d7da; padding: 10px; border-radius: 6px;">🔹 Clearing All Stashes</h2>
    <p>To remove all stored stashes permanently:</p>
    <pre style="background: #272822; color: #f8f8f2; padding: 10px; border-radius: 6px;">
    <code class="language-bash" codeHighlight>
    git stash clear
    </code>
    </pre>
    <p><strong>Effect:</strong> All stashed changes are removed.</p>

    <h2 style="color: #8e44ad; background: #f5e6ff; padding: 10px; border-radius: 6px;">🔹 Stashing with a Message</h2>
    <p>To label your stash for easy identification:</p>
    <pre style="background: #272822; color: #f8f8f2; padding: 10px; border-radius: 6px;">
    <code class="language-bash" codeHighlight>
    git stash push -m "My WIP changes"
    </code>
    </pre>
    <p><strong>Effect:</strong> Your stash now has a meaningful message.</p>

    <h2 style="color: #2c3e50; background: #d6eaf8; padding: 10px; border-radius: 6px;">🔹 Difference Between Git Stash & Git Commit</h2>
    <p><strong>Git Stash:</strong> Saves uncommitted changes temporarily.</p>
    <p><strong>Git Commit:</strong> Saves changes permanently in the repository.</p>

    <h2 style="color: #16a085; background: #e8f8f5; padding: 10px; border-radius: 6px;">📝 Summary</h2>
    <ul>
        <li><strong>Git Stash is perfect for saving temporary work.</strong></li>
        <li><strong>Helps you switch tasks without committing incomplete work.</strong></li>
        <li><strong>Apply, drop, or clear stashes as needed.</strong></li>
    </ul>

    <p style="margin-top: 20px; font-weight: bold; color: #2c3e50; background: #f1f1f1; padding: 15px; border-radius: 6px;">
        🎯 Use Git Stash to **pause work, switch tasks, and resume seamlessly!** 🚀
    </p>
</div>
`
        },
        {
            topic: "git Merge",
            explain: `<div style="font-family: 'Arial', sans-serif; padding: 20px; background: linear-gradient(135deg, #fdfbfb, #ebedee); border-radius: 12px; box-shadow: 0px 4px 10px rgba(0,0,0,0.1);">
    <h1 style="color: #ffffff; text-align: center; background: #2c3e50; padding: 15px; border-radius: 8px; text-shadow: 2px 2px 4px rgba(0,0,0,0.2);">
        🔀 Git Merge - Combining Branches Efficiently
    </h1>

    <p style="font-size: 17px; line-height: 1.8; color: #333; padding: 10px; background: #ffffff; border-left: 5px solid #2c3e50; border-radius: 6px;">
        <strong>Git Merge</strong> is used to combine changes from one branch into another. It allows you to integrate features, bug fixes, or updates while preserving commit history.
    </p>

    <h2 style="color: #e74c3c; background: #f8d7da; padding: 10px; border-radius: 6px;">🔹 Merging a Branch into Another</h2>
    <p>Switch to the branch you want to merge changes into:</p>
    <pre style="background: #272822; color: #f8f8f2; padding: 10px; border-radius: 6px;">
    <code class="language-bash" codeHighlight>
    git checkout main
    </code>
    </pre>
    <p>Now merge another branch (e.g., \`feature-branch\`) into it:</p>
    <pre style="background: #272822; color: #f8f8f2; padding: 10px; border-radius: 6px;">
    <code class="language-bash" codeHighlight>
    git merge feature-branch
    </code>
    </pre>
    <p><strong>Effect:</strong> The changes from \`feature-branch\` are merged into \`main\`.</p>

    <h2 style="color: #f39c12; background: #fff3cd; padding: 10px; border-radius: 6px;">🔹 Fast-Forward Merge</h2>
    <p>If no other changes have been made in the target branch, Git performs a fast-forward merge:</p>
    <pre style="background: #272822; color: #f8f8f2; padding: 10px; border-radius: 6px;">
    <code class="language-bash" codeHighlight>
    git merge --ff-only feature-branch
    </code>
    </pre>
    <p><strong>Effect:</strong> The branch pointer moves forward without creating a merge commit.</p>

    <h2 style="color: #27ae60; background: #d4edda; padding: 10px; border-radius: 6px;">🔹 Creating a Merge Commit</h2>
    <p>If the branches have diverged, Git creates a merge commit:</p>
    <pre style="background: #272822; color: #f8f8f2; padding: 10px; border-radius: 6px;">
    <code class="language-bash" codeHighlight>
    git merge --no-ff feature-branch
    </code>
    </pre>
    <p><strong>Effect:</strong> A merge commit is created to maintain branch history.</p>

    <h2 style="color: #9b59b6; background: #f5e6ff; padding: 10px; border-radius: 6px;">🔹 Handling Merge Conflicts</h2>
    <p>If Git encounters conflicting changes, it asks you to resolve them manually. Open conflicting files and decide which changes to keep.</p>
    <pre style="background: #272822; color: #f8f8f2; padding: 10px; border-radius: 6px;">
    <code class="language-bash" codeHighlight>
    git status
    </code>
    </pre>
    <p>After resolving conflicts, commit the merge manually:</p>
    <pre style="background: #272822; color: #f8f8f2; padding: 10px; border-radius: 6px;">
    <code class="language-bash" codeHighlight>
    git add .
    git commit -m "Resolved merge conflicts"
    </code>
    </pre>

    <h2 style="color: #3498db; background: #d6eaf8; padding: 10px; border-radius: 6px;">🔹 Aborting a Merge</h2>
    <p>If you encounter conflicts and want to cancel the merge:</p>
    <pre style="background: #272822; color: #f8f8f2; padding: 10px; border-radius: 6px;">
    <code class="language-bash" codeHighlight>
    git merge --abort
    </code>
    </pre>
    <p><strong>Effect:</strong> The repository is restored to its previous state before merging.</p>

    <h2 style="color: #c0392b; background: #fadbd8; padding: 10px; border-radius: 6px;">🔹 Merge vs. Rebase</h2>
    <p><strong>Git Merge:</strong> Preserves commit history by creating merge commits.</p>
    <p><strong>Git Rebase:</strong> Rewrites commit history by applying changes linearly.</p>

    <h2 style="color: #8e44ad; background: #f5e6ff; padding: 10px; border-radius: 6px;">📝 Summary</h2>
    <ul>
        <li><strong>Fast-forward merges occur when no new commits exist in the target branch.</strong></li>
        <li><strong>Merge commits preserve branch history.</strong></li>
        <li><strong>Conflicts require manual resolution.</strong></li>
        <li><strong>Use \`git merge --abort\` to cancel a merge.</strong></li>
    </ul>

    <p style="margin-top: 20px; font-weight: bold; color: #2c3e50; background: #f1f1f1; padding: 15px; border-radius: 6px;">
        🎯 Use Git Merge to **combine branches seamlessly while preserving project history!** 🚀
    </p>
</div>
`
        },
        {
            topic: "git Rebase",
            explain: `<div style="font-family: 'Arial', sans-serif; padding: 20px; background: linear-gradient(135deg, #f9f9f9, #eef2f3); border-radius: 12px; box-shadow: 0px 4px 10px rgba(0,0,0,0.1);">
    <h1 style="color: #ffffff; text-align: center; background: #34495e; padding: 15px; border-radius: 8px; text-shadow: 2px 2px 4px rgba(0,0,0,0.2);">
        🔄 Git Rebase - A Cleaner Way to Integrate Changes
    </h1>

    <p style="font-size: 17px; line-height: 1.8; color: #333; padding: 10px; background: #ffffff; border-left: 5px solid #34495e; border-radius: 6px;">
        <strong>Git Rebase</strong> is a way to integrate changes from one branch into another while keeping a **clean and linear commit history**. Unlike <b>Git Merge</b>, which creates a merge commit, **Git Rebase moves your commits to the tip of the target branch**.
    </p>

    <h2 style="color: #e67e22; background: #fce8d3; padding: 10px; border-radius: 6px;">🔹 How to Rebase a Branch</h2>
    <p>Let's say you are working on a feature branch and need to update it with the latest changes from \`main\`:</p>
    <pre style="background: #272822; color: #f8f8f2; padding: 10px; border-radius: 6px;">
    <code class="language-bash" codeHighlight>
    git checkout feature-branch
    git rebase main
    </code>
    </pre>
    <p><strong>Effect:</strong> The commits from \`feature-branch\` are replayed on top of \`main\`, making the commit history linear.</p>

    <h2 style="color: #2ecc71; background: #d4edda; padding: 10px; border-radius: 6px;">🔹 Interactive Rebase</h2>
    <p>You can modify commit history interactively using:</p>
    <pre style="background: #272822; color: #f8f8f2; padding: 10px; border-radius: 6px;">
    <code class="language-bash" codeHighlight>
    git rebase -i HEAD~3
    </code>
    </pre>
    <p>This allows you to <strong>squash, edit, or remove commits</strong> before applying changes.</p>

    <h2 style="color: #9b59b6; background: #f5e6ff; padding: 10px; border-radius: 6px;">🔹 Resolving Rebase Conflicts</h2>
    <p>If conflicts occur during rebase, Git stops and asks you to resolve them manually.</p>
    <pre style="background: #272822; color: #f8f8f2; padding: 10px; border-radius: 6px;">
    <code class="language-bash" codeHighlight>
    git status
    </code>
    </pre>
    <p>After resolving conflicts, continue rebasing:</p>
    <pre style="background: #272822; color: #f8f8f2; padding: 10px; border-radius: 6px;">
    <code class="language-bash" codeHighlight>
    git add .
    git rebase --continue
    </code>
    </pre>

    <h2 style="color: #e74c3c; background: #fadbd8; padding: 10px; border-radius: 6px;">🔹 Aborting a Rebase</h2>
    <p>If something goes wrong, you can cancel the rebase:</p>
    <pre style="background: #272822; color: #f8f8f2; padding: 10px; border-radius: 6px;">
    <code class="language-bash" codeHighlight>
    git rebase --abort
    </code>
    </pre>
    <p><strong>Effect:</strong> The repository returns to its previous state before rebasing.</p>

    <h2 style="color: #3498db; background: #d6eaf8; padding: 10px; border-radius: 6px;">🔹 Rebase vs. Merge</h2>
    <p><strong>Git Merge:</strong> Preserves history by creating merge commits.</p>
    <p><strong>Git Rebase:</strong> Keeps history clean and linear by moving commits.</p>

    <h2 style="color: #8e44ad; background: #f5e6ff; padding: 10px; border-radius: 6px;">📝 Summary</h2>
    <ul>
        <li><strong>Git Rebase replays commits on top of another branch.</strong></li>
        <li><strong>Use interactive rebase (\`git rebase -i\`) to edit history.</strong></li>
        <li><strong>Resolve conflicts manually and use \`git rebase --continue\`.</strong></li>
        <li><strong>Use \`git rebase --abort\` to cancel a rebase.</strong></li>
    </ul>

    <p style="margin-top: 20px; font-weight: bold; color: #2c3e50; background: #f1f1f1; padding: 15px; border-radius: 6px;">
        🚀 Use Git Rebase to maintain a **clean, organized, and professional commit history!** 🎯
    </p>
</div>
`
        },
        {
            topic: "git Ignore",
            explain: `<div style="font-family: 'Arial', sans-serif; padding: 20px; background: linear-gradient(135deg, #ffffff, #f2f2f2); border-radius: 12px; box-shadow: 0px 4px 10px rgba(0,0,0,0.1);">
    <h1 style="color: #ffffff; text-align: center; background: #2c3e50; padding: 15px; border-radius: 8px; text-shadow: 2px 2px 4px rgba(0,0,0,0.2);">
        🚫 Git Ignore - Keep Unwanted Files Out of Git
    </h1>

    <p style="font-size: 17px; line-height: 1.8; color: #333; padding: 10px; background: #ffffff; border-left: 5px solid #2c3e50; border-radius: 6px;">
        The \`.gitignore\` file tells Git which **files and directories to ignore** so they are not tracked in version control.  
        This is useful for **logs, environment files, dependencies, and system-generated files** that should not be committed.
    </p>

    <h2 style="color: #e67e22; background: #fce8d3; padding: 10px; border-radius: 6px;">📌 Creating a \`.gitignore\` File</h2>
    <p>To create a \`.gitignore\` file, run:</p>
    <pre style="background: #272822; color: #f8f8f2; padding: 10px; border-radius: 6px;">
    <code class="language-bash" codeHighlight>
    touch .gitignore
    </code>
    </pre>

    <h2 style="color: #2ecc71; background: #d4edda; padding: 10px; border-radius: 6px;">📌 Common \`.gitignore\` Entries</h2>
    <p>Some commonly ignored files:</p>
    <pre style="background: #272822; color: #f8f8f2; padding: 10px; border-radius: 6px;">
    <code class="language-bash" codeHighlight>
    # Ignore node_modules folder
    node_modules/

    # Ignore logs and temporary files
    *.log
    temp/

    # Ignore compiled files
    *.class
    *.o
    *.exe

    # Ignore IDE files
    .vscode/
    .idea/
    </code>
    </pre>

    <h2 style="color: #9b59b6; background: #f5e6ff; padding: 10px; border-radius: 6px;">📌 Checking Ignored Files</h2>
    <p>To check which files are ignored by \`.gitignore\`:</p>
    <pre style="background: #272822; color: #f8f8f2; padding: 10px; border-radius: 6px;">
    <code class="language-bash" codeHighlight>
    git status --ignored
    </code>
    </pre>

    <h2 style="color: #e74c3c; background: #fadbd8; padding: 10px; border-radius: 6px;">📌 What If You Already Committed an Ignored File? 🛑</h2>
    <p>If a file is already tracked by Git, adding it to \`.gitignore\` won't remove it. To stop tracking it:</p>
    <pre style="background: #272822; color: #f8f8f2; padding: 10px; border-radius: 6px;">
    <code class="language-bash" codeHighlight>
    git rm --cached filename
    </code>
    </pre>
    <p><strong>Example:</strong> Remove \`config.json\` but keep it locally:</p>
    <pre style="background: #272822; color: #f8f8f2; padding: 10px; border-radius: 6px;">
    <code class="language-bash" codeHighlight>
    echo "config.json" >> .gitignore
    git rm --cached config.json
    git commit -m "Stop tracking config.json"
    </code>
    </pre>

    <h2 style="color: #3498db; background: #d6eaf8; padding: 10px; border-radius: 6px;">📌 Using a Global \`.gitignore\`</h2>
    <p>You can create a global ignore file for all Git projects:</p>
    <pre style="background: #272822; color: #f8f8f2; padding: 10px; border-radius: 6px;">
    <code class="language-bash" codeHighlight>
    git config --global core.excludesfile ~/.gitignore_global
    </code>
    </pre>
    <p>Add rules inside \`~/.gitignore_global\` just like a normal \`.gitignore\` file.</p>

    <h2 style="color: #8e44ad; background: #f5e6ff; padding: 10px; border-radius: 6px;">📝 Summary</h2>
    <ul>
        <li><strong>\`.gitignore\` tells Git which files to ignore.</strong></li>
        <li><strong>Use \`git rm --cached\` to stop tracking ignored files.</strong></li>
        <li><strong>Use a global \`.gitignore\` for common rules across all projects.</strong></li>
    </ul>

    <p style="margin-top: 20px; font-weight: bold; color: #2c3e50; background: #f1f1f1; padding: 15px; border-radius: 6px;">
        🚀 Keep your repositories clean by ignoring unnecessary files with \`.gitignore\`! 🎯
    </p>
</div>
`
        },
        {
            topic: "git Log",
            explain: `<div style="font-family: 'Arial', sans-serif; padding: 20px; background: linear-gradient(135deg, #ffffff, #f2f2f2); border-radius: 12px; box-shadow: 0px 4px 10px rgba(0,0,0,0.1);">
    <h1 style="color: #ffffff; text-align: center; background: #34495e; padding: 15px; border-radius: 8px; text-shadow: 2px 2px 4px rgba(0,0,0,0.2);">
        📜 Git Log - Viewing Commit History
    </h1>

    <p style="font-size: 17px; line-height: 1.8; color: #333; padding: 10px; background: #ffffff; border-left: 5px solid #34495e; border-radius: 6px;">
        The \`git log\` command is used to view the commit history of a repository. It helps track changes, contributors, and commit details such as **author, date, and message**.
    </p>

    <h2 style="color: #e67e22; background: #fce8d3; padding: 10px; border-radius: 6px;">📌 Basic \`git log\` Usage</h2>
    <p>Run the following command to see the commit history:</p>
    <pre style="background: #272822; color: #f8f8f2; padding: 10px; border-radius: 6px;">
    <code class="language-bash" codeHighlight>
    git log
    </code>
    </pre>

    <h2 style="color: #2ecc71; background: #d4edda; padding: 10px; border-radius: 6px;">📌 Understanding \`git log\` Output</h2>
    <p>The default \`git log\` output shows:</p>
    <ul>
        <li><strong>Commit Hash:</strong> Unique identifier for each commit.</li>
        <li><strong>Author:</strong> The person who made the commit.</li>
        <li><strong>Date:</strong> When the commit was created.</li>
        <li><strong>Commit Message:</strong> Short description of the commit.</li>
    </ul>

    <h2 style="color: #9b59b6; background: #f5e6ff; padding: 10px; border-radius: 6px;">📌 Formatting \`git log\` Output</h2>
    <p>Show a one-line summary for each commit:</p>
    <pre style="background: #272822; color: #f8f8f2; padding: 10px; border-radius: 6px;">
    <code class="language-bash" codeHighlight>
    git log --oneline
    </code>
    </pre>

    <p>Show commit history with a graphical representation:</p>
    <pre style="background: #272822; color: #f8f8f2; padding: 10px; border-radius: 6px;">
    <code class="language-bash" codeHighlight>
    git log --graph --oneline --all
    </code>
    </pre>

    <h2 style="color: #e74c3c; background: #fadbd8; padding: 10px; border-radius: 6px;">📌 Filtering \`git log\` Output</h2>
    <p>View commits by a specific author:</p>
    <pre style="background: #272822; color: #f8f8f2; padding: 10px; border-radius: 6px;">
    <code class="language-bash" codeHighlight>
    git log --author="Nehru"
    </code>
    </pre>

    <p>View commits containing a specific keyword:</p>
    <pre style="background: #272822; color: #f8f8f2; padding: 10px; border-radius: 6px;">
    <code class="language-bash" codeHighlight>
    git log --grep="bug fix"
    </code>
    </pre>

    <h2 style="color: #3498db; background: #d6eaf8; padding: 10px; border-radius: 6px;">📌 Viewing Changes in Commits</h2>
    <p>Show detailed changes made in each commit:</p>
    <pre style="background: #272822; color: #f8f8f2; padding: 10px; border-radius: 6px;">
    <code class="language-bash" codeHighlight>
    git log -p
    </code>
    </pre>

    <p>Show a **compact** version with file names only:</p>
    <pre style="background: #272822; color: #f8f8f2; padding: 10px; border-radius: 6px;">
    <code class="language-bash" codeHighlight>
    git log --stat
    </code>
    </pre>

    <h2 style="color: #8e44ad; background: #f5e6ff; padding: 10px; border-radius: 6px;">📝 Summary</h2>
    <ul>
        <li><strong>\`git log\`</strong> - View commit history.</li>
        <li><strong>\`git log --oneline\`</strong> - Show one-line summaries.</li>
        <li><strong>\`git log --graph\`</strong> - Show a visual commit history.</li>
        <li><strong>\`git log -p\`</strong> - Show changes made in commits.</li>
        <li><strong>\`git log --author="name"\`</strong> - Filter commits by author.</li>
    </ul>

    <p style="margin-top: 20px; font-weight: bold; color: #2c3e50; background: #f1f1f1; padding: 15px; border-radius: 6px;">
        🚀 Use \`git log\` to explore commit history and track changes efficiently! 🎯
    </p>
</div>
`
        },
        {
            topic: "git checkout",
            explain: `<div style="font-family: 'Arial', sans-serif; padding: 20px; background: linear-gradient(135deg, #ffffff, #f2f2f2); border-radius: 12px; box-shadow: 0px 4px 10px rgba(0,0,0,0.1);">
    <h1 style="color: #ffffff; text-align: center; background: #1abc9c; padding: 15px; border-radius: 8px; text-shadow: 2px 2px 4px rgba(0,0,0,0.2);">
        🔄 Git Checkout - Switching Branches & Restoring Files
    </h1>

    <p style="font-size: 17px; line-height: 1.8; color: #333; padding: 10px; background: #ffffff; border-left: 5px solid #1abc9c; border-radius: 6px;">
        The \`git checkout\` command is used for **switching branches** or **restoring files** in a Git repository. Before \`git switch\` and \`git restore\`, this was the primary way to navigate branches and revert file changes.
    </p>

    <h2 style="color: #e67e22; background: #fce8d3; padding: 10px; border-radius: 6px;">📌 Switching Branches</h2>
    <p>To switch to another branch, use:</p>
    <pre style="background: #272822; color: #f8f8f2; padding: 10px; border-radius: 6px;">
    <code class="language-bash" codeHighlight>
    git checkout branch-name
    </code>
    </pre>

    <p><strong>Example:</strong> Switching to the \`develop\` branch:</p>
    <pre style="background: #272822; color: #f8f8f2; padding: 10px; border-radius: 6px;">
    <code class="language-bash" codeHighlight>
    git checkout develop
    </code>
    </pre>

    <h2 style="color: #2ecc71; background: #d4edda; padding: 10px; border-radius: 6px;">📌 Creating and Switching to a New Branch</h2>
    <p>Create a new branch and switch to it immediately:</p>
    <pre style="background: #272822; color: #f8f8f2; padding: 10px; border-radius: 6px;">
    <code class="language-bash" codeHighlight>
    git checkout -b new-branch-name
    </code>
    </pre>

    <p><strong>Example:</strong> Creating and switching to \`feature-login\` branch:</p>
    <pre style="background: #272822; color: #f8f8f2; padding: 10px; border-radius: 6px;">
    <code class="language-bash" codeHighlight>
    git checkout -b feature-login
    </code>
    </pre>

    <h2 style="color: #9b59b6; background: #f5e6ff; padding: 10px; border-radius: 6px;">📌 Checking Out a Specific Commit</h2>
    <p>To temporarily switch to a specific commit, use its commit hash:</p>
    <pre style="background: #272822; color: #f8f8f2; padding: 10px; border-radius: 6px;">
    <code class="language-bash" codeHighlight>
    git checkout commit-hash
    </code>
    </pre>

    <p><strong>Example:</strong> Checking out commit \`abc123\`:</p>
    <pre style="background: #272822; color: #f8f8f2; padding: 10px; border-radius: 6px;">
    <code class="language-bash" codeHighlight>
    git checkout abc123
    </code>
    </pre>
    <p><strong>⚠️ Warning:</strong> This puts you in a "detached HEAD" state, meaning you’re not on any branch.</p>

    <h2 style="color: #e74c3c; background: #fadbd8; padding: 10px; border-radius: 6px;">📌 Restoring a File to a Previous Version</h2>
    <p>To discard local changes and restore a file from the last commit:</p>
    <pre style="background: #272822; color: #f8f8f2; padding: 10px; border-radius: 6px;">
    <code class="language-bash" codeHighlight>
    git checkout -- file-name
    </code>
    </pre>

    <p><strong>Example:</strong> Reverting changes to \`index.html\`:</p>
    <pre style="background: #272822; color: #f8f8f2; padding: 10px; border-radius: 6px;">
    <code class="language-bash" codeHighlight>
    git checkout -- index.html
    </code>
    </pre>

    <h2 style="color: #3498db; background: #d6eaf8; padding: 10px; border-radius: 6px;">📌 Best Practices: Use \`git switch\` & \`git restore\`</h2>
    <p>Newer Git versions introduce <code>git switch</code> (for branch changes) and <code>git restore</code> (for file restoration) as alternatives:</p>

    <ul>
        <li><strong>Switch branches:</strong> <code>git switch branch-name</code></li>
        <li><strong>Create & switch branch:</strong> <code>git switch -c new-branch-name</code></li>
        <li><strong>Restore a file:</strong> <code>git restore file-name</code></li>
    </ul>

    <h2 style="color: #8e44ad; background: #f5e6ff; padding: 10px; border-radius: 6px;">📝 Summary</h2>
    <ul>
        <li><strong>\`git checkout branch-name\`</strong> - Switch to a branch.</li>
        <li><strong>\`git checkout -b new-branch\`</strong> - Create and switch to a new branch.</li>
        <li><strong>\`git checkout commit-hash\`</strong> - Checkout a specific commit (detached HEAD).</li>
        <li><strong>\`git checkout -- file-name\`</strong> - Restore a file from the last commit.</li>
        <li><strong>✅ Prefer \`git switch\` & \`git restore\` in newer versions.</strong></li>
    </ul>

    <p style="margin-top: 20px; font-weight: bold; color: #2c3e50; background: #f1f1f1; padding: 15px; border-radius: 6px;">
        🚀 Use \`git checkout\` wisely to navigate branches and restore files efficiently! 🎯
    </p>
</div>
`
        },
        {
            topic: "git push",
            explain: ``
        },
        {
            topic: "git pull",
            explain: ``
        },
        {
            topic: "git restore",
            explain: ``
        },
        {
            topic: "git Diff",
            explain: ``
        },
        {
            topic: "git Show",
            explain: ``
        },
        {
            topic: "git tag",
            explain: ``
        },
        {
            topic: "git blame",
            explain: ``
        },
        {
            topic: "git grep",
            explain: ``
        },
        {
            topic: "git archive",
            explain: ``
        },
        {
            topic: "git clean",
            explain: ``
        }
        
    ]
}