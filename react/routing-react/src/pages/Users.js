import { Navbar } from '../components';

const foo = true;
const styles = {
    div: {
        color: foo ? "green": 'purple',
        background: "yellow"
    },
    h2: {
        color: "red",
        background: "green"
    }
}

function Users() {
    return (<div style={styles.div}>
        <h2 style={styles.h2}>Users Route</h2>
        Dummy Navbar
        <hr />
        <Navbar />
    </div>
    );
}

export default Users;