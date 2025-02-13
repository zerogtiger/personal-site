---
title: Pre-requisites
twitter_image: assets/intro/setup.png
---
# Pre-requisites

## Goal Of This Article

This article covers the software requirements and pre-requisite knowledge needed in this series. 
This includes the recommended operating system, terminal, what you should know how to do with your 
system, shell scripting basics, and basic system understandings. 

## Operating System

**Prerequisite:** your operating system is a UNIX variants, such as macOS or a distribution of Linux.

This is because Neovim's predecessor, Vim, is an UNIX native software. Thus, Neovim, its fork, as 
well as its associated plugins naturally has the best support for UNIX variants.

Unfortunately, Windows does not make this list.

<details>
<summary>For Windows users</summary>

If you are a Windows user, certain specific steps in the guide may differ for you and certain 
features may not be available, or requires a great deal of effort to get working. There may be 
occasional tips throughout this guide if you are working with Neovim natively on Windows, but they 
will likely not apply to all steps. 

If you are using Windows but would still like to follow a guide with a UNIX operating system, you have a few alternatives. 
1. Duel-booting a Linux distribution such as Ubuntu on your Windows laptop. 

    Most modern Windows machines support this option. Given that I have little hands-on experience 
    with this option, I recommend [this 
    guide](https://www.freecodecamp.org/news/how-to-dual-boot-windows-10-and-ubuntu-linux-dual-booting-tutorial/).

    **Warning**: there are many drawbacks associated with this option. For instance, you run the 
    risk of breaking your existing operating system (and this is especially bad if you're playing 
    with your working laptop).

    If you are just here to try it out and is not fully committed to having an entire separate 
    operating system on your laptop, see the next option. 
    
1. If you are not committed enough to out with the project, I recommend using a virtual machine via 
VirtualBox and use a popular Linux distribution such as Ubuntu. 

    You may find a guide on Ubuntu's website 
    [here](https://ubuntu.com/tutorials/how-to-run-ubuntu-desktop-on-a-virtual-machine-using-virtualbox#1-overview).

    After installation, I recommend running the virtual machine in multi-user mode (aka. 
    non-graphical user interface) and use an SSH client, such as PuTTy, to SSH into the virtual 
    machine from the host machine to use the editor. Non-GUI mode will conserve battery on your machine. 

    To disable GUI, you may run the command `sudo systemctl set-default multi-user.target`. To 
    re-enable it, run `sudo systemctl set-default graphical.target`. To learn how commands work, 
    see [Command line usage]().
    </details>

## Terminal Emulator

**Prerequisite:** your terminal emulator supports true color (24 bit color). 

This is crucial for rendering colors correctly. Although you can move forth with a terminal without
true color support, I strongly recommend against it.

<details>
<summary>Suggestions</summary>

To test whether your terminal supports true color, enter
```bash
echo $COLORTERM
```
in your terminal window. If the output is either `truecolor` or `24bit`, you're good to go. Otherwise, read on.

If you're on MacOS, the default terminal does **not** support true color. I recommend [iTerm2](https://iterm2.com/) as a drop-in replacement.

If you're on Linux, chances are that your default terminal supports true color. If not, consider [Kitty](https://sw.kovidgoyal.net/kitty/) or if you have a GPU, consider [Alacritty](https://alacritty.org/)

If you're on Windows, Windows Powershell does support true color.

</details>

## The `$PATH` Variable

**Prerequisite:** you know what is the `$PATH` variable and how to add directories to your `$PATH` variable. 

<details>
<summary>Suggestions</summary>

**What it is**

PATH is an environment variable on operating systems specifying a set of directories where executable programs are located. When you enter a command line command, the operating system searches for the according executable from the list of directories in `$PATH` and executes the command if the executable is found, and returns an error otherwise. 

**How to add directories to `$PATH`** 

On macOS, edit the `.zshrc` file found in your home directory and add `export PATH="<path-to-directory>:$PATH"`, save the file, then restart your terminal. 

On Linux, edit the `.bashrc` file found in your home directory and add `export PATH="<path-to-directory>:$PATH"`, save the file, then restart the terminal. 

For Windows users, follow [this guide](https://www.architectryan.com/2018/03/17/add-to-the-path-on-windows-10/).
</details>

## Package Installation

**Prerequisite:** you should have a way to install software and know how to add them to your `$PATH` variable to be used in the command line. 


<details>

<summary>Suggestions</summary>

For Linux users: I suggest using your distribution's package manager (ex. `apt-get` for Ubuntu).

For macOS users: Homebrew is a great option. To install it, I suggest following [the guide](https://brew.sh/) on their website.

For Windows users: unfortunately, there are no great package managers. You'll have to manage the packages manually by downloading them from the package's official website and adding it to `$PATH`.
</details>

## Command Line Usage

**Prerequisite:** you have basic command line usage experience and knows basic commands such as `ls`, `cd`, the hidden directories `./` and `../`, the home directory `~/` and what they mean, how to create and remove files directories, the anatomy of a command line command (i.e., `command <options> <arguments>`; ex. `ls -la  ~/Download`), and most importantly, how to look for help (via. `man <command>`).

<details>
<summary>Suggestions</summary>

Here are the basic set of concepts which I suggest that you get yourself familiar with before proceeding

- Home directory: the directory for your user account on the computer. For Linux / macOS, this is usually `/home/<username>/` while for Windows, it would be `\user\<username\`. In the command line, this directory is shortened to be `~/`.

- Working directory: i.e., the current directory you're in. You can find its full path with the command `pwd`.

- Hidden files and directories: these are files or directories which begin with `.` and are usually hidden from view unless explicitly asked to be displayed. This may include configuration files such as `.zshrc` or directories, such as `~/.config/`. 

- The `./` and `../` directories: these are hidden directories found in every directory which references that directory and the parent directory, respectively. 

    For instance, `~/Downloads/neovim/./` is the same as `~/Downloads/neovim/`, while `~/Downloads/neovim/../` refers to `~/Downloads/`.

<!-- (i.e., usually the with your username like `/users/tigerding`) and y -->

Here are the basic set of command line commands which are required for this series

- `ls <options> <arguments>`: lists files and directories under the current working directory. 

    Common options include
    - `-a`, which additionally lists hidden files, and 
    - `-l`, which lists the content in long format (with details such as date and permissions)

    Arguments usually consist of the directory which you want to list. Leave it blank if you wish to list the current directory. 

    For instance, if you're working directory is the home directory and you wish to list all content in the `Downloads` sub-directory in long format, you would use `ls -la ./Downloads`.

- `cd <options> <arguments>`: changes the working directory to the directory provided in the arguments. By default, if no arguments are provided, the working directory is changed to be the home directory.

    For instance, if the current working directory is `~/Downloads/` and I wish to change the current working directory to the subdirectory `neovim/` in `~/Downloads/`, the command I would enter is `cd neovim/`.

    This is equivalent to double-clicking and entering a folder in your file explorer. 

- `mkdir <options> <arguments>`: adds a directory with the name provided in the arguments to the current working directory. 

    Common options include
    - `-p`, which creates intermediate directories if the argument is a chain of directories

    For instance, if the current working directory is `~/Downloads/` and I wish to create a directory called `neovim/`, within which I want a sub-directory called `folder1/`, I would enter the command `mkdir -p neovim/folder1/`. 

    This is equivalent to creating new folders in your file explorer. 

- `rm <options> <arguments>`: deletes the files or directories provided in the arguments. 

    **WARNING: This action cannot be reverted and all files and directories provided in the arguments are permanently deleted and NOT moved to the trash bin**.

    Common options include 
    - `-r`, which recursively removes all content provided in arguments, including files in subdirectories. This option is used when removing a non-empty directory.

    For instance, if I wish to remove the `neovim` directory in `~/Downloads/` which is my current working directory, I would enter the command `rm -r neovim/`.

- `man <arguments>`: displays the manual for the command provided in the arguments. This is the place to look for help when unsure about something. 

    For instance, if I wished to learn more about the `rm` command, I would enter `man rm`. 
    </details>

## Difference between "update" and "upgrade" in the software realm

<details> 
<summary>There's a difference between update and upgrade?</summary>

Although almost always used interchangeably, "update" and "upgrade" have distinct, though similar meanings in the software realm. 

Both refer to downloading and replacing a older version of a particular piece of software with a newer version. 

However, update only "enhances" software, meaning they don't provide new features and only fixes problems instead.

Upgrade, on the otherhand, often brings new features and other significant changes. 

As an analogy, consider an old, framed painting. An update would be equivalent to replacing the paint-stripping wood with new ones, whereas an upgrade would be equivalent to replacing the current painting with the original Mona Lisa. 
</details>

<!-- - Pre-requisites -->
<!--     - Goal of article -->
<!--     - OS -->
<!--         - Unix variant (preferred) -->
<!--         - Windows (figure stuff out yourself; may occationally have tips) -->
<!--             - Alternate solutions: VirtualBox (talk about personal experience) -->
<!--     - Install packages (ex. ripgrep) -->
<!--     - Command line usage (will use throughout the series with few exceptions in tips for Windows) -->
<!--         - Calling a command (ex. `vim *file name*` or `ls -la`) -->
<!--         - Manual command -->
<!--     - Shell scripting (with small tutorials) -->
<!--     - Understanding of the `$PATH` variable -->
