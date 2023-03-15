import { Text, View, StyleSheet } from 'react-native';
export default function Card() {
    return (
        <View style={styles.card}>
            <Image source={require('././img')} />
            <Text style={styles.cardText}>Livros</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'red',
        padding: 20,
        width: '100%',
        alignContent: 'center',
        alignItems: 'center',
    },
    cardText: {
        color: 'white',
        fontSize: 20,
    },
});