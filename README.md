# Angular Design Patterns

[![](https://img.shields.io/circleci/project/github/pxblue/angular-design-patterns/master.svg?style=flat)](https://circleci.com/gh/pxblue/angular-design-patterns/tree/master)

This repository holds the source code examples for [PX Blue design patterns](https://pxblue.github.io/patterns), written in Angular. The code is organized to make it easy to copy and paste the examples into your own projects.

## Current Patterns

| Pattern                                                      | Description                                                  | Interactive Demo                                             |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| [Action List](https://pxblue.github.io/patterns/lists)       | A list with actions available on individual list items       | [StackBlitz](https://stackblitz.com/github/pxblue/angular-design-patterns?file=src%2Fapp%2Fpages%2Flist%2Faction-list%2Faction-list.component.html) |
| [Basic Bottom Sheet](https://pxblue.github.io/patterns/overlay) | At the top of the page, the app bar has a 3dot icon on right. When clicking on 3dot icon bottomsheet slides up from bottom of the page, revealing global actions that affect the whole page. | [StackBlitz](https://stackblitz.com/github/pxblue/angular-design-patterns?file=src%2Fapp%2Fpages%2Foverlays%2Fbasic-bottom-sheet%2Fbasic-bottom-sheet.component.html) |
| [Collapsible App Bar](https://pxblue.github.io/patterns/appbar) | At the top of the page, the appbar is large, but as you scroll, it changes to a standard appbar. | [StackBlitz](https://stackblitz.com/github/pxblue/angular-design-patterns?file=src%2Fapp%2Fpages%2Fapp-bar%2Fcollapsible-app-bar%2Fcollapsible-app-bar.component.ts) |
| [Complex Bottom Sheet](https://pxblue.github.io/patterns/overlay) | At the top of the page, the app bar has a 3dot icon on right. When clicking on 3dot icon bottomsheet slides up from bottom of the page, revealing filters that affect the whole page. | [StackBlitz](https://stackblitz.com/github/pxblue/angular-design-patterns?file=src%2Fapp%2Fpages%2Foverlays%2Fcomplex-bottom-sheet%2Fcomplex-bottom-sheet.component.html) |
| [Data List](https://pxblue.github.io/patterns/lists)         | A basic list dynamically built from a JSON data object.      | [StackBlitz](https://stackblitz.com/github/pxblue/angular-design-patterns?file=src%2Fapp%2Fpages%2Flist%2Fdata-list%2Fdata-list.component.html) |
| [Dynamic Stepper](https://pxblue.github.io/patterns/steppers) | A dynamic stepper that allows the user to create an arbitrary number of steps for a procedure. | [StackBlitz](https://stackblitz.com/github/pxblue/angular-design-patterns?file=src%2Fapp%2Fpages%2Fdynamic-stepper%2Fdynamic-stepper.component.html) |
| [Form Validation](https://pxblue.github.io/patterns/forms)   | Varies types of form validation, such as verifying phone number, email address, character length, and password. | [StackBlitz](https://stackblitz.com/github/pxblue/angular-design-patterns?file=src%2Fapp%2Fpages%2Fform-validation%2Fform-validation.component.html) |
| [Internationalization](https://pxblue.github.io/patterns/internationalization) | A simple shopping app that allows the user to switch between the different languages including the languages that are right to left. | [StackBlitz](https://stackblitz.com/github/pxblue/angular-design-patterns?file=src%2Fapp%2Fpages%2Fi18n%2Fi18n.component.html) |
| [Loading States](https://pxblue.github.io/patterns/empty-states) | Displays skeleton placeholder elements while content is loading. | [StackBlitz](https://stackblitz.com/github/pxblue/angular-design-patterns?file=src%2Fapp%2Fpages%2Floading-states%2Floading-states.component.html) |
| [Multiselect List](https://pxblue.github.io/patterns/lists)  | A multiselect list with group actions.                       | [StackBlitz](https://stackblitz.com/github/pxblue/angular-design-patterns?file=src%2Fapp%2Fpages%2Flist%2Fmultiselect-list%2Fmultiselect-list.component.html) |
| [Responsive Table](https://pxblue.github.io/patterns/lists)  | A responsive table that works on larger screens and collapse the data into list at mobile size. | [StackBlitz](https://stackblitz.com/github/pxblue/angular-design-patterns?file=src%2Fapp%2Fpages%2Flist%2Fresponsive-table%2Fresponsive-table.component.html) |
| [Search Bar](https://pxblue.github.io/patterns/appbar)       | At the top of the page, the app bar has a search icon on the right. After clicking on the search icon, the search bar slides in from the right of the app bar. | [StackBlitz](https://stackblitz.com/github/pxblue/angular-design-patterns?file=src%2Fapp%2Fpages%2Fapp-bar%2Fsearch-bar%2Fsearch-bar.component.html) |
| [Sortable List](https://pxblue.github.io/patterns/lists)     | A sortable list with drag handles.                           | [StackBlitz](https://stackblitz.com/github/pxblue/angular-design-patterns?file=src%2Fapp%2Fpages%2Flist%2Fsortable-list%2Fsortable-list.component.html) |
| [Status List](https://pxblue.github.io/patterns/lists)       | A basic list with status stripes for list items.             | [StackBlitz](https://stackblitz.com/github/pxblue/angular-design-patterns?file=src%2Fapp%2Fpages%2Flist%2Fstatus-list%2Fstatus-list.component.html) |

## Running Locally

To run this project (with all patterns) locally, first clone the repository:

```shell
git clone https://github.com/pxblue/angular-design-patterns.git
cd angular-design-patterns
```

Then you may run `yarn && yarn start` to start a local server.

## Folder Structure

All our design patterns are located inside `/src/app/pages`.

```
└── /src/app
    |── /pages                              // individual design patterns
    └── /services                           // logics controlling the side navigation
```
