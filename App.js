import { WebView } from 'react-native-webview';

export default function App() {
  return (
    <WebView
      source={{ uri: 'https://poe.com/ChatGPT' }}
      style={{ flex: 1, marginTop: 25 }}
    />
  );
}
