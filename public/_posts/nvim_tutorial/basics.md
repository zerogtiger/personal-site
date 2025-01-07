---
title: (Neo)Vim Basics
twitter_image: assets/intro/setup.png
---

# (Neo)Vim Basics

## Goal of this article

This article will serve as a brief introduction to vim keybindings (aka. how to navigate and use 
the editor) and a shorter, non-interactive substitution to Neovim's interactive tutorial. 

This article is mainly for those who wish to go fast. If you would like to take your time to learn 
the editor, consider typing `:Tutor<ENTER>` after entering Neovim from the steps listed in the 
"Keybinding basics" section for Neovim's interactive tutorial.

Once you've completed the tutorial, feel free to move on to the next article in this series.

## Conventions for describing keybinds

There will be lots of keybindings introduced in this article, shown in the form `...`. This 
suggests that you should press these keys in order. For instance, `dF3` means you should press the 
`d` key, `F` (note the capitalization, either done by `SHIFT` + `f` or `CAPS LOCK` `f` `CAPS 
LOCK`), then the `3` key on your keyboard, in that order.

Sometimes, a functional key should be pressed (and held) in a series of keybind. Any key in `< >` brackets will refer to that key on the keyboard and not individual letter keys in order. For instance, `<CTRL>r` means you should press two keys: `CTRL` and `r` while holding the `CTRL` key, in order.

## Keybinding basics

To enter the editor, type `nvim` (or `nvim <FILE NAME>` if you wish to start editing a certain file). 

Unlike conventional editors, all editing in Neovim could (and should) be done via the keyboard only. This is, of course, in pure pursuit of editing efficiency (as moving your hands away from the home row of keys to reach for your mouse takes time). 

However, if the goal of a computer is to serve the user, then the user shouldn't be limited on how they "should" interact with the computer. Thus, I recommend first restricting yourself to navigating with efficient keybinds, then interacting with the editor however you want after you are familiar with them so you can find your own style of navigation that's both comfortable and efficient.

If you started the editor with `nvim` without a file name, copy the following dummy text into your editor by first selecting all the text, then enter your terminal and press `i`, followed by `<CTRL>v` (or `<CMD>v` on macOS), followed by `<ESC>`. Your editor should now contain the dummy text.

<details>
<summary>
Dummy text
</summary>

