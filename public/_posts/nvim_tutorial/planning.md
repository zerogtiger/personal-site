# updaetdCode as fast as thought: a beginner's guide to building a tailored editor with Neovim

## Intro
- [x] Goal of this series
- [x] List of articles
- [x] How these articles will work (tutorials to get started, link to external source that has more in depth view)
- [x] Thing to keep in mind when starting: 
    - [x] Neovim is meant to be customized, serving little to no actual function out of the box
    - [x] By itself its very bare bones since it's meant to be customized to best serve the user, whatever they wish for
    - [x] Tutorial series will walk through *my* setup of Neovim, which is a daily code editor in the terminal and a fairly typical one (after talking to many fellow enthusiasts)
- [x] Philosophy (why not vscode / why a vim style editor / why Neovim and not Helix or Vim)
- [x] How to find help when you're stuck
    - [x] Will introduce an amazing help source later (hint: :help), until then, 
    - [x] Slowly get better at Googling
- [x] What it takes to finish (time commitment)
- [x] Demo (GIFs)

## Pre-requisites
- [x] Goal of article
- [x] OS
    - [x] Unix variant (preferred)
    - [x] Windows (figure stuff out yourself; may occationally have tips)
        - [x] Alternate solutions: VirtualBox (talk about personal experience)
- [x] Install packages (ex. ripgrep)
- [x] Command line usage (will use throughout the series with few exceptions in tips for Windows)
    - [x] Calling a command (ex. `vim *file name*` or `ls -la`)
    - [x] Manual command
- [x] Shell scripting (with small tutorials)
- [x] Understanding of the `$PATH` variable
- [x] A "usable" terminal (any linux terminal should do. For MacOS users, the most user friendly alternative to the built-in terminal is iterm2).
    - [x] Reason: true color support

## Installation
- [ ] Goal of article
- [ ] OS based
- [ ] Build from source

## (Neo)Vim Overview
- [ ] Goal of article
- [ ] How Neovim works
    - [ ] Layers: terminal, neovim, plugins
    - [ ] Cases of graphical port of neovim (why prefer terminal)
- [ ] How Neovim starts up and how it looks for files
    - [ ] Hint at writing configuration in built-in features and plugins
- [ ] ? What the different terms mean: 
    - [ ] Plugin
- [ ] Command line usage of `nvim` command
- [ ] Components of the editor  
    - [ ] Buffer
    - [ ] Pane
    - [ ] Status Bar
        - [ ] each component meaning
        - [ ] Optional displays: git branch, changes, etc.
    - [ ] Command line
    - [ ] Tabline

## Vim keybinding
- [ ] Goal of article
- [ ] Refer to `:Tutor`. Otherwise, continue
- [ ] Notation:
    - [ ] `<...>` means the literal key on keyboard (Ex. `<Tab>`, `<Ctrl>`, `<Space>`)
    - [ ] Command: type `:` before the command for it to show in nvim's command mode
- [ ] Mode (What are the modes, usage, entering and exiting them) (https://www.warp.dev/terminus/vim-modes)
    - [ ] Graph of all modes
    - [ ] Normal
    - [ ] Command
    - [ ] Insert
    - [ ] Replace
    - [ ] Visual
- [ ] Vim Motions (point to `:Tutor`)
    - [ ] Structure of "count" "motion" "argument"
    - [ ] Moving around (`hjkl`, jumping forward, backwards)
    - [ ] Undo / redo
    - [ ] Insertion
    - [ ] Deletion
    - [ ] Replacement
    - [ ] Visual select
    - [ ] Copy & pasting (to different registers)
- [ ] Commands
    - [ ] Difference between capitalized and lowercase first letter in commands
    - [ ] quit out of editor
    - [ ] write file
    - [ ] Search for match
    - [ ] Search and replace
    - [ ] increment / decrement numbers
    - [ ] `<tab>` to autocomplete the command / show list of commands that start with the given

## Neovim built-in features
- [ ] Goal of this article
- [ ] Help tags
    - [ ] Guide navigating help tags
- [ ] Windows, panes, and tabs
    - [ ] When to use each
- [ ] Swap file
- [ ] Health
- [ ] Global undo history
- [ ] Macros
- [ ] (Builtin) Autocompletion
- [ ] Lua
- [ ] File explorer
- [ ] Syntax highlighting
- [ ] Small configuration
- [ ] Writing the first neovim config: configuring built-in features
- [ ] Terminal
- [ ] Find and replace
    - [ ] options: g, c, regex
- [ ] Line numbers
    - [ ] Relative line numbers
    - [ ] Absolute
- [ ] Might show a file, then explain options 1 by 1
- [ ] Tab, softtab
- [ ] Cursorline/cursorcolumn
- [ ] Universal undo
- [ ] Autoindent/smart indent
- [ ] Macros
- [ ] hlsearch, inc search
- [ ] ignorecase, smartcase
- [ ] scrolloff
- [ ] signcolumn
- [ ] colorcolumn
- [ ] Scrollback
- [ ] Highlightgroup
    - [ ] Highlight on yank function and explanation
- [ ] tex + conceal
- [ ] Key remapping
<!-- - Installing plugins without a plugin manager -->

## - The Plugin system
- [ ] Goal of article
- [ ] Why plugins
- [ ] Plugin manager
- [ ] How to install plugin
- [ ] How to read a Github repo for nvim plugin
- [ ] Installing plugins:
    - [ ] Lazy (managing plugins)
    - [ ] Treesitter
    - [ ] LspZero
    - [ ] Nvimtree

## Running code
- [ ] Goal of article
- [ ] Lua basics
- [ ] Writing a custom code runner in Lua

## Tips and further reading
- YouTube sources
    - The Primagen
    - 
- List of plugins
    - List for vim (has some old stuff): https://github.com/altermo/vim-plugin-list?tab=readme-ov-file
    - More recent stuff: https://github.com/rockerBOO/awesome-neovim?tab=readme-ov-file
- Latex Tutorial (EJMastnak)

## Useful commands

`nvim --clean`

`ffmpeg -i fterm.webm  -filter:v scale=900:-1 -pix_fmt rgb8 -r 10 output.gif && gifsicle -O3 output.gif -o fterm.gif`

