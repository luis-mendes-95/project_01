import * as yup from 'yup';;

export const saleSchema = yup.object().shape({
    client: yup.string(),
  });
