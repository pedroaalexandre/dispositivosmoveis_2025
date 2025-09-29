import { StatusBar , StyleSheet , View , FlatList} from 'react-native';
import Card from "./Card";
import { getItens } from "../services/ItemServiceMock";

const Produtos = () => {
  return (
    <FlatList 
      data={getItens()}
      renderItem={({ item }) => (
          <Card 
            imagem={item.imagem}
            titulo={item.titulo}
            descricao={item.descricao}
            informacoes={item.valor}
          />
        )
      }
    />
  );
};

export default Produtos;