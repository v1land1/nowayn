import { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, ActivityIndicator, Alert } from 'react-native';
import { styles } from './styles';
import { api } from '../../../services/api';
import { ViaCEPResponse } from '../../../types/cep';
import AddressInfo from '../../adressinfo';

export default function Home() {
	const [cep, setCep] = useState('');
	const [endereco, setEndereco] = useState<ViaCEPResponse | null>(null);
	const [loading, setLoading] = useState(false);

	async function findCep(cepToFind: string) {
		if (!cepToFind || cepToFind.trim().length < 8) {
			Alert.alert('Aviso', 'Digite um CEP com 8 dígitos');
			return;
		}

		try {
			setLoading(true);
			const response = await api.get(`${cepToFind}/json`);
			if (response.data && !response.data.erro) {
				setEndereco(response.data as ViaCEPResponse);
			} else {
				setEndereco(null);
				Alert.alert('Não encontrado', 'CEP não encontrado');
			}
		} catch (err) {
			Alert.alert('Erro', 'Falha ao buscar o CEP');
		} finally {
			setLoading(false);
		}
	}

	return (
		<View style={styles.container}>
			{endereco && <AddressInfo endereco={endereco} />}

			<Text style={styles.label}>Digite o CEP</Text>
			<TextInput
				style={styles.input}
				value={cep}
				onChangeText={setCep}
				maxLength={8}
				keyboardType="numeric"
				placeholder="Qual o CEP que deseja procurar?"
			/>

			<TouchableOpacity
				style={[styles.button, cep.trim().length < 8 ? styles.buttonDisabled : null]}
				onPress={() => findCep(cep)}
				disabled={loading || cep.trim().length < 8}
			>
				{loading ? (
					<ActivityIndicator color="#fff" style={styles.loader} />
				) : (
					<Text style={styles.buttonText}>Buscar</Text>
				)}
			</TouchableOpacity>
		</View>
	);
}

