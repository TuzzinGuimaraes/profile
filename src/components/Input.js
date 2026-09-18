import { StyleSheet, TextInput } from "react-native";

/**
 * Mini-desafio 2: campo de texto reutilizável com o estilo do profile.
 *
 * @param {string} placeholder - texto de dica quando o campo está vazio
 * @param {string} value - conteúdo controlado do campo
 * @param {function} onChangeText - recebe o texto digitado
 * @param {object} style - estilo extra, aplicado por cima do estilo base
 * @param {...any} rest - qualquer outra prop do TextInput (editable, secureTextEntry...)
 *
 * @example
 * <Input placeholder="Nome" value={name} onChangeText={setName} />
 */
export default function Input({ placeholder, value, onChangeText, style, ...rest }) {
  return (
    <TextInput
      style={[styles.input, style]}
      selectionColor="#00B37E"
      placeholderTextColor="#7C7C8A"
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: "#39393C",
    height: 56,
    color: "#fff",
    borderRadius: 8,
    paddingLeft: 16,
    fontSize: 16,
  },
});
