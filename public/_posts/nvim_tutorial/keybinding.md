---
title: Vim Keybindings
twitter_image: assets/intro/setup.png
---

# Vim Keybindings

## Goal Of This Article

This article will serve as a brief introduction to navigating the editor via vim/Neovim 
keybindings and how to use basic commands.

The keybinding section of this tutorial serves as a shorter, non-interactive substitute to Neovim's 
interactive tutorial. If you're familiar with vim keybindings, consider skipping forward to the 
commands section of this article.

This article is mainly for those who wish to learn by reading. If you would like to take your time 
and learn by doing, consider Neovim's interactive tutorial accessible by typing `:Tutor<ENTER>` after 
entering Neovim from the steps listed in the "Keybinding basics" section.
Once you've completed the tutorial, feel free to move on to the next article in this series. 
Otherwise, continue reading.

## Conventions For Describing Keybinds

There will be lots of keybindings introduced in this article, shown in the form `...`. This 
suggests that you should press these keys in order. For instance, `dF3` means you should press then 
release the `d` key, `F` (note the capitalization, either done by `SHIFT` + `f` or `CAPS LOCK` `f` 
`CAPS LOCK`), then the `3` key on your keyboard, in that order.

Sometimes, a functional key should be pressed (and held) in a series of keybind. Any key in `< >` 
brackets will refer to that key on the keyboard and not individual letter keys in order. For 
instance, `<CTRL>r` means you should press two keys: first press and hold `CTRL`, then press `r`, 
in order.

With notation out of the way, lets begin with modes in the editor.

## Modes

Modes in Neovim determine what the keyboard is hooked up to.
There are 7 main modes to `Neovim`: 
- **Normal** 

    This mode is mainly for navigating the cursor to different locations in the file (via Vim 
    motions). Your abilities to modify the file while in this mode is very limited. 

    This mode also allows you to enter other modes listed below.

    To exit out of any mode into Normal mode, press `<ESC>` or `<CTRL>[`.

- **Insert**

    This mode allows you to modify the current buffer like a conventional text editor where keys 
    typed will insert the typed character into the buffer, similar to MS Word.

    There are many ways to enter this mode, listed below
    - `i`: enter insert mode and place cursor before current character
    - `a`: enter insert mode and place cursor after the current character
    - `I`: enter insert mode and place cursor before the first non-whitespace character on this line
    - `A`: enter insert mode and place cursor after the last character on the current line

    These are illustrated below
    ```
    word1 word2 word3;
              ^--original cursor location

    word1 word2 word3;
    ↖        ↗ ↖     ↗
     I       i  a    A
    ```
    Sometimes you may wish to add a new line above or below the current line and insert text there. 
    Consider using the following in that case
    - `o`: create a new line above current line and enter insert mode with the cursor on the new line
    - `O`: create a new line below current line and enter insert mode with the cursor on the new line

- **Replace**

    This mode will overwrite the characters under the cursor with what you enter and move the 
    cursor along. Note that `<backspace>` in this mode will replace what's currently written with 
    the original, overwritten character.

    Enter this mode with `R`.

- **Visual**

    This mode allows selection of characters of the buffer with the cursor. The location the cursor 
    when entering this mode will mark one of the endpoints of the selection. 

    Enter this mode with `v`, then you may use the motions introduced below to navigate and change 
    your selection.

- **Visual Line** (V-Line)

    Similar to Visual mode, this mode allows selection of characters of the buffer with the cursor 
    *by line*. The location the cursor when entering this mode will designate the location of one 
    of the starting/ending lines of the selection. 

    Enter this mode with `V`.

- **Command**

    This mode allows the user to interact with the editor itself like a command line interface to 
    perform more complex actions. 

    Enter this mode with `:`. You'll notice your active buffer will switch to the small bar located 
    at the very bottom of the window. 

- **Operator-Pending** (O-Pending)

    This mode is automatically entered when Neovim is waiting for additional input of an unfinished 
    motion. When the entire expected command is entered, it will perform the specified motions and 
    exit automatically.

    <!-- If you want to cancel an unfinished command, you can manually exit this mode by pressing `<ESC>`, identical to the above modes.  -->

