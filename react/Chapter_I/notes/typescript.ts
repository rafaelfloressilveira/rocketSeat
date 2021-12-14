// Para melhor usabilidade do JS
// Informa os possíveis erros na criação da aplicação
// Autocomplete

type User = { // definimos o que e qual o tipo deve retornar quando utilizarmos o User
    name: string
    email: string
    address: { // Podemos adicionar um objeto com mais informações
        city: string
        state?: string // Para ser tornar item não obrigatório colocamos o ?
    }
}

function showWelcomeMessage(user: User) { // o user deve utilizar dos padrões do User
    return `Welcome ${user.name}, your e-mail is ${user.email}. 
    Your city is ${user.address.city} and your state is ${user.address.state}`; // Com isso temos o autocomplete pelo próprio VSCode
}

showWelcomeMessage({
    name: 'Rafael Flores',
    email: 'rafaelfloressilveira2@gmail.com',
    address: {
        city: 'Itajaí',
        state: 'SC',
    }
})
