import { useFormik } from 'formik';
import { useUpdateCommunityMutationMutation } from 'graphql/updateCommunity.generated';
import { useMemo } from 'react';
import * as Yup from 'yup';
import { useGetCommunityForEditQuery } from './getCommunityForEdit.generated';
import {
  EditCommunityFormValues,
  EditCommunityFormContextCfg
} from 'ui/modules/EditCommunityModal';

export const validationSchema: Yup.ObjectSchema<
  EditCommunityFormValues
> = Yup.object<EditCommunityFormValues>({
  name: Yup.string()
    .min(2)
    .max(60)
    .required(),
  summary: Yup.string().max(500),
  image: Yup.string().url()
});

export const editCommunityFormInitialValues: EditCommunityFormValues = {
  name: '',
  summary: '',
  image: ''
};

export const useEditCommunityFormContext = ({
  communityId
}: EditCommunityFormContextCfg) => {
  const community = useGetCommunityForEditQuery({ variables: { communityId } });
  const [create /* , result */] = useUpdateCommunityMutationMutation();
  const initialValues = useMemo<EditCommunityFormValues>(
    () =>
      community.data && community.data.community
        ? {
            image: community.data.community.image || '',
            name: community.data.community.name,
            summary: community.data.community.summary || ''
          }
        : editCommunityFormInitialValues,
    [community]
  );
  const formik = useFormik<EditCommunityFormValues>({
    enableReinitialize: true,
    onSubmit: vals => create({ variables: { community: vals, communityId } }),
    validationSchema,
    initialValues
  });
  return { formik };
};
