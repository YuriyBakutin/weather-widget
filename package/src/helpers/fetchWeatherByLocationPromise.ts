import getUrlByCityName from './getUrlByCityName'
import IWeatherResponse from '../types/IWeatherResponse'

export default async (location: string) => fetch(getUrlByCityName(location))
.then((response) => response.ok ? response.json() : null)
.catch(() => null) as unknown as IWeatherResponse | null