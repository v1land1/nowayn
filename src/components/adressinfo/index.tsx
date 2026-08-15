import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';
import { ViaCEPResponse } from '../../types/cep';

interface Props {
	endereco: ViaCEPResponse;
}

const AddressInfo: React.FC<Props> = ({ endereco }) => {
	return (
		<View style={styles.container}>
			<Text style={styles.line}>CEP: {endereco.cep}</Text>
			<Text style={styles.line}>Logradouro: {endereco.logradouro}</Text>
			<Text style={styles.line}>Complemento: {endereco.complemento}</Text>
			<Text style={styles.line}>Bairro: {endereco.bairro}</Text>
			<Text style={styles.line}>Localidade: {endereco.localidade}</Text>
			<Text style={styles.line}>UF: {endereco.uf}</Text>
		</View>
	);
};

export default AddressInfo;

