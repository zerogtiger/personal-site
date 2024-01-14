---
title: Installation
twitter_image: assets/intro/setup.png
---

# Installation

## Goal of this article

This articles covers the steps to install the Neovim, which will serve as the basis of our editor to be configured.

## Installation

### macOS

If you're on macOS, simply run `brew install neovim`, which will download all necessary files and add the neovim executable to your `$PATH` variable. (If you don't have Homebrew installed, see the "Prerequisites" section of this guide).

Restart your shell, then type `nvim --version` in the command line and press `enter`. If you see a message starting with `NVIM vX.X.X`, you're good to proceed to the next section. Otherwise, restart your computer and try the command again. 

To update Neovim, run `brew update`, which will update Neovim, Homebrew, and all other packages installed with Homebrew. 

To upgrade Neovim, run `brew upgrade Neovim`, which will upgrade Neovim to the newest stable release version on your machine. 

### Linux

If you want a quick and easy installation, consider using your distribution's package manager to install Neovim. For instance, on Ubuntu, you would run `sudo apt install neovim` in your command-line.

However, these distributions are often multiple major versions behind the most recent release and may lack support for certain plugins, as most plugins strive to utilize newest features in the editor. Therefore, if you wish for the newest version, consider visiting the [Neovim repository on GitHub](https://github.com/neovim/neovim), navigating to the latest stable release by clicking on "Releases" on the right menu bar, then follow the instructions for installations on your Linux platform.

After installation, restart your shell, then type `nvim --version` in the command line and press `enter`. If you see a message starting with `NVIM vX.X.X`, you're good to proceed to the next section. Otherwise, restart your computer and try the command again. 

### Windows

Go to the official [Neovim repository on GitHub](https://github.com/neovim/neovim), navigate to "Releases" on the right menu bar and click on the latest stable release, then download the `nvim-win64.zip` compressed archive under "Assets" found at the very bottom of the page. 

Once the file has been downloaded to your local drive, extract its contents, then move it to a directory where you keep other development tools. Take note of its absolute file path (ex. `C:\Users\TigerDing\tools\nvim-win64\`). If you navigate to this directory, you will note that there is a subdirectory called `\bin\` (full path would be `C:\Users\TigerDing\tools\nvim-win64\bin\`). Take note of this path. 

Add this path to your `$PATH` variable (as described in the pre-requisite section of this tutorial). 

Restart your shell, then type `nvim --version` in the command line and press `enter`. If you see a message starting with `NVIM vX.X.X`, you're good to proceed to the next section. Otherwise, restart your computer and try again. 

<!-- - Installation -->
<!--     - Goal of article -->
<!--     - OS based -->
<!--     - Build from source -->

