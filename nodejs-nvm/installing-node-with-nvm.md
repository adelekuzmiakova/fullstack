# Installing Node.js on macOS

> A simple guide on how to setup Node.js development environment on macOS.

Node.js is an open-source runtime environment, which allows developers to create networked applications and web-servers in JavaScript. For instance, you can use Node.js to build your blockchain.

In this post, I’ll explain how to install Node.js in a macOS environment. 

This post is intended for complete beginners to JavaScript or for folks switching from Python to JavaScript for their backend production. It doesn’t assume any background knowledge of JavaScript (although it doesn’t hurt to have some!). However, this tutorial will cover everything you need to know and hopefully will get you up to speed in no time!

Ready? Let’s jump in.

To check whether you already have Node installed, open new _terminal_ window and type:

```
node -v
```

If you have Node installed, it should output Node’s version. If you don’t, you’ll see one of the two messages, depending on whether you use `bash` *or* `zsh` shell: 

- `bash: command not found: node`
- `zsh: command not found: node`

That means that the command you are trying to run is not installed. But worry not, there are several ways to install Node.js: 

1) using the macOS installer available from the Node.js [website](https://nodejs.org/en/download/) 
2) using `homebrew` to install and update Node.js
3) using `nvm` to install and update Node.js

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

You should now see output `v12.18.0` or some other version of the software that's just been installed.

## 2) Using `homebrew` to install and update Node.js

Homebrew is arguably the most popular package manager for macOS and makes installing Node.js straightforward. Let's check whether you have Homebrew installed:

```
brew -v
```

If Homebrew is installed on your mac, you should see its version, for example, `Homebrew 2.3.0`. If not, you can install Homebrew via:

