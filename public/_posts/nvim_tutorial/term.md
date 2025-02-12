---
title: (Neo)Vim Terminology
twitter_image: assets/intro/setup.png
---

# (Neo)Vim Terminology

This article will serve as a brief introduction to Vim/Neovim terminology. If you're already 
familiar with the editor, consider skipping forward. 

<!-- Resize this-->
![](assets/terms/term_diagram.jpg)

The above is a screenshot of the basic, unconfigured editor.

Here are each term explained,
- **Cursor** can be understood to be the cursor in a word processing program. It is the location 
where text will be inputted. 

    In Neovim, typing text might not always translate to text being inputted. Generally, the 
    location of the cursor indicates which buffer you're commands will affect. 

- **Buffer** refers to the text stored in the computer's memory.

    Texts in buffers generally come from a file, but could originate from a Neovim internal program. 
    In the latter case, the texts generally act as a display of information, such as the current 
    file structure. 

- **Statusline** refers to the white bar that at the lower part of the editor.

    It displays many useful information. In the default statusline, it displays the file name, 
    cursor location, and mode. The mode isn't displayed in the above image since it's currently in 
    normal mode, which by default, will not be shown.



Here is a sample of a fully configured editor used to illustrate some other terms. 
![](assets/terms/fledged.png)

**Panes** display buffers. There are three panes in the above sample, 
- The leftmost pane displays is a file explorer. The text in that buffer is generated by
a file explorer plugin and the user can interact with it in dedicated ways to add, delete, and 
perform other operations with the file system.

- On the right are two panes split horizontally. They display the same file buffer. 

The panes have also been configured to display the relative line number.

The statusline has been configured to display the
- mode
- file name
- file encoding
- line ending style
- file type, and
- cursor location
in that order. 


