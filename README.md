# Full-Stack Starter: Next.js + Express.js + MongoDB

Dự án full-stack hoàn chỉnh gồm **Client (Next.js)** và **Server (Express.js)** với kiến trúc phân tầng chuẩn (**Controller -> Service -> Repository -> Model**) kết nối cơ sở dữ liệu **MongoDB**.

---

## 📁 Cấu Trúc Dự Án (Project Structure)

```text
.
├── client/                     # Frontend (Next.js 16 App Router)
│   ├── public/                 # Static assets
│   ├── src/
│   │   ├── app/                # App Router (layout.js, page.js, globals.css)
│   │   └── services/           # API call helpers (api.js)
│   ├── .env.local              # Client environment variables
│   ├── .env.local.example
│   └── package.json
│
├── server/                     # Backend (Express.js - ESModules)
│   ├── src/
│   │   ├── config/             # Cấu hình Database & biến môi trường
│   │   │   └── db.js           # Kết nối MongoDB (Mongoose)
│   │   ├── controllers/        # Tầng Controller: Nhận request & trả response
│   │   │   └── user.controller.js
│   │   ├── services/           # Tầng Service: Xử lý nghiệp vụ (Business logic)
│   │   │   └── user.service.js
│   │   ├── repositories/       # Tầng Repository: Truy vấn Database
│   │   │   ├── base.repository.js  # Generic CRUD repository
│   │   │   └── user.repository.js  # User-specific queries
│   │   ├── models/             # Tầng Model: Định nghĩa Mongoose Schema
│   │   │   └── user.model.js
│   │   ├── routes/             # Định tuyến API
│   │   │   ├── index.js        # Gom route trung tâm & health check
│   │   │   └── user.routes.js  # Routes cho User
│   │   ├── middlewares/        # Middlewares (errorHandler, asyncHandler,...)
│   │   │   └── errorHandler.js
│   │   ├── utils/              # Utilities (ApiResponse formatting)
│   │   │   └── apiResponse.js
│   │   ├── app.js              # Cấu hình Express app
│   │   └── server.js           # File khởi chạy server (entry point)
│   ├── .env                    # Server environment variables
│   ├── .env.example
│   └── package.json
│
├── package.json                # Root package.json để chạy đồng thời client & server
├── .gitignore
└── README.md
```

---

## 🏛️ Kiến Trúc Backend (Layered Architecture)

Luồng xử lý request đi theo một chiều chuẩn mực:

```text
[Client Request]
       │
       ▼
[Route (routes/)]           ──> Định tuyến HTTP method & endpoint URL
       │
       ▼
[Controller (controllers/)] ──> Tiếp nhận req, validate input cơ bản, gọi Service, trả response
       │
       ▼
[Service (services/)]       ──> Xử lý toàn bộ logic nghiệp vụ (business rules, validation logic)
       │
       ▼
[Repository (repositories/)]──> Thao tác với Database (find, create, update, delete, aggregate)
       │
       ▼
[Model (models/)]           ──> Schema & ODM (Mongoose)
       │
       ▼
[MongoDB Database]
```

### Ưu điểm của kiến trúc:
1. **Tách biệt trách nhiệm (Separation of Concerns):** Controller không quan tâm database là gì; Service chỉ tập trung logic kinh doanh; Repository quản lý cách lưu trữ và truy vấn.
2. **Dễ viết Unit Test:** Dễ dàng mock tầng Repository để test Service, hoặc mock Service để test Controller.
3. **Tái sử dụng cao:** `BaseRepository` cung cấp sẵn các thao tác CRUD cơ bản (`create`, `findById`, `findAll`, `updateById`, `deleteById`).

---

## ⚙️ Biến Môi Trường (Environment Variables)

### 1. Server (`server/.env`)
```env
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/my_database
CLIENT_URL=http://localhost:3000
```

### 2. Client (`client/.env.local`)
```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

---

## 🚀 Hướng Dẫn Chạy Dự Án

### Yêu cầu:
- **Node.js** (Khuyến nghị >= 18.x)
- **MongoDB** đang chạy trên máy cục bộ hoặc dùng MongoDB Atlas URI.

### 1. Cài đặt toàn bộ dependencies
Tại thư mục gốc của dự án:
```bash
npm run install:all
```

### 2. Chạy ứng dụng

#### Chạy đồng thời cả Frontend và Backend:
```bash
npm run dev
```

#### Hoặc chạy từng phần riêng biệt:
- **Chỉ chạy Backend (port 5000):**
  ```bash
  npm run dev:server
  ```
- **Chỉ chạy Frontend (port 3000):**
  ```bash
  npm run dev:client
  ```

---

## 📡 Danh Sách API Có Sẵn (Sample Endpoints)

| Method | Endpoint | Mô tả |
| :--- | :--- | :--- |
| `GET` | `/api/health` | Kiểm tra tình trạng server (Health check) |
| `GET` | `/api/users` | Lấy danh sách tất cả người dùng |
| `GET` | `/api/users/:id` | Lấy thông tin người dùng theo ID |
| `POST` | `/api/users` | Tạo mới người dùng (`name`, `email`, `role`) |
| `PUT` | `/api/users/:id` | Cập nhật thông tin người dùng |
| `DELETE` | `/api/users/:id` | Xóa người dùng theo ID |
