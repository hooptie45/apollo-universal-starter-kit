// Web only component

/*eslint-disable no-unused-vars*/
// React
import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import PageLayout from '../../../app/page_layout';

const UserShow = () => {

  const renderMetaData = () => (
    <Helmet
      title="User"
      meta={[{
        name: 'description',
        content: 'User page'
      }]}/>
  );

  return (
    <PageLayout>
      {renderMetaData()}
      <div className="text-center mt-4 mb-4">
        <p>
          Hello User!
        </p>
      </div>
    </PageLayout>
  );
};

UserShow.propTypes = {
};

export default UserShow;
