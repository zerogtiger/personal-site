---
title: Code as fast as thought
twitter_image: assets/intro/setup.png
---
# Code as fast as thought: a beginner's guide to building a tailored editor with Neovim

This tutorial series aims to guide you in building an **efficient, tailored** editor based on Neovim to help you increase coding efficiency.

![setup](assets/intro/setup.png)

## Goal Of This Series

As titled, the goal is to code and navigate your code as fast as thought. This can be broken down into two parts:
1. Build a fast coding editor tailored to your specific needs</li>
2. Increase your coding efficiency by using your own editor</li>

and these two goals should interest you if you are
- Looking to code faster
- Interested to make your editor *truly* your own, tailored to your workflows and ergonomics
<!-- - Wanting to impress your co-workers with your coding speeds -->

Additionally, if you are someone who is
- Looking for a light-weight editor with no compromises on functionality;
- Seeking an editor that is truly open source, not associated with any party;
- Wishing to learn about Vim or Neovim;
- Tired of VSCode

you will also find the content of this series interesting.

## Contents

1. [**Pre-requisites**](prereq)

    Recommended software requirements and knowledge before starting the series, with solutions or short tutorials to help you fulfill them. 

2. [**Installation**](install)
    
    Install the bare-bones Neovim editor.

2. [**Neovim Overview**](overview)

    Learn how Neovim works, components of the editor, its startup sequence, and how to use the `nvim` terminal command.

3. [**Vim Keybindings**](keybinding)

    Learn to navigate the editor via Vim motions and execute basic commands.

*Coming very soon*

1. **Built-in features**

    Explore Neovim's built-in features, including the file explorer and global undo history, and learn how to configure them.

1. **The plugin system**
    
    Learn why plugins is an essential part of the editor, how to install and configure plugins, the recommended plugin list, and how to install a plugin yourself. 

1. **Running code**

    Learn to write a short Lua script to customize how code is executed.

1. **Tips and further reading**

    How to practice, further the customization to your needs, and other great sources of learning.

## How This Series Work

This series consists of 8 articles, with each focusing on either coding efficiency, editor customizations, or both. 
<!-- except the last being an important step in achieving the goal: -->

Each article of the guide will consist of two parts intertwined together
1. Theory: knowledge about what will be done and how it works
1. Hands-on: apply the theory, and get your hands dirty

It's highly recommended that you follow along each article.

Occasionally, parts in an article may contain one or both of the following
1. Mini tutorial to get you up to speed
1. An external source if you want to go more in depth and learn more than the necessary for this series

Use these as you see fit.

## Show Me The Results

Here are some Neovim features that I use on a daily basis:

- Quickly switching between files with Telescope.nvim:
![telescope](assets/intro/telescope.gif)

<!-- <video autoplay="autoplay" loop muted> -->
<!--     <source src="assets/intro/telescope.webm" type="video/mp4"> -->
<!--     Your browser does not support the video tag. -->
<!-- </video> -->

- Quickly add, move, and delete panes:
![panes](assets/intro/panes.gif)
<!---->
<!-- <video autoplay="autoplay" loop muted> -->
<!--     <source src="assets/intro/panes.webm" type="video/mp4"> -->
<!--     Your browser does not support the video tag. -->
<!-- </video> -->

- Undo to arbitrary points in my editing history with Undotree:
![undotree](assets/intro/undotree.gif)
<!---->
<!-- <video autoplay="autoplay" loop muted> -->
<!--     <source src="assets/intro/undotree.webm" type="video/mp4"> -->
<!--     Your browser does not support the video tag. -->
<!-- </video> -->

- Write math equations in LaTeX documents with autosnippets:
![snippets](assets/intro/snippets.gif)

<!-- <video autoplay="autoplay" loop muted> -->
<!--     <source src="assets/intro/snippets.webm" type="video/mp4"> -->
<!--     Your browser does not support the video tag. -->
<!-- </video> -->

- Use macros to finish tedius, time-consuming tasks quickly: 
![macros](assets/intro/macros.gif)

<!-- <video autoplay="autoplay" loop muted> -->
<!--     <source src="assets/intro/macros.webm" type="video/mp4"> -->
<!--     Your browser does not support the video tag. -->
<!-- </video> -->

- Use the floating terminal to finish quick tasks without exiting the editor:
![fterm](assets/intro/fterm.gif)

<!-- <video autoplay="autoplay" loop muted> -->
<!--     <source src="assets/intro/fterm.webm" type="video/mp4"> -->
<!--     Your browser does not support the video tag. -->
<!-- </video> -->

- Play games:
![tetris](assets/intro/tetris.gif)

<!-- <video autoplay="autoplay" loop muted> -->
<!--     <source src="assets/intro/tetris.webm" type="video/mp4"> -->
<!--     Your browser does not support the video tag. -->
<!-- </video> -->

## Give Me The Code