```
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

Assuming that Homebrew is already installed, type:

```
brew update
brew install node
```

And that’s all you need. Again, try `node -v` to confirm the version of Node.js installed.

While using Homebrew for Node.js installation is very easy, it comes with one disadvantage. **Unfortunately, Homebrew has a specific habit of installing only the latest version of Node.js**. This could be a problem because sometimes applications require a certain version of Node.js to work. Having the flexibility of using specific versions can be an asset. To fix this problem, the best option to install Node.js is via `nvm`.

## 3) Using `nvm` to install and update Node.js (recommended)

Node Version Manager, [nvm](https://github.com/nvm-sh/nvm), is a script to manage multiple active node.js versions. 

1. Open new _terminal_ window
2. Run `nvm` install script
   - The script clones the nvm repository to `~/.nvm` and adds the source lines to your profile (`~/.bash_profile`, `~/.zshrc,` `~/.profile,` or `~/.bashrc`). You can use either `curl` or `wget`:
   
     ```
     curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
     ```
     ```
     wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
     ```

   - You can also add the source lines manually:
       ```  
       export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
       [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
       ```

3. Reload the shell configuration, depending on whether you use `bash` *or* `zsh` shell

     - ```source ~/.bashrc```
     - ```source ~/.zshrc```
 
4. Verify the installation

     ```sh
     command -v nvm
     ```

      This should print `nvm` if the installation was successful. 


5. Use `nvm` to install Node.js

   - List the options: 
     > $ nvm <kbd>Tab</kbd>
       
     ![alt text](assets/nvm-summary.png)

   - List all installed versions of Node.js: `nvm ls`. It should print an output like this: 
     ![alt text](assets/nvm-list.png)
   - Download, compile, and install the latest release of node: `nvm install node` # "node" is an alias for the latest version
   - Install the specific version: `nvm install v12.18.0`
   - Next, to *use* the specific version of Node that you just installed: `nvm use v12.18.0` or something else
   - Print the path to the executable to where it was installed: `nvm which 12.18.0`
   - Change the default Node.js version to let's say 10.20.1: `nvm alias default 10.16.3`
   - Migrate packages from a previous Node.js version: `nvm install node --reinstall-packages-from=node`, for example: `nvm install v12.18.0 --reinstall-packages-from=v10.20.1`
   - Delete an older version: `nvm uninstall v10.20.1`
   - Install and use the LTS version: `nvm install --lts` and `nvm use --lts`
   
   
 6. Use `nvm` to install `npm`

      `npm` stands for [Node Package Manager](https://www.npmjs.com/) is a package management framework for Node.js. It          
      provides a command line utility tool to install Node.js libraries and manage their versions and dependencies. `npm` is  
      analogous to `rubygems` in Ruby or `pip` in Python. 
   
      To install `npm`, use the following command:

      ```
      nvm install-latest-npm
      ```
      Please note that this installs the latest working `npm` on the node version that you're *currently using*, such as `~/.nvm/versions/node/[your-version]/lib/node_modules/npm`. This is something you want because you want to update the `npm` and packages only for that Node.js version which is associated with a specific project and its requirements.

      - List globally installed packages: `npm ls -g --depth=0.`
      - Update all globally installed packages: `npm update -g`. Again, note that this will update packages inside the path of your active Node.js version instead of the system global path.

All in all, the main benefit of Node Version Manager is its flexibility when it comes to customizing different Node.js versions, which might be needed if you are hopping between different projects and their requirements.
        
        
**Prettier 2.0.5**
[Playground link](https://prettier.io/playground/#N4Igxg9gdgLgprEAuEBiABASSgZxgQwBtCBLKAc3QDkIATOAOgCsd1p0BbfMAeQGUAOlCEA+dAEF0OEhwAOhOOnIBXEvTZR0ACwgB3dDAhS4MZbOp1GLdPQBucQhFkcEMdAlskATtBewNnNz8DEJCNPTMrCSs+JpOCAC0OBDKXmCKXsqwMooe3r6uADToulokYFroRI66rHYO8V6shuhgXnD48OhQJroQXgDWcLRVsvLlnSTQMVAjunAARklwXvZN6GToAFL4tvh8bSSyMAzoAGL9G7gEUOnFAJ4prbHoyjiK4VbNRguqhCOPVLoBaOMADCr4MghYRQbAGMqsWQQPDFTCATAJiO4AB7ySGaHT6FpkPDVCwRaybfCBXh8dxQTw+KB+E7oUJQAAqCPQSLwGyisAQ9BGADNLpA5Aougs4OQyD11i0dnsDl4jm5LqKvOhRYQBqwcLoSDAKmRKMKfBx0AAFe4wHSaRW7faHY7ay52uDeYHcIazbk+WjKMAwKZQU6YNy0CBwHBQNFufA4HDKFxVKD3b1g8g+LIjAZQPQKWjkRQQYXbJ0qtXoAAURDtKXIlSNNmjsfj2lSbhaWl2imSLgAhABKU4ACT0cDWxTt0QMykMqqIJRImMga3ca1tZQo6EB3TgwwMRnzejTIx0sjgwuUxAzhsxJbc+7Mx6kV6PmwLBhyg7ZACUOloe4AH50AAGRMNFWCYFNzChNl2SMCo4DBEotBMDCtX3Ih2nwYDtD7MlFGJAhiGGYp4k0Hp9AAfXgLwODIIhaJXWYz1iEYYHuK8kDZAADQShALdQElsIRBP4tlMHLfde3sYirhJcjaGKFscB0W8RhSGBZAXYjoPQNZpGgcNZKeKM4xgB4UgxQhjFLHo2HLD0DD6TgYxwfASxwYp6CvWZTQCUpMJWPcnjeRR+IWRMtH49AACp+gS9B+IALw0+KNIcQgkFZGEElSmKNLy8UuD9As3FFXM8pEuApKgQr0pK1oIA4cqRkqt0au6SwGqETlOg82Jml7bsMNa9rOPC5QqnaAwvHuIKWkyTQ5y60jqmGU4ACF9L6LxFt66z4RWRR8Hm941mXXR8Hub4lLI+zPkiPK2QARmHV5pF3VyuBpR6tq1J1V3wEFFHNNrTuIyJ0AAbXmBZpHgABdGstBgXScCQAB6HG6pYBh+nIHGEBxqNdCgRx8Jxr6hAAJi+t4gv4nQXAWdpdHiolrlJaazFoToPksSIhAAZiZn7KH4+kOG5oxNsxfnZEFroXpYaS7KUIwIA3DoKhKO6pHgWQEgWe4khN6EhFQDBPvQABVKXof+-hAfI4G9lB8HtQtaH1dYRHkbgNkADVohbVyA-hoOjTgNGMax3H8csQnidJqByb0KmIBpr6Qvm-cwBeCmc-wqp-TgM2-jcRWFC1TUZq1f7uUITpNQ4U5EKw875pgdzuKvVgyxh6x2gURMYzyhKEscCgEgYy1kzGfo3BrcD2T4YcZ-PRKErAVJ2lgGfTg32lx46d4Ynmjh+kUJFSGykZpt+cgEnNQ9d4fezk2FYVyghu6CaXAmD9CNBmEeU4Vj3EFhmSKTRTgAGFD6uHQBfSe19FCDwmHeTgd9sRXlVMyZc01ICwDxNDNu8BeTCg6KYdovl0LlEqFwDMXVpSTXkCYBwGZ-5QGiBhZ+fpIBaUShAMAxcTJQGqPcFKbRYqnAAJpPGLpoA0RoDbSn7oeTQZ9d4H0Oqg4yoZWDm20CQJspAmwhl+hNf+DgRibFcv-Jo3YwanHEOQPEM4Jp6OMewOc7QyqCiPI3W+vJ4E4FOJyM6mo4BqRcr4zeBgwZ8nMZYixGNPyaEFoMJQ7QEA2VmqoqQMh5AZjAKQNC7A-pBFpNgZS9c2DHFDMUUozCVyYlLtTLiE1+IMFkAMcg8U65hUbgHLuMJ3qnAACLZx6f7EW1h+mDOGVgXmHs+KaHQOgQqPAAoszqmJd69MGDvQABwMAAAwDKGQ1HZDzCp8AcKhNw-F9kIBXHadZjSwo1noMKfAt4YDDnuQ8-Kpz0D-iyNDFZdyflPTCtNHUNRoakUyMGEx8IhrfyUKodQ+47Q5ibGigUXhAXpC2Y89ZMAAxBhDNAIQ4LdnoGeQoYMqVEHQBscoeqTLwX8pZeBABuAQ7bOpWy15nLuVkF5WCiVLyOX8U8QU+VOzBWFQaU9SY7B2Q8TFcyp5iq3lauqGqll4gFwYWyMXLozNdyAmbnU7kiYDT9C4grDZ9lXLJGFP3C6BrwVGvZSar1rKyz+vaOajVrKUxcEWgAbhmlITS-wHLYrcNHaaMtnDxXmPNUZtBBU7ODVK-iiDHDvH6lAMWsyUjgwSChNCdohrR1uvyX5tAtkSSElAOquzxJQEkmyZRs0NIpDTQWfQ7xSwLj0m82wJyzmXKufFS4A5Swei1P4uIiT+wRtun3MaAByGCbw3DSk+YW62UBbboEZo7Z2rM2qLE5vLd29llaq2FuSHAbIJzs05mki6KgwaEAzH9ZEbgkR6TblqWQPpvKKHKkhhulxXa0mmlwIYHanpBWjngLwkJrGakPbQU+JhT2tAwmhEKW7k3yUUAB19cB9CFu7UO3tHNWMDp7dWmS6BmPcbY7hra2lNCOupEUlNE6Rgzo2DAVgO7iiNzgFifAEp4mpSE0B05tbV1mWOtJkpddBMvuE0ZEg+AOPDszm8LwOMFhkBxpkMxCRFACBAAAEhrAY+y78cB8HAtoTGshsZ4yI7oBgso7TKF+O8NI3LXAMHFDjHTrGcZ1xxlwPAKxMteuHJ5vjbJxBJhTMtMaZnAM8bnLhICGZC0zn1TZrjQGBZCyEBZ0zdViswnEH6FtMBDKkn3D0baEgvFkBnEdGWlgB3vrIS4y0rkd3OVHqJlSN6ADqZQFDfSCul-Q4ylkbaoaGNJW53CJnuGpNw4oYxfMqNARQtBoj4T2OQkspwZ4OygJqUw0j4DgeKIdwiMR3yoRIP-MAhEnPqnLHXIK0BwOUKFryVbI8A4n3QJyOcIi00cKpLIHw4NLTSmLpFKQL6QwuBiGMKpOrcBoLgAAR1UPNKk6QvAEE2Bj8s0cWgHQGOOXYFWIYKCxCQJzpBuJrftZQHAV4wBQ-KEZFYUjWAlMJ5oV1JholGH-lieEc5icQFJz4xQ0peROAZQ6T1jT1sXas6lWW-S2R3olo+w5tg5ZvlM1+oWjuaxBLan4IUhWYSfHQKHdX52ACysRUPFDhrLBOoXws4xi1oOLKW2r4x90kLQ+eODDjUuDnALpuxGBQyWTgwKjh7e4CGBSdVYY7qiflIQ0z0AfOojx+iKwmLSMIKxQ07FdAM1ONCzQMsfcjLDRX1UxwY0xKkJX1oc8HuuVlsznkRp+gQaMPxAAfjjBgrvd74VoKNfdqR0joFID0B6knTf-z2zWE-Z-ipaFoq-1c9VihP8GAMotA0hCh4ogC-8FBwC2AtQgDv80h+JRx0BR1nhNBKdPR6N+I-M104DdAnx+IqV1VxUdlbNmU-NdkIBCpE4wtk5ItosjRs94sVgyF4BYBc8OBi9C9i8cZbAbkxYABWBgMWfLRpBgDSdAAAH29A0mLVSl7WZTIPBXwJMF2RZx4GoPTzoPwCiyzzi3gVYOS1S1lm4Nll4P4KEJELrnEMqGkO-zkNsxjVQJKSIGSCqFoF6VvzSEUEfwe3KmUBkSIMUMEmIOZR2TUyRG52oFDjj1ohmUwH-AAF5PMfM4Zdk0pWRvNgAAANGZAAcVokQR4CoDOEwAKLHB4DjwAFEEgABfTzdAFGdAAAMmaP9DIBgHLAAFJWAUjgAKjqjaiz9ZYGjJDpDicOjujeisjciCiiiSiyjaIBiqihiRiQBCsQA5Cdk0ikhMivMqAYi4iEji8bCGimjWjWQBAu5vMDjYj4j-wTjZCQB0AMBcdWAelWARiSCHlHCa0p8Ghy4fUMI1xoB-4VAiNbc-I4AApXtdx2A6MsJk1KdopYp4okovAUpmo4oU0co2RDV5D+Jkg79FBT8GAECwAlDqVJIiTvD0BSSQDECFChAAAWU4GPVUYUCDCaOuRnPE8FakrQOQsqaaMSboH3Bw3tLYt4mTURCY-wWfX3KHUlRpRnQ2fUIMdIJMG8QgSZNkIQx9KKC-HmB3AOPkoVaIcaUsFpaYN6b4sQLzMUy0AAHgGAWFoBEHZDBidJxldPdK2PymZUHDhnrAMDUxgDRl10Uy4OTCmkWgGQoAjxjWFV5FJELTVyaCxUxxOzygVIfxwH6SwDcHHVlNVH8BeB0nnQfxICGGN2xgDPBSDJDPgCxHDLrCTBMBwC4MfhOFkATJjTmUph6WKHFFkH-2KGmlM1cioRjDcHQXeDWzqhzJ326z6heMyJ62eNqx11IETDdC1CnLRzcB3RjVNUxB9SVxVxhx3SXJ9w-SMiXQuWuXlUKioDDJnCMASkihSnPMh2h3TKkTWyj0G2TVgl5HYxd1vMp0XVOUfNXVgKpxcFnF3AcHeBjStFLMtJdW+RaFcjU1QgXDAywSMALhIjcHbQ-WGBvMtHaQNgfJXWfPQEQV7AoCwQmgBSBUIEzRO3-POxaElCoy8gzHehuXphuXeioqqB3LqGvA4rcGErOQADZhCGK48LEIT75EMfJfYoYid2hPAUhWBo5ryILLQVzRIEh2g64EgEMwQkMcB34LREi6p+IVNLg1MNMuEJLTNoLl1rldkLLPQvVrLNKYwHK2pEjF0RKxKGKZkXkuhyz-gwpjLcyshvL5LRKzkGLTzP0-RKdXI-FY9oAvKw0EgEhOL8zd4Ur5zSryr5VBUmUlKDSTL31TMc05YzSfioBc1jZOJWBG44Yo8rQQr0AE9pESwvA08k48ZdAZrz9nBCZUsvpasXVbLa8a84BmRfYNNWN+gBg9z1tww3AwiHktjTdPB6BwdhS-RfDXgQwZdD8IBvV7cnpHdSAOYLoSAHssNE9a8PQvR29d5-IQlbhPqO82qRlWB6zwVE9HByADK3x+JXN7gSwOAKrNhoUzFLh+JRzZB59rRtxTIoapTnrSRwbig8q7FHqaggorqu0OrSCFDmVlygrpy8AEguqOAtjKSHkrQJ55zKpWKhpZxTsb8H9DyShdrDluqakJp+1VtgLARj15p94UFYAUd5cEpihkwDZdygCzD28U56AcY4ZHUxJCqoAUYcY3rDa4BaJb5AwFBOyOaCzpS5wN0kLKB9xbp-BycgV5yvbYgq9XgVZA9XJwbd4bKBg7KNAUdG5gKjLzamEDZaskxxErN4A5hGCK5FdfzVdTcmApUJzFNmc2dvANrXAol6bzTeRyBHAYpcE0zI67KlznA8zdlKBSr-I7REiblzUWUHYQ74rHw66ZEKKRgm6fIW7LR2sugEhhkPFJsoBigBaM1azOl7IZ6NLVqHtiQ1BWKNLvkR5JMm8SAFIE6MyAlrggI1sfV7p4BLRa6zdlwEM7Qb1xBMRKRiALdAhNhpQeh-54dFJ2SALRrUM0kjQ+qJcpdVxwF0Ir07sX0HoD48A2oSA0ogpXs-4zp-Bz6Nc2kygDYmJrFgRFAxshQNhzJZoA1tAnBRzdwtF5hPlMHaEj5oMfAC7gwZhPCvR2hS72hmRK7viTqhHiChAQBCgQAbcTFkBQALofBdAhqj4cBkAQAiBbp7pxGQB3qwQTA+AbLTRkBaVeUJGMYOBCAds45FduA4BnlcAjRT7wEVGwAkxNHiQVgYB0LvIuBkBAVCB3gJGWAsQdoiMdGYA+BtrhUegfHXD4kQBAm+BTQFAABFZQCAeAaJvx2JhDJoFYFR+NAYUuTR03d4LbIjWQFR4nGMFYewTRtnNJuAdCpwZRlARMdmw8IUTR3h9nBpojcgbxpAXx-xkAd4JiQxzIWJqWZJ1J9JgZmJiRggBYLbNQO0ZAemeZojGBigLlKaFRmMAQzRyKT0pGDJoZ2wXlbAegWAKsY4frWgPgbiBQE5rJjCpZ2gFZpABSgQ2o2ooAA)
```sh
--parser markdown
--print-width 65
```

**Input:**
````markdown
# Installing Node.js on macOS

> A simple guide on how to setup Node.js development environment on macOS.

Node.js is an open-source runtime environment, which allows developers to create networked applications and web-servers in JavaScript. For instance, you can use Node.js to build your blockchain.

In this post, I’ll explain how to install Node.js in a macOS environment. 

This post is intended for complete beginners to JavaScript or for folks switching from Python to JavaScript for their backend production. It doesn’t assume any background knowledge of JavaScript (although it doesn’t hurt to have some!). However, this tutorial will cover everything you need to know and hopefully will get you up to speed in no time!

Ready? Let’s jump in.

To check whether you already have Node installed, open new _terminal_ window and type:

```
node -v
```

If you have Node installed, it should output Node’s version. If you don’t, you’ll see one of the two messages, depending on whether you use `bash` *or* `zsh` shell: 

- `bash: command not found: node`
- `zsh: command not found: node`

That means that the command you are trying to run is not installed. But worry not, there are several ways to install Node.js: 

1) using the macOS installer available from the Node.js [website](https://nodejs.org/en/download/) 
2) using `homebrew` to install and update Node.js
3) using `nvm` to install and update Node.js

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

You should now see output `v12.18.0` or some other version of the software that's just been installed.

## 2) Using `homebrew` to install and update Node.js

Homebrew is arguably the most popular package manager for macOS and makes installing Node.js straightforward. Let's check whether you have Homebrew installed:

```
brew -v
```

If Homebrew is installed on your mac, you should see its version, for example, `Homebrew 2.3.0`. If not, you can install Homebrew via:

```
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

Assuming that Homebrew is already installed, type:

```
brew update
brew install node
```

And that’s all you need. Again, try `node -v` to confirm the version of Node.js installed.

While using Homebrew for Node.js installation is very easy, it comes with one disadvantage. **Unfortunately, Homebrew has a specific habit of installing only the latest version of Node.js**. This could be a problem because sometimes applications require a certain version of Node.js to work. Having the flexibility of using specific versions can be an asset. To fix this problem, the best option to install Node.js is via `nvm`.

## 3) Using `nvm` to install and update Node.js (recommended)

Node Version Manager, [nvm](https://github.com/nvm-sh/nvm), is a script to manage multiple active node.js versions. 

1. Open new _terminal_ window
2. Run `nvm` install script
   - The script clones the nvm repository to `~/.nvm` and adds the source lines to your profile (`~/.bash_profile`, `~/.zshrc,` `~/.profile,` or `~/.bashrc`). You can use either `curl` or `wget`:
   
     ```
     curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
     ```
     ```
     wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
     ```

   - You can also add the source lines manually:
       ```  
       export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
       [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
       ```

3. Reload the shell configuration, depending on whether you use `bash` *or* `zsh` shell

     - ```source ~/.bashrc```
     - ```source ~/.zshrc```
 
4. Verify the installation

     ```sh
     command -v nvm
     ```

      This should print `nvm` if the installation was successful. 


5. Use `nvm` to install Node.js

   - List the options: 
     > $ nvm <kbd>Tab</kbd>
       
     ![alt text](assets/nvm-summary.png)

   - List all installed versions of Node.js: `nvm ls`. It should print an output like this: 
     ![alt text](assets/nvm-list.png)
   - Download, compile, and install the latest release of node: `nvm install node` # "node" is an alias for the latest version
   - Install the specific version: `nvm install v12.18.0`
   - Next, to *use* the specific version of Node that you just installed: `nvm use v12.18.0` or something else
   - Print the path to the executable to where it was installed: `nvm which 12.18.0`
   - Change the default Node.js version to let's say 10.20.1: `nvm alias default 10.16.3`
   - Migrate packages from a previous Node.js version: `nvm install node --reinstall-packages-from=node`, for example: `nvm install v12.18.0 --reinstall-packages-from=v10.20.1`
   - Delete an older version: `nvm uninstall v10.20.1`
   - Install and use the LTS version: `nvm install --lts` and `nvm use --lts`
   
   
 6. Use `nvm` to install `npm`

      `npm` stands for [Node Package Manager](https://www.npmjs.com/) is a package management framework for Node.js. It          
      provides a command line utility tool to install Node.js libraries and manage their versions and dependencies. `npm` is  
      analogous to `rubygems` in Ruby or `pip` in Python. 
   
      To install `npm`, use the following command:

      ```
      nvm install-latest-npm
      ```
      Please note that this installs the latest working `npm` on the node version that you're *currently using*, such as `~/.nvm/versions/node/[your-version]/lib/node_modules/npm`. This is something you want because you want to update the `npm` and packages only for that Node.js version which is associated with a specific project and its requirements.

      - List globally installed packages: `npm ls -g --depth=0.`
      - Update all globally installed packages: `npm update -g`. Again, note that this will update packages inside the path of your active Node.js version instead of the system global path.

All in all, the main benefit of Node Version Manager is its flexibility when it comes to customizing different Node.js versions, which might be needed if you are hopping between different projects and their requirements.
        
        


````

**Output:**
````markdown
# Installing Node.js on macOS

> A simple guide on how to setup Node.js development environment on macOS.

Node.js is an open-source runtime environment, which allows developers to create networked applications and web-servers in JavaScript. For instance, you can use Node.js to build your blockchain.

In this post, I’ll explain how to install Node.js in a macOS environment.

This post is intended for complete beginners to JavaScript or for folks switching from Python to JavaScript for their backend production. It doesn’t assume any background knowledge of JavaScript (although it doesn’t hurt to have some!). However, this tutorial will cover everything you need to know and hopefully will get you up to speed in no time!

Ready? Let’s jump in.

To check whether you already have Node installed, open new _terminal_ window and type:

```
node -v
```

If you have Node installed, it should output Node’s version. If you don’t, you’ll see one of the two messages, depending on whether you use `bash` _or_ `zsh` shell:

- `bash: command not found: node`
- `zsh: command not found: node`

That means that the command you are trying to run is not installed. But worry not, there are several ways to install Node.js:

1. using the macOS installer available from the Node.js [website](https://nodejs.org/en/download/)
2. using `homebrew` to install and update Node.js
3. using `nvm` to install and update Node.js

I’ll go over each way step-by-step.

## 1) Using the macOS installer available from the Node.js website

Visit the Node.js [website](https://nodejs.org/en/download/) where you can download a pre-built installer for your mac platform.

There are two types of Node.js releases: **long-term support (LTS)** and **current**. LTS releases are more polished and bug-free and will suffice for the majority of everyday users. Current releases are typically more experimental and contain the latest features, which may not be completely finished and could _occasionally_ crash. You can switch between LTS and current versions by highlighting the field in the first tab. Again, the LTS version is recommended for most users. Therefore, if the LTS tab is highlighted in dark green, you can simply click on the macOS Installer option, which will download the `.pkg` installer for Node.js.

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

You should now see output `v12.18.0` or some other version of the software that's just been installed.

## 2) Using `homebrew` to install and update Node.js

Homebrew is arguably the most popular package manager for macOS and makes installing Node.js straightforward. Let's check whether you have Homebrew installed:

```
brew -v
```

If Homebrew is installed on your mac, you should see its version, for example, `Homebrew 2.3.0`. If not, you can install Homebrew via:

```
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

Assuming that Homebrew is already installed, type:

```
brew update
brew install node
```

And that’s all you need. Again, try `node -v` to confirm the version of Node.js installed.

While using Homebrew for Node.js installation is very easy, it comes with one disadvantage. **Unfortunately, Homebrew has a specific habit of installing only the latest version of Node.js**. This could be a problem because sometimes applications require a certain version of Node.js to work. Having the flexibility of using specific versions can be an asset. To fix this problem, the best option to install Node.js is via `nvm`.

## 3) Using `nvm` to install and update Node.js (recommended)

Node Version Manager, [nvm](https://github.com/nvm-sh/nvm), is a script to manage multiple active node.js versions.

1. Open new _terminal_ window
2. Run `nvm` install script

   - The script clones the nvm repository to `~/.nvm` and adds the source lines to your profile (`~/.bash_profile`, `~/.zshrc,` `~/.profile,` or `~/.bashrc`). You can use either `curl` or `wget`:

     ```
     curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
     ```

     ```
     wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
     ```

   - You can also add the source lines manually:
     ```
     export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
     [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
     ```

3. Reload the shell configuration, depending on whether you use `bash` _or_ `zsh` shell

   - `source ~/.bashrc`
   - `source ~/.zshrc`

4. Verify the installation

   ```sh
   command -v nvm
   ```

   This should print `nvm` if the installation was successful.

5) Use `nvm` to install Node.js

   - List the options:

     > \$ nvm <kbd>Tab</kbd>

     ![alt text](assets/nvm-summary.png)

   - List all installed versions of Node.js: `nvm ls`. It should print an output like this:
     ![alt text](assets/nvm-list.png)
   - Download, compile, and install the latest release of node: `nvm install node` # "node" is an alias for the latest version
   - Install the specific version: `nvm install v12.18.0`
   - Next, to _use_ the specific version of Node that you just installed: `nvm use v12.18.0` or something else
   - Print the path to the executable to where it was installed: `nvm which 12.18.0`
   - Change the default Node.js version to let's say 10.20.1: `nvm alias default 10.16.3`
   - Migrate packages from a previous Node.js version: `nvm install node --reinstall-packages-from=node`, for example: `nvm install v12.18.0 --reinstall-packages-from=v10.20.1`
   - Delete an older version: `nvm uninstall v10.20.1`
   - Install and use the LTS version: `nvm install --lts` and `nvm use --lts`

6) Use `nvm` to install `npm`

   `npm` stands for [Node Package Manager](https://www.npmjs.com/) is a package management framework for Node.js. It  
    provides a command line utility tool to install Node.js libraries and manage their versions and dependencies. `npm` is  
    analogous to `rubygems` in Ruby or `pip` in Python.

   To install `npm`, use the following command:

   ```
   nvm install-latest-npm
   ```

   Please note that this installs the latest working `npm` on the node version that you're _currently using_, such as `~/.nvm/versions/node/[your-version]/lib/node_modules/npm`. This is something you want because you want to update the `npm` and packages only for that Node.js version which is associated with a specific project and its requirements.

   - List globally installed packages: `npm ls -g --depth=0.`
   - Update all globally installed packages: `npm update -g`. Again, note that this will update packages inside the path of your active Node.js version instead of the system global path.

All in all, the main benefit of Node Version Manager is its flexibility when it comes to customizing different Node.js versions, which might be needed if you are hopping between different projects and their requirements.

````