## Vim Keybinding Basics

<!-- Enter Neovim by the command line in terminal, type `nvim` (or `nvim <FILE NAME>` if you wish to  -->
<!-- start editing a certain file).  -->

Vim motions are to be used in normal mode to quickly navigate or modify the file.

Unlike conventional editors, all editing in Neovim could (and should) be done via the keyboard
in pure pursuit of editing efficiency (moving your hands away from the home row of keys to reach 
for your mouse takes time). 


<details>
<summary>A note on human-computer interation</summary>
If the goal of a computer is to serve the user, then the user shouldn't be limited on how 
they "should" interact with the computer. Thus, I recommend first restricting yourself to 
navigating with efficient keybinds, then interacting with the editor however you want after you are 
familiar with them so you can find your own style of navigation that's both comfortable and 
efficient.
</details>


### Anatomy of a Vim Motion

All vim motion commands come in the following form
```
<Command> <Count> <Motion>
```

`<Command>` and `<Count>` are not always necessary, but all motions must include a `<Motion>`. 
Motions will be covered at length after this section. For now, we'll focus on `<Command>` and 
`<Count>`.

#### Command

Without this option, the cursor will simply move as specified by the motion.

However, you must specify a command if you wish to perform a certain action other just moving the
cursor. There four most commonly used commands
- Delete (`d`): remove text from buffer and places the removed text into the `"` register.
- Change (`c`): delete text, then immediately enter insert mode at the location of deletion
- Yank (`y`): copies selected text to vim buffers or the system clipboard. Without specification, 
the yanked text will be placed in the `"` register.
- Select (`v`): selects text

Any motion prepended by a command will perform that command to the text starting at the original 
cursor location, and ending at the location of the cursor after the motion.

Note that all commands listed above except for Select supports repeating the command letter twice 
to have the command act on the current line. `dd`, for instance, deletes the current line. Entering the capitalized character once also supports this behaviour. For instance, `D` deletes the current line.

#### Count

`<Count>` is a number and will repeat the specified command with the specified motion `<Count>` 
number of times. 

If a `<Count>` is not included, it will default to 1.

You'll see examples once we cover `<Motion>`.

### Cursor Motion

To move the cursor around, you may use `h`, `j`, `k`, and `l` to move one 
character in each cardinal direction
- `h`: left
- `j`: down
- `k`: up
- `l`: right

This serves as the basic set of movements. You may notice your cursor can only move to location with characters, and not into empty space. 

To remember these,
- `h` and `l` are the leftmost and rightmost of these four keys, corresponding to left and right 
cursor movements
- note that `j` reaches downwards, corresponding to the downward cursor movement
- `k` reaches upwards, and thus moves the cursor upwards

Note that if prepended by a command, `j` and `k` will act on the current and the line in that 
direction. For instance, `dj` will delete the current line and the next line.

#### Horizontal Movements

This section will detail moving along the same line of text. 

Although you can navigate your cursor along a single line with repeated `h` and `l` presses, this 
is very slow. A few helpful keybindings are listed below

- To navigate to the very first character of the line (including whitespaces), press `0`.

- To navigate to the first non-whitespace character of the line, press `_` (first hold `<SHIFT>`, then the key to the right of `0`).

- To navigate to the end of the line, press `$`.

The above 3 keybinds are illustrated below, where `^` indicates where the cursor will end up
```
    word1 word2 word3;
^   ^                ^
0   _                $
```

##### By-word Movements (`w`, `b`, `e`, `ge`)
To navigate the start of the next word, press `w`. Note that this movement will continue to work 
even at the end of a line by jumping to the corresponding location in the next line.

```
word1 word2 ...  --(w)->  word1 word2 ...
  ^                            ^
```
The opposite movement to `w` is `b`, which will move the cursor to the beginning of the current 
word or the beginning of the previous word depending on the position of the cursor. 
```
word1 word2 ...  --(b)->  word1 word2 ...
         ^                     ^

word1 word2 ...  --(b)->  word1 word2 ...
      ^                  ^      
```

