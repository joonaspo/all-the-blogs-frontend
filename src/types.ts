export interface BaseUser {
  username: string;
  displayName: string;
  dateOfBirth: string;
}

export interface Post {
  id: string;
  title: string;
  description: string;
  author: string;
  url: string;
  user: NonSensitiveUser;
  tags: string[];
  likedUsers?: NonSensitiveUser[];
  comments?: Comment[];
}

export interface Comment {
  content: string;
  user: NonSensitiveUser;
  date: string;
}

export type NonSensitiveUser = Omit<BaseUser, 'dateOfBirth'>;

export interface ToNewUserEntry extends BaseUser {
  password: string;
}

export interface User extends BaseUser {
  id: string;
  dateOfRegistration: string;
  madePosts: Post[];
  followedUsers: NonSensitiveUser[];
}

export enum AlertSeverity {
  success = 'success',
  info = 'info',
  warning = 'warning',
  error = 'error',
}

export type LoginCredentials = Omit<
  ToNewUserEntry,
  'dateOfBirth' | 'displayName'
>;

export interface UserLoggedIn {
  token: string;
  username: string;
  displayName: string;
}

export type BlogEntryFromValues = Omit<
  Post,
  'id' | 'user' | 'comments' | 'likedUsers'
>;
