import { Pipe, PipeTransform } from '@angular/core';

import * as L from 'leaflet';

import { URLGeoJSONOverlay } from '@shared/map-overlay/url-geojson-overlay';

@Pipe({
  name: 'sharedImpactOverlays'
})
export class ImpactOverlaysPipe implements PipeTransform {

  transform(shakemapId: string): Array<L.Layer> {
    const overlays = [];

    overlays.push(new URLGeoJSONOverlay());

    overlays.forEach(overlay => {
      overlay.enabled = true;
      overlay.bounds = overlay.getBounds();
    });

    return overlays;
  }
}
