import React from "react";
import { ReactComponent as View } from "../../../../../../Assets/visualizacao.svg";
import * as S from "./style";

export const FeedPhotoItems = ({ photo }) => {
  return (
    <S.Photo>
      <img src={photo.src} alt={photo.title} />
      <S.Visualização>
        <View />
        {photo.acessos}
      </S.Visualização>
    </S.Photo>
  );
};
