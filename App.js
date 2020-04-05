import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default function App() {
    const Location = {
        latitude: 55.7770367,
        longitude: 37.5811109
    };

    const MapRegion = {
        latitudeDelta: 0.09,
        longitudeDelta: 0.09,
        ...Location,
    };
    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                initialRegion={MapRegion}
                provider={MapView.PROVIDER_GOOGLE}

            >
                <Marker
                    coordinate={Location}
                    icon={require('./assets/marker/c100gt.png')}
                >
                </Marker>
            </MapView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    map: {
        width: '100%',
        height: '100%',
    }
});
