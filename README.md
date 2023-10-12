## Angular Design Patterns

[![](https://img.shields.io/circleci/project/github/etn-ccis/blui-angular-design-patterns/master.svg?style=flat)](https://circleci.com/gh/etn-ccis/blui-angular-design-patterns/tree/master) [![codecov](https://codecov.io/gh/etn-ccis/blui-angular-design-patterns/branch/master/graph/badge.svg?token=7Y4TGH31B6)](https://codecov.io/gh/etn-ccis/blui-angular-design-patterns)

This repository holds the source code examples for [Brightlayer UI design patterns](https://brightlayer-ui.github.io/patterns), written in Angular. The code is organized to make it easy to copy and paste the examples into your own projects.

## Current Patterns

| Pattern                                                      | Description                                                  | Interactive Demo                                             |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| [Account Menu In A Navigation Drawer](https://brightlayer-ui.github.io/patterns/account-menu)     | This involves placing an avatar in the drawer header along with basic information about the user (e.g., their name, username, email address, job title and / or organization affiliation)       | [Demo](https://blui-angular-design-patterns.web.app/account-menu/in-a-drawer) |
| [Account Menu In App Bar](https://brightlayer-ui.github.io/patterns/account-menu)     |    The user menu appears as an Avatar in the App Bar which opens a menu with the user-related content.    | [Demo](https://blui-angular-design-patterns.web.app/account-menu/in-an-app-bar) |
| [Action List](https://brightlayer-ui.github.io/patterns/lists)       | A list with actions available on individual list items       | [Demo](https://blui-angular-design-patterns.web.app/lists/action-list) |
| [Action List With Inline Actions](https://brightlayer-ui.github.io/patterns/lists)  | A list with inline actions available on individual list| [Demo](https://blui-angular-design-patterns.web.app/lists/inline-actions) |
| [Action List In Button Panel](https://brightlayer-ui.github.io/patterns/lists)  | A list with global actions in its own button panel.| [Demo](https://blui-angular-design-patterns.web.app/lists/in-button-panel) |
| [Action List In Panel Header](https://brightlayer-ui.github.io/patterns/lists)  | A list with global actions in the panel header.| [Demo](https://blui-angular-design-patterns.web.app/lists/in-panel-header) |
| [Action List With Local Actions](https://brightlayer-ui.github.io/patterns/lists)  | A list with local actions available on individual list items.| [Demo](https://blui-angular-design-patterns.web.app/lists/inline-local-actions) |
| [Basic Bottom Sheet](https://brightlayer-ui.github.io/patterns/overlay) | At the top of the page, the app bar has a 3dot icon on right. When clicking on 3dot icon bottomsheet slides up from bottom of the page, revealing global actions that affect the whole page. | [Demo](https://blui-angular-design-patterns.web.app/overlays/basic-bottom-sheet) |
| [Collapsible App Bar](https://brightlayer-ui.github.io/patterns/appbar) | At the top of the page, the appbar is large, but as you scroll, it changes to a standard appbar. | [Demo](https://blui-angular-design-patterns.web.app/app-bar/collapsible) |
| [Complex Bottom Sheet](https://brightlayer-ui.github.io/patterns/overlay) | At the top of the page, the app bar has a 3dot icon on right. When clicking on 3dot icon bottomsheet slides up from bottom of the page, revealing filters that affect the whole page. | [Demo](https://blui-angular-design-patterns.web.app/overlays/complex-bottom-sheet) |
| [Contextual Action Bar](https://brightlayer-ui.github.io/patterns/appbar) | Contextual action bar to provide contextual actions to selected items. | [Demo](https://blui-angular-design-patterns.web.app/app-bar/contextual) |
| [Contextual Spinners](https://brightlayer-ui.github.io/patterns/loading) | If you need to wait for a server response to validate inputs in a form (after clicking the submit button), you should disable the submit button and replace its label with a spinner. | [Demo](https://blui-angular-design-patterns.web.app/loading-states/contextual-spinners) |
| [Data List](https://brightlayer-ui.github.io/patterns/lists)         | A basic list dynamically built from a JSON data object.      | [Demo](https://blui-angular-design-patterns.web.app/lists/data-list) |
| [Dropdown Toolbar](https://brightlayer-ui.github.io/patterns/appbar) | Dropdown Toolbar transforms the simple text subtitle of the app bar into a dropdown menu that can be used to configure the page. | [Demo](https://blui-angular-design-patterns.web.app/app-bar/dropdown-toolbar) |
| [Dynamic Stepper](https://brightlayer-ui.github.io/patterns/steppers) | A dynamic stepper that allows the user to create an arbitrary number of steps for a procedure. | [Demo](https://blui-angular-design-patterns.web.app/dynamic-stepper) |
| [Fixed Length Passcode](https://brightlayer-ui.github.io/patterns/forms)  | Form validation starts after specific length of passcode| [Demo](https://blui-angular-design-patterns.web.app/forms-and-validation/fixed-length-passcode) |
| [In a List](https://brightlayer-ui.github.io/patterns/forms)  | Input validations in a list| [Demo](https://blui-angular-design-patterns.web.app/forms-and-validation/in-a-list) |
| [In a Table](https://brightlayer-ui.github.io/patterns/forms)  | Validate inputs inside table which works on larger screens and collapse the data into list at mobile size.| [Demo](https://blui-angular-design-patterns.web.app/forms-and-validation/in-a-table) |
| [Internationalization](https://brightlayer-ui.github.io/patterns/internationalization) | A simple shopping app that allows the user to switch between the different languages including the languages that are right to left. | [Demo](https://blui-angular-design-patterns.web.app/internationalization) |
| [List As A Tree Structure](https://brightlayer-ui.github.io/patterns/lists)       | A list that navigates a tree-like structure. | [Demo](https://blui-angular-design-patterns.web.app/lists/tree-structure) |
| [Multiselect List](https://brightlayer-ui.github.io/patterns/lists)  | A multiselect list with group actions.                       | [Demo](https://blui-angular-design-patterns.web.app/lists/multi-select-list) |
| [Page-Wide Search](https://brightlayer-ui.github.io/patterns/appbar) | Page-wide search can be placed below the primary app bar when searching content on a single page or screen. | [Demo](https://blui-angular-design-patterns.web.app/app-bar/page-wide-search) |
| [Password](https://brightlayer-ui.github.io/patterns/forms)  | Form Validation such as verifying phone number.                       | [Demo](https://blui-angular-design-patterns.web.app/forms-and-validation/password) |
| [Phone Number Format](https://brightlayer-ui.github.io/patterns/forms)  | Validate phone number as per format. | [Demo](https://blui-angular-design-patterns.web.app/forms-and-validation/phone-number-format) |
| [Progress Bars](https://brightlayer-ui.github.io/patterns/loading)  | Use progress bar where progress is discrete / measurable| [Demo](https://blui-angular-design-patterns.web.app/loading-states/progress-bars) |
| [Progress Bars (Indeterminate)](https://brightlayer-ui.github.io/patterns/loading)  | Progress bar with indeterminate variation| [Demo](https://blui-angular-design-patterns.web.app/loading-states/progress-bar-indeterminate) |
| [Responsive Table](https://brightlayer-ui.github.io/patterns/lists)  | A responsive table that works on larger screens and collapse the data into list at mobile size. | [Demo](https://blui-angular-design-patterns.web.app/lists/responsive-table) |
| [Search Bar](https://brightlayer-ui.github.io/patterns/appbar)       | At the top of the page, the app bar has a search icon on the right. After clicking on the search icon, the search bar slides in from the right of the app bar. | [Demo](https://blui-angular-design-patterns.web.app/app-bar/global-search) |
| [Sectioned Form](https://brightlayer-ui.github.io/patterns/forms)  | Validate form once you submit complete form. | [Demo](https://blui-angular-design-patterns.web.app/forms-and-validation/sectioned-form) |
| [Skeleton Loader](https://brightlayer-ui.github.io/patterns/loading)       | When your application is loading structured data, use skeletons that mimic the data that will eventually be loaded. | [Demo](https://blui-angular-design-patterns.web.app/loading-states/skeletons-loader) |
| [Sortable List](https://brightlayer-ui.github.io/patterns/lists)     | A sortable list with drag handles.                           | [Demo](https://blui-angular-design-patterns.web.app/lists/sortable-list) |
| [Spinner Overlay](https://brightlayer-ui.github.io/patterns/loading)       | Spinner overlays make use of a semi-transparent overlay with a large, centered spinner. It is useful when you want to block user interaction with the screen (or a section of the screen) while processing occurs. | [Demo](https://blui-angular-design-patterns.web.app/loading-states/spinner-overlays) |
| [Status List](https://brightlayer-ui.github.io/patterns/lists)       | A basic list with status stripes for list items.             | [Demo](https://blui-angular-design-patterns.web.app/lists/status-list) |
| [Verify on Submit](https://brightlayer-ui.github.io/patterns/forms)  | This type of verification is common when the checks cannot be performed on the client, such as making an API call to verify a registration code, check user login credentials, or search for a device on the network.  | [Demo](https://blui-angular-design-patterns.web.app/forms-and-validation/verify-on-submit) |

## Running Locally

To run this project (with all patterns) locally, first clone the repository:

```shell
git clone https://github.com/etn-ccis/blui-angular-design-patterns.git
cd blui-angular-design-patterns
```

Then you may run `yarn && yarn start` to start a local server.

## Folder Structure

All our design patterns are located inside `/src/app/pages`.

```
└── /src/app
    |── /pages                              // individual design patterns
    └── /services                           // logics controlling the side navigation
```
