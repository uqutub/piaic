import React, {useEffect, useState} from "react";
import {
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";

export default function Topics() {
    let match = useRouteMatch();

    return (
        <div>
            <h2>Topics</h2>

            <ul>
                <li>
                    <Link to={`${match.url}/product1`}>Pro-1</Link>
                </li>
                <li>
                    <Link to={`${match.url}/product2`}>Pro-2 </Link>
                </li>
            </ul>

            <Switch>
                <Route path={`${match.path}/:topicId`}>
                    <Topic />
                </Route>
                <Route path={match.path}>
                    <h3>Please select a topic.</h3>
                </Route>
            </Switch>
        </div>
    );
}


function Topic() {
    let { topicId } = useParams();
    const [isAvailable, setIsAvailable] = useState(false);

    useEffect(() => {
        // console.log('ID has changed ', topicId);
        console.log('Getting Data from API against', topicId);
        setIsAvailable(products.indexOf(topicId) >= 0);
    }, [topicId])

    const products = ['pen', 'product1', 'product2'];

    return <div style={{background: 'yellow'}}>
        <h3>Product Page Component {topicId}</h3>
        {
          isAvailable ?   
            <h4>Product ID: {topicId}</h4> : 
            <h4 style={{color: 'red'}}>Product Not Found OR Error</h4>
        }
        
    </div>;
}