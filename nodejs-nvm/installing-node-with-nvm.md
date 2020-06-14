# Installing Node.js on macOS

A simple guide on how to setup Node.js development environment on macOS.

Node.js is an open-source runtime environment, which allows developers to create networked applications and web-servers in JavaScript. For instance, you can use Node.js to build your blockchain.

In this post, I’ll explain how to install Node.js in a macOS environment. 

This post is intended for complete beginners to JavaScript or for folks switching from Python to JavaScript for their backend production. It doesn’t assume any background knowledge of JavaScript (although it doesn’t hurt to have some!). However, this tutorial will cover everything you need to know and hopefully will get you up to speed in no time!

Ready? Let’s jump in.

To check whether you already have Node installed, open new _Terminal_ window and type:

```
node -v
```

If you have Node installed, it should output Node’s version. If you don’t, you’ll see one of the two messages, depending on whether you use `bash` *or* `zsh` shell: 

- `bash: command not found: node`
- `zsh: command not found: node`

That means that the command you are trying to run is not installed. But worry not, there are several ways to install Node.js: 

1) using the macOS installer available from the Node.js [website](https://nodejs.org/en/download/) 
2) using `homebrew` to install and update Node.js
3) using `npm` to install and update Node.js

I’ll go over each way step-by-step.

## 1) Using the macOS installer available from the Node.js website

