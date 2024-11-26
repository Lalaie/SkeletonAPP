import { Component, OnInit } from '@angular/core';
import { LocationService } from 'src/app/services/location.service';

@Component({
  selector: 'app-gps',
  templateUrl: './gps.page.html',
  styleUrls: ['./gps.page.scss'],
})
export class GpsPage implements OnInit {

  latitude: number | null = null;
  longitude: number | null = null;
  city: string | null = null;
  error: number | null = null;

  constructor(private locationService: LocationService) { }

  async ngOnInit() {
    try {
      const location = await this.locationService.ObtenerCiudadyCoordenadas();
      this.latitude = location.latitude;
      this.longitude = location.longitude;
      this.city = location.city;
    } catch (error: any) {
      console.error("Ocurrio un Error ", error);
      this.error = error.message || 'error desconocido';
    }
  }

}
