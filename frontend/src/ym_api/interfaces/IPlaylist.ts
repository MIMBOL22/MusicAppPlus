import {IDataTrack} from "./IFeed.ts";

export interface IPlaylist {
    owner?: IOwner;
    playlistUuid?: string;
    available?: boolean;
    uid: number;
    kind: number;
    title?: string;
    description?: string;
    descriptionFormatted?: string;
    revision?: number;
    snapshot?: number;
    trackCount?: number;
    visibility?: string;
    collective?: boolean;
    created?: Date;
    modified?: Date;
    isBanner?: boolean;
    isPremiere?: boolean;
    idForFrom?: string;
    everPlayed?: boolean;
    coverWithoutText?: ICoverWithoutTextClass;
    urlPart?: string;
    durationMs?: number;
    cover?: ICoverWithoutTextClass;
    animatedCoverUri?: string;
    ogImage?: string;
    ogTitle?: string;
    tracks?: ITrackElement[];
    tags?: any[];
    likesCount?: number;
    madeFor?: IMadeFor;
    generatedPlaylistType?: string;
    backgroundVideoUrl?: string;
    backgroundImageUrl?: string;
    pager?: IPager;
}

export interface ICoverWithoutTextClass {
    type: string;
    dir: string;
    version: string;
    uri: string;
    custom: boolean;
}

export interface IMadeFor {
    userInfo: IOwner;
    caseForms: ICaseForms;
}

export interface ICaseForms {
    nominative: string;
    genitive: string;
    dative: string;
    accusative: string;
    instrumental: string;
    prepositional: string;
}

export interface IOwner {
    uid: number;
    login?: string;
    name?: string;
    sex?: string;
    verified?: boolean;
}

export interface IPager {
    total: number;
    page: number;
    perPage: number;
}

export interface ITrackElement extends IDataTrack {
    track?: ITrackTrack;
    originalIndex?: number;
    recent?: boolean;
}

export interface ITrackTrack {
    id: string;
    realId: string;
    title: string;
    trackSource: ITrackSource;
    major: IMajor;
    available: boolean;
    availableForPremiumUsers: boolean;
    availableFullWithoutPermission: boolean;
    disclaimers: any[];
    availableForOptions: IAvailableForOption[];
    durationMs: number;
    storageDir: string;
    fileSize: number;
    r128: IR128;
    fade: IFade;
    previewDurationMs: number;
    artists: IArtist[];
    albums: IAlbum[];
    coverUri: string;
    ogImage: string;
    lyricsAvailable: boolean;
    lyricsInfo: ILyricsInfo;
    type: IMetaTypeEnum;
    rememberPosition: boolean;
    trackSharingFlag: ITrackSharingFlag;
    contentWarning?: IContentWarning;
    backgroundVideoUri?: string;
    playerId?: string;
    version?: string;
}

export interface IAlbum {
    id: number;
    title: string;
    type?: IPurpleType;
    metaType: IMetaTypeEnum;
    year: number;
    releaseDate: Date;
    coverUri: string;
    ogImage: string;
    genre: string;
    trackCount: number;
    likesCount: number;
    recent: boolean;
    veryImportant: boolean;
    artists: IArtist[];
    labels: IMajor[];
    available: boolean;
    availableForPremiumUsers: boolean;
    disclaimers: any[];
    availableForOptions: IAvailableForOption[];
    availableForMobile: boolean;
    availablePartially: boolean;
    bests: number[];
    trackPosition: ITrackPosition;
    contentWarning?: IContentWarning;
    version?: string;
}

export interface IArtist {
    id: number;
    name: string;
    various: boolean;
    composer: boolean;
    cover?: IArtistCover;
    genres: any[];
    disclaimers: any[];
    decomposed?: Array<IArtist | string>;
}

export interface IArtistCover {
    type: ICoverType;
    prefix: string;
    uri: string;
}

export enum ICoverType {
    FromAlbumCover = "from-album-cover",
    FromArtistPhotos = "from-artist-photos",
}

export enum IAvailableForOption {
    Bookmate = "bookmate",
}

export enum IContentWarning {
    Explicit = "explicit",
}

export interface IMajor {
    id: number;
    name: string;
}

export enum IMetaTypeEnum {
    Music = "music",
}

export interface ITrackPosition {
    volume: number;
    index: number;
}

export enum IPurpleType {
    Single = "single",
}

export interface IFade {
    inStart: number;
    inStop: number;
    outStart: number;
    outStop: number;
}

export interface ILyricsInfo {
    hasAvailableSyncLyrics: boolean;
    hasAvailableTextLyrics: boolean;
}

export interface IR128 {
    i: number;
    tp: number;
}

export enum ITrackSharingFlag {
    CoverOnly = "COVER_ONLY",
    VideoAllowed = "VIDEO_ALLOWED",
}

export enum ITrackSource {
    Own = "OWN",
}
