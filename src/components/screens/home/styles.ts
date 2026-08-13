import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 16,
		backgroundColor: '#f2f2f2',
		justifyContent: 'flex-start',
	},
	label: {
		fontSize: 14,
		color: '#333',
		marginBottom: 8,
	},
	input: {
		height: 48,
		backgroundColor: '#fff',
		borderRadius: 6,
		paddingHorizontal: 12,
		fontSize: 16,
	},
	button: {
		marginTop: 12,
		height: 48,
		backgroundColor: '#007AFF',
		borderRadius: 6,
		alignItems: 'center',
		justifyContent: 'center',
	},
	buttonDisabled: {
		backgroundColor: '#9acaff',
	},
	buttonText: {
		color: '#fff',
		fontSize: 16,
	},
	loader: {
		marginTop: 12,
	},
});