```
const int BASE = 10000;

struct Node *copy_num(struct Node *nlst)
{
    struct Node *head = NULL, *new = NULL;
    for (; nlst != NULL; nlst = nlst->next)
    {
        if (head != NULL)
        {
            new->next = malloc(sizeof(struct Node));
            new = new->next;
        }
        else
        {
            new = malloc(sizeof(struct Node));
            head = new;
        }
        new->next = NULL;
        new->bigit = nlst->bigit;
    }
    return head;
}

struct Node *trim(struct Node *nlst)
{
    struct Node *next = NULL, *prev = NULL;
    for (; nlst != NULL;
         next = nlst->next, nlst->next = prev, prev = nlst, nlst = next)
        ;
    struct Node* tmp;
    while (prev != NULL && prev->bigit == 0)
    {
        tmp = prev;
        prev = prev->next;
        free(tmp);
        // printf("AH\n");
    }
    nlst = prev;
    prev = NULL;
    next = NULL;
    for (; nlst != NULL;
         next = nlst->next, nlst->next = prev, prev = nlst, nlst = next)
        ;
    return prev;
}

void print_num(struct Node *nlst)
{
    if (nlst == NULL)
    {
        printf("0");
        return;
    }
    struct Node *next = NULL, *prev = NULL;
    for (; nlst != NULL;
         next = nlst->next, nlst->next = prev, prev = nlst, nlst = next)
        ;
    nlst = prev;
    printf("%d", nlst->bigit);
    while (nlst->next != NULL)
    {
        nlst = nlst->next;
        printf("%04d", nlst->bigit);
    }
    nlst = prev;
    prev = NULL;
    next = NULL;
    for (; nlst != NULL;
         next = nlst->next, nlst->next = prev, prev = nlst, nlst = next)
        ;
}

int longer(struct Node *n1, struct Node *n2)
{
    while (n1 != NULL && n2 != NULL)
    {
        n1 = n1->next;
        n2 = n2->next;
    }
    return n1 == NULL ? 0 : 1;
}

struct Node *add(struct Node *n1lst, struct Node *n2lst)
{
    struct Node *l, *s;
    if (longer(n1lst, n2lst))
    {
        l = n1lst;
        s = n2lst;
    }
    else
    {
        l = n2lst;
        s = n1lst;
    }
    struct Node *ret = copy_num(l);
    struct Node *tmpl = ret;
    struct Node *tmps = s;
    while (tmps != NULL)
    {
        tmpl->bigit = tmpl->bigit + tmps->bigit;
        tmps = tmps->next;
        tmpl = tmpl->next;
    }
    int delta = 0;
    tmpl = ret;
    struct Node *prev = NULL;
    while (tmpl != NULL)
    {
        tmpl->bigit = (tmpl->bigit + delta);
        delta = (tmpl->bigit) / BASE;
        tmpl->bigit = tmpl->bigit % BASE;
        prev = tmpl;
        tmpl = tmpl->next;
    }
    if (delta != 0)
    {
        struct Node *end = malloc(sizeof(struct Node));
        end->next = NULL;
        end->bigit = delta;
        prev->next = end;
    }
    if (ret == NULL)
    {
        ret = malloc(sizeof(struct Node));
        ret->next = NULL;
        ret->bigit = 0;
    }
    return trim(ret);
}

struct Node *mult_single(struct Node *l, int n)
{
    struct Node *ret = copy_num(l);
    struct Node *tmp = ret;
    struct Node *prev = NULL;
    int delta = 0;
    for (; tmp != NULL; prev = tmp, tmp = tmp->next)
    {
        tmp->bigit = (tmp->bigit * n + delta);
        delta = (tmp->bigit) / BASE;
        tmp->bigit = (tmp->bigit) % BASE;
        // printf("curr: %d\n", delta);
    }
    if (delta != 0)
    {
        struct Node *end = malloc(sizeof(struct Node));
        end->bigit = delta;
        end->next = NULL;
        prev->next = end;
    }
    return trim(ret);
}

void free_num(struct Node *blst)
{
    struct Node *next = NULL;
    for (; blst != NULL; next = blst->next, free(blst), blst = next)
        ;
}

struct Node *cons_bigit(int bgt, struct Node *nxt)
{
    struct Node *new = malloc(sizeof(struct Node));
    new->next = nxt;
    new->bigit = bgt;
    return new;
};

struct Node *mult(struct Node *n1lst, struct Node *n2lst)
{
    struct Node *ret = NULL;
    for (int b = 0; n2lst != NULL; n2lst = n2lst->next, b++)
    {
        struct Node *ans = mult_single(n1lst, n2lst->bigit);
        for (int j = 0; j < b; j++)
        {
            ans = cons_bigit(0, ans);
        }
        struct Node* add_res = add(ans, ret);
        free_num(ret);
        free_num(ans);
        ret = add_res;
    }
    if (ret == NULL)
    {
        ret = malloc(sizeof(struct Node));
        ret->next = NULL;
        ret->bigit = 0;
    }
    return trim(ret);
}

int main()
{
    struct Node *m = cons_bigit(1, cons_bigit(10, cons_bigit(0, cons_bigit(0, NULL))));
    struct Node *n = NULL;
    struct Node *res = mult(m, n);
    print_num(res);
    free_num(m);
    free_num(n);
    free_num(res);
}
```
</details>

### Cursor movements

To move the cursor around, you may use 
- `h`: left
- `j`: down
- `k`: up
- `l`: right

This serves as the basic set of movements. You may notice your cursor can only move to location with characters, and not into empty space. 

