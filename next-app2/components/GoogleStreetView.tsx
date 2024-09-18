import { useEffect, useRef, useState } from 'react';

interface GoogleStreetViewProps {
  address?: string;
  lat?: number;
  lng?: number;
  apiKey: string;
}

const GoogleStreetView: React.FC<GoogleStreetViewProps> = ({ address, lat, lng, apiKey }) => {
  const streetViewRef = useRef<HTMLDivElement>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadGoogleMapsScript = () => {
      const script = document.createElement('script');
      if (!apiKey) {
        console.error('Google Maps API key is not set in the environment variables');
        return Promise.reject(new Error('API key not found'));
      }
      script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
      return new Promise<void>((resolve) => {
        script.onload = () => resolve();
      });
    };

    const initialize = () => {
      if (!streetViewRef.current || !window.google) return;

      const geocoder = new window.google.maps.Geocoder();
      const streetViewService = new window.google.maps.StreetViewService();

      const findStreetViewPanorama = (location: google.maps.LatLng) => {
        streetViewService.getPanorama({ location, radius: 50, source: google.maps.StreetViewSource.OUTDOOR }, (
          data: google.maps.StreetViewPanoramaData | null,
          status: google.maps.StreetViewStatus
        ) => {
          if (status === google.maps.StreetViewStatus.OK && data && data.location) {
            new window.google.maps.StreetViewPanorama(streetViewRef.current!, {
              position: data.location.latLng,
              pov: { heading: 34, pitch: 10 },
              zoom: 1,
              addressControl: false,
              linksControl: false,
              panControl: false,
              enableCloseButton: false,
            });
            setError(null);
          } else {
            setError('Street View not available for this location.');
          }
        });
      };

      if (address) {
        geocoder.geocode({ address }, (
          results: google.maps.GeocoderResult[] | null,
          status: google.maps.GeocoderStatus
        ) => {
          if (status === google.maps.GeocoderStatus.OK && results && results[0] && results[0].geometry) {
            findStreetViewPanorama(results[0].geometry.location);
          } else {
            setError(`Unable to locate the address: ${address}`);
          }
        });
      } else if (lat && lng) {
        findStreetViewPanorama(new google.maps.LatLng(lat, lng));
      } else {
        setError('No location information provided.');
      }
    };

    if (!window.google) {
      loadGoogleMapsScript()
        .then(initialize)
        .catch(error => setError(`Failed to load Google Maps: ${error.message}`));
    } else {
      initialize();
    }

  }, [address, lat, lng, apiKey]);

  return (
    <div ref={streetViewRef} style={{ width: '100%', height: '100%' }}>
      {error && <div style={{ color: 'red', padding: '10px' }}>{error}</div>}
    </div>
  );
};

export default GoogleStreetView;