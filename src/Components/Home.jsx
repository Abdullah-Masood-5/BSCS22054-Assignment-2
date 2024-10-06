import ListingsGrid from './OutDoor_Cards';
import '../Styles/List.css'; // Import the CSS file


const Home = ({category}) => { 
    return (
        <div className='home'> 
            <ListingsGrid category={category} />
        </div>
    )
}

export default Home
