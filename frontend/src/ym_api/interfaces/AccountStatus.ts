export interface AvatarInfo {
    default_avatar_id: string;
    is_avatar_empty: boolean;
}

export interface AccountStatus {
    account:        Account;
    permissions:    Permissions;
    subscription:   Subscription;
    subeditor:      boolean;
    subeditorLevel: number;
    pretrialActive: boolean;
    masterhub:      Masterhub;
    plus:           Plus;
    hasOptions:     string[];
    defaultEmail:   string;
    userhash:       string;
}

export interface Account {
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
    passportPhones:       PassportPhone[];
    registeredAt:         Date;
    child:                boolean;
    nonOwnerFamilyMember: boolean;
}

export interface PassportPhone {
    phone: string;
}

export interface Masterhub {
    activeSubscriptions:    any[];
    availableSubscriptions: any[];
}

export interface Permissions {
    until:   Date;
    values:  string[];
    default: string[];
}

export interface Plus {
    hasPlus:             boolean;
    isTutorialCompleted: boolean;
}

export interface Subscription {
    autoRenewable:             AutoRenewable[];
    nonAutoRenewableRemainder: NonAutoRenewableRemainder;
    hadAnySubscription:        boolean;
    canStartTrial:             boolean;
    mcdonalds:                 boolean;
}

export interface AutoRenewable {
    expires:       Date;
    vendor:        string;
    vendorHelpURL: string;
    productID:     string;
    product:       Product;
    orderID:       number;
    finished:      boolean;
}

export interface Product {
    productID:            string;
    type:                 string;
    commonPeriodDuration: string;
    duration:             number;
    trialDuration:        number;
    price:                Price;
    family:               boolean;
    plus:                 boolean;
    feature:              string;
    features:             string[];
    debug:                boolean;
}

export interface Price {
    amount:   number;
    currency: string;
}

export interface NonAutoRenewableRemainder {
    days: number;
}