import styles from './Loading.module.css';

export default function Loading() {
    return (
        <div className={styles.container}>
            <div className={styles.loader}>
                <div className={styles.circle}></div>
            </div>
            <div className={styles.text}>Initializing System...</div>
        </div>
    );
}
