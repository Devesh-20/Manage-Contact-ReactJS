# Manage-Contact-ReactJS

![Manage contact](https://github.com/Devesh-20/Manage-Contact-ReactJS/assets/103423370/3fee2f2c-b845-400f-b7ea-d76c2e873114)

# Contact Management System

This is a simple Contact Management System with three main components: Header, Add Contact, and Contact List.

## Components

### 1. Header Component

The Header component simply displays the text "Manage Contacts" to provide a heading for the application.

### 2. Add Contact Component

The Add Contact component is responsible for adding new contacts. It includes the following features:

- Two input fields for Name and Email.
- An "Add Contact" button to submit the contact details.
- Storage of contacts in the local storage, ensuring that contacts persist even after a page refresh.

#### Data Flow

- Child to Parent: When a contact is added, data is sent from the Add Contact component to the parent component, which is typically referred to as `App.js`.

- Parent to Child: Data from the parent component (`App.js`) is then passed to the Contact List component for display.

### 3. Contact List Component

The Contact List component is responsible for displaying the list of contacts. It uses the `map` and `filter` functions to render and manage the elements. Users can delete contacts from the list.
