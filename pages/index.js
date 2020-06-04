import styles from '../styles/index.module.css'
import Header from '../components/Header'
import EventNode from '../components/EventNode'

export default function Home() {
  const markdown = `
This block of Markdown contains <a href="https://en.wikipedia.org/wiki/HTML">HTML</a>, and will require the <code>html-parser</code> AST plugin to be loaded, in addition to setting the <code class="prop">escapeHtml</code> property to false.
`
  return (
    <body className={styles.page}>
      <Header/>
      <EventNode markdown={markdown} text='beans'/>
      <p>pee</p>
    </body>
  )
}
