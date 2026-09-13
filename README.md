# 🧱 Dev Stack

A modern and responsive **Dev Stack** website where users can explore different development technologies and build their own technology stack. Users can add technologies to their stack, remove individual items, or clear the entire stack.

## 🌐 Live Site

https://dev-stack-lemon.vercel.app/

## 💻 GitHub Repository

https://github.com/tishadey45/dev-stack

---

## ✨ Features

* 🔍 Explore different development technologies with category, difficulty, rating, and badge information.
* ➕ Add technologies to your personal stack and prevent duplicate technologies from being added.
* 🗑️ Remove individual technologies or clear the entire stack with toast notifications.
* 📱 Fully responsive design for mobile, tablet, and desktop devices.
* ⏳ Loading state while technology data is being loaded from the JSON file.

---

## 🛠️ Technologies Used

* React.js
* TypeScript
* Tailwind CSS
* DaisyUI
* React-Toastify
* JSON
* Vite
* Lucide React

---

## 📂 Project Data

The technology information is stored in a separate JSON file instead of being hardcoded inside the React components.

Each technology contains:

* `id`
* `name`
* `category`
* `description`
* `icon`
* `rating`
* `difficulty`
* `badge`

---

## 🚀 Main Functionalities

### Technology Cards

Each technology card displays:

* Technology icon
* Badge
* Technology name
* Description
* Category
* Difficulty level
* Rating
* Add to Stack button

### Your Stack

The Your Stack section shows the technologies selected by the user.

Users can:

* Add a technology to the stack
* Remove a single technology
* Remove all technologies
* See the selected technology count
* Get a warning when trying to add the same technology twice

### 🔔 Toast Notifications

**React-Toastify** is used to show notifications for:

* Adding a technology
* Duplicate technology attempt
* Removing a technology
* Removing all technologies

---

# 📱 Responsive Design

The website is fully responsive and works across:

* 📱 Mobile devices
* 📲 Tablets
* 💻 Desktop devices

The navigation bar also changes its layout for smaller screens with a hamburger menu.

---

# 📚 React Questions & Answers

### 1. What is JSX, and why is it used in React?

JSX is a syntax that allows us to write HTML-like code inside JavaScript. It makes React code easier to read and helps us create UI components easily.

### 2. What is the difference between props and state?

**Props** are used to pass data from a parent component to a child component. **State** is used to store and manage data inside a component that can change over time.

### 3. What does the `useState` hook do, and where did you use it in this project?

`useState` is a React Hook used to create and manage changing data in a component. In this project, I used it to manage the selected technologies and update the stack when a technology is added or removed.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` is used to perform side effects in a React component. I used it to load the technology data from the JSON file when the component was loaded.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

A unique `key` helps React identify each item in a list. It helps React update the list efficiently when items are added, removed, or changed.

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI based on a condition. In this project, I used it to show an empty stack message when no technology is selected.

Example:

```jsx
{selectedStack.length === 0 && (
  <p>Your stack is empty.</p>
)}
```

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent component passes data to a child using **props**. A child can send data back to the parent by calling a function that the parent passes through props.

Example:

```jsx
<Child technology={technology} onSelect={handleSelect} />
```

Here, `technology` is passed to the child, and `onSelect` allows the child to send information back to the parent.

---

## 👩‍💻 Author

**Tisha Dey**

GitHub: https://github.com/tishadey45