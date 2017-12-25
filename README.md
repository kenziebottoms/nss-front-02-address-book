# Address Book

Use XHR to create a simple tabbed contact info collection.

## Requirements

- [x] The page displays a tab for each letter of the alphabet that is represented in the address book by last name or business name.
    - Example: `"S"` would contain _Jane Smith_ and _The Smiling Elephant restaurant_.
- [x] The app comes pre-loaded with info for places restaurants, sights and other businesses in Nashville that have paid you to list them in your app.
    - [x] The built-in addresses/info should be stored in a local JSON file.
- [x] The user can click a tab to see the listings under that letter.
- [x] The user can type in a name, and the app displays the matching results.
- [ ] The user should be able to store new contacts.
    - [x] The form inputs and submit button should change from "find contact" to "add contact" based on a radio button selection.
- [x] When the user submits a contact, it should display below the form with two buttons: "Save" and "Edit".
    - [ ] If user clicks "save", the contact should be saved to localStorage, and be available to the same search function that retrieves the built-in contacts.
    - [x] If user clicks "Edit", the form is re-populated with the contact info so the user can edit it.
- [x] The UI should use Bootstrap.