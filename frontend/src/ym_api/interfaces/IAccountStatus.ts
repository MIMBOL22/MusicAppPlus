export interface AvatarInfo {
    default_avatar_id: string;
    is_avatar_empty: boolean;
}

export interface IAccountStatus {
    account: IAccount;
    permissions:    Permissions;
    subscription: ISubscription;
    subeditor:      boolean;
    subeditorLevel: number;
    pretrialActive: boolean;
    masterhub: IMasterhub;
    plus: IPlus;
    hasOptions:     string[];
    defaultEmail:   string;
    userhash:       string;
}

export interface IAccount {
    now:                  Date;
    uid:                  number;
    login:                string;
    region:               number;
    fullName:             string;
    secondName:           string;
    firstName:            string;
    displayName:          string;
    birthday:             Date;
    serviceAvailable:     boolean;
    hostedUser:           boolean;
    passportPhones: IPassportPhone[];
    registeredAt:         Date;
    child:                boolean;
    nonOwnerFamilyMember: boolean;
}

export interface IPassportPhone {
    phone: string;
}

export interface IMasterhub {
    activeSubscriptions:    any[];
    availableSubscriptions: any[];
}

export interface IPermissions {
    until:   Date;
    values:  string[];
    default: string[];
}

export interface IPlus {
    hasPlus:             boolean;
    isTutorialCompleted: boolean;
}

export interface ISubscription {
    autoRenewable: IAutoRenewable[];
    nonAutoRenewableRemainder: INonAutoRenewableRemainder;
    hadAnySubscription:        boolean;
    canStartTrial:             boolean;
    mcdonalds:                 boolean;
}

export interface IAutoRenewable {
    expires:       Date;
    vendor:        string;
    vendorHelpURL: string;
    productID:     string;
    product: IProduct;
    orderID:       number;
    finished:      boolean;
}

export interface IProduct {
    productID:            string;
    type:                 string;
    commonPeriodDuration: string;
    duration:             number;
    trialDuration:        number;
    price: IPrice;
    family:               boolean;
    plus:                 boolean;
    feature:              string;
    features:             string[];
    debug:                boolean;
}

export interface IPrice {
    amount:   number;
    currency: string;
}

export interface INonAutoRenewableRemainder {
    days: number;
}