export class CityService {
    cities = ['lima', 'arequipa', 'trujillo', 'ica'];

    getCities() {
        return this.cities;
    }

    addCity(city: string) {
        this.cities.push(city);
    }
}