
import RepositoriesItens from './Repositories';
import {useState,useEffect} from 'react';


type Repository = {
    name: string;
    description: string;
    html_url: string;
}


 function RepositoryList(){
   const [repositories, setRepositories] = useState<Repository[]>([])
   
   useEffect(()=>{
       fetch ('https://api.github.com/users/rocketseat/repos').then(response => response.json()).then(data => setRepositories(data))
   },[])	
  
  //useEffect é uma funcionalidade que é executada toda vez que uma variavel é alterada, como um gatilho eu presiso indicar pra ela qual variavel ela vai ficar monitorando

    return (
        <section className='repositorieList'> 
            <h1>Lista de repositorios</h1>

            <ul>
                {repositories.map(repository =>{
                    console.log(repository)
                    return <RepositoriesItens key={repository.name} repository={repository}/>
                })}
               
             
            </ul>
        </section>
    )
}
export default RepositoryList;

//react tem uma forma de ficar monitorando apenas variaveis especificas, para isso é usado o useEffect e não todas as variaveis como é o caso do two way data binding do angular