To remember these,
- `h` and `l` are the leftmost and rightmost of these four keys, corresponding to left and right cursor movements. 
- note that `j` reaches downwards and thus moves the cursor downwards, and
- `k` reaches upwards, and thus moves the cursor upwards. 

Play around with these 4 keys and try to navigate to the `)` character in `struct Node *add(struct Node *n1lst, struct Node *n2lst)` (you may need to scroll down to see this function.

#### Horizontal movements

This section will detail moving along the same line of text. 

Although you can navigate along a single line with repeated `h` and `l` presses, this is slow. 

To navigate to the very first character of the line, press `0`.

To navigate to the first non-whitespace character of the line, press `_` (first hold `<SHIFT>`, then the key to the right of `0`).

To navigate to the end of the line, press `$`.

The above 3 keybinds are illustrated below, where `^` indicates where the cursor is
```
    word1 word2 word3;
^   ^                ^
0   _                $
```

##### Single word movments
To navigate the start of the next word, press `w`. Note that this movement will continue to work even at the end of a line. 

```
word1 word2 ...  -[w]->  word1 word2 ...
  ^                            ^
```
The opposite movement to `w` is `b`, which will move the cursor to the beginning of the current word or the beginning of the previous word depending on the position of the cursor. 
```
word1 word2 ...  -[b]->  word1 word2 ...
         ^                     ^

word1 word2 ...  -[b]->  word1 word2 ...
      ^                  ^      
```

A similar keybinding to `w` is `e`. Instead of moving to the start of the next word, it will move to the end of the current word or the end of the next word, depending on the position of the cursor. 
```
word1 word2 ...  -[e]->  word1 word2 ...
  ^                          ^  

word1 word2 ...  -[e]->  word1 word2 ...
    ^                              ^
```
The opposite movement to `e` is `ge`, which will move the cursor to the end of the previous word. This is certainly the least used of the 4 horizontal movements introduced.
```
word1 word2 ...  -[ge]->  word1 word2 ...
       ^                      ^ 
```
##### Searching movements
Searching movements move the cursor to a the first specified character in either direction. 

`f` will move the cursor to the first character typed after it in the forward direction on the same line. If no more of the character exists in this direction on this line, the cursor will not move. 

For instance, `f=` will move the cursor to the first occurence of `=` on the same line in the forward direction. 
```
pair<double, double> p = {1.0, 2.0};
   ^                                  -[f=]->  
pair<double, double> p = {1.0, 2.0};
                       ^
```
The opposite movement is `F`, illustrated below
```
pair<double, double> p = {1.0, 2.0};
                                 ^    
(F=)
pair<double, double> p = {1.0, 2.0};
                       ^
```

To move to, but not onto the character, use `t` instead. 
```
pair<double, double> p = {1.0, 2.0};
   ^                                  -[t=]->  
pair<double, double> p = {1.0, 2.0};
                      ^
```
Notice the cursor after the movement sits one character before the `=` sign.

The opposite movement is `T`, illustrated below. 
```
pair<double, double> p = {1.0, 2.0};
                                 ^    
pair<double, double> p = {1.0, 2.0};
                        ^
```
Similarly, notice the cursor sits one character after the `=` sign.

Say you wish to repeatedly move forward through many `=` signs on the same line. You can repeat the action with `;` and move in the reverse direction with `,` (comma).

```
p = q = r = s = t = {1.0, 2.0};
^                             
(f=)
p = q = r = s = t = {1.0, 2.0};
  ^                           
(;)
p = q = r = s = t = {1.0, 2.0};
      ^                       
(;)
p = q = r = s = t = {1.0, 2.0};
          ^             
(,)
p = q = r = s = t = {1.0, 2.0};
      ^                       
(,)
p = q = r = s = t = {1.0, 2.0};
  ^                           
```
Note that the reverse movement will default to the reverse of the original. That is, `f` reverses with `F`, and `t` reverses with `T`

You can also initiate a movement with a backward movement (`F` of `T`), which result in the repeat movements triggered by `;` to be searching backwards, and the reverse movements triggered by `,` to be searching forwards.

Another useful searching movement is `%`, which jumps to the matching bracket to the bracket that's under the cursor. If there is no bracket under the cursor, it will jump to the matching bracket to the next bracket on the current line. This is illustrated below
```
void print(int num);
       ^
(%)
void print(int num);
                  ^
```
This works for all kinds of brackets, including `()`, `[]`, `{}`, and `<>`. Note that the matching bracket doensn't necessarily have to be on the same line. The `%` movement will also work for brackets on different lines, such as a Java Scrip object like the following:
```javascript
time = {
    "hour": 12,
    "minute": 30,
    "second": 23
}
```

As you can imagine, this is very useful for finding mismatched brackets in a file. 

##### Horizontal bridge to insert mode
Say you wish to insert at the first non-whitespace character of line, instead of pressing `_i`, you can simply use `I`.

Similarly, if you wish to insert at the end of the line, instead of `$a`, `A` is more convenient. 
```
    word1 word2 word3;
    ↖                ↗
    I                A
```
## Modes
There are 4 main modes to `Neovim`: 
- **Normal** 

    Normal mode allows you to freely navigate around the shown buffer(s) (opened files) with vim motions and allow you to enter other modes listed below.

    You are unable to make any changes to the file while in this mode. 

To exit out of any of the following modes into Normal mode, press `<ESC>`.
- **Insert**

    This mode allows you to modify the current buffer.

    Enter this mode with `i` or `a`. The difference between these two keybinds is `i` will place the insertion cursor before the current character, while `a` will place it after. 

- **Replace**

    This mode will overwrite the characters under the cursor with what you enter and move the cursor along. Note that `<backspace>` in this mode will replace what's currently written with the original character.

    Enter this mode with `R`.

- **Visual**

    This mode allows selection of characters with the cursor. The location the cursor when entering this mode will mark one of the endpoints of the selection. 

    Enter this mode with `v`.

- **Command**

    This mode allows the user to interact with the editor itself like a command line interface to perform more complex actions. 

    Enter this mode with `:`. You'll notice your active buffer (current "thing" you're editing) is located at the very bottom of the window. 

