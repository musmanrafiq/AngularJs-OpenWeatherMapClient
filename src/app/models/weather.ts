
export interface Weather {
    main: string,
    coord: Coord

}

interface Coord {
    lon: number,
    lat: number
}