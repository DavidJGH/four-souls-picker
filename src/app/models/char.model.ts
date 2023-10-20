export interface Char {
  id: number,
  front: string,
  back: string,
  item: string,
  itemBack: string,
  itemTappable: boolean,
  hasCounter: boolean,
  startCounters: number,
  threePlus: boolean,
  cardCredits: Credit[]
}

export interface SetInfo {
  name: string,
  link: string,
  from: User | undefined
}

export interface Credit {
  for: string,
  user: User
}

export interface User {
  name: string,
  link: string
}

export type CharWithSet = Char & { set: SetInfo }


const crossroadsts: User = {
  name: 'Crossroads',
  link: 'https://twitter.com/crossroads__art'
}

const HamBerry: User = {
  name: 'HamBerry',
  link: 'https://twitter.com/HamBerry_art'
}

const PommePower: User = {
  name: 'PommePower',
  link: 'none'
}

const MrMcMonkey: User = {
  name: 'MrMcMonkey',
  link: 'none'
}


export const customSets: SetInfo[] = [
  {
    name: 'Grayfruit Expansion',
    link: 'https://printfoursouls.com/booster/grayfruit-expansion',
    from: crossroadsts,
  },
  {
    name: 'PommePower\'s Custom Cards',
    link: 'https://drive.google.com/drive/folders/1g4DtbAO2cFtntV0YD9rRNN73yfHMWtEF',
    from: PommePower
  },
  {
    name: 'MrMcMonkey\'s Pack',
    link: 'https://drive.google.com/drive/folders/1aqaCUwXiUJNTPgIQoCL-GunZc9LLQoEQ',
    from: MrMcMonkey
  }
]

export const sets = ['Base Game V2', 'Gold Box V2', 'Four Souls+ V2', 'Requiem', 'Requiem Warp Zone', 'Tapeworm'];

