
import React from 'react';
import { Tabs, Tab } from '../components/Tabs';

import Sold from '../components/ProfileTabs/Sold';
import Bought from '../components/ProfileTabs/Bought';
import Borrowed from '../components/ProfileTabs/Borrowed';
import Lent from '../components/ProfileTabs/Lent';

const Profile = () => {

  
  return (
    <div>
      <Tabs>
        <Tab label="Bought">
          <div className="py-4">
     <Bought/>
          </div>
        </Tab>
        
        <Tab label="Sold">
        <div className="py-4">
<Sold/>
</div>
</Tab>

        <Tab label="Borrowed">
          <div className="py-4">
            <Borrowed/>
          </div>
        </Tab>
        <Tab label="Lent">
          <div className="py-4">
       <Lent/>
          </div>
        </Tab>
      </Tabs>
    </div>
  );
};

export default Profile;