export interface BaseUser {
  id: string;
  username: string;
  displayName: string;
  dateOfBirth: string;
}

export interface BasePost {
  id: string;
  title: string;
  description: string;
  author: string;
  url: string;
  user: NonSensitiveUser;
}

export interface Comment {
  id: string;
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
  madePosts: BasePost[];
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

export type BlogEntry = Omit<BasePost, 'id' | 'user'>;

export interface BlogEntryFormValues extends BlogEntry {
  tags: string[];
}

export interface Tag {
  id: string;
  content: string;
}

export interface BlogPost extends BasePost {
  tags: Tag[];
  date: Date;
  comments: Comment[];
  likedUsers: NonSensitiveUser[];
}
