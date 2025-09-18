# Book Management Dashboard

A responsive React.js dashboard application for managing a collection of books with full CRUD operations, built as part of a developer assessment task.

## 🚀 Features

### Core Functionality
- **📚 Book Management**: Complete CRUD operations (Create, Read, Update, Delete)
- **🔍 Search & Filter**: Search by title/author with genre and status filters
- **📄 Pagination**: Displays 10 books per page with navigation controls
- **📱 Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **✅ Form Validation**: Robust form validation using react-hook-form/Formik
- **🔔 Notifications**: Toast notifications for success/error feedback
- **⚠️ Confirmation Dialogs**: Safe deletion with confirmation popups

### Book Information Display
Each book displays the following information:
- **Title**: Book title
- **Author**: Book author
- **Genre**: Book category/genre
- **Published Year**: Year of publication
- **Status**: Available or Issued

### User Interface
- **Table/Grid View**: Clean, organized display of book collection
- **Add/Edit Modal**: User-friendly forms for book management
- **Loading States**: Skeletons/spinners during data fetching
- **Modern Styling**: Implemented with [Material UI/Ant Design/Tailwind CSS]

## 🛠️ Technical Stack

- **Frontend Framework**: React.js
- **State Management**: React Hooks
- **API Integration**: [React Query/SWR] for efficient data fetching
- **Form Handling**: react-hook-form with validation using Zod
- **UI Library**: Tailwind CSS ShadcnUI
- **HTTP Client**: Axios
- **Notifications**: ShadcnUI Sonner

## 🔧 Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm 
### Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/deveshcse/latestAI-Client.git
   cd latestAI-Client
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Environment Setup**
   Create a `.env` file in the root directory:
   ```env
    VITE_API_BASE_URL=https://crud-template.vercel.app/
   ```

4. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn start
   ```

5. **Open your browser**
   Navigate to ` http://localhost:5173/`

## 🔌 API Integration

The application integrates with a mock API service for data persistence:

### API Endpoints
- `GET /books` - Fetch all books
- `POST /books` - Create a new book
- `PUT /books/:id` - Update an existing book
- `DELETE /books/:id` - Delete a book

### API Services Used
- **Primary**: [my custom crud backend](https://crud-template.vercel.app/)
- **Alternative**: [reqres.in](https://reqres.in) or json-server

## 📱 Usage

### Adding a New Book
1. Click the "Add Book" button
2. Fill in the book details in the modal form
3. Submit to save the book

### Editing a Book
1. Click the edit icon next to any book
2. Modify the details in the modal form
3. Save changes

### Deleting a Book
1. Click the delete icon next to any book
2. Confirm deletion in the popup dialog
3. Book will be removed from the collection

### Searching and Filtering
- **Search**: Use the search bar to find books by title or author
- **Genre Filter**: Select a genre from the dropdown to filter books
- **Status Filter**: Filter by availability status (Available/Issued)

### Pagination
- Navigate through pages using the pagination controls
- View 10 books per page
- Page numbers and navigation arrows provided

## 🎨 Design Features

### Responsive Design
- **Mobile-first approach** with breakpoints for tablet and desktop
- **Flexible grid system** that adapts to different screen sizes
- **Touch-friendly interfaces** for mobile users

### User Experience
- **Loading states** with skeletons during data fetching
- **Error handling** with user-friendly error messages
- **Success feedback** with toast notifications
- **Intuitive navigation** and clear action buttons


## 🔍 Project Structure

```
src/
├── components/
│   ├── BookFormDialog.jsx
│   ├── BookForm.jsx
│   ├── Dashboard.jsx/
│   └── datatable/
├── services/
│   └── bookService.js
├── hooks/
│   └── useBooks.js
├── lib/
│   └── apiClient.js
├── services/
└── App.jsx
├── index.css
└── main.jsx
```

## ✨ Bonus Features Implemented

- ✅ **Loading Skeletons**: Smooth loading experience during data fetching
- ✅ **Tanstack React Query**: Efficient API state management and caching
- ✅ **Form Validation with Zod**: Comprehensive form validation with error messages
- ✅ **Toast Notifications**: User feedback for all CRUD operations
- ✅ **Confirmation Dialogs**: Safe deletion with user confirmation
- ✅ **Responsive Design**: Mobile-optimized interface


## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## 👨‍💻 Author

**Devesh Mishra**
- GitHub: [@yourusername](https://github.com/deveshcse)
- LinkedIn: [LinkedIn](https://linkedin.com/in/deveshcse)
- Email: d.mishra56603@gmail.com

---

## 📋 Assessment Checklist

### ✅ Required Features Completed
- [x] Home Page Dashboard with book list
- [x] Table/Grid view with all required book information
- [x] Pagination (10 books per page)
- [x] Search by title or author
- [x] Genre and status filters
- [x] Add/Edit Book Modal with form validation
- [x] Delete functionality with confirmation
- [x] Toast notifications for all actions
- [x] Responsive design with UI library
- [x] API integration with CRUD operations

### ✅ Bonus Features Completed
- [x] Loading skeletons/spinners
- [x] React Query/SWR implementation
- [x] Enhanced UX with smooth transitions
- [x] Comprehensive error handling

**Project Status**: ✅ All requirements completed successfully!

---

*This project demonstrates proficiency in React.js development, API integration, responsive design, and modern frontend development practices.*