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
| [Contextual Spinners](https://pxblue.github.io/patterns/loading) | If you need to wait for a server response to validate inputs in a form (after clicking the submit button), you should disable the submit button and replace its label with a spinner. | [StackBlitz](https://stackblitz.com/github/pxblue/angular-design-patterns?file=src%2Fapp%2Fpages%2Floading-waiting-states%2Fcontextual-spinners%2Fcontextual-spinners.component.html) |
| [Data List](https://pxblue.github.io/patterns/lists)         | A basic list dynamically built from a JSON data object.      | [StackBlitz](https://stackblitz.com/github/pxblue/angular-design-patterns?file=src%2Fapp%2Fpages%2Flist%2Fdata-list%2Fdata-list.component.html) |
| [Dynamic Stepper](https://pxblue.github.io/patterns/steppers) | A dynamic stepper that allows the user to create an arbitrary number of steps for a procedure. | [StackBlitz](https://stackblitz.com/github/pxblue/angular-design-patterns?file=src%2Fapp%2Fpages%2Fdynamic-stepper%2Fdynamic-stepper.component.html) |
| [Fixed Length Passcode](https://pxblue.github.io/patterns/forms)  | Form validation starts after specific length of passcode| [StackBlitz](https://stackblitz.com/github/pxblue/angular-design-patterns?file=src%2Fapp%2Fpages%2Fforms-and-validation%2Ffix-length-passcode%2Ffix-length-passcode.component.html) |
| [In a List](https://pxblue.github.io/patterns/forms)  | Input validations in a list| [StackBlitz](https://stackblitz.com/github/pxblue/angular-design-patterns?file=src%2Fapp%2Fpages%2Fforms-and-validation%2Fin-a-list%2Fin-a-list.component.html) |
| [In a Table](https://pxblue.github.io/patterns/forms)  | Validate inputs inside table which works on larger screens and collapse the data into list at mobile size.| [StackBlitz](https://stackblitz.com/github/pxblue/angular-design-patterns?file=src%2Fapp%2Fpages%2Fforms-and-validation%2Fin-a-table%2Fin-a-table.component.html) |
| [Internationalization](https://pxblue.github.io/patterns/internationalization) | A simple shopping app that allows the user to switch between the different languages including the languages that are right to left. | [StackBlitz](https://stackblitz.com/github/pxblue/angular-design-patterns?file=src%2Fapp%2Fpages%2Fi18n%2Fi18n.component.html) |
| [Multiselect List](https://pxblue.github.io/patterns/lists)  | A multiselect list with group actions.                       | [StackBlitz](https://stackblitz.com/github/pxblue/angular-design-patterns?file=src%2Fapp%2Fpages%2Flist%2Fmultiselect-list%2Fmultiselect-list.component.html) |
| [Password](https://pxblue.github.io/patterns/forms)  | Form Validation such as verifying phone number.                       | [StackBlitz](https://stackblitz.com/github/pxblue/angular-design-patterns?file=src%2Fapp%2Fpages%2Fforms-and-validation%2Fpassword%2Fpassword.component.html) |
| [Phone Number Format](https://pxblue.github.io/patterns/forms)  | Validate phone number as per format. | [StackBlitz](https://stackblitz.com/github/pxblue/angular-design-patterns?file=src%2Fapp%2Fpages%2Fforms-and-validation%2Fphone-number-format%2Fphone-number-format.component.html) |
| [Progress Bars](https://pxblue.github.io/patterns/loading)  | Use progress bar where progress is discrete / measurable| [StackBlitz](https://stackblitz.com/github/pxblue/angular-design-patterns?file=src%2Fapp%2Fpages%2Floading-waiting-states%2Fprogress-bars%2Fprogress-bars.component.html) |
| [Progress Bars (Indeterminate)](https://pxblue.github.io/patterns/loading)  | Progress bar with indeterminate variation| [StackBlitz](https://stackblitz.com/github/pxblue/angular-design-patterns?file=src%2Fapp%2Fpages%2Floading-waiting-states%2Fprogress-bar-indeterminate%2Fprogress-bar-indeterminate.component.html) |
| [Responsive Table](https://pxblue.github.io/patterns/lists)  | A responsive table that works on larger screens and collapse the data into list at mobile size. | [StackBlitz](https://stackblitz.com/github/pxblue/angular-design-patterns?file=src%2Fapp%2Fpages%2Flist%2Fresponsive-table%2Fresponsive-table.component.html) |
| [Search Bar](https://pxblue.github.io/patterns/appbar)       | At the top of the page, the app bar has a search icon on the right. After clicking on the search icon, the search bar slides in from the right of the app bar. | [StackBlitz](https://stackblitz.com/github/pxblue/angular-design-patterns?file=src%2Fapp%2Fpages%2Fapp-bar%2Fsearch-bar%2Fsearch-bar.component.html) |
| [Sectioned Form](https://pxblue.github.io/patterns/forms)  | Validate form once you submit complete form. | [StackBlitz](https://stackblitz.com/github/pxblue/angular-design-patterns?file=src%2Fapp%2Fpages%2Fforms-and-validation%2Fsectioned-form%2Fsectioned-form.component.html) |
| [Skeleton Loader](https://pxblue.github.io/patterns/loading)       | When your application is loading structured data, use skeletons that mimic the data that will eventually be loaded. | [StackBlitz](https://stackblitz.com/github/pxblue/angular-design-patterns?file=src%2Fapp%2Fpages%2Floading-waiting-states%2Fskeleton-loader%2Fskeleton-loader.component.html) |
| [Sortable List](https://pxblue.github.io/patterns/lists)     | A sortable list with drag handles.                           | [StackBlitz](https://stackblitz.com/github/pxblue/angular-design-patterns?file=src%2Fapp%2Fpages%2Flist%2Fsortable-list%2Fsortable-list.component.html) |
| [Spinner Overlay](https://pxblue.github.io/patterns/loading)       | Spinner overlays make use of a semi-transparent overlay with a large, centered spinner. It is useful when you want to block user interaction with the screen (or a section of the screen) while processing occurs. | [StackBlitz](https://stackblitz.com/github/pxblue/angular-design-patterns?file=src%2Fapp%2Fpages%2Floading-waiting-states%2Fskeleton-loader%2Fskeleton-loader.component.html) |
| [Status List](https://pxblue.github.io/patterns/lists)       | A basic list with status stripes for list items.             | [StackBlitz](https://stackblitz.com/github/pxblue/angular-design-patterns?file=src%2Fapp%2Fpages%2Flist%2Fstatus-list%2Fstatus-list.component.html) |
| [Verify on Submit](https://pxblue.github.io/patterns/forms)  | This type of verification is common when the checks cannot be performed on the client, such as making an API call to verify a registration code, check user login credentials, or search for a device on the network.  | [StackBlitz](https://stackblitz.com/github/pxblue/angular-design-patterns?file=src%2Fapp%2Fpages%2Fforms-and-validation%2Fverify-on-submit%2Fverify-on-submit.component.html) |

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
