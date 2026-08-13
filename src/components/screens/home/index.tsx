import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, ActivityIndicator, Alert } from 'react-native';
import { styles } from './styles';
import { api } from '../../../services/api';
import { ViaCEPResponse } from '../../../types/cep';
import AddressInfo from '../../adressinfo';

