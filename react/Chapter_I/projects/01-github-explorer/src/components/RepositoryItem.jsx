export function RepositoryItem(props) {
    return (
    <li>
        <strong>{props.repository?.name ?? 'Título inválido'}</strong>
        <p>{props.repository?.description ?? 'Descrição inválida'}</p>

        <a href={props.repository?.link ?? 'localhost:8080'}>
            Acessar repositório
        </a>
    </li>

    );
}