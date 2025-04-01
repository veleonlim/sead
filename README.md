<div id="top">

<!-- HEADER STYLE: CLASSIC -->
<div align="center">

# Sead - Active Directory Management System


<em>Simplify Active Directory operations, streamline user management, and improve efficiency.</em>

</div>
<br>

---

## Table of Contents

- [Table of Contents](#table-of-contents)
- [Overview](#overview)
- [Features](#features)
- [Project Structure](#project-structure)
    - [Project Index](#project-index)
- [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Usage](#usage)
    - [Testing](#testing)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgments](#acknowledgments)

---

## Overview

**Sead: Simplifying Active Directory Management**

**Why ADMS?**

This project provides a streamlined web-based POC for managing Active Directory users efficiently. It is designed to facilitate administrative tasks such as:

- **👤 User Account Creation:** Easily add users to Active Directory.
- **🔗 Group Management:** Assign users to specific groups based on role.
- **📊 Operator Account Information:** Retrieve and display operator account details in real-time.

---

## Features

|      | Component       | Details                              |
| :--- | :-------------- | :----------------------------------- |
| ⚙️  | **User Management**  | <ul><li>Create and manage Active Directory users.</li><li>Assign user roles dynamically.</li></ul> |
| 🔩 | **Group Management**  | <ul><li>Add users to specific groups.</li><li>Ensure proper access control via groups.</li></ul> |
| 📄 | **Operator Info** | <ul><li>View detailed operator information.</li><li>Retrieve user details in Active Directory.</li></ul> |
| 🔌 | **Lightweight & Fast**  | <ul><li>POC focuses on frontend interactions with AD.</li><li>Does not require a dynamic backend.</li></ul> |
| 🧩 | **UI Simplicity**  | <ul><li>Minimalist, user-friendly interface.</li><li>Clear navigation and operations.</li></ul> |
| 🛡️ | **Security**      | <ul><li>Only authorized users can access AD operations.</li><li>Protects sensitive directory data.</li></ul> |

---

## Project Structure

```sh
└── ADMS/
    ├── public/
    ├── src/
    │   ├── components/
    │   ├── pages/
    │   ├── utils/
    │   ├── styles/
    ├── .gitignore
    ├── README.md
    ├── package.json
    ├── tailwind.config.js
    └── vite.config.js
```

### Project Index

<details open>
    <summary><b><code>ADMS/</code></b></summary>
    <details>
        <summary><b>src/</b></summary>
        <blockquote>
            <table>
            <thead>
                <tr>
                    <th>File Name</th>
                    <th>Summary</th>
                </tr>
            </thead>
                <tr>
                    <td><b>components/</b></td>
                    <td>Reusable UI components such as user forms and group selectors.</td>
                </tr>
                <tr>
                    <td><b>pages/</b></td>
                    <td>Main application views, including user management and group management.</td>
                </tr>
                <tr>
                    <td><b>utils/</b></td>
                    <td>Helper functions for interacting with Active Directory.</td>
                </tr>
                <tr>
                    <td><b>styles/</b></td>
                    <td>CSS and Tailwind configurations for UI styling.</td>
                </tr>
            </table>
        </blockquote>
    </details>
</details>

---

## Getting Started

### Prerequisites

- **Node.js** (Latest LTS version)
- **npm** (Comes with Node.js)
- **Active Directory Server** (for actual integration, but not required for POC)

### Installation

```sh
git clone https://github.com/veleonlim/adms.git
cd adms
npm install
```

### Usage

```sh
npm run dev
```

Navigate to `http://localhost:3000` to access the UI.

### Testing

Currently, no backend logic is implemented, so testing is limited to UI verification.

---

## Roadmap

- ✅ POC for User and Group Management UI
- ⏳ Backend API for actual Active Directory integration
- ⏳ Authentication and role-based access control (RBAC)

---

## Contributing

Contributions are welcome! Feel free to submit pull requests or open issues.

---

## License

Distributed under the **MIT License**.

---

## Acknowledgments

Special thanks to contributors who helped shape this POC.

</div>