You can find the daily driver setup for my MacBook (full config in the next section) in my [GitHub dotfiles](https://github.com/zerogtiger/dotfiles/tree/main/nvim/macos). If you're also on MacOS, they should work straight out of the box. 

If you're looking for a more minimalistic setup, try the one for Raspberry Pi OS, also uploaded to my [Github dotfiles](https://github.com/zerogtiger/dotfiles/tree/main/nvim/rpios). 

Consider giving the repo a star if it helps you. 

## Configuration

Here is a brief overview of the setup used in this series:
- Terminal: [**Alacritty**](https://github.com/alacritty/alacritty)
- Colorscheme: [**Gruvbox**](https://github.com/morhetz/gruvbox)
- OS: [**macOS**](https://en.wikipedia.org/wiki/MacOS)

## Finding Help

If you ever find yourself stuck in a specific part of an article and it involves component `X` of 
Neovim, try typing `:help X` in Neovim's Normal mode, which will redirect you to the Neovim help 
page. This will be covered in detail in the beginning of the 5th article in this series. 

If you're unable to find anything helpful, take it as a great opportunity to train your Google-fu.

<details>
<summary>Wait, this sounds so irresponsible</summary> 

As irresponsible as it sounds, this was what I did when I learned all content in this series on my own. It will expose you to more related knowledge, making you more knowledgable in this field and will help you get better at finding answers on the internet the next time you have a question, coding related or not. 

Some tips when Googling: 
- Include all useful details about your specific setup (ex. OS, editor name (nvim), plugin name, etc.)
- Summarize the core of the problem, keep it short and include keywords only
- Consider and explore all possible causes of the problem
- Go down the rabbit hole (i.e., if you realize your problem is caused by another thing, Google that new thing)

</details>

Alternatively, contact me and I'll try to provide assistance. 

## What It Takes

<!-- If you are only interested in certain parts of this series (ex. Neovim basics and build-in features) -->

If you are just skimming through this series quickly, it may take somewhere around 10 to 15 mins. 

If you are committed to finishing this series from beginning to end, it may take 2–3 weekends or two weeks worth of evenings to complete and 1–2 months of constant usage to be fully proficient.

## Design Decisions

There are two things I wish the readers would keep in mind before starting this series. 
1. Neovim (and most UNIX tools in general) are meant to be configured, very much tying to the UNIX 
    philosophy of "building simple, compact, clear, modular, and extensible code."
    The functionalities Neovim expose by default are very limited, keeping with the 
    simplicity principle. Also, each feature has its separate switch and could be easily made better
    by third party code (plugins, as we'll soon see), keeping with modularity and extensibility.

    So, if you find yourself knee-deep in this series wondering why lots of 
    seemingly sane Neovim features are disabled by default or require plugins, think to the above. 

1. This tutorial series will walk through a *common* Neovim setup as a daily terminal code editor,
    and a typical one at that. Having talked to many fellow Vim/Neovim enjoyers, I've found they have
    largely the same setup and I believe this setup will suit the majority of readers best, or at 
    least serve as a good starting point to future configurations.

    However, know that the editor is yours to configure and *should* be customized to suit you best.

    <!-- This is a purposeful design decision since resource efficiency is a 
    major concern. Less features enabled = less computing resource used. --> 
    <!-- Further, each user of  -->
    <!-- the tool wish to have the tool *their* way and keeping most features disabled by default eases  -->
    <!-- configuration. -->

## Appendix: Why Neovim?

If you are not interested in why Neovim was selected to serve as the basis of our customizations, feel free to get started right away!

<!-- **Remark:** do not worry if you find unfamilar terms in the discussion below. They will be explained in later articles of this article.  -->

A little about Neovim: it is a modernized **fork** of the UNIX editor Vim. It has better support and implementations for modern features like LSPs (language server protocol), parsing engine, and more. 

Here are some questions I have gotten in developing this series
1. Why Neovim and not [Vim](https://www.vim.org/) or [Helix](https://helix-editor.com/)?

    Vim and its associated plugins are too old and rarely receive updates, meaning they are slow by 
    modern standards and often lack proper support for modern tools. 

    They have also made the very questionable decision to create a new scripting language from 
    scratch in the recent 9.0 update when better alternatives (including `lua`, the language Neovim 
    supports for configuration) are readily available. <s> Vim is also used mostly by old men. </s>

    On the other hand, Helix is too new (post-modern, as they've said themselves), lacking a well-defined way to install plugins, not to forget that very few Helix plugins have been written.

1. Why not [Visual Studio Code](https://code.visualstudio.com/)?
    
    Despite being a great beginner option, it has some key problems which I have experienced first hand
    - **Resource inefficient**, both in terms of computing and storage. This is especially true when you start downloading plugins for specific languages
    - **Little customization capacity**. Sure, you can change your shortcuts and colorscheme. But during my use at least, I was unable to do much else
    - **Buggy**. It would randomly generate strange errors that gave literally zero information on the root cause. What follows is one of two things: either hours of Googling or constantly closing and re-opening the editor hoping it would magically go away. 
    - **Little focus on coding**. There are so many apparent graphical elements that take attention away from what the software is meant to do: writing code.

<!-- 1. Why not Microsoft Word? -->
<!---->
<!--     Dunno -->
<!---->
<!-- - Intro -->
<!--     - Goal of this series -->
<!--     - How these articles will work (tutorials to get started, link to external source that has more in depth view) -->
<!--     - Philosophy (why not vscode / why a vim style editor / why Neovim and not Helix or Vim) -->
<!--     - How to find help when you're stuck -->
<!--         - Slowly get better at Googling -->
<!--     - What it takes to finish (time commitment) -->
<!--     - Demo (GIFs) -->
