import { useUser } from 'fe/user/useUser';
import { useFormik } from 'formik';
import { User } from 'graphql/types.generated';
import React, { SFC, useMemo, useState } from 'react';
import {
  HeroUser as HeroUserUI,
  Loaded,
  LoadedOther,
  Props,
  Status
} from 'ui/modules/HeroUser';

export interface HeroUser {
  userId: User['id'];
}
export const HeroUser: SFC<HeroUser> = ({ userId }) => {
  const { user, isAdmin, isMe, toggleFollow } = useUser(userId);
  const [isOpenDropdown, setOpenDropdown] = useState(false);
  const toggleFollowFormik = useFormik({
    initialValues: {},
    onSubmit: toggleFollow
  });
  const userHeroProps = useMemo<Props>(() => {
    if (!user) {
      return {
        status: Status.Loading
      };
    }

    const loadedProps: Omit<Loaded, 'me'> = {
      status: Status.Loaded,
      displayUsername: user.displayUsername,
      icon: user.icon || '',
      image: user.image || '',
      location: user.location || '',
      name: user.name || '',
      summary: user.summary || ''
    };

    if (isMe) {
      const props: Props = {
        isAdmin: isAdmin,
        me: isMe,
        ...loadedProps
      };

      return props;
    } else {
      const props: LoadedOther = {
        me: isMe,
        following: !!user.myFollow,
        isOpenDropdown,
        setOpenDropdown,
        toggleFollowFormik,
        ...loadedProps
      };

      return props;
    }
  }, [isMe, user, toggleFollowFormik, isAdmin, isOpenDropdown]);

  return <HeroUserUI {...userHeroProps} />;
};