export const charsBySet: { [set: typeof sets[number]]: Char[] } = {
  'Base Game V2': [
    {
      front: 'https://foursouls.com/wp-content/uploads/2022/01/b2-isaac.png',
      back: 'none',
      item: 'https://foursouls.com/wp-content/uploads/2022/01/b2-the_d6.png',
      itemBack: 'none',
      itemTappable: true,
      id: 1,
      hasCounter: false,
      startCounters: 0,
      threePlus: false,
      cardCredits: []
    },
    {
      front: 'https://foursouls.com/wp-content/uploads/2022/01/b2-maggy.png',
      back: 'none',
      item: 'https://foursouls.com/wp-content/uploads/2022/01/b2-yum_heart.png',
      itemBack: 'none',
      itemTappable: true,
      id: 2,
      hasCounter: false,
      startCounters: 0,
      threePlus: false,
      cardCredits: []
    },
    {
      front: 'https://foursouls.com/wp-content/uploads/2022/01/b2-cain.png',
      back: 'none',
      item: 'https://foursouls.com/wp-content/uploads/2022/01/b2-sleight_of_hand.png',
      itemBack: 'none',
      itemTappable: true,
      id: 3,
      hasCounter: false,
      startCounters: 0,
      threePlus: false,
      cardCredits: []
    },
    {
      front: 'https://foursouls.com/wp-content/uploads/2022/01/b2-judas.png',
      back: 'none',
      item: 'https://foursouls.com/wp-content/uploads/2022/01/b2-book_of_belial.png',
      itemBack: 'none',
      itemTappable: true,
      id: 4,
      hasCounter: false,
      startCounters: 0,
      threePlus: false,
      cardCredits: []
    },
    {
      front: 'https://foursouls.com/wp-content/uploads/2022/01/b2-blue_baby.png',
      back: 'none',
      item: 'https://foursouls.com/wp-content/uploads/2022/01/b2-forever_alone.png',
      itemBack: 'none',
      itemTappable: true,
      id: 5,
      hasCounter: false,
      startCounters: 0,
      threePlus: false,
      cardCredits: []
    },
    {
      front: 'https://foursouls.com/wp-content/uploads/2022/01/b2-eve.png',
      back: 'none',
      item: 'https://foursouls.com/wp-content/uploads/2022/01/b2-the_curse.png',
      itemBack: 'none',
      itemTappable: true,
      id: 6,
      hasCounter: false,
      startCounters: 0,
      threePlus: false,
      cardCredits: []
    },
    {
      front: 'https://foursouls.com/wp-content/uploads/2022/01/b2-samson.png',
      back: 'none',
      item: 'https://foursouls.com/wp-content/uploads/2022/01/b2-blood_lust.png',
      itemBack: 'none',
      itemTappable: true,
      id: 7,
      hasCounter: false,
      startCounters: 0,
      threePlus: false,
      cardCredits: []
    },
    {
      front: 'https://foursouls.com/wp-content/uploads/2022/01/b2-lazarus.png',
      back: 'none',
      item: 'https://foursouls.com/wp-content/uploads/2022/01/b2-lazarus_rags.png',
      itemBack: 'none',
      itemTappable: false,
      id: 8,
      hasCounter: false,
      startCounters: 0,
      threePlus: false,
      cardCredits: []
    },
    {
      front: 'https://foursouls.com/wp-content/uploads/2022/01/b2-lilith.png',
      back: 'none',
      item: 'https://foursouls.com/wp-content/uploads/2022/01/b2-incubus.png',
      itemBack: 'none',
      itemTappable: true,
      id: 9,
      hasCounter: false,
      startCounters: 0,
      threePlus: false,
      cardCredits: []
    },
    {
      front: 'https://foursouls.com/wp-content/uploads/2022/01/b2-the_forgotten.png',
      back: 'none',
      item: 'https://foursouls.com/wp-content/uploads/2022/01/b2-the_bone.png',
      itemBack: 'none',
      itemTappable: true,
      id: 10,
      hasCounter: true,
      startCounters: 0,
      threePlus: false,
      cardCredits: []
    },
    {
      front: 'https://foursouls.com/wp-content/uploads/2022/01/b2-eden.png',
      back: 'none',
      item: 'none',
      itemBack: 'none',
      itemTappable: false,
      id: 11,
      hasCounter: false,
      startCounters: 0,
      threePlus: false,
      cardCredits: []
    }
  ],
  'Gold Box V2': [
    {
      front: 'https://foursouls.com/wp-content/uploads/2022/01/g2-azazel.png',
      back: 'none',
      item: 'https://foursouls.com/wp-content/uploads/2022/01/g2-lord_of_the_pit.png',
      itemBack: 'none',
      itemTappable: true,
      id: 12,
      hasCounter: false,
      startCounters: 0,
      threePlus: false,
      cardCredits: []
    },
    {
      front: 'https://foursouls.com/wp-content/uploads/2022/01/g2-the_lost.png',
      back: 'none',
      item: 'https://foursouls.com/wp-content/uploads/2022/01/g2-holy_mantle.png',
      itemBack: 'none',
      itemTappable: true,
      id: 13,
      hasCounter: false,
      startCounters: 0,
      threePlus: false,
      cardCredits: []
    },
    {
      front: 'https://foursouls.com/wp-content/uploads/2022/01/g2-the_keeper.png',
      back: 'none',
      item: 'https://foursouls.com/wp-content/uploads/2022/01/g2-wooden_nickel.png',
      itemBack: 'none',
      itemTappable: true,
      id: 14,
      hasCounter: false,
      startCounters: 0,
      threePlus: false,
      cardCredits: []
    },
    {
      front: 'https://foursouls.com/wp-content/uploads/2022/01/g2-apollyon.png',
      back: 'none',
      item: 'https://foursouls.com/wp-content/uploads/2022/01/g2-void.png',
      itemBack: 'none',
      itemTappable: true,
      id: 15,
      hasCounter: false,
      startCounters: 0,
      threePlus: false,
      cardCredits: []
    }
  ],
  'Four Souls+ V2': [
    {
      front: 'https://foursouls.com/wp-content/uploads/2022/01/fsp2-bum_bo.png',
      back: 'none',
      item: 'https://foursouls.com/wp-content/uploads/2022/01/fsp2-bag_o_trash.png',
      itemBack: 'none',
      itemTappable: false,
      id: 16,
      hasCounter: false,
      startCounters: 0,
      threePlus: false,
      cardCredits: []
    },
    {
      front: 'https://foursouls.com/wp-content/uploads/2022/01/fsp2-dark_judas.png',
      back: 'none',
      item: 'https://foursouls.com/wp-content/uploads/2022/01/fsp2-dark_arts.png',
      itemBack: 'none',
      itemTappable: false,
      id: 17,
      hasCounter: false,
      startCounters: 0,
      threePlus: false,
      cardCredits: []
    },
    {
      front: 'https://foursouls.com/wp-content/uploads/2022/01/fsp2-guppy.png',
      back: 'none',
      item: 'https://foursouls.com/wp-content/uploads/2022/01/fsp2-infestation.png',
      itemBack: 'none',
      itemTappable: true,
      id: 18,
      hasCounter: false,
      startCounters: 0,
      threePlus: false,
      cardCredits: []
    },
    {
      front: 'https://foursouls.com/wp-content/uploads/2022/01/fsp2-whore_of_babylon.png',
      back: 'none',
      item: 'https://foursouls.com/wp-content/uploads/2022/01/fsp2-gimpy.png',
      itemBack: 'none',
      itemTappable: false,
      id: 19,
      hasCounter: false,
      startCounters: 0,
      threePlus: false,
      cardCredits: []
    }
  ],
  'Requiem': [
    {
      front: 'https://foursouls.com/wp-content/uploads/2022/01/r-bethany.png',
      back: 'none',
      item: 'https://foursouls.com/wp-content/uploads/2022/01/r-book_of_virtues.png',
      itemBack: 'none',
      itemTappable: false,
      id: 20,
      hasCounter: false,
      startCounters: 0,
      threePlus: false,
      cardCredits: []
    },
    {
      front: 'https://foursouls.com/wp-content/uploads/2022/01/r-jacob_and_esau.png',
      back: 'none',
      item: 'https://foursouls.com/wp-content/uploads/2022/01/r-sibling_rivalry.png',
      itemBack: 'none',
      itemTappable: true,
      id: 21,
      hasCounter: false,
      startCounters: 0,
      threePlus: true,
      cardCredits: []
    },
    {
      front: 'https://foursouls.com/wp-content/uploads/2022/01/r-the_broken.png',
      back: 'none',
      item: 'https://foursouls.com/wp-content/uploads/2022/01/r-spindown_dice.png',
      itemBack: 'none',
      itemTappable: true,
      id: 22,
      hasCounter: false,
      startCounters: 0,
      threePlus: true,
      cardCredits: []
    },
    {
      front: 'https://foursouls.com/wp-content/uploads/2022/01/r-the_dauntless.png',
      back: 'none',
      item: 'https://foursouls.com/wp-content/uploads/2022/01/r-hypercoagulation.png',
      itemBack: 'none',
      itemTappable: false,
      id: 23,
      hasCounter: true,
      startCounters: 0,
      threePlus: false,
      cardCredits: []
    },
    {
      front: 'https://foursouls.com/wp-content/uploads/2022/01/r-the_hoarder.png',
      back: 'none',
      item: 'https://foursouls.com/wp-content/uploads/2022/01/r-bag_of_crafting.png',
      itemBack: 'none',
      itemTappable: false,
      id: 24,
      hasCounter: false,
      startCounters: 0,
      threePlus: false,
      cardCredits: []
    },
    {
      front: 'https://foursouls.com/wp-content/uploads/2022/01/r-the_deceiver.png',
      back: 'none',
      item: 'https://foursouls.com/wp-content/uploads/2022/01/r-ceremonial_blade.png',
      itemBack: 'none',
      itemTappable: true,
      id: 25,
      hasCounter: false,
      startCounters: 0,
      threePlus: false,
      cardCredits: []
    },
    {
      front: 'https://foursouls.com/wp-content/uploads/2022/01/r-the_soiled.png',
      back: 'none',
      item: 'https://foursouls.com/wp-content/uploads/2022/01/r-ibs.png',
      itemBack: 'none',
      itemTappable: false,
      id: 26,
      hasCounter: false,
      startCounters: 0,
      threePlus: false,
      cardCredits: []
    },
    {
      front: 'https://foursouls.com/wp-content/uploads/2022/01/r-the_curdled.png',
      back: 'none',
      item: 'https://foursouls.com/wp-content/uploads/2022/01/r-sumptorium.png',
      itemBack: 'none',
      itemTappable: false,
      id: 27,
      hasCounter: true,
      startCounters: 0,
      threePlus: false,
      cardCredits: []
    },
    {
      front: 'https://foursouls.com/wp-content/uploads/2022/01/r-the_savage.png',
      back: 'none',
      item: 'https://foursouls.com/wp-content/uploads/2022/01/r-berserk.png',
      itemBack: 'none',
      itemTappable: false,
      id: 28,
      hasCounter: false,
      startCounters: 0,
      threePlus: false,
      cardCredits: []
    },
    {
      front: 'https://foursouls.com/wp-content/uploads/2022/01/r-the_benighted.png',
      back: 'none',
      item: 'https://foursouls.com/wp-content/uploads/2022/01/r-hemoptysis.png',
      itemBack: 'none',
      itemTappable: true,
      id: 29,
      hasCounter: true,
      startCounters: 0,
      threePlus: false,
      cardCredits: []
    },
    {
      front: 'https://foursouls.com/wp-content/uploads/2022/01/r-the_enigma.png',
      back: 'https://foursouls.com/wp-content/uploads/2022/01/r-the_enigma_back.png',
      item: 'https://foursouls.com/wp-content/uploads/2022/01/r-flip.png',
      itemBack: 'none',
      itemTappable: false,
      id: 30,
      hasCounter: false,
      startCounters: 0,
      threePlus: false,
      cardCredits: []
    },
    {
      front: 'https://foursouls.com/wp-content/uploads/2022/01/r-the_capricious.png',
      back: 'none',
      item: 'https://foursouls.com/wp-content/uploads/2022/01/r-glitch.png',
      itemBack: 'none',
      itemTappable: true,
      id: 31,
      hasCounter: false,
      startCounters: 0,
      threePlus: false,
      cardCredits: []
    },
    {
      front: 'https://foursouls.com/wp-content/uploads/2022/01/r-the_baleful.png',
      back: 'none',
      item: 'https://foursouls.com/wp-content/uploads/2022/01/r-soulbond.png',
      itemBack: 'none',
      itemTappable: false,
      id: 32,
      hasCounter: false,
      startCounters: 0,
      threePlus: true,
      cardCredits: []
    },
    {
      front: 'https://foursouls.com/wp-content/uploads/2022/01/r-the_harlot.png',
      back: 'none',
      item: 'https://foursouls.com/wp-content/uploads/2022/01/r-gello.png',
      itemBack: 'none',
      itemTappable: true,
      id: 33,
      hasCounter: false,
      startCounters: 0,
      threePlus: false,
      cardCredits: []
    },
    {
      front: 'https://foursouls.com/wp-content/uploads/2022/01/r-the_miser.png',
      back: 'none',
      item: 'https://foursouls.com/wp-content/uploads/2022/01/r-keepers_bargain.png',
      itemBack: 'none',
      itemTappable: true,
      id: 34,
      hasCounter: false,
      startCounters: 0,
      threePlus: false,
      cardCredits: []
    },
    {
      front: 'https://foursouls.com/wp-content/uploads/2022/01/r-the_empty.png',
      back: 'none',
      item: 'https://foursouls.com/wp-content/uploads/2022/01/r-abyss.png',
      itemBack: 'none',
      itemTappable: true,
      id: 35,
      hasCounter: true,
      startCounters: 0,
      threePlus: false,
      cardCredits: []
    },
    {
      front: 'https://foursouls.com/wp-content/uploads/2022/01/r-the_fettered.png',
      back: 'none',
      item: 'https://foursouls.com/wp-content/uploads/2022/01/r-dead_weight.png',
      itemBack: 'none',
      itemTappable: true,
      id: 36,
      hasCounter: false,
      startCounters: 0,
      threePlus: false,
      cardCredits: []
    },
    {
      front: 'https://foursouls.com/wp-content/uploads/2022/01/r-the_zealot.png',
      back: 'none',
      item: 'https://foursouls.com/wp-content/uploads/2022/01/r-lemegeton.png',
      itemBack: 'none',
      itemTappable: true,
      id: 37,
      hasCounter: false,
      startCounters: 0,
      threePlus: false,
      cardCredits: []
    },
    {
      front: 'https://foursouls.com/wp-content/uploads/2022/01/r-the_deserter.png',
      back: 'none',
      item: 'https://foursouls.com/wp-content/uploads/2022/01/r-anima_sola.png',
      itemBack: 'https://foursouls.com/wp-content/uploads/2022/01/r-the_revenant.png',
      itemTappable: true,
      id: 38,
      hasCounter: false,
      startCounters: 0,
      threePlus: false,
      cardCredits: []
    },
    {
      front: 'https://foursouls.com/wp-content/uploads/2022/01/r-flash_isaac.png',
      back: 'none',
      item: 'https://foursouls.com/wp-content/uploads/2022/01/r-classic_roller.png',
      itemBack: 'none',
      itemTappable: true,
      id: 39,
      hasCounter: false,
      startCounters: 0,
      threePlus: true,
      cardCredits: []
    }
  ],
  'Requiem Warp Zone': [
    {
      front: 'https://foursouls.com/wp-content/uploads/2022/01/rwz-ash.png',
      back: 'none',
      item: 'https://foursouls.com/wp-content/uploads/2022/01/rwz-ball_of_tumors.png',
      itemBack: 'none',
      itemTappable: false,
      id: 40,
      hasCounter: true,
      startCounters: 6,
      threePlus: false,
      cardCredits: []
    },
    {
      front: 'https://foursouls.com/wp-content/uploads/2022/01/rwz-steven.png',
      back: 'none',
      item: 'https://foursouls.com/wp-content/uploads/2022/01/rwz-lil_steven.png',
      itemBack: 'none',
      itemTappable: false,
      id: 41,
      hasCounter: true,
      startCounters: 0,
      threePlus: false,
      cardCredits: []
    },
    {
      front: 'https://foursouls.com/wp-content/uploads/2022/01/rwz-bum_bo_the_weird.png',
      back: 'none',
      item: 'https://foursouls.com/wp-content/uploads/2022/01/rwz-strange_marble.png',
      itemBack: 'none',
      itemTappable: false,
      id: 42,
      hasCounter: false,
      startCounters: 0,
      threePlus: false,
      cardCredits: []
    },
    {
      front: 'https://foursouls.com/wp-content/uploads/2022/01/rwz-edmund.png',
      back: 'none',
      item: 'https://foursouls.com/wp-content/uploads/2022/01/rwz-the_real_left_hand.png',
      itemBack: 'none',
      itemTappable: true,
      id: 43,
      hasCounter: false,
      startCounters: 0,
      threePlus: false,
      cardCredits: []
    },
    {
      front: 'https://foursouls.com/wp-content/uploads/2022/01/rwz-abe.png',
      back: 'none',
      item: 'https://foursouls.com/wp-content/uploads/2022/01/rwz-possession.png',
      itemBack: 'none',
      itemTappable: false,
      id: 44,
      hasCounter: false,
      startCounters: 0,
      threePlus: false,
      cardCredits: []
    },
    {
      front: 'https://foursouls.com/wp-content/uploads/2022/01/rwz-baba.png',
      back: 'none',
      item: 'https://foursouls.com/wp-content/uploads/2022/01/rwz-is_you.png',
      itemBack: 'none',
      itemTappable: true,
      id: 45,
      hasCounter: false,
      startCounters: 0,
      threePlus: false,
      cardCredits: []
    },
    {
      front: 'https://foursouls.com/wp-content/uploads/2022/01/rwz-blind_johnny.png',
      back: 'none',
      item: 'https://foursouls.com/wp-content/uploads/2022/01/rwz-johnnys_knives.png',
      itemBack: 'none',
      itemTappable: true,
      id: 46,
      hasCounter: false,
      startCounters: 0,
      threePlus: true,
      cardCredits: []
    },
    {
      front: 'https://foursouls.com/wp-content/uploads/2022/01/rwz-blue_archer.png',
      back: 'none',
      item: 'https://foursouls.com/wp-content/uploads/2022/01/rwz-bow_and_arrow.png',
      itemBack: 'none',
      itemTappable: true,
      id: 47,
      hasCounter: false,
      startCounters: 0,
      threePlus: false,
      cardCredits: []
    },
    {
      front: 'https://foursouls.com/wp-content/uploads/2022/01/rwz-boyfriend.png',
      back: 'none',
      item: 'https://foursouls.com/wp-content/uploads/2022/01/rwz-girlfriend.png',
      itemBack: 'none',
      itemTappable: true,
      id: 48,
      hasCounter: true,
      startCounters: 0,
      threePlus: false,
      cardCredits: []
    },
    {
      front: 'https://foursouls.com/wp-content/uploads/2022/01/rwz-captain_viridian.png',
      back: 'none',
      item: 'https://foursouls.com/wp-content/uploads/2022/01/rwz-gravity.png',
      itemBack: 'none',
      itemTappable: true,
      id: 49,
      hasCounter: false,
      startCounters: 0,
      threePlus: false,
      cardCredits: []
    },
    {
      front: 'https://foursouls.com/wp-content/uploads/2022/01/rwz-crewmate.png',
      back: 'none',
      item: 'https://foursouls.com/wp-content/uploads/2022/01/rwz-emergency_meeting.png',
      itemBack: 'none',
      itemTappable: true,
      id: 50,
      hasCounter: false,
      startCounters: 0,
      threePlus: true,
      cardCredits: []
    },
    {
      front: 'https://foursouls.com/wp-content/uploads/2022/01/rwz-guy_spelunky.png',
      back: 'none',
      item: 'https://foursouls.com/wp-content/uploads/2022/01/rwz-spelunking_pack.png',
      itemBack: 'none',
      itemTappable: false,
      id: 51,
      hasCounter: true,
      startCounters: 3,
      threePlus: false,
      cardCredits: []
    },
    {
      front: 'https://foursouls.com/wp-content/uploads/2022/01/rwz-johnny.png',
      back: 'none',
      item: 'https://foursouls.com/wp-content/uploads/2022/01/rwz-football.png',
      itemBack: 'none',
      itemTappable: true,
      id: 52,
      hasCounter: false,
      startCounters: 0,
      threePlus: true,
      cardCredits: []
    },
    {
      front: 'https://foursouls.com/wp-content/uploads/2022/01/rwz-pink_knight.png',
      back: 'none',
      item: 'https://foursouls.com/wp-content/uploads/2022/01/rwz-lollypop.png',
      itemBack: 'none',
      itemTappable: false,
      id: 53,
      hasCounter: false,
      startCounters: 0,
      threePlus: false,
      cardCredits: []
    },
    {
      front: 'https://foursouls.com/wp-content/uploads/2022/01/rwz-psycho_goreman.png',
      back: 'none',
      item: 'https://foursouls.com/wp-content/uploads/2022/01/rwz-hunky_boys.png',
      itemBack: 'none',
      itemTappable: false,
      id: 54,
      hasCounter: false,
      startCounters: 0,
      threePlus: false,
      cardCredits: []
    },
    {
      front: 'https://foursouls.com/wp-content/uploads/2022/01/rwz-quote.png',
      back: 'none',
      item: 'https://foursouls.com/wp-content/uploads/2022/01/rwz-polar_star.png',
      itemBack: 'https://foursouls.com/wp-content/uploads/2022/01/rwz-booster_v20.png',
      itemTappable: true,
      id: 55,
      hasCounter: true,
      startCounters: 0,
      threePlus: false,
      cardCredits: []
    },
    {
      front: 'https://foursouls.com/wp-content/uploads/2022/01/rwz-salad_fingers.png',
      back: 'none',
      item: 'https://foursouls.com/wp-content/uploads/2022/01/rwz-rusty_spoons.png',
      itemBack: 'none',
      itemTappable: true,
      id: 56,
      hasCounter: false,
      startCounters: 0,
      threePlus: false,
      cardCredits: []
    },
    {
      front: 'https://foursouls.com/wp-content/uploads/2022/01/rwz-the_knight.png',
      back: 'none',
      item: 'https://foursouls.com/wp-content/uploads/2022/01/rwz-focus.png',
      itemBack: 'none',
      itemTappable: false,
      id: 57,
      hasCounter: true,
      startCounters: 0,
      threePlus: false,
      cardCredits: []
    },
    {
      front: 'https://foursouls.com/wp-content/uploads/2022/01/rwz-the_silent.png',
      back: 'none',
      item: 'https://foursouls.com/wp-content/uploads/2022/01/rwz-ring_of_the_snake.png',
      itemBack: 'none',
      itemTappable: false,
      id: 58,
      hasCounter: false,
      startCounters: 0,
      threePlus: false,
      cardCredits: []
    },
    {
      front: 'https://foursouls.com/wp-content/uploads/2022/01/rwz-yung_venuz.png',
      back: 'none',
      item: 'https://foursouls.com/wp-content/uploads/2022/01/rwz-pop_pop.png',
      itemBack: 'none',
      itemTappable: true,
      id: 59,
      hasCounter: false,
      startCounters: 0,
      threePlus: false,
      cardCredits: []
    }
  ],
  'Tapeworm': [
    {
      front: 'https://foursouls.com/wp-content/uploads/2021/07/tw-tapeworm.png',
      back: 'none',
      item: 'https://foursouls.com/wp-content/uploads/2021/07/tw-pink_proglottid.png',
      itemBack: 'none',
      itemTappable: true,
      id: 60,
      hasCounter: false,
      startCounters: 0,
      threePlus: false,
      cardCredits: []
    }
  ],
  'Grayfruit Expansion': [
    {
      front: 'assets/imgs/cards/baz_iodine_character.png',
      back: 'none',
      item: 'assets/imgs/cards/golden_seed.png',
      itemBack: 'none',
      itemTappable: false,
      id: 61,
      hasCounter: true,
      startCounters: 0,
      threePlus: false,
      cardCredits: [
        {
          for: 'made',
          user: crossroadsts
        }
      ]
    },
    {
      front: 'assets/imgs/cards/bella_character.png',
      back: 'none',
      item: 'assets/imgs/cards/odd_bell.png',
      itemBack: 'none',
      itemTappable: true,
      id: 62,
      hasCounter: true,
      startCounters: 0,
      threePlus: false,
      cardCredits: [
        {
          for: 'card design',
          user: crossroadsts
        },
        {
          for: 'art',
          user: HamBerry
        }
      ]
    },
    {
      front: 'assets/imgs/cards/grayfruit_character.png',
      back: 'none',
      item: 'assets/imgs/cards/bizarre_fruit.png',
      itemBack: 'none',
      itemTappable: true,
      id: 63,
      hasCounter: false,
      startCounters: 0,
      threePlus: false,
      cardCredits: [
        {
          for: 'card design',
          user: crossroadsts
        },
        {
          for: 'art',
          user: HamBerry
        }
      ]
    },
    {
      front: 'assets/imgs/cards/lark.png',
      back: 'none',
      item: 'assets/imgs/cards/peculiar_feather.png',
      itemBack: 'none',
      itemTappable: true,
      id: 64,
      hasCounter: false,
      startCounters: 0,
      threePlus: false,
      cardCredits: [
        {
          for: 'made',
          user: crossroadsts
        }
      ]
    }
  ],
  'PommePower\'s Custom Cards': [
    {
      front: 'assets/imgs/cards/Final_Lux.png',
      back: 'none',
      item: 'assets/imgs/cards/ray_of_light.png',
      itemBack: 'none',
      itemTappable: true,
      id: 65,
      hasCounter: false,
      startCounters: 0,
      threePlus: false,
      cardCredits: [
        {
          for: 'made',
          user: PommePower
        }
      ]
    },
    {
      front: 'assets/imgs/cards/the_player.png',
      back: 'none',
      item: 'assets/imgs/cards/Final_Punch.png',
      itemBack: 'none',
      itemTappable: true,
      id: 66,
      hasCounter: false,
      startCounters: 0,
      threePlus: false,
      cardCredits: [
        {
          for: 'made',
          user: PommePower
        }
      ]
    },
  ],
  'MrMcMonkey\'s Pack': [
    {
      front: 'assets/imgs/cards/flashIsaac_Ditto_character.png',
      back: 'none',
      item: 'none',
      itemBack: 'none',
      itemTappable: false,
      id: 67,
      hasCounter: false,
      startCounters: 0,
      threePlus: false,
      cardCredits: [
        {
          for: 'made',
          user: MrMcMonkey
        }
      ]
    },
    {
      front: 'assets/imgs/cards/TheMissed_Character.png',
      back: 'none',
      item: 'assets/imgs/cards/TheMissed_StartingItem_FadingMemory.png',
      itemBack: 'none',
      itemTappable: true,
      id: 68,
      hasCounter: true,
      startCounters: 0,
      threePlus: false,
      cardCredits: [
        {
          for: 'made',
          user: MrMcMonkey
        }
      ]
    },
    {
      front: 'assets/imgs/cards/MrMcMonkey.png',
      back: 'none',
      item: 'assets/imgs/cards/GentlemensFightClubStarterPack.png',
      itemBack: 'none',
      itemTappable: false,
      id: 69,
      hasCounter: true,
      startCounters: 2,
      threePlus: false,
      cardCredits: [
        {
          for: 'made',
          user: MrMcMonkey
        }
      ]
    },
  ],
}
