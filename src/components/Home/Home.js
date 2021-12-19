import Banner from './Banner/Banner';
import Blog from './Blog/Blog';
import './Home.css'
import LearnProcess from './LearnProcess/LearnProcess';
import Listen from './Listen/Listen';
import Memorise from './Memorise/Memorise';
import RealTeacher from './RealTeacher/RealTeacher';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Memorise></Memorise>
            <Listen></Listen>
            <LearnProcess></LearnProcess>
            <RealTeacher></RealTeacher>
            <Blog></Blog>
        </div>
    );
};

export default Home;