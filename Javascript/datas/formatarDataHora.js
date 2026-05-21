/**
 * Formata uma data e hora no formato "DD/MM/AAAA HH:mm:ss" a partir de uma string
 * no formato "YYYY-MM-DD HH:mm:ss".
 *
 * @since 29/12/2025
 * @author Pricila Oliveira
 * @updated by Pricila Oliveira
 * @param {string} valor Data e hora no formato "YYYY-MM-DD HH:mm:ss"
 * @returns {string} Data formatada ou string original se inválida
 */
function formatarDataHora(valor) {
    // Se o valor for vazio, nulo ou indefinido, retorna string vazia
    if (!valor) return ''

    // Converte "YYYY-MM-DD HH:mm:ss" para "YYYY-MM-DDTHH:mm:ss",
    // formato mais adequado para o construtor Date do JavaScript
    const iso = valor.replace(' ', 'T')

    // Cria um objeto Date com base na string tratada
    const data = new Date(iso)

    // Se a data for inválida, retorna o valor original
    if (isNaN(data.getTime())) return valor

    // Retorna a data formatada no padrão brasileiro
    return data.toLocaleString('pt-BR', {
        dateStyle: 'short',
        timeStyle: 'medium',
    })
}

export default formatarDataHora
