import Sunny from "./png/10000_clear_large.png";
import MostlyClear from "./png/11000_mostly_clear_large.png";
import PartlyCloudy from "./png/11001_mostly_clear_large.png";
import MostlyCloudy from "./png/11020_mostly_cloudy_large.png";
import Cloudy from "./png/10010_cloudy_large.png";
import LightCloud from "./png/11020_mostly_cloudy_large.png";
import Fog from "./png/20000_fog_large.png";
import HeavyFog from "./png/20000_fog_large.png";
import LightFog from "./png/21010_fog_light_mostly_clear_large.png";
import Drizzle from "./png/40000_drizzle_large.png";
import LightDrizzle from "./png/42030_drizzle_mostly_clear_large.png";
import HeavyDrizzle from "./png/40000_drizzle_large.png";
import LightRain from "./png/42000_rain_light_large.png";
import HeavyRain from "./png/42010_rain_heavy_large.png";
import Snow from "./png/50000_snow_large.png";
import Flurries from "./png/50010_flurries_large.png";
import LightSnow from "./png/51020_snow_light_mostly_clear_large.png";
import HeavySnow from "./png/51010_snow_heavy_large.png";
import FreezingDrizzle from "./png/60000_freezing_rain_drizzle_large.png";
import FreezingRain from "./png/60010_freezing_rain_large.png";
import LightFreezingRain from "./png/62000_freezing_rain_light_large.png";
import HeavyFreezingRain from "./png/62010_freezing_rain_heavy_large.png";
import IcePellets from "./png/70000_ice_pellets_large.png";
import HeavyIcePellets from "./png/71010_ice_pellets_heavy_large.png";
import LightIcePellets from "./png/71020_ice_pellets_light_large.png";
import Thunderstorm from "./png/80000_tstorm_large.png";

export const weatherCodes = [
  { code: 0, name: "Unknown" },
  { code: 1000, name: "Clear, Sunny", url: Sunny },
  { code: 1100, name: "Mostly Clear", url: MostlyClear },
  { code: 1101, name: "Partly Cloudy", url: PartlyCloudy },
  { code: 1102, name: "Mostly Cloudy", url: MostlyCloudy },
  { code: 1001, name: "Cloudy", url: Cloudy },
  { code: 1200, name: "Light Cloud", url: LightCloud },
  { code: 2000, name: "Fog", url: Fog },
  { code: 2101, name: "Heavy Fog", url: HeavyFog },
  { code: 2100, name: "Light Fog", url: LightFog },
  { code: 4000, name: "Drizzle", url: Drizzle },
  { code: 4001, name: "Light Drizzle", url: LightDrizzle },
  { code: 4002, name: "Heavy Drizzle", url: HeavyDrizzle },
  { code: 4100, name: "Light Rain", url: LightRain },
  { code: 4101, name: "Heavy Rain", url: HeavyRain },
  { code: 5000, name: "Snow", url: Snow },
  { code: 5001, name: "Flurries", url: Flurries },
  { code: 5100, name: "Light Snow", url: LightSnow },
  { code: 5101, name: "Heavy Snow", url: HeavySnow },
  { code: 6000, name: "Freezing Drizzle", url: FreezingDrizzle },
  { code: 6001, name: "Freezing Rain", url: FreezingRain },
  { code: 6200, name: "Light Freezing Rain", url: LightFreezingRain },
  { code: 6201, name: "Heavy Freezing Rain", url: HeavyFreezingRain },
  { code: 7000, name: "Ice Pellets", url: IcePellets },
  { code: 7101, name: "Heavy Ice Pellets", url: HeavyIcePellets },
  { code: 7102, name: "Light Ice Pellets", url: LightIcePellets },
  { code: 8000, name: "Thunderstorm", url: Thunderstorm }
];