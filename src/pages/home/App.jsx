import Banner from '../../components/Banner'
import Cards from '../../components/Cards'

function App({ jsonData }) {

    return (
        <>
            <Banner />
            <Cards jsonData={jsonData} />
        </>
    )}

export default App;
