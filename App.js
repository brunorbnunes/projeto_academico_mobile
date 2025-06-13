import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import * as SQLite from 'expo-sqlite';

export default function App() {
  useEffect(() => {
    try {
      const db = SQLite.openDatabase('test.db');
      db.transaction(tx => {
        tx.executeSql('CREATE TABLE IF NOT EXISTS test (id INTEGER PRIMARY KEY NOT NULL, value TEXT);');
      });
    } catch (e) {
      console.log('Erro:', e);
    }
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>SQLite funcionando!</Text>
    </View>
  );
}