To jump to the end of the current word or the end of the next word, use `e`.
```
word1 word2 ...  --(e)->  word1 word2 ...
  ^                          ^  

word1 word2 ...  --(e)->  word1 word2 ...
    ^                              ^
```
The opposite movement to `e` is `ge`, which will move the cursor to the end of the previous word. 
This is certainly the least used of the 4 horizontal word movements introduced.
```
word1 word2 ...  --(ge)->  word1 word2 ...
       ^                      ^ 
```
To summarize
- `w`: beginning of next word
- `b`: beginning of previous/current word
- `e`: end of next/current word
- `ge`: end of previous word

##### Searching Movements (`f`, `F`, `t`, `T`)
Searching movements move the cursor to the next/previous specified character in the specified direction. 

`f` will move the cursor to the next occurrence of the character typed after it in the forward 
direction on the same line. If no more of the character exists in this direction on this line, the 
cursor will not move. 

For instance, `f=` will move the cursor to the next occurence of `=` on the same line in the 
forward direction. 
```
pair<double, double> p = {1.0, 2.0};
   ^

--(f=)->

pair<double, double> p = {1.0, 2.0};
                       ^
```
The opposite movement is `F`, which will move the cursor backwards to the previous occurrence of the 
character typed after it. 

For instnace, consider `F=` illustrated below
```
pair<double, double> p = {1.0, 2.0};
                                 ^    

--(F=)->

pair<double, double> p = {1.0, 2.0};
                       ^
```

To move to, but not onto the character, use `t` instead. It will move to the character just before 
the character specified.

For instance, consider `t=`
```
pair<double, double> p = {1.0, 2.0};
   ^                                  

--(t=)->

pair<double, double> p = {1.0, 2.0};
                      ^
```
<!-- Notice the cursor after the movement sits one character before the `=` sign. -->

The opposite movement is `T`, illustrated below. 
```
pair<double, double> p = {1.0, 2.0};
                                 ^

--(T=)->

pair<double, double> p = {1.0, 2.0};
                        ^
```
Similarly, notice the cursor sits one character after the `=` sign.

As a summary
- `f*`: moves cursor to next occurrence of `*` on the same line
- `F*`: opposite of `f`; moves cursor to previous occurrence of `*` on the same line
- `t*`: moves cursor to character before next occurrence of `*` on the same line
- `T*`: opposite of `t`;moves cursor to character before previous occurrence of `*` on the same line

where `*` is the character you type after the search command.

Say you wish to repeatedly move forward through many `=` signs on the same line. Although you may 
repeatedly press `f=`, this is tiresome. Instead, you can repeat the last of the `f`, `F`, `t`, or 
`T` movements with `;` and move in the reverse direction with `,` (comma). For isntance, 

```
p = q = r = s = t = {1.0, 2.0};
^                             

--(f=)->

p = q = r = s = t = {1.0, 2.0};
  ^                           

--(;)-> (repeats f=)

p = q = r = s = t = {1.0, 2.0};
      ^                       

--(;)-> (repeats f=)

p = q = r = s = t = {1.0, 2.0};
          ^             

--(,)-> (equivalent to F=)

p = q = r = s = t = {1.0, 2.0};
      ^                       

--(,)-> (repeats F=)

p = q = r = s = t = {1.0, 2.0};
  ^                           
```
Note that the reverse movement will default to the reverse of the original. That is, `f` reverses 
with `F`, and `t` reverses with `T`.

You can also initiate a movement with a backward movement (`F` of `T`), which result in the repeat movements triggered by `;` to be searching backwards, and the reverse movements triggered by `,` to be searching forwards.

##### Bracket matching (`%`)
Another useful searching movement is `%`, which jumps to the matching bracket to the bracket that's under the cursor. If there is no bracket under the cursor, it will jump to the matching bracket to the next bracket on the current line. This is illustrated below
```
void print(int num);
       ^

--(%)->

void print(int num);
                  ^
```

This works for all kinds of brackets, including `()`, `[]`, `{}`, and `<>`. Note that the matching bracket doensn't necessarily have to be on the same line. The `%` movement will also work for brackets on different lines, such as a Javascrip object like the following:
```javascript
time = {
    "hour": 12,
    "minute": 30,
    "second": 23
}
```
Further, it correctly identifies nested brackets. For instance
```
( ( ([()]) ) )
    ^

    --(%)->

( ( ([()]) ) )
    ^
```
This is particularly useful for finding mismatched brackets in a file. 


