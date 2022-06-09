import styles from './header.module.scss'

export function Header() {
    return (
        <header className={styles.header}>
                <h2>Pedro <br /><span>Rocha</span></h2>
        </header>
    )
}