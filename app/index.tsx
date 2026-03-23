import { useState } from 'react';
import { ScrollView, StyleSheet, TextInput, View, Button } from 'react-native';

import TripCard from '@/components/TripCard';
import type { TripCardProps } from '@/components/TripCard';



export default function HomeScreen() {
    //formularz
    const [title, setTitle] = useState('');
    const [destination, setDestination] = useState('');
    const [date, setDate] = useState('');
    const [rating, setRating] = useState('');

    //lista
    const [trips, setTrips] = useState<TripCardProps[]>([]);

    const handleAddTrip = () => {
      if (!title || !destination || !date || !rating) {
        return;
      }
      const newTrip: TripCardProps = {
        id: Date.now().toString(),
        title,
        destination,
        date,
        rating: Number(rating),
      };
      setTrips((prev) => [...prev, newTrip]);

      //reset formularza
      setTitle('');
      setDestination('');
      setDate('');
      setRating('');
    
  }
    return (<ScrollView contentContainerStyle={styles.content} style={styles.container}>
      <View>
        <TextInput placeholder="Tytuł" value={title} onChangeText={setTitle} />
        <TextInput placeholder="Kierunek" value={destination} onChangeText={setDestination} />
        <TextInput placeholder="Data" value={date} onChangeText={setDate} />
        <TextInput placeholder="Ocena" value={rating} onChangeText={setRating} keyboardType="numeric"/>
        <Button title="Dodaj" onPress={handleAddTrip} />
      </View>

      {trips.map((trip) => (
        <TripCard
          key={trip.id}
          id={trip.id}
          title={trip.title}
          destination={trip.destination}
          date={trip.date}
          rating={trip.rating}
        />
      ))}
    </ScrollView>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    padding: 16,
  },
});