#### Vertical movements

Aside from the `j` and `k` keys to move the cursor up and down the file, here are a few additional motions that deal with vertical movements. 

To move the cursor to the very top of the current view of the document, use `H`, abbreviated from "High".
Similarly, use `M` for the middle line of the view, and `L`, respectively abbreviated from "Middle" and "Low."

These motions are illustrated below. Say your view comprises of line 1 to line 10.

```
Line 1 <-- (H)
Line 2
Line 3
Line 4
Line 5 <-- (M)
Line 6
Line 7
Line 8
Line 9
Line 10 <-- (L)
```

<!-- These, however, only deal with vertical movements in the current view of the document. -->
<!-- To scroll around the view, try the following: -->
<!-- instead of moving the cursor to the bottom (or top) of the current view  -->
<!-- to force the view to shift, -->

##### Scrolling (`g`, `gg`, `<CTRL>f/d/d/u/y/e`)
To quickly navigate to the first or last line of a file, consider using the following

- `gg` scrolls to the beginning of the file and moves the cursor to the first line
- `G` scrolls to reach the end and move the cursor to the last line

To remember these two movements, notice `g` (the character) looks like a balloon, which floats 
upwards in the direction of the beginning of the file, while `G` is a popped balloon and falls to 
the end.

Note this scrolling action (and all other scrolling actions) is instant and there are no 
transitions, which can be disorienting might need some getting used to. 

To scroll by full pages, consider using the following

- `<CTRL>f` will perform a "full-page scroll" downwards
- `<CTRL>b` will perform a "full-page scroll" upwards.

These are abbreviated from "forward" and "back".

Note that each of these scrolls will leave two lines in common between each scroll, as illustrated 
below (each view represents how much of the file is currently displayed in the window of the 
editor).

```
Line 1
Line 2 ──────╮
Line 3       │
Line 4       │
Line 5       │ View after <CTRL>b
Line 6       │
Line 7       │
Line 8 ───╮  │
Line 9 ───┼──╯
Line 10   │
Line 11   │ Original view
Line 12   │
Line 13   │
Line 14 ──┼──╮
Line 15 ──╯  │
Line 16      │
Line 17      │
Line 18      │ View after <CTRL>f
Line 19      │
Line 20      │
Line 21 ─────╯
Line 22
Line 23
Line 24
```

To scroll by half pages, use the following

- `<CTRL>d` will perform a "half-page scroll" downwards
- `<CTRL>u` will perform a "half-page scroll" upwards.

These are abbreviated from "down" and "up". The change in view is illustrated below

```
Line 1
Line 2 ───╮
Line 3    │
Line 4    │
Line 5    │ View after <CTRL>u
Line 6 ───┼──╮
Line 7    │  │
Line 8    │  │
Line 9 ───╯  │
Line 10 ──╮  │ Original view
Line 11   │  │
Line 12   │  │
Line 13 ──┼──╯
Line 14   │ View after <CTRL>d
Line 15   │
Line 16   │
Line 17 ──╯
Line 18
```

If you find you only wish to scroll a few lines up or down, try 
- `<CTRL>e` to scroll the view down by a single line and
- `<CTRL>y` for a single line scroll upwards

Remember these two actions by noticing `e` is close to `d` on a QWERTY keyboard corresponding to 
scrolling the view downwards, while `y` is located close to `u`, corresponding to an upward scroll.

<!-- ##### Jump By Paragraph -->

To jump by paragraph, use `{` and `}`, corresponding to jumping a paragraph backwards and jumping a 
paragraph forwards.

Lastly, if you wish to go to a specific line, simply enter command mode and type the line you wish 
to reach. For instance, if you wish the cursor to jump to line 100, simply type `:100<ENTER>`.

### Putting things together

After these separate introduction to commands and motions making up a "vim keybind", it's helpful to 
see a couple useful examples.

