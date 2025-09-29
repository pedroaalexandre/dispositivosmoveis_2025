import {Text, View, Image, StyleSheet} from 'react-native';

const Detalhes = ({ route }) => { 
  const { imagem, titulo, descricao, informacoes } = route.params;
  return (
      <View style={styles.container}>
        <Text style={styles.titulo}>Detalhes do produto</Text>
        <Image source={imagem} style={styles.produto}/>
        <Text style={styles.nomeProduto}>{titulo}</Text>
        <Text style={styles.descricao}>{descricao}</Text>
        <Text style={styles.preco}>{informacoes}</Text>
      </View>
  );
}

export default Detalhes;

const styles = StyleSheet.create({
  titulo: {
    fontSize: 20,
    margin: 10,
    textAlign: 'center'
  },
  produto: {
    height: 400,
    width: '90%',
    alignSelf: 'center',
  },
  nomeProduto: {
    fontSize: 25,
    marginTop: 15,
    marginBottom: 15,
    fontWeight: 'bold',
    color: 'orange'
  },
  descricao: {
    marginBottom: 15
  },
  preco: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'green'
  },
  container: {
    margin: 10,
  }
});