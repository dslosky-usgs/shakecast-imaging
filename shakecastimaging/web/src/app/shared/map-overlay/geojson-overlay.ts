import * as L from 'leaflet';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

/**
 * Class for asynchronous overlays used with the shared-map component.
 *
 * Notable methods subclasses may want to override:
 * - onEachFeature(feature: any, layer: L.Layer)
 *   called by leaflet's GeoJSON layer.
 *
 * - parse(json|string)
 *   parse returned data and return a GeoJSON Feature or FeatureCollection.
 *   default implementation converts strings to json
 *   if returned data is not already json
 *
 * - style(feature)
 *   called by leaflet's GeoJSON layer.
 */
// tslint:disable-next-line:variable-name
const GeoJSONOverlay = L.GeoJSON.extend({
  bounds: null,
  // retain layer data to detect whether it's already loaded
  data: null,
  enabled: true,
  // retain url grab errors
  error: Error,
  id: 'async-geojson',
  legends: [],
  // retain  for custom layer adjustments
  map: null,
  // persistent styles (allows alternating styles in geoJSON features)
  styles: {},
  title: 'GeoJSON',
  // url to download geoJSON
  url: null,

  /**
   * Init function
   */
  initialize: function() {
    L.GeoJSON.prototype.initialize.call(this, [], {
      onEachFeature: (feature, layer) => this.onEachFeature(feature, layer),
      pointToLayer: (feature, layer) => this.pointToLayer(feature, layer),
      style: feature => this.style(feature)
    });
  },

  /**
   * Runs after the geoJSON data is successfully added
   */
  afterAdd: function() {
    // subclasses should override this method
  },

  /**
   * Handling all errors
   *
   * @param {Error}
   *
   * @return {Observable}
   *    For caught errors during http requests
   */
  handleError: function(error: any) {
    this.error = error;
    this.data = null;
    return of(null);
  },

  /**
   * Fetch data, and ensure it is parsed into geojson
   */
  loadData: function() {

  },

  /**
   * Get geoJSON data and add it to the existing layer
   */
  onAdd: function(map) {
    this.map = map;
    L.GeoJSON.prototype.onAdd.call(this, map);

    this.loadData();
    this.afterAdd();
  },

  onEachFeature: function(feature, layer) {
    // subclasses should override this method
  },

  pointToLayer: function(feature, latlng) {
    // subclasses should override this method

    const defaultOptions = {
      color: '#000',
      fillColor: '#ff7800',
      fillOpacity: 0.8,
      opacity: 1,
      radius: 8,
      weight: 1
    };

    return L.circleMarker(latlng, defaultOptions);
  },

  /**
   * Parse returned data into GeoJSON.
   *
   * Subclasses may override default parsing:
   * ```
   * data = super.parse(data);
   * // modify data
   * return data;
   * ```
   *
   * @param data {Any}
   *    data ready for parsing (possibly a string)
   * @return {Any}
   *    Parsed geoJSON
   */
  parse: function(data) {
    // parse if needed
    data = typeof data === 'string' ? JSON.parse(data) : data;
    return data;
  },

  style: function(feature) {
    // subclasses should override this method
    return {};
  }
});

export { GeoJSONOverlay };
