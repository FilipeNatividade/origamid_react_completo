import React from "react";
import { FeedPhotoItems } from "../FeedPhotoItems/FeedPhotoItems";
import { Api } from "../../../../../../utils/Api/Api";
import { useFetch } from "../../../../../../hooks/useFetch";
import { ErrorComponent } from "../../../../../../components/ErrorComponent/ErrorComponent";
import { Loading } from "../../../../../../components/Loading/Loading";
import * as S from './style'

export const FeedPhotos = () => {
  const [page, setPage] = React.useState(1);
  const [total, setTotal] = React.useState(6);
  const [user, setUser] = React.useState(0);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [data, setData] = React.useState("");

  React.useEffect(() => {
    async function fetchPhotos() {
      setLoading(true);
      setError(null);
      Api.get(`api/photo/?_page=${page}&_total=${total}&_user=${user}`, {
        params: {
          chache: "no-store",
        },
      })
        .then((response) => {
          setData(response.data);
        })
        .catch((e) => setError(e.message))
        .finally(setLoading(false));
    }
    fetchPhotos();
  }, []);

  if (error) return <ErrorComponent error={error} />;
  if (error) return <Loading />;
  if (data) {
    return (
      <S.Feed className="animeLeft">
        {data.map((photo) => (
          <FeedPhotoItems key={photo.id} photo={photo} />
        ))}
      </S.Feed>
    );
  } else {
    return null;
  }
};
