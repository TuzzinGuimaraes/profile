import { StyleSheet, Text, TouchableOpacity } from "react-native";

/**
 * @param {string} title - texto que será renderizado dentro do btn
 * @param {function} onPress - função que o botão irá disparar
 * @param {boolean} disabled - condição para desabilitar o btn
 *
 * @example
 * <Button title="Texto" onPress={handleFunction} disabled={true} />
 */
export default function Button({ title = "Enviar", onPress, disabled = false }) {
  return (
    <TouchableOpacity
      style={[styles.btnSubmit, { opacity: disabled ? 0.3 : 1 }]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={styles.label}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btnSubmit: {
    backgroundColor: "#00875F",
    height: 56,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