- **Operator-Pending** (O-Pending)

    This mode is automatically entered when Neovim is waiting for portions of an unfinished motion. When the entire expected command is entered, it will perform the specified motions and exit automatically.

    If you want to cancel an unfinished command, you can manually exit this mode by pressing `<ESC>`, identical to the above modes. 


## Anatomy of a Vim motion

All vim motion commands come in the following form
```
<Command> <Count> <Motion>
```

`<Command>` and `<Count>` are not always necessary, but all motions must include a `<Motion>`. 

`<Command>` is used when you wish to perform a certain action aside just moving your cursor with your motion. Common commands include
- Delete (`d`)
- Change (`c`)
- Yank (`y`)
- Select (`v`)

A brief note on yank: it is similar to copy, but slightly different as we'll introduce in the next article of this series. 

`<Count>` essentially specifies a loop. It will repeat the specified command with the specified motion `<Count>` number of times. 

If a `<Count>` is not included, it will default to 1.

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

These, however, only deal with vertical movements in the current view of the document. To scroll around the view, instead of moving the cursor to the bottom (or top) of the current view to force the view to shift, try the following:

To scroll to the beginning of the file, use `gg` and to reach the end, use `G`. 

To remember these two movements, notice `g` (the character) looks like a balloon, which floats upwards in the direction of the beginning of the file, while `G` is a popped balloon and sinks. 

Note this scrolling action (and all other scrolling actions) is instant and there are no transitions, which can be disorienting might need some getting-used-to. 

`<CTRL>f` will perform a "full-page scroll" downwards, while `<CTRL>b` will perform a "full-page scroll" upwards. These are abbreviated from "forward" and "back." 

Note that it will leave two lines in common between each scroll, as illustrated below: 

