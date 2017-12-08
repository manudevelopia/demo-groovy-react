
import React from 'react';
import styles from './game.css';

// tag::game[]
class Game extends React.Component{
    render() {
        return (
            <tr>
                <td className={styles.game}><div>{this.props.game.name}</div></td>
            </tr>
        )
    }
}
// end::game[]

export default Game;