type DefaultProps = {
    children: string | JSX.Element | JSX.Element[]
}

type TWithTooltipProps = DefaultProps & {
    tooltop : string
}

export interface IGetPlaylists {
    href: string
    limit: number
    next: string | null
    offset: number
    previous: string | null
    total: number
    items: IPlaylist[]
}

export interface IPlaylist {
    collaborative: boolean
    description: string
    external_urls: ExternalUrls
    href: string
    id: string
    images: Image[] | null
    name: string
    owner: Owner
    public: boolean
    snapshot_id: string
    tracks: Tracks
    type: string
    uri: string
    primary_color? : null
}

export interface ExternalUrls {
    spotify: string
}

export interface Image {
    url: string
    height: number | null
    width: number | null
}

export interface Owner {
    external_urls: ExternalUrls2
    followers?: Followers
    href: string
    id: string
    type: string
    uri: string
    display_name: string
}

export interface ExternalUrls2 {
    spotify: string
}

export interface Followers {
    href: string
    total: number
}

export interface Tracks {
    href: string
    total: number
}  

type CardDefaultProps = {
    playlist : IPlaylist
}

type TCompactCardProps = CardDefaultProps & {};

type TGridCardProps = CardDefaultProps & {};

export type{
    TWithTooltipProps,
    DefaultProps,
    TCompactCardProps,
    TGridCardProps
}