Visit the Node.js [website](https://nodejs.org/en/download/) where you can download a pre-built installer for your mac platform. 

There are two types of Node.js releases: **long-term support (LTS)** and **current**. LTS releases are more polished and bug-free and will suffice for the majority of everyday users. Current releases are typically more experimental and contain the latest features, which may not be completely finished and could *occasionally* crash. You can switch between LTS and current versions by highlighting the field in the first tab. Again, the LTS version is recommended for most users. Therefore, if the LTS tab is highlighted in dark green, you can simply click on the macOS Installer option, which will download the `.pkg` installer for Node.js. 

1. Download the Node.js `.pkg` Installer:
   - Opening `node-v12.18.0.pkg`
     - Select `Open with Installer (default)`
     
2. Run the `.pkg` Installer and follow the instructions that will guide you through the interface:
   - Introduction
     - Select `Continue`
     
   - License
     - Select `Continue`
     - Select `Agree`
     
   - Installation Type
     - Select `Install`
     - Authenticate using your macOS password to install the software
     - Select `Install Software`
     
   - Summary; you should see that Node.js and `npm` were installed
     - Select `Close`

3. Double-check that Node.js was installed:

```
node -v
```

You should now see output `v12.18.0` or some other version of the software that's been just installed.

## 2) Using `homebrew` to install and update Node.js

Homebrew is arguably the most popular package manager for macOS and makes installing Node.js straightforward. Let's check whether you have Homebrew installed:

```
brew -v
```

If Homebrew is installed on your mac, you should see its version, for example, `Homebrew 2.3.0`. If not, you can install Homebrew via:

```
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

Assuming that Homebrew is already installed, simply type:

```
brew update
brew install node
```

And that’s all you need. Again, try `node -v` to confirm the version of Node.js installed.

While using Homebrew for Node.js installation is very easy, it comes with one disadvantage. **Unfortunately, Homebrew has a specific habit of installing only the latest version of Node.js**. This could be a problem because sometimes applications require a certain versions of Node.js to work. Having the flexibility of using specific versions can help. To fix this problem, the best option to install Node.js on your mac is via `npm`.

## 3) Using `npm` to install and update Node.js


## Install `nvm` for managing Node.js versions

[nvm](https://github.com/nvm-sh/nvm) allows installing several versions of Node.js to the same system. Sometimes applications require a certain versions of Node.js to work. Having the flexibility of using specific versions can help.

1. Open new _Terminal_ window.
2. Run [nvm](https://github.com/nvm-sh/nvm) installer
   - … with _either_ `curl` *or* `wget`, depending on what your computer has available.
     - `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash`
     - `wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash`
   - The script clones the nvm repository to `~/.nvm` and adds the source line to your profile (`~/.bash_profile`, `~/.zshrc,` `~/.profile,` or `~/.bashrc`). (You can add the source loading line manually, if the automated install tool does not add it for you.)

     ```sh
     export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
     [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
     ```

   - Another option: when you have consistent directory location between systems, following example Bash/Zsh configuration allows to load `nvm` when the directory exists.
   This allows more consistent sharing of your shell configuration between systems, improving reliability of rest of your configuration even when nvm does not exist on a specific system.

     ```sh
     if [ -d "$HOME/.nvm" ]; then
       # export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
       export NVM_DIR="$HOME/.nvm"

       # This loads nvm
       [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

       # This loads nvm bash_completion
       [ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"
     fi
     ```

3. If everything went well, you should now either open a new Terminal window/tab, or reload the shell configuration by running:
   - `source ~/.bashrc`
4. Verify installation
   - To check if nvm command got installed, run:
     - `command -v nvm`

## Install Node.js with `nvm`

1. List installed Node.js versions with:
   - `nvm ls`
2. **Install latest LTS Version of [Node.js](https://nodejs.org/en/)** (for production quality applications)
   - `nvm install v12.18.0`
3. Install latest [Node.js](https://nodejs.org/en/) Current release (for testing new feature improvements)
   - `nvm install v14.4.0`
4. Install previous LTS release of [Node.js](https://nodejs.org/en/) LTS release (if you need to run older applications)
   - `nvm install v10.21.0`
5. If you want to change the default Node version later, you can run a command to adjust it.
    - `nvm alias default v12.18.0` [changelog](https://github.com/nodejs/node/blob/master/doc/changelogs/CHANGELOG_V12.md#12.18.0) (for production quality applications)
    - `nvm alias default v14.4.0` [changelog](https://github.com/nodejs/node/blob/master/doc/changelogs/CHANGELOG_V14.md#14.4.0) (if you use Node.js features from the Current release)
    - `nvm alias default v10.21.0` [changelog](https://github.com/nodejs/node/blob/master/doc/changelogs/CHANGELOG_V10.md#10.21.0) (if you need to use old version of Node.js for older projects)

You can select Node.js version by running `nvm use v12.18.0` (or another version number). Another alternative: create a small Bash shell script to enable the right environment variables for your project.

Read the Node.js [Long Term Support (LTS) schedule](https://nodejs.org/en/about/releases/ "Releases | Node.js") to have more understanding of their release roadmap. List of all [previous releases](https://nodejs.org/en/download/releases/ "Previous Releases | Node.js") is also useful for finding details about Node.js release history.

[npm](https://www.npmjs.com/) package repository has a lot of packages to discover.
Have a good time with the freshly installed tools.


## Migrating packages from a previous Node.js version

If you already have existing Node.js version via `nvm`, you can migrate older packages from the installed Node.js versions.

- Open new Terminal window (to make sure you have latest Node.js version active in your command line environment).
- Before running next commands, remember to switch to the right version of Node with `nvm use` command.
  For example:
  - `nvm use v12.18.0`
  - `nvm use v14.4.0`
  - `nvm use v10.21.0`
- Linking global packages from previous version:
  - `nvm reinstall-packages v12.17.0`
  - `nvm reinstall-packages v13.14.0`
  - `nvm reinstall-packages v14.3.0`
  - `nvm reinstall-packages v10.20.1`

### Deleting old Node.js versions

- Check installed Node.js versions with:
  - `nvm ls`
- Delete an older version (if you don't use it in some of your projects):
  - `nvm uninstall v12.17.0`
  - `nvm uninstall v13.14.0`
  - `nvm uninstall v14.2.0`
  - `nvm uninstall v10.20.1`

### Updating outdated packages

#### List of globally installed top level packages

```sh
npm ls -g --depth=0.
```

#### List outdated global packages

```sh
npm outdated -g --depth=0.
```

#### Updating all globally installed npm packages

```sh
npm update -g
```

#### CLI aliases for Bash & Zsh environments

Example configuration for your Bash & Zsh command line environments.

```sh

# -----------------------------------------------------------
# npm helpers
# -----------------------------------------------------------

# List what (top level) packages are installed globally
alias list-installed-npm-packages="npm ls -g --depth=0."

# List what globally installed packages are outdated
alias list-outdated-npm-packages="npm outdated -g --depth=0."

# Update outdated globally installed npm packages
alias update-npm-packages="npm update -g"

```


#### Fixing old package versions

If you have older npm packages with compiled native extensions, recompiling native extensions can improve compatibility with the new Node.js version. Go to your project’s root directory, and run `npm rebuild` command.

```sh
cd PROJECT_NAME
npm rebuild
```


## Notes about this documentation

[@d2s](https://github.com/d2s "GitHub profile of Daniel Schildt") tested older versions of these install instructions with:

- [Debian 10](https://www.debian.org/News/2019/20190706)
- [Ubuntu on WSL (Windows Subsystem for Linux)](https://docs.microsoft.com/en-us/windows/wsl/about)
- [Ubuntu 18.04 LTS](http://releases.ubuntu.com/bionic/)
- [Ubuntu 17.04](http://releases.ubuntu.com/xenial/)
- [Ubuntu 16.04 LTS](http://releases.ubuntu.com/xenial/)
- [Ubuntu 14.04.3 LTS](http://releases.ubuntu.com/trusty/)
- [macOS 10.14.6 (Mojave)](https://apple.wikia.com/wiki/MacOS_10.14.6)
- [macOS 10.13.6 (High Sierra)](https://apple.wikia.com/wiki/MacOS_10.13.6)
- [macOS 10.12.6 (Sierra)](https://apple.wikia.com/wiki/MacOS_10.12.6)
- [OS X 10.11.6 (El Capitan)](https://apple.wikia.com/wiki/OS_X_10.11.6)


## Contributions

If you have improvement suggestions to make these instructions simpler & better, post a comment under the [original Gist by @d2s](https://gist.github.com/d2s/372b5943bce17b964a79 "Installing Node.js to Linux & macOS & WSL with nvm") with your documentation improvement suggestions. If you are reading a forked version of the document, check the original Gist for a more recent instructions.

