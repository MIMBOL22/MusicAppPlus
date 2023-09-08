export enum AccountAuthStatus {
    success = "success",
    loading = "loading",
    error = "error"
}

export interface IAccountInfo {
    auth_status?: AccountAuthStatus;
    uid?: number;
    secondName?: string;
    firstName?: string;
    default_avatar_id?: string;
    is_avatar_empty?: boolean;
    login?: string;
}