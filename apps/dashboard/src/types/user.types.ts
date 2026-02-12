export interface UserAccount {
  account: string; // Tên tài khoản (hiển thị chính)
  username: string; // Username (ví dụ: @daunampc)
  fullName: string; // Tên đầy đủ
  role: string; // Vai trò (Admin, Editor, Moderator, ...)
  status: string; // Trạng thái (Active, Locked, Pending, Suspended)
  email: string; // Email đăng ký
  joined: string; // Ngày tham gia hệ thống
  twoFA: string; // 2FA trạng thái ("Enable" hoặc "Disable")
}
export interface TableListUserProps {
  data: UserAccount[];
}