- Delete until before the first occurrence of a bracket, then enter insert mode: `ct(`, where
    - `c` is the "Command",
    - "Count" defaults to 1, and
    - the motion is `t(`
    For instance, 
    ```
    std::shared_ptr<Magic> make_poof(int poof_level)
        ^

    --(ct()->

    std:(int poof_level)
        ↖
         insert cursor here
    ```
    Don't confuse the `ct(` with the surrounding bracket along the arrow (`--(...)->`).

- Delete the currently line and the next two lines: `d2j`, where
    - `d` is the Command,
    - 2 is the Count,
    - `j` is the motion.

    The count here is 2 since `dj` by itself already deletes two lines; this because `j` combined 
    with other motions act on the current line and the line in that direction as a whole.
    <!-- NEED INPROVEMENT ON EXPLANATION HERE -->

    You may also or `d3d`, or `3dd`, which repeates the `dd` motion 3 times. 

- Yank the current line and the next line until the first occurrence of a opening curly bracket: `0vjf{`, where
    - `0` moves the cursor to the beginning of the current line, 
    - `v` enters visual mode
    - `j` selects the entirety of the current line, and moves one end of the selection to the 
    beginning the next line
    - `f{` searches forward to find the first occurrence of an opening curly braces.

### Additional Keybinds

There are a few extra useful keybinds that are on its own, introduced here.

- `x` deletes the character currently sitting under the cursor.
    ```
    Some text here
            ^

    --(2x)->

    Some texhere
            ^
    ```
    This may also be used in visual / visual line mode, which would delete the current selection.

- `<Command>i(`: acts on the content bounded by the innermost set of `()`. For example, `di(` 
removes everything inside a bracket, illustrated below
    ```
    def announce_snake(snake_name, snake_location)
            ^

    --(di()->

    def announce_snake()
                       ^
    ```

- `<CTRL>a`/`<CTRL>x`: increment/decrement the next number. For instance,
    ```
    Number: -2
       ^

    --(3<CTRL>a)->

    Number: 1
            ^
    ```

- `p`/`P`: pastes text from registers. Without specification, it will paste from the `"` register 
which stores the last deleted, changed, or yanked text. More details on registers will be covered 
in the next article in this series. `p` will paste after the cursor, while `P` will paste before 
the cursor.

    For instance, say the `"` register currently contains thet text "TEXT", the effects of `p` and 
    `P` is illustrated below
    
    ```
    wordword
        ^

    --(p)->

    wordwTEXTord
            ^
    ```
    and
    ```
    wordword
        ^

    --(P)->

    wordTEXTword
           ^
    ```

Even though `<Command>` doesn't apply to most of the special keybinds listed here, `<Count>` does 
apply and you may repeat them with a number specified.

## Basic Commands

Don't confuse the "Command" in this section title with command in Vim keybinds in the previous 
section. Command in this context refers to the commands issued directly to the editor through 
command mode.

Commands can be split into two major categories. Those that begin with a capital letter are 
user-defined or provided by a third-party plugin -- these commands don't ship with Neovim out of 
the box.

Commands described here will include the prepending `:`, which will switch the mode of the editor 
from Normal to Command. To run each command, press enter after each command is entered.

In this section, we'll introduce a few basic commands. More commands dealing with other features of 
the editor will be introduced in the next article in this series.
- To save a file, use `:w` ("w" for write). If the file is read-only, Neovim will stop you.
- To close the current pane, use `:q`. Note that if this is the only pane displayed, this will quit 
the editor. If you have unsaved changes or cannot otherwise quit the editor, Neovim will stop you.
- If you have multiple panes open and wish to quit all at once, use `:qa`

To force execute a command and ignore Neovim's attempt at stopping you, add `!` after the command (`!` is read as "bang").

For instance, to forcefully write to a read-only file, `:w!` will usually suffice. As another 
example, to forcefully quit the editor without saving the changes, use `:q!` or `:qa!`.

Now, you should be able to perform basic editing tasks with Neovim. Next, we'll learn about 
Neovim's builtin features, such as the file explorer, global undo history, and how to add and move 
panes around; as well, we'll start to configure the editor by customizing its behavior and 
appearance. 

