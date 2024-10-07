import '../style/repositories.scss';

type RepositorieItemsProps = {
    repository: {
        name: string;
        description: string;
        html_url: string;
    }
}

function RepositoriesItens(props:RepositorieItemsProps){
    return (
        <section>
           <li>
            <strong>{props.repository.name ?? 'Default'}</strong>
            <p> {props.repository.description} </p>
            <a href={props.repository.html_url} target='_blank' >acessa o repositorio</a>
           </li>
        </section>
    )
}

export default RepositoriesItens;