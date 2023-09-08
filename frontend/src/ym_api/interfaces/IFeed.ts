export interface IFeed {
    nextRevision: Date;
    canGetMoreEvents: boolean;
    pumpkin: boolean;
    isWizardPassed: boolean;
    generatedPlaylists: IGeneratedPlaylist[];
    headlines: IHeadline[];
    today: Date;
    days: Day[];
}

export interface Day {
    day: Date;
    events: IEvent[];
    tracksToPlay: ITracksToPlayElement[];
    tracksToPlayWithAds: ITracksToPlayWithAd[];
}

export interface IEvent {
    id: string;
    type: string;
    typeForFrom: string;
    title: ITitle[];
    tracks?: IEventTrack[];
    genre?: string;
    radioIsAvailable?: boolean;
    artistsWithArtistsFromHistory?: IArtistsWithArtistsFromHistory[];
    similarToArtist?: ISimilarToArtistClass;
    similarArtists?: ISimilarArtist[];
    albums?: IEventAlbum[];
    artist?: ISimilarToArtistClass;
    similarToGenre?: string;
    similarGenre?: string;
    playlist?: IPlaylist;
}

export interface IEventAlbum {
    id: number;
    title: string;
    type?: IFluffyType;
    metaType: IMetaTypeEnum;
    contentWarning: IContentWarning;
    year: number;
    releaseDate: Date;
    coverUri: string;
    ogImage: string;
    genre: string;
    trackCount: number;
    likesCount: number;
    recent: boolean;
    veryImportant: boolean;
    artists: IArtistElement[];
    labels: IMajor[];
    available: boolean;
    availableForPremiumUsers: boolean;
    disclaimers: any[];
    availableForOptions: IAvailableForOption[];
    availableForMobile: boolean;
    availablePartially: boolean;
    bests: number[];
}

export interface IArtistElement {
    id: number;
    name: string;
    various: boolean;
    composer: boolean;
    cover?: IArtistCover;
    genres: any[];
    disclaimers: any[];
    decomposed?: Array<IArtistElement | IDecomposedEnum>;
}

export enum IDecomposedEnum {
    Decomposed = " & ",
    Empty = ", ",
    Feat = " feat. ",
}

export interface IArtistCover {
    type: IPurpleType;
    prefix: string;
    uri: string;
}

