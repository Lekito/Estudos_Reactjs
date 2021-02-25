import styles from '../styles/components/Profile.module.css';

export function Profile() {
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/Lekito.png" alt="Alex Ribeiro" />
            <div>
                <strong>Alex Ribeiro</strong>
                <p>Level 1</p>
            </div>
        </div>
    );
}