import PostModelo from '../componentes/PostModelo'
import fotoCapa from "../assets/sobre_mim_capa.png"
import styles from '../styles/SobreMim.module.css'
import fotoSobreMim from "../assets/sobre_mim_foto.png"

function Sobremim() {
  return (
    <PostModelo
      fotoCapa={fotoCapa}
      titulo="Sobre mim"
    >
      <h3 className={styles.subtitulo}>
        Olá eu sou o Antonio!
      </h3>

      <img
        src={fotoSobreMim}
        alt="foto minha"
        className={styles.fotoSobreMim}
      />
      <p className={styles.paragrafo}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam id amet rerum neque, quia repudiandae sed ad mollitia? Nostrum, repellendus. Qui quibusdam a velit quas, voluptas obcaecati delectus doloremque sint. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero omnis minus nihil iure, porro ipsa, cumque, rerum maxime nobis quisquam officiis recusandae eius sed labore nemo fugiat rem repellendus corporis. 
      </p>
      <p className={styles.paragrafo} >
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam recusandae vero reiciendis saepe? Aspernatur repudiandae quisquam alias dolor explicabo asperiores facere ipsa, est architecto dicta. Quas laborum explicabo velit iste?
      </p>
      <p  className={styles.paragrafo}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum possimus, accusantium rerum quae autem! Deleniti ex cum repellat at? Recusandae eveniet soluta eligendi? Molestiae et dignissimos itaque nam natus!
      </p>
      <p className={styles.paragrafo} >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero, dolore corporis earum repellat ipsam nemo quam obcaecati, quae dolorum atque, cum ducimus. Nobis dolores culpa perspiciatis magni, aliquid amet iure? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea expedita nemo odio tempora animi. Numquam sint vitae iure? Et perferendis consequuntur, optio vel ratione laborum autem assumenda necessitatibus quis totam?
      </p>
      <p className={styles.paragrafo} >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime accusamus mollitia, labore deleniti itaque ipsam veritatis magni beatae ex saepe, sint earum pariatur eum maiores illum illo, amet eaque ad. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, optio quidem! Asperiores aspernatur laborum ea excepturi aperiam, quibusdam dolorum voluptatem iusto provident quidem nostrum mollitia necessitatibus minus ad sapiente rem. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium aspernatur necessitatibus dicta quidem aut totam, eveniet provident assumenda laborum distinctio asperiores eius iure eum nam commodi. Non at quisquam optio.
      </p>

    </PostModelo>

  )
}

export default Sobremim