# Spotify Clone Project

Đây là một dự án clone Spotify sử dụng Django cho backend và React cho frontend.

## Cấu trúc dự án

```
spotify-complete-project/
├── backend/          # Django backend
└── frontend/         # React frontend
```

## Yêu cầu hệ thống

- Python 3.8+
- Node.js 14+
- PostgreSQL

## Cài đặt Backend

1. Tạo và kích hoạt môi trường ảo:
```bash
cd backend
python -m venv venv
venv\Scripts\activate  # Trên Windows
```

2. Cài đặt dependencies:
```bash
pip install -r requirements.txt
```

3. Cấu hình database:
- Tạo file .env trong thư mục backend với các biến môi trường cần thiết
- Chạy migrations:
```bash
python manage.py migrate
```

4. Chạy server:
```bash
python manage.py runserver
```

## Cài đặt Frontend

1. Cài đặt dependencies:
```bash
cd frontend
npm install
```

2. Chạy development server:
```bash
npm start
```

## Tính năng

- Đăng nhập/Đăng ký
- Tìm kiếm bài hát
- Phát nhạc
- Tạo playlist
- Theo dõi nghệ sĩ
- Chat với người dùng khác
- Thanh toán premium

## API Endpoints

Backend cung cấp các API endpoints sau:
- /api/auth/ - Xác thực người dùng
- /api/music/ - Quản lý bài hát và playlist
- /api/chat/ - Chat realtime
- /api/payment/ - Xử lý thanh toán

## Đóng góp

1. Fork repository
2. Tạo branch mới (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Mở Pull Request 