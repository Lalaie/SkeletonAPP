import { Injectable } from '@angular/core';
import { Geolocation, PermissionStatus } from '@capacitor/geolocation';
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@awesome-cordova-plugins/native-geocoder/ngx';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private nativeGeocoder: NativeGeocoder) { }

  async getCoordenadas(): Promise<{latitude: number, longitude: number}>{
    try {
      let permStatus: PermissionStatus = await Geolocation.checkPermissions();

      if(permStatus.location !== 'granted'){
        permStatus = await Geolocation.requestPermissions();

        if(permStatus.location !== 'granted'){
          throw new Error('Permiso de ubicación Denegado!');
        }
      }

      const position = await Geolocation.getCurrentPosition();

      return {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      };
    } catch (error) {
      console.error("error al obtener las coordenadas", error);
      throw error;
    }
  }

  async getCity(latitude: number, longitude: number): Promise<string>{
    try {
      let options: NativeGeocoderOptions = {
        useLocale: true,
        maxResults: 1
      }

      const results: NativeGeocoderResult[] = await this.nativeGeocoder.reverseGeocode(latitude, longitude, options);

      if(results && results.length > 0){
        const result = results[0];
        
        const city = result.locality || result.subAdministrativeArea || result.administrativeArea;

        return city || 'ciudad no encontrada';
      } else{
        throw new Error('No se encontraron resultados');
      }
    } catch (error) {
      console.error("Error al obtener ciudad", error);
      throw error;
    }
  }

  async ObtenerCiudadyCoordenadas(): Promise<{ latitude: number, longitude: number, city: string }>{
    try {
      const {latitude, longitude} = await this.getCoordenadas();

      const city = await this.getCity(latitude, longitude);

      return {latitude, longitude, city};

    } catch (error) {
      console.error("Ocurrio un Error", error);
      throw error;
    }
  }

}
