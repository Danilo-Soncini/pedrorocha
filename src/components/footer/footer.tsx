import Link from "next/link"
import styles from "./footer.module.scss"

export function Footer() {
  return (
    <footer className={styles.footer_main}>
      <div>
        <Link href="/">
          <img src="/images/Logo.png" alt="" />
        </Link>

        <span>
          Feito com ♥ por <a href="https://luccadiassoncini.vercel.app/">Lucca dias Soncini</a>
        </span>
      </div>
    </footer>
  )
}
