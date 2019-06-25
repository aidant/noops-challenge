interface Config extends GlobalFetch {
  url: URL
}

export const config: Config = {
  url: new URL('https://api.noopschallenge.com'),
} as Config

const noops = async (challenge: string, { method = 'GET', options = {} } = {}) => {
  if (!config.fetch) throw new Error(
    'Looks like noops.config.fetch is undefined.\n' +
    'Try using window.fetch, node-fetch or your favorite fetch library.'
  )

  const url = new URL(challenge, config.url)

  for (const property in options) {
    url.searchParams.append(property, options[property])
  }

  const response = await config.fetch(url.href, { method })
  return response.json()
}

interface Coordinates {
  x: number
  y: number
}

/*
  Week 1 Challenges
*/

/*
  Hexbot
  A different color with every ping
*/

interface HexOptions {
  count?: number
  width?: number
  height?: number
  seed?: string
}

interface Hex {
  colors: Array<{
    value: string
    coordinates?: Coordinates
  }>
}

export function hexbot (options: HexOptions = {}): Promise<Hex> {
  return noops('hexbot', { options })
}

/*
  Drumbot
  APIs and drum machines: together at last
*/

type DrumOptions = Array<{ name: string }>

interface Drum {
  name: string
  stepCount: number
  beatsPerMinute: number
  tracks: Array<{
    instrument: 'clap' | 'cowbell' | 'kick' | 'snare' | 'hihat' | 'ride' | 'rim'
    steps: Array<0 | 1>
  }>
}

export function drumbot (): Promise<DrumOptions>
export function drumbot (drum: string): Promise<Drum>
export function drumbot (drum?: string): Promise<DrumOptions | Drum> {
  if (drum) return noops(`drumbot/patterns/${drum}`)
  else return noops('drumbot/patterns')
}

/*
  Vexbot
  A nonstop stream of coordinates
*/

interface VexOptions {
  count?: number
  magnitude?: number
  connected?: 0 | 1
  width?: number
  height?: number
}

interface Vex {
  vectors: Array<{
    a: Coordinates
    b: Coordinates
    speed: number
  }>
}

export function vexbot (options: VexOptions = {}): Promise<Vex> {
  return noops('vexbot', { options })
}

/*
  Directbot
  Directbot just tells you where to go. Will you follow?
*/

interface DirectOptions {
  count?: number
  width?: number
  height?: number
  speed?: number
  connected?: 0 | 1
  pattern?: string
}

interface Direct {
  directions: Array<{
    direction: 'up' | 'down' | 'left' | 'right'
    distance: number
    speed: number
    coordinates?: {
      a: Coordinates
      b: Coordinates
    },
  }>
}

export function directbot (options: DirectOptions = {}): Promise<Direct> {
  return noops('directbot', { options })
}

/*
  Fizzbot
  Programming puzzles to keep you fizzy and sharp
*/

// interface FizzOptions {

// }

// interface Fizz {

// }

// export function fizzbot (options: FizzOptions = {}): Promise<Fizz> {
//   return noops('fizzbot', { options })
// }

/*
  Week 2 Challenges
*/

/*
  Mazebot
  The Mazebot sends you mazes; solve them with an software or WASD
*/

// interface MazeOptions {

// }

// interface Maze {

// }

// export function mazebot (options: MazeOptions = {}): Promise<Maze> {
//   return noops('mazebot', { options })
// }

/*
  Polybot
  Polybot sends you polygons from 3 sides to 72 sides (a heptacontakaidigon!).
*/

interface PolyOptions {
  count?: number
  size?: number
  minSides?: number
  maxSides?: number
  width?: number
  height?: number
}

interface Poly {
  polygons: Coordinates[] | Coordinates[][]
}

export function polybot (options: PolyOptions = {}): Promise<Poly> {
  return noops('polybot', { options })
}

/*
  Automatabot
  These little critters have a mind of their own. Conway's game of life, come to life
*/

// interface AutomataOptions {

// }

// interface Automata {

// }

// export function automatabot (options: AutomataOptions = {}): Promise<Automata> {
//   return noops('automatabot', { options })
// }
