import './firebaseConfig';
import { getApps } from 'firebase/app';
import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';

export default function App() {
  const [firebaseStatus, setFirebaseStatus] = useState('Testando conexão...');

  useEffect(() => {
    const apps = getApps();
    if (apps.length > 0) {
      setFirebaseStatus('✅ Conectado ao Firebase!');
    } else {
      setFirebaseStatus('❌ Falha na conexão com Firebase.');
    }
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 20, color: 'green', marginBottom: 20 }}>
        {firebaseStatus}
      </Text>
      <Text style={{ textAlign: 'center', color: '#555' }}>
        Se aparecer "Conectado ao Firebase!", está tudo certo!
      </Text>
    </View>
  );
}