export enum IPurpleType {
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

export enum IFluffyType {
    Compilation = "compilation",
    Single = "single",
}

export interface ISimilarToArtistClass {
    id: string;
    name: string;
    various: boolean;
    composer: boolean;
    cover: IArtistCover;
    ogImage: string;
    genres: string[];
    counts: ICounts;
    available: boolean;
    ratings: IRatings;
    disclaimers: any[];
    links: ILink[];
    ticketsAvailable: boolean;
    noPicturesFromSearch?: boolean;
}

export interface ICounts {
    tracks: number;
    directAlbums: number;
    alsoAlbums: number;
    alsoTracks: number;
}

export interface ILink {
    title: string;
    href: string;
    type: ILinkType;
    socialNetwork?: ISocialNetwork;
}

export enum ISocialNetwork {
    Telegram = "telegram",
    Tiktok = "tiktok",
    Twitter = "twitter",
    Vk = "vk",
    Youtube = "youtube",
}

export enum ILinkType {
    Official = "official",
    Social = "social",
}

export interface IRatings {
    week: number;
    month: number;
    day: number;
}

export interface IArtistsWithArtistsFromHistory {
    artist: ISimilarToArtistClass;
    artistsFromHistory: ISimilarToArtistClass[];
}

export interface IPlaylist {
    available: boolean;
    uid: number;
    kind: number;
    title: string;
    description: string;
    descriptionFormatted: string;
    revision: number;
    snapshot: number;
    trackCount: number;
    visibility: string;
    collective: boolean;
    created: Date;
    modified: Date;
    isBanner: boolean;
    isPremiere: boolean;
}

export interface ISimilarArtist {
    artist: ISimilarToArtistClass;
    subscribed: boolean;
}

export interface ITitle {
    type: ITitleType;
    text: string;
    name?: string;
    id?: number;
    login?: string;
    kind?: number;
}

export enum ITitleType {
    Artist = "artist",
    Genre = "genre",
    Playlist = "playlist",
    Text = "text",
}

export interface IEventTrack {
    id: string;
    realId: string;
    title: string;
    contentWarning?: IContentWarning;
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
    artists: IArtistElement[];
    albums: ITrackAlbum[];
    coverUri: string;
    ogImage: string;
    lyricsAvailable: boolean;
    lyricsInfo: ILyricsInfo;
    type: IMetaTypeEnum;
    rememberPosition: boolean;
    trackSharingFlag: ITrackSharingFlag;
    backgroundVideoUri?: string;
    playerId?: string;
    version?: string;
}

export interface ITrackAlbum {
    id: number;
    title: string;
    type?: IFluffyType;
    metaType: IMetaTypeEnum;
    contentWarning?: IContentWarning;
    year: number;
    releaseDate: Date;
    coverUri: string;
    ogImage: string;
    genre: string;
    trackCount: number;
    likesCount?: number;
    recent: boolean;
    veryImportant: boolean;
    artists: IArtistElement[];
    labels: IMajor[];
    available: boolean;
    availableForPremiumUsers: boolean;
    disclaimers: any[];
    availableForOptions: IAvailableForOption[];
    availableForMobile: boolean;
    availablePartially: boolean;
    bests: number[];
    trackPosition: ITrackPosition;
    version?: string;
    actionButton?: IActionButton;
}

export interface IActionButton {
    text: string;
    url: string;
    color: string;
    viewBrowser: boolean;
}

export interface ITrackPosition {
    volume: number;
    index: number;
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

export interface ITracksToPlayElement {
    id: string;
    realId: string;
    title: string;
    contentWarning?: IContentWarning;
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
    artists: IArtistElement[];
    albums: ITrackAlbum[];
    coverUri: string;
    ogImage: string;
    lyricsAvailable: boolean;
    lyricsInfo: ILyricsInfo;
    type: IMetaTypeEnum;
    rememberPosition: boolean;
    trackSharingFlag: ITrackSharingFlag;
    version?: string;
    backgroundVideoUri?: string;
    playerId?: string;
    best?: boolean;
}

export interface ITracksToPlayWithAd {
    type: ITracksToPlayWithAdType;
    track: ITracksToPlayElement;
}

export enum ITracksToPlayWithAdType {
    Track = "track",
}

export interface IGeneratedPlaylist {
    type: string;
    ready: boolean;
    notify: boolean;
    data: IGeneratedPlaylistData;
}

export interface IGeneratedPlaylistData extends IPlaylist {
    owner: IOwner;
    playlistUuid: string;
    idForFrom: string;
    everPlayed: boolean;
    coverWithoutText: ICoverWithoutTextClass;
    urlPart: string;
    durationMs: number;
    cover: ICoverWithoutTextClass;
    ogImage: string;
    ogTitle?: string;
    ogDescription?: string;
    tracks?: IDataTrack[];
    tags: any[];
    madeFor: IMadeFor;
    generatedPlaylistType: string;
    backgroundImageUrl: string;
    customWave?: ICustomWave;
    backgroundVideoUrl?: string;
    animatedCoverUri?: string;
}

export interface ICoverWithoutTextClass {
    type: ICoverWithoutTextType;
    dir: string;
    version: string;
    uri: string;
    custom: boolean;
}

export enum ICoverWithoutTextType {
    Pic = "pic",
}

export interface ICustomWave {
    title: string;
    animationUrl: string;
    position: string;
    header: string;
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
    login: string;
    name: string;
    sex: ISex;
    verified: boolean;
}

export enum ISex {
    Male = "male",
    Unknown = "unknown",
}

export interface IDataTrack {
    id: number;
    timestamp: Date;
}

export interface IHeadline {
    type: string;
    id: string;
    message: string;
}