```
Line 1
Line 2 ───╮
Line 3    │
Line 4    │
Line 5    │Original view
Line 6    │
Line 7    │
Line 8 ───┼──╮
Line 9 ───╯  │
Line 10      │
Line 11      │View after <CTRL>f
Line 12      │
Line 13      │
Line 14      │
Line 15 ─────╯
Line 16
Line 17
Line 18
```


`<CTRL>d` will perform a "half-page scroll" downwards, while `<CTRL>u` will perform a "half-page scroll" upwards. These are abbreviated from "down" and "up." 

```
Line 1
Line 2 ───╮
Line 3    │
Line 4    │
Line 5    │Original view
Line 6 ───┼──╮
Line 7    │  │
Line 8    │  │
Line 9 ───╯  │
Line 10      │View after <CTRL>f
Line 11      │
Line 12      │
Line 13 ─────╯
Line 14
Line 15
Line 16
Line 17
Line 18
```

If you find you only with to scroll a few lines up or down, try `<CTRL>e` to scroll the view down by a single line. Opposingly, try `<CTRL>y` for a single line scroll upwards.

Remember these two actions by noticing `e` is close to `d` on a QWERTY keyboard, and thus, scrolls the view down, while `y` is located close to `u`, which scrolls the view upwards. 

Lastly, if you wish to go to a specific line, simply enter command mode and type the line you wish to reach.

For instance, if you wish the cursor to jump to line 100, simply type `:100<ENTER>`.

### Transitioning from normal to insert mode

You are now aware of `i`, `a`, `I`, and `A` to enter insert mode from normal mode. There are a few other keybindings that can make this transition while performing some certain action. 

If you wish to select a portion of text, delete it, then entering insert mode, you could try the command `c`, followed by a motion. 

For instance, to remove a word and enter insert mode, you would press `cw`.

A similar commonly used command is for removing the rest of the line after the cursor, then entering insert mode: `C`.

To delete the character under the cursor, then enter insert mode, try `s`. 

A similar command is to delete the entire line and enter insert mode via `S`.

### Deletion commands

If you simply wish to delete a character without entering insert mode, try `x`, which deletes the character sitting under your cursor. `D` produces the same effect. 

If you wish to delete the entire line, including the return character at the end, try `dd`. 

## Putting things together

After these separate introduction to commands and motions making up a "vim motion," it's helpful to see a few useful examples to serve as a starting point and as illustrative examples:

- `dj`: deletes the current and next line
- `vt(`: select the characters starting from the cursor until before the next opening parenthesis(`(`)
- `vi(` / `ci(` / `di(`: selects/changes/deletes the content bounded by the innermost set of `()`.




---


















- (Neo)Vim Basics & Built-in features 
    - Goal of article
    - What the different terms mean: 
        - Plugin
        - Command line usage of `nvim` command
    - Notation:
        - `<...>` means the literal key on keyboard (Ex. `<Tab>`, `<Ctrl>`, `<Space>`)
        - Command: type `:` before the command for it to show in nvim's command mode
    - Mode (What are the modes, usage, entering and exiting them) (https://www.warp.dev/terminus/vim-modes)
        - Graph of all modes
        - Normal
        - Command
        - Insert
        - Replace
        - Visual
    - Vim Motions (point to `:Tutor`)
        - Structure of "count" "motion" "argument"
        - Moving around (`hjkl`, jumping forward, backwards)
        - Undo / redo
        - Insertion
        - Deletion
        - Replacement
        - Visual select
        - Copy & pasting (to different registers)
    - Commands
        - Difference between capitalized and lowercase first letter in commands
        - quit out of editor
        - write file
        - Search for match
        - Search and replace
        - increment / decrement numbers
        - `<tab>` to autocomplete the command / show list of commands that start with the given
    - Built-in features (small overview)
        - Help tags
            - Guide navigating help tags
        - Swap file
        - Health
        - Global undo history
        - Installing plugins without a plugin manager
        - Macros
        - (Builtin) Autocompletion
        - 
    - Lua


