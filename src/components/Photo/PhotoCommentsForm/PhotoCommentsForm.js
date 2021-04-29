import React from "react";
import { ReactComponent as Enviar } from "../../../assets/enviar.svg";
import useFetch from "../../../hooks/useFetch";
import { COMMENT_POST } from '../../../api/api'
import Error from '../../../components/Helper/Error'
import styles from './PhotoCommentsForm.module.css'

const PhotoCommentsForm = ({ id, setComments }) => {
  const [comment, setComment] = React.useState("");
  const { request, error } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    const { url, options } = COMMENT_POST(id, { comment });
    const {response, json } = await request(url, options);
    if(response.ok){
      setComment('');
      setComments((comments) => [...comments, json])
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <textarea
        id="comment"
        name="comment"
        placeholder="Comente..."
        value={comment}
        onChange={({ target }) => setComment(target.value)}
        className={styles.textarea}
      />
      <button className={styles.button}>
        <Enviar />
      </button>
      <Error error={error}/>
    </form>
  );
};

export default PhotoCommentsForm;
