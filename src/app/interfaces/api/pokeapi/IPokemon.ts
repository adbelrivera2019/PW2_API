import { IPokemonSprites } from "./IPokemonSprites"
import { IPokemonAbilities } from "./IPokemonAbilities"
import { IPokemonAbility } from "./IPokemonAbility"

export interface IPokemon{
    id: number
    name: string
    height: number
    weight: number
    sprites: IPokemonSprites
    base_experience: number
    abilities: IPokemonAbilities[]
    order: number
}

