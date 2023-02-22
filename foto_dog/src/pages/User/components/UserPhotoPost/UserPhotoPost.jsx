import React from "react";
import { InputCustom } from "../../../../components/InputCustom/InputCustom";
import { ButtonCustom } from "../../../../components/ButtonCustom/ButtonCustom";
import { useForm } from "../../../../hooks/useForm";
import { useFetch } from "../../../../hooks/useFetch";
import * as S from "./style";
import { Api } from "../../../../utils/Api/Api";
import { Error } from "../../../../components/InputCustom/style";
import { useNavigate } from "react-router-dom";

export const UserPhotoPost = () => {
  const [img, setImg] = React.useState({});
  const nome = useForm();
  const peso = useForm("number");
  const idade = useForm("number");

  const { loading, error } = useFetch();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const formData = new FormData();
    formData.append("img", img.raw);
    console.log(img.raw)
    formData.append("nome", nome.value);
    formData.append("peso", peso.value);
    formData.append("idade", idade.value);
    console.log(formData);

    await Api.post("api/photo", formData, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((response) => {
        // if (response.status === 200) {
        //   navigate("/conta");
        // }
      })
      .catch((e) => console.log(e));
  };

  const handleImgChange = ({ target }) => {
    setImg({
      preview: URL.createObjectURL(target.files[0]),
      raw: target.files[0],
    });
  };

  return (
    <S.Container className="animeLeft">
      <form onSubmit={handleSubmit}>
        <InputCustom label="Nome" type="text" name="nome" {...nome} />
        <InputCustom label="Peso" type="text" name="peso" {...peso} />
        <InputCustom label="Idade" type="text" name="idade" {...idade} />
        <input type="file" name="img" id="img" onChange={handleImgChange} />
        <ButtonCustom disabled={loading}>
          {loading ? "Enviado..." : "Enviar"}
        </ButtonCustom>
        <Error error={error} />
      </form>
      {img.preview && <S.PreviewImg src={img.preview} />}
    </S.Container>
  );
};
