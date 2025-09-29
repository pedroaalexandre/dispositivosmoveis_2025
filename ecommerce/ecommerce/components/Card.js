import { StatusBar , StyleSheet , Text , View , Image , Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Card = ({imagem , titulo , descricao , informacoes}) => {

  const navigation = useNavigation();

  return (
      <Pressable 
        onPress={() => 
        navigation.navigate('Detalhes', {
          imagem, 
          titulo, 
          descricao, 
          informacoes
          })
        }
        style={({pressed}) => [
          styles.container, 
          {backgroundColor: pressed ? '#ccc':'white'}
          ]
        }
      >
        <View style={styles.secao}>
          <Image style={styles.imagem} source={imagem} resizeMode="contain"/>
          <View style={styles.texto}>
            <Text>{titulo}</Text>
            <Text>{descricao}</Text>
            <Text>{informacoes}</Text>
          </View>
        </View>
      </Pressable>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 4
  },
  secao: {
    flexDirection: "row",
    borderColor: "#ccc",
    borderWidth: 1
  },
  imagem: {
    padding: 4,
    flex: 1,
    height: 200
  },
  texto: {
    flex: 1,
    padding: 4
  }
});