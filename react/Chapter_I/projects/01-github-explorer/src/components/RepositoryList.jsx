import { RepositoryItem } from "./RepositoryItem";

const repository = {
    name: 'Perfil Github',
    description: 'Perfil Principal',
    link: "https://github.com/rafaelfloressilveira"
}

export function RepositoryList() {
    return (
        <section className="repository-list">
            <h1>Lista de repositórios</h1>

            <ul>

                <RepositoryItem repository={repository} />
                <RepositoryItem repository={repository} />
                <RepositoryItem repository={repository} />
                <RepositoryItem />
                <RepositoryItem repository={repository} />

            </ul>
        </section>

    );
}