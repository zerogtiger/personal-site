# Pre-requisites

## Goal of this article

This article covers the software requirements and knowledge needed in this series. This includes the recommended operating system, what you should know how to do with your system, shell scripting basics, and basic system understandings. 

## Operating system

Any UNIX variants, such as MacOS and most popular distribution of Linux will be best suited for this guide. This is because Neovim's predecessor, Vim, is an UNIX native software. Thus, Neovim, its fork, as well as its associated plugins naturally has the best support for UNIX variants.

Unfortunately, Windows does not make this list.

Therefore, if you are a MacOS or Linux user, you have nothing to worry about. 

If you are a Windows user, certain specific steps in the guide may differ for you and certain features may not be available, or requires a great deal of effort to get working. There may be occasional tips throughout this guide if you are working with Neovim natively on Windows, but they will likely not apply to all steps. 

If you are using Windows but would still like to follow a guide with a UNIX operating system, you have a few alternatives. 
1. Duel-booting a Linux distribution such as Ubuntu on your Windows laptop. 

    Most modern Windows machines support this option. Given that I have little hands-on experience with this option, I recommend following this guide.

    **Warning**: there are many drawbacks associated with this option. For instance, you run the risk of breaking your existing operating system (and this is especially bad if you're playing with your working laptop).

    If you are just here to try it out and is not fully committed to having an entire separate operating system on your laptop, see the next option. 
    
1. If you are not committed enough to out with the project, I recommend using a virtual machine via VirtualBox. 

    You may find a guide [here](https://ubuntu.com/tutorials/how-to-run-ubuntu-desktop-on-a-virtual-machine-using-virtualbox#1-overview).

    After installation, I recommend running the virtual machine in non-GUI (graphical user interface) mode and use an SSH client, such as PuTTy, to SSH into the virtual machine to use the editor. Non-GUI mode will conserve battery on your machine. 

    To disable GUI, you may run the command `sudo systemctl set-default multi-user.target`. To re-enable it, run `sudo systemctl set-default graphical.target`. To learn how to apply the command, see [Command line usage]().

- Pre-requisites
    - Goal of article
    - OS
        - Unix variant (preferred)
        - Windows (figure stuff out yourself; may occationally have tips)
            - Alternate solutions: VirtualBox (talk about personal experience)
    - Install packages (ex. ripgrep)
    - Command line usage (will use throughout the series with few exceptions in tips for Windows)
        - Calling a command (ex. `vim *file name*` or `ls -la`)
        - Manual command
    - Shell scripting (with small tutorials)
    - Understanding of the `$PATH` variable
