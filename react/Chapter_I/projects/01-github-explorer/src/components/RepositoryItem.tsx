interface RepositoryItemProps { // Por convenção colocamos desta maneira
    repository: {
        name: string;
        description: string;
        html_url: string;
    }
}

export function RepositoryItem(props: RepositoryItemProps ) {
    return (
    <li>
        <strong>{props.repository/*?*/.name /* ?? 'Título inválido'*/} </strong>
        <p>{props.repository.description}</p>

        <a href={props.repository.html_url}>
            Acessar repositório
        </a>
    </li>

    );
}