---
title: (Neo)Vim Basics
twitter_image: assets/intro/setup.png
---

# (Neo)Vim Basics

## Goal of this article

This article will introduce vim keybindings (aka. how to navigate and use the editor).

If you would like something that's longer, but more interactive, consider typing `:Tutor<ENTER>` after entering Neovim from the steps below.

## Conventions for describing keybinds

There will be lots of keybindings introduced in this article, shown in the form `...`. This suggests that you should press these keys in order. For instance, `dF3` means you should press the `d` key, `F` (note the capitalization, either done by `SHIFT` + `f` or `CAPS LOCK` `f` `CAPS LOCK`), then `3` key on your keyboard, in that order.

Sometimes, a functional key should be pressed. Any key in `< >` brackets will refer to that key on the keyboard and not those keys in order. For instance, `<CTRL>r` means you should press two keys: `CTRL` and `r` in order.

## Keybinding basics

To enter the editor, type `nvim` (or `nvim <FILE NAME>` if you wish to start editing a certain file). 

Unlike conventional editors, all editing could (and should) be done via the keyboard only. This is, of course, in pure pursuit of editing efficiency (as moving your hands from the home row of keys take time). 

However, the goal of a computer is to serve the user and the user shouldn't be limited on how they "should" interact with the computer. Thus, I recommend first restricting yourself to navigating with efficient keybinds, then interacting with the editor however you want after you are familar with them.

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

This serves as the basic set of movements. You may notice your cursor can only move to location with text. 

To remember these, `h` and `l` are the leftmost and rightmost of keys, corresponding to left and right cursor movement. 

As for `j` and `k`, note that `j` reaches downwards and thus moves the cursor downwards, whereas `k` reaches upwards, and thus moves the cursor upwards. 

Play around with these 4 keys and try to navigate to the `)` character in `struct Node *add(struct Node *n1lst, struct Node *n2lst)` (you may need to scroll down to see this function.

#### Horizontal movements

This section will detail moving along the same line.









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


