export interface ChampionRecord {
  country: string;
  flag: string;
  years: (number | string)[];
  confederation?: string;
}

export interface TournamentPalmares {
  id: string;
  name: string;
  confederation: string;
  regionName: string;
  badgeColor: string;
  iconEmoji: string;
  description: string;
  champions: ChampionRecord[];
}

export const internationalPalmares: TournamentPalmares[] = [
  {
    id: "copa-mundial",
    name: "Copa Mundial de la FIFA",
    confederation: "FIFA",
    regionName: "Mundial",
    badgeColor: "from-amber-500/20 to-yellow-600/20 border-amber-500/30 text-amber-300",
    iconEmoji: "🏆",
    description: "Palmarés histórico oficial del torneo más prestigioso del fútbol mundial.",
    champions: [
      { country: "Inglaterra", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", years: [1969, 1981, 1996, 2017], confederation: "UEFA" },
      { country: "Brasil", flag: "🇧🇷", years: [1972, 1975, 2002, 2005], confederation: "CONMEBOL" },
      { country: "Alemania", flag: "🇩🇪", years: [1987, 1990, 2014], confederation: "UEFA" },
      { country: "Argentina", flag: "🇦🇷", years: [1978, 1993, 2023], confederation: "CONMEBOL" },
      { country: "Italia", flag: "🇮🇹", years: [1984, 2008], confederation: "UEFA" },
      { country: "Francia", flag: "🇫🇷", years: [1999, 2020], confederation: "UEFA" },
      { country: "España", flag: "🇪🇸", years: [2011, 2026], confederation: "UEFA" },
    ],
  },
  {
    id: "copa-sudamerica",
    name: "Copa Sudamérica",
    confederation: "CONMEBOL",
    regionName: "Sudamérica",
    badgeColor: "from-sky-500/20 to-indigo-600/20 border-sky-500/30 text-sky-300",
    iconEmoji: "🌎",
    description: "Torneo absoluto de selecciones nacionales de la CONMEBOL.",
    champions: [
      { country: "Argentina", flag: "🇦🇷", years: [1977, 1986, 1992, 1995, 2001, 2022, 2025], confederation: "CONMEBOL" },
      { country: "Brasil", flag: "🇧🇷", years: [1974, 1998, 2004, 2007, 2019], confederation: "CONMEBOL" },
      { country: "Uruguay", flag: "🇺🇾", years: [1968, 1971, 2010], confederation: "CONMEBOL" },
      { country: "Colombia", flag: "🇨🇴", years: [1980, 1989], confederation: "CONMEBOL" },
      { country: "Chile", flag: "🇨🇱", years: [2013, 2016], confederation: "CONMEBOL" },
      { country: "Paraguay", flag: "🇵🇾", years: [1983], confederation: "CONMEBOL" },
    ],
  },
  {
    id: "eurocopa",
    name: "Eurocopa de Naciones",
    confederation: "UEFA",
    regionName: "Europa",
    badgeColor: "from-blue-500/20 to-indigo-600/20 border-blue-500/30 text-blue-300",
    iconEmoji: "🇪🇺",
    description: "Máximo certamen de selecciones europeas bajo la órbita de la UEFA.",
    champions: [
      { country: "Inglaterra", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", years: [1968, 1995, 1998, 2013, 2019], confederation: "UEFA" },
      { country: "Italia", flag: "🇮🇹", years: [1980, 1983, 1989, 2022], confederation: "UEFA" },
      { country: "Alemania", flag: "🇩🇪", years: [1971, 1974, 2007], confederation: "UEFA" },
      { country: "España", flag: "🇪🇸", years: [2010, 2025], confederation: "UEFA" },
      { country: "Francia", flag: "🇫🇷", years: [2001], confederation: "UEFA" },
      { country: "Países Bajos", flag: "🇳🇱", years: [1986], confederation: "UEFA" },
      { country: "Portugal", flag: "🇵🇹", years: [2016], confederation: "UEFA" },
      { country: "Grecia", flag: "🇬🇷", years: [2004], confederation: "UEFA" },
      { country: "Rusia", flag: "🇷🇺", years: [1977], confederation: "UEFA" },
    ],
  },
  {
    id: "copa-concacaf",
    name: "Copa CONCACAF",
    confederation: "CONCACAF",
    regionName: "Norte, Centroamérica y Caribe",
    badgeColor: "from-emerald-500/20 to-teal-600/20 border-emerald-500/30 text-emerald-300",
    iconEmoji: "🗺️",
    description: "Campeonato continental de la confederación de Norte, Centroamérica y el Caribe.",
    champions: [
      { country: "México", flag: "🇲🇽", years: [1977, 1983, 1995, 1998, 2010, 2016, 2019, 2025], confederation: "CONCACAF" },
      { country: "EE. UU.", flag: "🇺🇸", years: [1992, 2004, 2007, 2013, 2022], confederation: "CONCACAF" },
      { country: "Costa Rica", flag: "🇨🇷", years: [1968, 1989], confederation: "CONCACAF" },
      { country: "Canadá", flag: "🇨🇦", years: [1986, 2001], confederation: "CONCACAF" },
      { country: "Honduras", flag: "🇭🇳", years: [1980], confederation: "CONCACAF" },
      { country: "Guatemala", flag: "🇬🇹", years: [1971], confederation: "CONCACAF" },
      { country: "Haití", flag: "🇭🇹", years: [1974], confederation: "CONCACAF" },
    ],
  },
  {
    id: "copa-asiatica",
    name: "Copa Asiática",
    confederation: "AFC",
    regionName: "Asia",
    badgeColor: "from-rose-500/20 to-red-600/20 border-rose-500/30 text-rose-300",
    iconEmoji: "🌏",
    description: "Competición de selecciones nacionales de la Confederación Asiática de Fútbol.",
    champions: [
      { country: "Japón", flag: "🇯🇵", years: [1992, 1998, 2001, 2004, 2010, 2013], confederation: "AFC" },
      { country: "Corea del Sur", flag: "🇰🇷", years: [1977, 1989, 2016, 2025], confederation: "AFC" },
      { country: "Arabia Saudita", flag: "🇸🇦", years: [1983, 1986, 1995], confederation: "AFC" },
      { country: "Irán", flag: "🇮🇷", years: [1968, 1971, 1974], confederation: "AFC" },
      { country: "Qatar", flag: "🇶🇦", years: [2019, 2022], confederation: "AFC" },
      { country: "Irak", flag: "🇮🇶", years: [2007], confederation: "AFC" },
      { country: "Emiratos Árabes", flag: "🇦🇪", years: [1980], confederation: "AFC" },
    ],
  },
  {
    id: "copa-africa",
    name: "Copa de África de Naciones",
    confederation: "CAF",
    regionName: "África",
    badgeColor: "from-amber-500/20 to-orange-600/20 border-amber-500/30 text-amber-300",
    iconEmoji: "🌍",
    description: "Certamen continental supremo entre selecciones africanas.",
    champions: [
      { country: "Egipto", flag: "🇪🇬", years: [1986, 2007, 2010], confederation: "CAF" },
      { country: "Camerún", flag: "🇨🇲", years: [1983, 1989, 2001], confederation: "CAF" },
      { country: "Ghana", flag: "🇬🇭", years: [1968, 1971, 1977], confederation: "CAF" },
      { country: "Costa de Marfil", flag: "🇨🇮", years: [1992, 2016, 2022], confederation: "CAF" },
      { country: "Nigeria", flag: "🇳🇬", years: [1980, 1998], confederation: "CAF" },
      { country: "Marruecos", flag: "🇲🇦", years: [2025], confederation: "CAF" },
      { country: "Argelia", flag: "🇩🇿", years: [2019], confederation: "CAF" },
      { country: "RD Congo", flag: "🇨🇩", years: [1974], confederation: "CAF" },
      { country: "Túnez", flag: "🇹🇳", years: [2004], confederation: "CAF" },
      { country: "Sudáfrica", flag: "🇿🇦", years: [1995], confederation: "CAF" },
      { country: "Zambia", flag: "🇿🇲", years: [2013], confederation: "CAF" },
    ],
  },
  {
    id: "copa-oceania",
    name: "Copa de Naciones de Oceanía",
    confederation: "OFC",
    regionName: "Oceanía",
    badgeColor: "from-cyan-500/20 to-blue-600/20 border-cyan-500/30 text-cyan-300",
    iconEmoji: "🌊",
    description: "Torneo internacional de selecciones de la Confederación de Fútbol de Oceanía.",
    champions: [
      { country: "Australia", flag: "🇦🇺", years: [1980, 1986, 1989, 1992, 1995, 2001, 2004, 2010, 2019, 2025], confederation: "OFC" },
      { country: "Nueva Zelanda", flag: "🇳🇿", years: [1968, 1971, 1977, 1983, 2007, 2022], confederation: "OFC" },
      { country: "Tahití", flag: "🇵🇫", years: [1974, 1998, 2013], confederation: "OFC" },
      { country: "Islas Salomón", flag: "🇸🇧", years: [2016], confederation: "OFC" },
    ],
  },
  {
    id: "copa-americas",
    name: "Copa de las Américas",
    confederation: "CONMEBOL - CONCACAF",
    regionName: "América Intercontinental",
    badgeColor: "from-purple-500/20 to-indigo-600/20 border-purple-500/30 text-purple-300",
    iconEmoji: "🌎",
    description: "Desafío intercontinental a partido único entre el campeón de Sudamérica (CONMEBOL) y el campeón de la CONCACAF.",
    champions: [
      { country: "Argentina", flag: "🇦🇷", years: [1978, 1987, 1993, 2002, 2023, 2026], confederation: "CONMEBOL" },
      { country: "Brasil", flag: "🇧🇷", years: [1975, 1999, 2005, 2008, 2020], confederation: "CONMEBOL" },
      { country: "México", flag: "🇲🇽", years: [1984, 1996, 2017], confederation: "CONCACAF" },
      { country: "Uruguay", flag: "🇺🇾", years: [1969, 1972, 2011], confederation: "CONMEBOL" },
      { country: "EE. UU.", flag: "🇺🇸", years: [2014], confederation: "CONCACAF" },
      { country: "Colombia", flag: "🇨🇴", years: [1981], confederation: "CONMEBOL" },
      { country: "Costa Rica", flag: "🇨🇷", years: [1990], confederation: "CONCACAF" },
    ],
  },
];
