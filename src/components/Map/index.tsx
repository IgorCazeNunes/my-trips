import { MapContainer, TileLayer, Marker } from 'react-leaflet'

type MarkerProps = {
  id: string
  name: string
  slug: string
  location: {
    latitude: number
    longitude: number
  }
}

export type MapProps = {
  places?: MarkerProps[]
}

const Map = ({ places }: MapProps) => (
  <MapContainer
    center={[0, 0]}
    zoom={3}
    style={{ height: '100%', width: '100%' }}
  >
    <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />

    {places?.map(({ id, name, location }: MarkerProps) => {
      const { latitude, longitude } = location

      return (
        <Marker
          key={`marker-place-${id}`}
          position={[latitude, longitude]}
          title={name}
        />
      )
    })}
  </MapContainer>
)

export default Map
